import path from "node:path";

import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

import pkg from "./package.json";

const externalDeps = new Set([
	...Object.keys(pkg.dependencies || {}),
	...Object.keys(pkg.peerDependencies || {}),
]);

const isExternal = (id: string) => {
	if (id.startsWith(".") || path.isAbsolute(id)) {
		return false;
	}

	const cleanId = id.split("?")[0].split("#")[0];
	const pkgName = cleanId.startsWith("@")
		? cleanId.split("/").slice(0, 2).join("/")
		: cleanId.split("/")[0];

	return (
		externalDeps.has(pkgName) ||
		cleanId === "react/jsx-runtime" ||
		cleanId === "react/compiler-runtime"
	);
};

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
			routesDirectory: "playground/routes",
			generatedRouteTree: "playground/routeTree.gen.tsx",
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
		viteStaticCopy({
			targets: [
				{
					src: "src/css",
					dest: "",
				},
			],
		}),
	],
	resolve: {
		alias: {
			"@pg": path.resolve(__dirname, "./playground"),
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		open: true,
	},
	build: {
		outDir: "dist",
		emptyOutDir: false,
		cssCodeSplit: false, // TO VERIFY
		sourcemap: "inline",
		lib: {
			entry: ["src/index.ts", "src/base-ui.ts"],
			formats: ["es"],
		},
		minify: "esbuild",
		rollupOptions: {
			output: {
				format: "es",
				preserveModules: true,
				preserveModulesRoot: "src",
				entryFileNames: "[name].js",
				inlineDynamicImports: false,
			},
			external: isExternal,
			treeshake: {
				moduleSideEffects: false,
			},
		},
	},
	esbuild: {
		keepNames: true, // Keep original function and class names
		legalComments: "none", // Remove comments from bundle
		minifyIdentifiers: true, // Better minification
	},
});
