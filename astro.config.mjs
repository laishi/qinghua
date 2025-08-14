import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import fs from 'fs';
import path from 'path';

// 统一导出配置
export default defineConfig({
  // 基础配置
  site: 'https://www.qinghua.cloud',

  base: '/',
  outDir: 'dist',

  // 输出模式（静态或服务端渲染）
  output: 'static',

  // 集成插件
  integrations: [
    // sitemap插件已经去除
  ],

  // 部署适配器
  adapter: netlify(),

  // 钩子用于在构建完成后手动复制 sitemap.xml 文件到 dist
  hooks: {
    'astro:build:done': async ({ outDir }) => {
      // 将根目录下的 sitemap.xml 复制到 dist 目录
      const sourcePath = path.resolve('sitemap.xml'); // 根目录的 sitemap.xml
      const destPath = path.join(outDir, 'sitemap.xml'); // 输出目录的 sitemap.xml

      // 确保源文件存在
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
        console.log('Sitemap 已复制到 dist 目录');
      } else {
        console.log('没有找到 sitemap.xml 文件');
      }
    },
  },
});
