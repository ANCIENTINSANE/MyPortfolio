import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            "@": "./src/lib",
            "@components": "./src/lib/components",
            "@ui": "./src/lib/components/ui",
            "@styles": "./src/styles"
        }
    },
    preprocess: vitePreprocess()
};

export default config;