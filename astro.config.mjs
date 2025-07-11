import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.qinghua.cloud',
  base: '/',
  outDir: 'dist',
  integrations: [
    sitemap({
      serialize: (page) => {
        return {
          url: page.url,  // ✅ 正确地取出 URL 字符串
          changefreq: 'weekly',
          priority: page.url === '/' ? 1.0 : 0.7,
          lastmod: new Date().toISOString(),
        };
      },
    }),
  ],
});
