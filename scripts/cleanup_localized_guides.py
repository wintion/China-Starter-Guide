#!/usr/bin/env python3
from __future__ import annotations

import sys
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
LANGS = ['fr', 'zh', 'ja', 'ko', 'th', 'id', 'vi', 'ar']
LETTER_CLASS = r'A-Za-zÀ-ÿ\u0600-\u06FF\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF'
FRONTMATTER_RE = re.compile(r'^(---\n.*?\n---\n?)(.*)$', re.S)


def cleanup(text: str, lang: str) -> str:
	text = text.replace('\r\n', '\n')
	match = FRONTMATTER_RE.match(text)
	if match:
		frontmatter, body = match.groups()
	else:
		frontmatter, body = '', text

	body = re.sub(r'(?m)^\s*-\s*--\s*$', '---', body)
	body = re.sub(r'\*\*[\s\u3000]*([^*]+?)[\s\u3000]*\*\*', r'**\1**', body)
	body = re.sub(r'\*[\s\u3000]*([^*\n]+?)[\s\u3000]*\*', r'*\1*', body)
	if lang in {'fr', 'ko', 'id', 'vi'}:
		body = re.sub(rf'(?<=[{LETTER_CLASS}])(\*\*[^*]+\*\*)', r' \1', body)
		body = re.sub(rf'(\*\*[^*]+\*\*)(?=[{LETTER_CLASS}])', r'\1 ', body)

	# In translated files, section separators often ended up directly under text lines.
	# Markdown interprets that as setext headings, which turns paragraphs into giant headings.
	body = re.sub(r'(?m)^(---)\s*$', r'\1', body)
	body = re.sub(r'(?<=\S)\n---\n', '\n\n---\n', body)
	body = re.sub(r'\n---\n(?=\S)', '\n---\n\n', body)

	body = re.sub(r'(?m)^-(?!-)(\S)', r'- \1', body)
	body = re.sub(r'(?m)^(\d+\.)\s*(\S)', r'\1 \2', body)
	body = re.sub(r'(?m)^(#+)\s*(\S)', r'\1 \2', body)
	body = re.sub(r'\n{3,}', '\n\n', body)
	return f'{frontmatter}{body}'


def iter_localized_guides():
	for lang in LANGS:
		for path in sorted((ROOT / f'src/content/{lang}/guides').rglob('*.mdx')):
			yield lang, path


def main(argv: list[str] | None = None) -> int:
	args = argv if argv is not None else sys.argv[1:]
	check_only = '--check' in args
	changed_paths: list[Path] = []

	for lang, path in iter_localized_guides():
		original = path.read_text()
		cleaned = cleanup(original, lang)
		if cleaned == original:
			continue
		changed_paths.append(path)
		if not check_only:
			path.write_text(cleaned)

	if check_only:
		if changed_paths:
			print(f'Found {len(changed_paths)} localized guide(s) that still need cleanup.')
			for path in changed_paths[:40]:
				print(path.relative_to(ROOT))
			if len(changed_paths) > 40:
				print(f'...and {len(changed_paths) - 40} more.')
			return 1
		print('All localized guides are clean.')
		return 0

	print(f'Cleanup complete. Updated {len(changed_paths)} localized guide(s).')
	return 0


if __name__ == '__main__':
	raise SystemExit(main())
