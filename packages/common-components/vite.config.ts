import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import createTsConfigPathsPlugin from "vite-plugin-typescript";

export default defineConfig({
  plugins: [react(), createTsConfigPathsPlugin()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "common-components",
      fileName: (format) => `my-component-library.${format}.js`, // Output file name
      formats: ["es", "umd"], // Output formats (ES modules and UMD)
    },
    outDir: "./lib",
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});