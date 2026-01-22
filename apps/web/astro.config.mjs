// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import mermaid from 'astro-mermaid';
import rehypePrettyCode from 'rehype-pretty-code';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mermaid({
    autoTheme: true, mermaidConfig: {
      theme: 'default',
      startOnLoad: true,
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
        titleTopMargin: 25,
        diagramMarginX: 50,
        diagramMarginY: 10,
        nodeSpacing: 50,
        rankSpacing: 50
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        useMaxWidth: true
      },
      gantt: {
        titleTopMargin: 25,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        leftPadding: 75,
        gridLineStartPadding: 35,
        fontSize: 11,
        numberSectionStyles: 4,
        useMaxWidth: true
      },

      journey: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        useMaxWidth: true
      },
      timeline: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        useMaxWidth: true
      },
      class: {
        useMaxWidth: true,
        htmlLabels: false
      },
      state: {
        dividerMargin: 10,
        sizeUnit: 5,
        padding: 8,
        textHeight: 10,
        titleShift: -15,
        noteMargin: 10,
        forkWidth: 70,
        forkHeight: 7,
        miniPadding: 2,
        fontSizeFactor: 5.02,
        fontSize: 24,
        labelHeight: 16,
        edgeLengthFactor: '20',
        compositTitleSize: 35,
        radius: 5,
        useMaxWidth: true
      },
      er: {
        diagramPadding: 20,
        layoutDirection: 'TB',
        minEntityWidth: 100,
        minEntityHeight: 75,
        entityPadding: 15,
        stroke: 'gray',
        fill: 'honeydew',
        fontSize: 12,
        useMaxWidth: true
      },
      pie: {
        useMaxWidth: true
      },
      quadrantChart: {
        useMaxWidth: true
      },
      xyChart: {
        useMaxWidth: true
      },
      requirement: {
        useMaxWidth: true
      },
      gitGraph: {
        titleTopMargin: 25,
        diagramPadding: 8,
        nodeLabel: {
          width: 75,
          height: 100,
          x: -25,
          y: 0
        },
        mainBranchName: 'main',
        mainBranchOrder: 0,
        showCommitLabel: false,
        showBranches: true,
        rotateCommitLabel: false,
        useMaxWidth: true
      },
      c4: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        c4ShapeMargin: 50,
        c4ShapePadding: 20,
        width: 216,
        height: 60,
        boxMargin: 10,
        useMaxWidth: true
      },
      sankey: {
        width: 600,
        height: 400,
        linkColor: 'gradient',
        nodeAlignment: 'justify',
        useMaxWidth: true
      },
      packet: {
        useMaxWidth: true
      },
      architecture: {
        useMaxWidth: true
      },

      securityLevel: 'loose', // Required for some complex diagrams
      suppressErrorRendering: true, // Suppress rendering errors
      logLevel: 'error' // Only show actual errors
    }
  })],

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
          },
          // Completely ignore mermaid code blocks
          ignore: ['mermaid']
        }
      ]
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
