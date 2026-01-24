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

const resume = defineCollection({
  loader: glob({ pattern: "**/*.md", base: 'src/data/resume' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string().email(),

    website: z.string().url().optional(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    x: z.string().url().optional()
  })
})

export const collections = { project, resume }
