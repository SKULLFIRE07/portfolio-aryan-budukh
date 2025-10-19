import { defineConfig } from 'sanity'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'aryan-portfolio',
  title: 'Aryan Budukh Portfolio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo-project',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [],
  schema: {
    types: schemaTypes,
  },
})
