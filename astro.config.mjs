import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.qinghua.cloud',
  base: '/',           // 保持为 '/'，不要改成 './'
  outDir: 'dist',      // 构建目录，和 Actions 中一致
});
