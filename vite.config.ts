import { defineConfig } from "vite";
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
  plugins: [dtsPlugin()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "LitHTML",
      fileName: (format) => `lit-HTML.${format}.js`,
    },
    emptyOutDir: true,
  },
});
