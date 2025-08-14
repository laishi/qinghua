import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  site: 'https://www.qinghua.cloud',
  base: '/',
  outDir: 'dist',
  output: 'static',
  adapter: netlify(),

  hooks: {
    'astro:build:done': async ({ outDir }) => {
      try {
        const source = path.resolve('sitemap.xml'); // 根目录的 sitemap.xml
        const dest = path.join(outDir, 'sitemap.xml'); // dist 目录

        if (fs.existsSync(source)) {
          fs.copyFileSync(source, dest);
          console.log('✅ Sitemap 已成功复制到 dist 目录');
        } else {
          console.warn('⚠️ 根目录未找到 sitemap.xml 文件');
        }
      } catch (err) {
        console.error('❌ 复制 sitemap.xml 出错:', err);
      }
    },
  },
});
