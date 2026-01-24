export const SUPPORTED_LANGS = ['en', 'zh', 'ko', 'ja', 'id', 'vi'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

export const isSupportedLang = (value?: string | null): value is Lang =>
	Boolean(value) && SUPPORTED_LANGS.includes(value as Lang);

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
	langs: readonly Lang[] = SUPPORTED_LANGS,
	defaultLang: Lang = DEFAULT_LANG,
) => {
	const basePath = stripLangFromPath(pathname) || '/';
	return langs.map((lang) => ({
		lang,
		url: new URL(withOptionalLangPrefix(basePath, lang, defaultLang), site).toString(),
	}));
};
