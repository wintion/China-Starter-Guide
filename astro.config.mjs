// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://chinastarterguide.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.startsWith('/en/') && page !== '/en' && page !== '/en/',
		}),
	],
});
