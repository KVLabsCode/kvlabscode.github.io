import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import post from './schemas/post'
import category from './schemas/category'

// Replace these with your actual project ID and dataset
const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'YOUR_PROJECT_ID'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Kovio Blog Studio',
  
  projectId: projectId,
  dataset: dataset,
  
  plugins: [structureTool()],
  
  schema: {
    types: [post, category],
  },
})

