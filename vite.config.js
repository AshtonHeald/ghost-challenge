import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat swiper-container and swiper-slide as custom elements
          isCustomElement: (tag) =>
            ["swiper-container", "swiper-slide"].includes(tag),
        },
      },
    }),
    svgLoader(),
  ],
});
