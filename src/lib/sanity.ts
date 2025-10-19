import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-12-01',
  useCdn: process.env.NODE_ENV === 'production',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getProjects() {
  const projects = await client.fetch(`
    *[_type == "project"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      coverImage,
      projectType,
      description,
      liveUrl,
      githubUrl,
      tags,
      featured,
      publishedAt
    }
  `)
  return projects
}

export async function getFeaturedProjects() {
  const projects = await client.fetch(`
    *[_type == "project" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      slug,
      coverImage,
      projectType,
      description,
      liveUrl,
      githubUrl,
      tags,
      featured,
      publishedAt
    }
  `)
  return projects
}

export async function getProjectBySlug(slug: string) {
  const project = await client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      coverImage,
      projectType,
      description,
      liveUrl,
      githubUrl,
      tags,
      featured,
      publishedAt
    }
  `, { slug })
  return project
}
