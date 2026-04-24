export const LANGUAGE_OPTIONS = [
	{
		code: 'en',
		label: 'English',
		nativeLabel: 'English',
		ogLocale: 'en_US',
		isLive: true,
	},
	{
		code: 'fr',
		label: 'French',
		nativeLabel: 'Français',
		ogLocale: 'fr_FR',
		isLive: true,
	},
	{
		code: 'zh',
		label: 'Chinese',
		nativeLabel: '中文',
		ogLocale: 'zh_CN',
		isLive: true,
	},
	{
		code: 'ja',
		label: 'Japanese',
		nativeLabel: '日本語',
		ogLocale: 'ja_JP',
		isLive: true,
	},
	{
		code: 'ko',
		label: 'Korean',
		nativeLabel: '한국어',
		ogLocale: 'ko_KR',
		isLive: true,
	},
	{
		code: 'th',
		label: 'Thai',
		nativeLabel: 'ไทย',
		ogLocale: 'th_TH',
		isLive: true,
	},
	{
		code: 'id',
		label: 'Indonesian',
		nativeLabel: 'Bahasa Indonesia',
		ogLocale: 'id_ID',
		isLive: true,
	},
	{
		code: 'vi',
		label: 'Vietnamese',
		nativeLabel: 'Tiếng Việt',
		ogLocale: 'vi_VN',
		isLive: true,
	},
	{
		code: 'ar',
		label: 'Arabic',
		nativeLabel: 'العربية',
		ogLocale: 'ar_AR',
		isLive: false,
	},
] as const;

export type Lang = (typeof LANGUAGE_OPTIONS)[number]['code'];
export const SUPPORTED_LANGS = LANGUAGE_OPTIONS.map((language) => language.code) as readonly Lang[];
export const LIVE_LANGS = LANGUAGE_OPTIONS.filter((language) => language.isLive).map(
	(language) => language.code,
) as readonly Lang[];
export const DEFAULT_LANG: Lang = 'en';

export const isSupportedLang = (value?: string | null): value is Lang =>
	Boolean(value) && SUPPORTED_LANGS.includes(value as Lang);

export const getLanguageOption = (lang: string) =>
	LANGUAGE_OPTIONS.find((language) => language.code === lang) ?? LANGUAGE_OPTIONS[0];

export const getLangFromPath = (pathname: string): Lang => {
	const first = pathname.split('/').filter(Boolean)[0];
	return isSupportedLang(first) ? first : DEFAULT_LANG;
};

export const getLangFromId = (id: string): Lang => {
	const first = id.split('/')[0];
	return isSupportedLang(first) ? first : DEFAULT_LANG;
};

export const stripLangFromId = (id: string) => {
	const parts = id.split('/');
	return isSupportedLang(parts[0]) ? parts.slice(1).join('/') : id;
};

export const withLangPrefix = (path: string, lang: Lang) => {
	if (path.startsWith('http')) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `/${lang}${normalized}`;
};

export const normalizeLangParam = (value?: string | null): Lang =>
	(isSupportedLang(value) ? value : DEFAULT_LANG);

export const stripLangFromPath = (pathname: string) => {
	const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
	const parts = normalized.split('/').filter(Boolean);
	if (isSupportedLang(parts[0])) {
		const rest = parts.slice(1).join('/');
		return rest ? `/${rest}` : '';
	}
	return normalized;
};

export const withOptionalLangPrefix = (
	path: string,
	lang: Lang,
	defaultLang: Lang = DEFAULT_LANG,
) => {
	if (path.startsWith('http')) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return lang === defaultLang ? normalized : `/${lang}${normalized}`;
};

export const buildAlternates = (
	pathname: string,
	site: URL,
	langs: readonly Lang[] = LIVE_LANGS,
	defaultLang: Lang = DEFAULT_LANG,
) => {
	const basePath = stripLangFromPath(pathname) || '/';
	return langs.map((lang) => ({
		lang,
		url: new URL(withOptionalLangPrefix(basePath, lang, defaultLang), site).toString(),
	}));
};
