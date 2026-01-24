import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { getLangFromId, stripLangFromId } from '../utils/i18n';

export async function GET(context) {
	const posts = (await getCollection('blog')).filter((post) => getLangFromId(post.id) === 'en');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${stripLangFromId(post.id)}`,
		})),
	});
}
