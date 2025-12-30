# Setting Up Sanity Studio Locally

## Step 1: Create Sanity Studio Directory

Create a new directory for your Sanity Studio (separate from your Next.js app):

```bash
# In a separate directory (not inside your Next.js project)
npx create-sanity@latest --template clean --project-id YOUR_PROJECT_ID --dataset production
```

Or if you want to add it to your existing project:

```bash
# In your project root
mkdir sanity-studio
cd sanity-studio
npx create-sanity@latest --template clean --project-id YOUR_PROJECT_ID --dataset production
```

## Step 2: Create Schema Files

After the Studio is created, you'll have a `schemas` folder. Create these files:

### `schemas/post.js`

```javascript
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Kovio Team',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
            },
          ],
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage',
    },
  },
}
```

### `schemas/category.js` (Optional)

```javascript
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
  ],
}
```

## Step 3: Register Schemas

In `sanity.config.js` (or `sanity.config.ts`), make sure your schemas are imported:

```javascript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import post from './schemas/post'
import category from './schemas/category'

export default defineConfig({
  name: 'default',
  title: 'Kovio Blog',
  
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'production',
  
  plugins: [deskTool()],
  
  schema: {
    types: [post, category],
  },
})
```

## Step 4: Run Studio Locally

```bash
cd sanity-studio
npm run dev
```

The Studio will be available at `http://localhost:3333`

## Alternative: Use Sanity Studio Web Interface

If you prefer not to set up a local Studio, you can use the web interface:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Click "Open Studio"
4. Use the visual schema builder to create your `post` type

