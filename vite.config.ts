import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vite.dev/config/
export default defineConfig({
  base: "/posts/",
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: "data-pt.json",
          dest: "",
        },
        {
          src: "data-en.json",
          dest: "",
        },
        {
          src: "articles/**/*.md",
          dest: "articles",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
