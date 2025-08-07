import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// 统一导出配置
export default defineConfig({
  // 基础配置
  site: 'https://www.qinghua.cloud',
  base: '/',
  outDir: 'dist',
  
  // 输出模式（静态或服务端渲染）
  output: 'static', // 或 'server'（若需 SSR）
  adapter: netlify(), // Netlify 适配器

  // 集成插件
  integrations: [
    sitemap({
      serialize: (page) => ({
        url: page.url,
        changefreq: 'weekly',
        priority: page.url === '/' ? 1.0 : 0.7,
        lastmod: new Date().toISOString()
      })
    })
  ]
});