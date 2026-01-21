// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mermaid from 'astro-mermaid';
import rehypePrettyCode from 'rehype-pretty-code';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mermaid({ autoTheme: true })],

  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light',
            dark: 'github-dark'
          },
          keepBackground: false,
          defaultLang: {
            block: 'plaintext'
          }
        }
      ]
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});