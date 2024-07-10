import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { ENTRY, OUTPUT } from "../build-constants";
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: ENTRY,
      formats: ["es", "cjs", "iife", "umd"],
      name: "Helement",
      fileName(format, entryName) {
        return `${entryName}.${format}.js`;
      },
    },
    // rollup配置
    rollupOptions: {
      external: ["vue"], // 确保外部化处理那些你不想打包进库的依赖,忽略vue
      output: {
        // 为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    outDir: OUTPUT,
  },
});
