import adapter from '@sveltejs/adapter-vercel';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            runtime: 'nodejs22.x'
        }),


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