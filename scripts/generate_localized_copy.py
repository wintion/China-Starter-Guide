#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / 'src/utils/localized-copy.ts'
CACHE_PATH = ROOT / '.ui-translation-cache.json'
UI_LANGS = ['en', 'fr', 'zh', 'ja', 'ko', 'th', 'id', 'vi', 'ar']
TRANSLATOR_CODES = {
	'fr': 'fr',
	'zh': 'zh-CN',
	'ja': 'ja',
	'ko': 'ko',
	'th': 'th',
	'id': 'id',
	'vi': 'vi',
	'ar': 'ar',
}
NO_TRANSLATE_KEYS = {'path', 'id', 'href'}
MANUAL_OVERRIDES = {
	'zh': {
		'categoryLabels': {
			'prepare': '准备',
			'payment': '支付',
			'transport': '交通',
			'life': '生活',
			'medical': '医疗',
			'cities': '城市',
			'tips': '提示',
		},
		'aboutCopy': {
			'heroLinks': '从准备、支付和交通开始，先把最核心的内容理顺。',
		},
	},
}
progress_lock = threading.Lock()
progress_total = 0
progress_done = 0
WORKERS = 8

SOURCE = {
	'categoryLabels': {
		'prepare': 'Prepare',
		'payment': 'Payment',
		'transport': 'Transport',
		'life': 'Life',
		'medical': 'Medical',
		'cities': 'Cities',
		'tips': 'Tips',
	},
	'layoutCopy': {
		'language': 'Language',
		'search': 'Search',
		'about': 'About',
		'contact': 'Contact us',
		'footerRights': 'All rights reserved.',
	},
	'guidePageCopy': {
		'lastUpdated': 'Last updated',
		'onThisPage': 'On this page',
		'relatedGuides': 'Related guides',
	},
	'featuredEntryPointsCopy': {
		'ariaLabel': 'Featured guides',
		'readGuide': 'Read guide',
		'readGuideLabel': 'Read guide:',
	},
	'homeCopy': {
		'metaTitle': 'China Starter Guide',
		'metaDescription': 'Practical, content-first guidance for first-time foreigners visiting China.',
		'heroTitle': 'China Starter Guide',
		'heroDescription': 'Clear, current guidance for first-time foreigners visiting China. Start with the essentials, then follow the guides that match your trip.',
		'primaryCtas': [
			{
				'path': '/category/prepare',
				'title': 'Prepare before arrival',
				'description': 'Visas, documents, and essential setup.',
			},
			{
				'path': '/category/payment',
				'title': 'Pay smoothly',
				'description': 'Wallets, cards, and cash expectations.',
			},
			{
				'path': '/category/transport',
				'title': 'Get around fast',
				'description': 'Trains, metros, and local travel basics.',
			},
			{
				'path': '/category/medical',
				'title': 'Use medical care well',
				'description': 'Clinics, hospitals, emergencies, and costs.',
			},
		],
		'sections': {
			'featured': 'Start with these 5 guides',
			'topConcerns': 'Top concerns',
			'medicalBasics': 'Medical basics for first-time visitors',
			'medicalIntro': 'Use these guides if you want a practical overview of clinics, hospitals, costs, and urgent care before you need them.',
			'recent': 'Recently updated',
			'lastUpdated': 'Last updated',
		},
		'topConcernIds': [
			'payment/how-to-pay-in-china',
			'transport/high-speed-rail-basics',
			'prepare/visa-free-explained',
			'medical/see-a-doctor-in-china',
		],
		'medicalBasicIds': [
			'medical/see-a-doctor-in-china',
			'medical/public-hospitals-vs-private-clinics',
			'medical/emergency-care-in-china',
		],
	},
	'searchCopy': {
		'metaTitle': 'Search | China Starter Guide',
		'metaDescription': 'Search guides and answers for first-time visitors to China.',
		'title': 'Search',
		'intro': 'Find guides and answers across the China Starter Guide.',
		'label': 'Search guides',
		'placeholder': 'Search guides',
		'startTyping': 'Start typing to see results.',
		'noResults': 'No results found. Try another search.',
		'resultsLabel': '{count} results',
		'availableAfterBuild': 'Search is available after `npm run build` and `npm run preview`.',
		'loadingIndex': 'Loading search index...',
		'temporarilyUnavailable': 'Search is temporarily unavailable.',
		'searching': 'Searching...',
		'stillLoading': 'Search is still loading. Try again in a moment.',
	},
	'aboutCopy': {
		'metaTitle': 'About China Starter Guide',
		'metaDescription': 'Who maintains this site, why it exists, and the disclaimer.',
		'heroTitle': 'About China Starter Guide',
		'heroBody': 'This is a practical guide for first-time foreign visitors to China. The goal is to reduce uncertainty before departure and after arrival with clear, actionable guidance.',
		'heroLinks': 'Start with Prepare, Payment, and Transport to cover the essentials.',
		'panels': [
			{
				'title': 'Who maintains this site',
				'body': 'The site is maintained by a native Chinese creator who works in the internet industry and is deeply interested in digital products and content.',
				'items': [
					'Familiar with everyday life and travel flows in China',
					'Focused on the real questions first-time visitors face',
					'Committed to ongoing updates',
				],
			},
			{
				'title': 'Why this site exists',
				'body': 'The goal is to remove the most common uncertainties for first-time visitors: entry requirements, payments, connectivity, transport, and city planning.',
				'items': [
					'Free to use',
					'Built for easy public access',
					'Email is open for feedback or corrections',
				],
			},
			{
				'title': 'Sources and review',
				'body': 'Content is compiled from public sources and personally reviewed by the maintainer. We update regularly, but cannot guarantee that every detail is always complete, accurate, or current.',
			},
		],
		'disclaimerTitle': 'Disclaimer',
		'disclaimer': [
			'This site is provided for general information only. It is not legal, policy, or professional advice. Always verify details through official sources and make independent decisions for your trip.',
			'If any loss or impact results from errors, omissions, or outdated information, the maintainer assumes no legal or non-legal responsibility. Visitors accept 100% of the risk and responsibility for their own actions.',
			'If you have feedback, corrections, or collaboration ideas, email contact@chinastarterguide.com.',
		],
		'ctaTitle': 'Contact me',
		'ctaBody': 'Email contact@chinastarterguide.com for questions, feedback, or collaboration.',
		'ctaButton': 'Contact me',
	},
	'categoryPageCopy': {
		'prepare': {
			'intro': 'Visa, entry, safety, and pre-trip essentials to get you ready.',
			'featuredHeading': 'Featured prepare guides',
			'allHeading': 'All prepare guides',
		},
		'payment': {
			'intro': 'Mobile wallets, cards, cash, and QR payments that actually work.',
			'featuredHeading': 'Featured payment guides',
			'allHeading': 'All payment guides',
		},
		'transport': {
			'intro': 'Trains, metros, flights, and airport transfers with clear steps.',
			'featuredHeading': 'Featured transport guides',
			'allHeading': 'All transport guides',
		},
		'life': {
			'intro': 'Everyday living basics: SIMs, hotels, food, apps, and connectivity.',
			'featuredHeading': 'Featured life guides',
			'allHeading': 'All life guides',
		},
		'medical': {
			'intro': 'How foreigners can use clinics, hospitals, pharmacies, and emergency care in China with less stress.',
			'support': 'Start here if you want clear, practical help choosing the right medical path in China before a small problem turns into a confusing one.',
			'featuredHeading': 'Featured medical guides',
			'allHeading': 'All medical guides',
			'quickPaths': [
				{
					'title': 'I need care now',
					'description': 'Choose between pharmacy, clinic, hospital, or emergency care quickly.',
					'id': 'medical/see-a-doctor-in-china',
				},
				{
					'title': 'I need the right hospital',
					'description': 'Decide between public hospitals, private clinics, and international departments.',
					'id': 'medical/choosing-a-hospital-in-china',
				},
				{
					'title': 'I need urgent help',
					'description': 'Use this path when symptoms are escalating and the trip cannot wait.',
					'id': 'medical/emergency-care-in-china',
				},
			],
			'topicGroups': [
				{'title': 'Start here', 'ids': ['medical/see-a-doctor-in-china', 'medical/public-hospitals-vs-private-clinics']},
				{'title': 'Appointments and access', 'ids': ['medical/booking-hospital-appointments-in-china', 'medical/choosing-a-hospital-in-china', 'medical/international-departments-in-chinese-hospitals']},
				{'title': 'Costs and coverage', 'ids': ['medical/medical-costs-in-china', 'medical/health-insurance-for-foreign-visitors']},
				{'title': 'Pharmacy and medicines', 'ids': ['medical/how-pharmacies-work-in-china', 'medical/prescription-refills-in-china', 'medical/bringing-medicines-vs-buying-locally']},
				{'title': 'Urgent help', 'ids': ['medical/emergency-care-in-china', 'medical/getting-sick-on-a-short-trip-in-china']},
			],
		},
		'cities': {
			'intro': 'Choose the right cities, routes, and seasons for a first trip.',
			'featuredHeading': 'Featured cities guides',
			'allHeading': 'All cities guides',
		},
		'tips': {
			'intro': 'Short, practical tips that reduce friction: etiquette, safety, communication, and daily habits.',
			'featuredHeading': 'Featured tips',
			'allHeading': 'All tips',
			'topicGroups': [
				{'title': 'Etiquette and social norms', 'ids': ['tips/greetings-and-social-norms', 'tips/compliments-and-politeness', 'tips/gestures-to-avoid', 'tips/public-affection', 'tips/cultural-do-and-dont']},
				{'title': 'Communication and understanding', 'ids': ['tips/handling-misunderstandings', 'tips/staying-connected-without-english', 'tips/taking-photos-privacy']},
				{'title': 'Safety and awareness', 'ids': ['tips/dealing-with-crowds', 'tips/traveling-at-night', 'tips/safety-with-electronics']},
				{'title': 'Families and seniors', 'ids': ['tips/family-travel-tips', 'tips/seniors-travel-tips']},
				{'title': 'Shopping and bargaining', 'ids': ['tips/bargaining-basics']},
			],
		},
	},
	'categoryUiCopy': {
		'guidesAvailableTemplate': '{count} guides available',
		'quickPaths': 'Quick paths',
		'openGuide': 'Open guide',
		'featuredEyebrow': 'Featured',
		'readGuide': 'Read guide',
		'browseByTopic': 'Browse by topic',
		'medicalTopicIntro': 'Start with the question you are trying to solve right now, then move into the detailed guide that matches your situation.',
		'lastUpdated': 'Last updated',
		'noGuides': 'No guides are available in this category yet.',
	},
	'baseHeadSegmentLabels': {
		'category': 'Category',
		'guides': 'Guides',
		'search': 'Search',
		'about': 'About',
	},
}

cache_lock = threading.Lock()


def load_cache() -> dict[str, str]:
	if not CACHE_PATH.exists():
		return {}
	try:
		return json.loads(CACHE_PATH.read_text())
	except Exception:
		return {}


CACHE = load_cache()


def save_cache() -> None:
	with cache_lock:
		CACHE_PATH.write_text(json.dumps(CACHE, ensure_ascii=False, indent=2, sort_keys=True) + '\n')


def protect(text: str) -> tuple[str, list[str]]:
	fragments: list[str] = []

	def stash(value: str) -> str:
		fragments.append(value)
		return f'UIHOLD{len(fragments) - 1:03d}'

	text = text.replace('China Starter Guide', stash('China Starter Guide'))
	text = text.replace('contact@chinastarterguide.com', stash('contact@chinastarterguide.com'))
	text = re.sub(r'`[^`]+`', lambda match: stash(match.group(0)), text)
	text = re.sub(r'\{count\}', lambda match: stash(match.group(0)), text)
	return text, fragments


def restore(text: str, fragments: list[str]) -> str:
	for index, fragment in enumerate(fragments):
		text = text.replace(f'UIHOLD{index:03d}', fragment)
	return text


def translate_string(value: str, lang: str) -> str:
	global progress_done
	if lang == 'en' or not value.strip():
		return value
	cache_key = f'ui::{lang}::{value}'
	with cache_lock:
		cached = CACHE.get(cache_key)
	if cached:
		with progress_lock:
			progress_done += 1
			if progress_done % 25 == 0 or progress_done == progress_total:
				print(f'UI translations: {progress_done}/{progress_total}', flush=True)
		return cached
	protected, fragments = protect(value)
	attempts = 0
	while True:
		attempts += 1
		try:
			translated = GoogleTranslator(source='en', target=TRANSLATOR_CODES[lang]).translate(protected)
			break
		except Exception:
			if attempts >= 4:
				raise
			time.sleep(attempts * 1.5)
	translated = restore(translated, fragments)
	with cache_lock:
		CACHE[cache_key] = translated
	with progress_lock:
		progress_done += 1
		if progress_done % 25 == 0 or progress_done == progress_total:
			print(f'UI translations: {progress_done}/{progress_total}', flush=True)
	return translated


def translate_value(value, lang: str, translations: dict[str, str], key: str | None = None):
	if isinstance(value, dict):
		return {
			child_key: translate_value(child_value, lang, translations, child_key)
			for child_key, child_value in value.items()
		}
	if isinstance(value, list):
		return [translate_value(item, lang, translations, key) for item in value]
	if isinstance(value, str):
		if key in NO_TRANSLATE_KEYS:
			return value
		return translations.get(value, value)
	return value


def js(value) -> str:
	return json.dumps(value, ensure_ascii=False, indent=2)


def build_localized_maps() -> dict[str, dict]:
	strings = sorted(set(iter_strings(SOURCE)))
	translation_map: dict[str, dict[str, str]] = {'en': {value: value for value in strings}}

	with ThreadPoolExecutor(max_workers=WORKERS) as executor:
		futures = [
			executor.submit(translate_pair, lang, value)
			for lang in UI_LANGS
			if lang != 'en'
			for value in strings
		]
		for future in as_completed(futures):
			lang, original, translated = future.result()
			translation_map.setdefault(lang, {})[original] = translated

	localized = {
		lang: {key: translate_value(value, lang, translation_map[lang], key) for key, value in SOURCE.items()}
		for lang in UI_LANGS
	}
	for lang, overrides in MANUAL_OVERRIDES.items():
		if lang in localized:
			apply_overrides(localized[lang], overrides)
	return localized


def apply_overrides(target: dict, overrides: dict) -> None:
	for key, value in overrides.items():
		if isinstance(value, dict) and isinstance(target.get(key), dict):
			apply_overrides(target[key], value)
		else:
			target[key] = value


def translate_pair(lang: str, value: str) -> tuple[str, str, str]:
	return lang, value, translate_string(value, lang)


def render_typescript(localized: dict[str, dict]) -> str:
	return f"""import type {{ Lang }} from './i18n';

export const CATEGORY_ORDER = ['prepare', 'payment', 'transport', 'life', 'medical', 'cities', 'tips'] as const;

export type CategorySlug = (typeof CATEGORY_ORDER)[number];
export type UiLang = 'en' | 'fr' | 'zh' | 'ja' | 'ko' | 'th' | 'id' | 'vi' | 'ar';

const LOCALIZED_COPY = {js(localized)} as const;

export const getUiLang = (lang?: string | null): UiLang =>
	lang && lang in LOCALIZED_COPY ? (lang as UiLang) : 'en';

export const getCategoryLabel = (category: CategorySlug, lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].categoryLabels[category];

export const getLayoutCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].layoutCopy;
export const getGuidePageCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].guidePageCopy;
export const getFeaturedEntryPointsCopy = (lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].featuredEntryPointsCopy;
export const getHomeCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].homeCopy;
export const getSearchCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].searchCopy;
export const getAboutCopy = (lang?: string | null) => LOCALIZED_COPY[getUiLang(lang)].aboutCopy;
export const getCategoryPageCopy = (lang: string | null | undefined, category: CategorySlug) =>
	LOCALIZED_COPY[getUiLang(lang)].categoryPageCopy[category];
export const getCategoryUiCopy = (lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].categoryUiCopy;
export const getBaseHeadSegmentLabels = (lang?: string | null) =>
	LOCALIZED_COPY[getUiLang(lang)].baseHeadSegmentLabels;
"""


def main() -> int:
	global progress_total
	progress_total = sum(1 for _ in iter_strings(SOURCE)) * (len(UI_LANGS) - 1)
	print(f'Generating UI copy for {len(UI_LANGS) - 1} translated languages ({progress_total} strings)...', flush=True)
	localized = build_localized_maps()
	OUTPUT_PATH.write_text(render_typescript(localized))
	save_cache()
	print(f'Wrote {OUTPUT_PATH}')
	return 0


def iter_strings(value, key: str | None = None):
	if isinstance(value, dict):
		for child_key, child_value in value.items():
			yield from iter_strings(child_value, child_key)
	elif isinstance(value, list):
		for item in value:
			yield from iter_strings(item, key)
	elif isinstance(value, str) and key not in NO_TRANSLATE_KEYS and value.strip():
		yield value


if __name__ == '__main__':
	raise SystemExit(main())
