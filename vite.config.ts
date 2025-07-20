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
          src: "src/css",
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
      // external: [
      //   ...Object.keys(pkg.dependencies || {}),
      //   ...Object.keys(pkg.devDependencies || {}),
      //   ...Object.keys(pkg.peerDependencies || {}),
      //   "react/jsx-runtime",
      // ],
      external: (id) => {
        return (
          /^react/.test(id) ||
          /^@mui\/base/.test(id) ||
          /^@floating-ui/.test(id) ||
          Object.keys(pkg.dependencies || {}).some(
            (dep) => id === dep || id.startsWith(dep + "/"),
          ) ||
          Object.keys(pkg.peerDependencies || {}).some(
            (dep) => id === dep || id.startsWith(dep + "/"),
          )
        );
      },
      treeshake: {
        moduleSideEffects: false,
      },
    },
  },
  esbuild: {
    keepNames: true, // Keep original function and class names
  },
});
