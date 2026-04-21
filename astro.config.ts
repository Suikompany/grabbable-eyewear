import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import { base, boothLink, twitterLink } from './src/const'

export default defineConfig({
  root: '.',
  base: base,
  trailingSlash: 'always',
  outDir: `dist/${base}`, // Cloudflare Workers の Routes でベースパスを指定しているためビルド先もベースパスを合わせる
  site: 'https://suikompany.hiromelon.dev',
  integrations: [
    starlight({
      title: 'Grabbable Eyewear',
      locales: {
        root: {
          label: '日本語',
          lang: 'ja',
        },
      },
      social: [
        { icon: 'x.com', label: 'X/Twitter', href: twitterLink },
        { icon: 'external', label: 'Booth', href: boothLink }
      ],
      lastUpdated: true,
      sidebar: [
        {slug: 'installation'},
        {slug: 'feature'},
        {slug: 'changelog'},
        {
          label: 'リファレンス',
          items: [
            {slug: 'references/adjustment'},
            {slug: 'references/performance-rank'},
            {slug: 'references/faq'},
            {slug: 'references/license'},
          ],
        },
      ]
    }),
  ],
  server: {
    host: '127.0.0.1'
  }
});
