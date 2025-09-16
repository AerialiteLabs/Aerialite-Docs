import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
      		favicon: "/favicon.png",
			title: 'Aerialite Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/AerialiteLabs/Aerialite-Docs' }],
			sidebar: [
				{
					label: 'Kajigs',
					autogenerate: { directory: 'kajigs' },
				},
			],
		}),
	],
});
