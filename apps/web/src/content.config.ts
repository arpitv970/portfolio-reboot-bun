import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const project = defineCollection({
  loader: glob({ pattern: "**/*.md", base: 'src/data/project' }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string(),
    coverImgSrc: z.string()
  })
})

export const collections = { project }
