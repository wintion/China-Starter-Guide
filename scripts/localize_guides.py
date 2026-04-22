#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import yaml
from deep_translator import GoogleTranslator

from cleanup_localized_guides import cleanup as cleanup_localized_guide

ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = ROOT / 'src/content/en/guides'
TARGETS = {
	'fr': 'fr',
	'zh': 'zh-CN',
	'ja': 'ja',
	'ko': 'ko',
	'th': 'th',
	'id': 'id',
	'vi': 'vi',
	'ar': 'ar',
}
CACHE_PATH = ROOT / '.translation-cache.json'
MAX_CHARS = 2600
WORKERS = 4

FRONTMATTER_RE = re.compile(r'^---\n(.*?)\n---\n?(.*)$', re.S)
LINK_RE = re.compile(r'(!?\[[^\]]*\]\()([^)]+)(\))')
INLINE_CODE_RE = re.compile(r'`[^`\n]+`')
BARE_URL_RE = re.compile(r'https?://[^\s)>\]]+')

cache_lock = threading.Lock()
def load_cache() -> dict[str, str]:
	if not CACHE_PATH.exists():
		return {}
	try:
		return json.loads(CACHE_PATH.read_text())
	except Exception:
		return {}


TRANSLATION_CACHE = load_cache()


def save_cache() -> None:
	with cache_lock:
		CACHE_PATH.write_text(
			json.dumps(TRANSLATION_CACHE, ensure_ascii=False, indent=2, sort_keys=True) + '\n'
		)


def parse_frontmatter(text: str) -> tuple[dict, str]:
	match = FRONTMATTER_RE.match(text)
	if not match:
		raise ValueError('Invalid frontmatter')
	data = yaml.safe_load(match.group(1))
	body = match.group(2)
	return data, body


def protect_fragments(text: str) -> tuple[str, list[str]]:
	fragments: list[str] = []

	def stash(value: str) -> str:
		fragments.append(value)
		return f'ZXQPH{len(fragments) - 1:04d}QXZ'

	text = LINK_RE.sub(lambda match: f'{match.group(1)}{stash(match.group(2))}{match.group(3)}', text)
	text = INLINE_CODE_RE.sub(lambda match: stash(match.group(0)), text)
	text = BARE_URL_RE.sub(lambda match: stash(match.group(0)), text)
	return text, fragments


def restore_fragments(text: str, fragments: list[str]) -> str:
	for index, value in enumerate(fragments):
		text = text.replace(f'ZXQPH{index:04d}QXZ', value)
	return text


def localize_internal_urls(text: str, lang: str) -> str:
	replacements = {
		'/guides/': f'/{lang}/guides/',
		'/category/': f'/{lang}/category/',
		'/about': f'/{lang}/about',
		'/search': f'/{lang}/search',
	}
	for source, target in replacements.items():
		text = text.replace(source, target)
	return text


def normalize_markdown(text: str, lang: str) -> str:
	text = text.replace('\r\n', '\n')
	text = re.sub(r'(?m)^-(\S)', r'- \1', text)
	text = re.sub(r'(?m)^(\d+\.)\s*(\S)', r'\1 \2', text)
	text = re.sub(r'(?m)^(#+)\s*(\S)', r'\1 \2', text)
	text = re.sub(r'\n{3,}', '\n\n', text)
	if lang != 'zh':
		text = re.sub(r'(\*\*[^*]+\*\*)(?=\w)', r'\1 ', text)
		text = re.sub(r'(?<=\w)(\*\*[^*]+\*\*)', r' \1', text)
		text = re.sub(r'(\*[^*\n]+\*)(?=\w)', r'\1 ', text)
		text = re.sub(r'(?<=\w)(\*[^*\n]+\*)', r' \1', text)
		text = re.sub(r'([:;!?])(\S)', r'\1 \2', text)
	return text.strip() + '\n'


def translate_text(text: str, target_lang: str, target_code: str) -> str:
	value = text.strip()
	if not value:
			return text

	cache_key = f'{target_lang}::{value}'
	with cache_lock:
		cached = TRANSLATION_CACHE.get(cache_key)
	if cached:
		return cached

	protected, fragments = protect_fragments(value)
	attempts = 0
	while True:
		attempts += 1
		try:
			translated = GoogleTranslator(source='en', target=target_code).translate(protected)
			break
		except Exception:
			if attempts >= 4:
				raise
			time.sleep(attempts * 1.5)

	translated = restore_fragments(translated, fragments)
	translated = localize_internal_urls(translated, target_lang)

	with cache_lock:
		TRANSLATION_CACHE[cache_key] = translated
	return translated


def split_chunks(text: str, max_chars: int = MAX_CHARS) -> list[str]:
	if len(text) <= max_chars:
		return [text]

	chunks: list[str] = []
	current = ''
	parts = re.split(r'(\n\s*\n)', text)
	for part in parts:
		if not part:
			continue
		if len(current) + len(part) <= max_chars:
			current += part
			continue
		if current:
			chunks.append(current)
			current = ''
		if len(part) <= max_chars:
			current = part
			continue
		lines = part.splitlines(keepends=True)
		line_buffer = ''
		for line in lines:
			if len(line_buffer) + len(line) <= max_chars:
				line_buffer += line
			else:
				if line_buffer:
					chunks.append(line_buffer)
				line_buffer = line
		if line_buffer:
			current = line_buffer
	if current:
		chunks.append(current)
	return chunks


def translate_markdown(body: str, target_lang: str, target_code: str) -> str:
	chunks = split_chunks(body)
	translated_chunks = [translate_text(chunk, target_lang, target_code) for chunk in chunks]
	return normalize_markdown(''.join(translated_chunks), target_lang)


def dump_frontmatter(data: dict) -> str:
	ordered: dict = {}
	for key in [
		'title',
		'description',
		'category',
		'questions',
		'lastUpdated',
		'tags',
		'difficulty',
		'lang',
		'translationKey',
	]:
		if key in data and data[key] is not None:
			ordered[key] = data[key]

	yaml_text = yaml.safe_dump(ordered, allow_unicode=True, sort_keys=False, width=1000).strip()
	return f'---\n{yaml_text}\n---\n\n'


def translate_file(source_path: Path, target_lang: str, target_code: str) -> str:
	relative = source_path.relative_to(SOURCE_DIR)
	source_text = source_path.read_text()
	frontmatter, body = parse_frontmatter(source_text)

	frontmatter['title'] = translate_text(frontmatter['title'], target_lang, target_code)
	frontmatter['description'] = translate_text(frontmatter['description'], target_lang, target_code)
	frontmatter['lang'] = target_lang
	frontmatter['translationKey'] = f'guides/{relative.with_suffix("").as_posix()}'

	translated_body = translate_markdown(body, target_lang, target_code)
	output_path = ROOT / f'src/content/{target_lang}/guides' / relative
	output_path.parent.mkdir(parents=True, exist_ok=True)
	output_text = dump_frontmatter(frontmatter) + translated_body
	output_path.write_text(cleanup_localized_guide(output_text, target_lang))
	return relative.as_posix()


def main() -> int:
	requested_langs = [value for value in sys.argv[1:] if value in TARGETS]
	targets = {key: TARGETS[key] for key in requested_langs} if requested_langs else TARGETS
	files = sorted(SOURCE_DIR.rglob('*.mdx'))
	if not files:
		print('No source guides found.')
		return 1

	total = len(files) * len(targets)
	done = 0
	print(f'Translating {len(files)} guides into {", ".join(targets)} ({total} outputs)...', flush=True)

	with ThreadPoolExecutor(max_workers=WORKERS) as executor:
		futures = [
			executor.submit(translate_file, source_path, target_lang, target_code)
			for source_path in files
			for target_lang, target_code in targets.items()
		]
		for future in as_completed(futures):
			relative = future.result()
			done += 1
			if done % 10 == 0 or done == total:
				print(f'[{done}/{total}] {relative}', flush=True)
				if done % 40 == 0 or done == total:
					save_cache()

	save_cache()
	print('Localization complete.', flush=True)
	return 0


if __name__ == '__main__':
	raise SystemExit(main())
