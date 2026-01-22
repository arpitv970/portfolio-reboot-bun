import { OGImageRoute } from 'astro-og-canvas';

export const { getStaticPaths, GET } = await OGImageRoute({
  // Route parameter that matches the dynamic route [...image]
  param: 'image',

  // Define pages that need OG images
  pages: {
    'image': {
      title: "I'm Arpit 👋 Building boring systems that quietly print serious money for your business",
      description: "Engineering scalable multi-tenant CRMs, ERPs & Dashboards with granular access controls and plugins for Salesforce, SAP or any of your ecosystem"
    }
  },

  getImageOptions: (_path, page) => ({
    // Required title for the image
    title: page.title,

    // Canvas dimensions for social media
    width: 1200,
    height: 630,

    // Background gradient to match hero section
    bgGradient: [
      [255, 255, 255], // background (white)
      [248, 250, 252]  // secondary/20 (light gray)
    ],

    // Custom description for the layout
    description: page.description,
  })
});