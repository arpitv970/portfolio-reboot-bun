// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mermaid from 'astro-mermaid';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mermaid({ autoTheme: true })],

  vite: {
    plugins: [tailwindcss()]
  }
});