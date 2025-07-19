import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        // {
        //   src: "src/fonts",
        //   dest: "",
        // },
        {
          src: "src/themes",
          dest: "",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: "./index.html",
  },
  build: {
    outDir: "dist",
    emptyOutDir: false,
    cssCodeSplit: true,
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    minify: "esbuild",
    rollupOptions: {
      input: {
        index: "src/index.ts",
      },
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: "[name].js",
      },
      external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
        "react/jsx-runtime",
      ],
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
  esbuild: {
    keepNames: true, // Keep original function and class names
  },
});
