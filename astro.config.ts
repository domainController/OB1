import { defineConfig } from "astro/config";

console.log("📦 Astro config chargé avec assetsPrefix /assets");

export default defineConfig({
  base: "/",
  outDir: "dist",
  build: {
    assetsPrefix: "/assets",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name]-[hash][extname]",
          chunkFileNames: "assets/[name]-[hash].js",
          entryFileNames: "assets/[name]-[hash].js",
        },
      },
    },
  },
});
