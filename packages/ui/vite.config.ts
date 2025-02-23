import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools'
import dts from 'vite-plugin-dts';

import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    dts({
      // 包含的文件类型
      include: ['src/**/*.{vue,ts,tsx}'],
      // 输出目录
      outDir: ['dist/types'],
      // 写入文件前的处理
      beforeWriteFile: (filePath, content) => ({
        // 替换文件路径中的 '/src/' 为 '/'，不然类型产物都会被放在src文件夹下面
        filePath: filePath.replace('/src/', '/'),
        content,
      }),
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    minify: false,
    lib: {
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        return `${format === 'es' ? 'esm' : 'cjs'}/[name].${format === 'es' ? 'mjs' : 'js'}`;
      },
      cssFileName: 'style',
    },
  },
});
