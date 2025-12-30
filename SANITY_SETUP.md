# Sanity CMS Setup Guide

## 1. Install Dependencies

Run the following command to install Sanity packages:

```bash
npm install @sanity/client @sanity/image-url next-sanity @portabletext/react @portabletext/types
```

## 2. Environment Variables

Create a `.env.local` file in the root directory with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

To find your Project ID:
1. Go to https://www.sanity.io/manage
2. Select your project
3. The Project ID is shown in the project settings

## 2.5. Configure CORS Origins

You need to add your website URLs to Sanity's CORS settings to allow your Next.js app to fetch data:

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to **API** → **CORS origins**
4. Click **Add CORS origin**
5. Add these URLs:

**For Local Development:**
- Origin: `http://localhost:3000`
- Allow credentials: ✅ (checked)

**For Production:**
- Origin: `https://kovio.dev` (or your production domain)
- Allow credentials: ✅ (checked)

**If using GitHub Pages:**
- Origin: `https://your-username.github.io` (or your custom domain)
- Allow credentials: ✅ (checked)

**Note:** You can also use wildcards for subdomains:
- `https://*.kovio.dev` (allows all subdomains)

## 3. Create Sanity Schema

You have two options for creating the schema:

### Option A: Using Sanity Studio Web Interface (Easiest)

1. Go to https://www.sanity.io/manage
2. Select your project
3. Click **"Open Studio"** (or visit `https://your-project-id.sanity.studio`)
4. In the Studio sidebar, look for **"Schema"** or **"Content Models"**
5. Click **"Add schema type"** or **"Create new type"**
6. Choose **"Document"** type
7. Name it `post`
8. Add each field manually using the visual editor

### Option B: Set Up Local Sanity Studio (Recommended for Development)

If you want to manage schemas in code, see `SANITY_STUDIO_SETUP.md` for detailed instructions.

**For now, here's the schema definition you need:**

```javascript
// schemas/post.js
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

## 4. Optional: Category Schema

If you want to use categories, create a `category` schema:

```javascript
// schemas/category.js
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

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Visit `/blog` to see the blog listing
3. Create a test post in Sanity Studio
4. The post should appear on your blog page

## Troubleshooting

- **Posts not showing**: Check that your environment variables are set correctly
- **Images not loading**: Ensure your Sanity project has CORS configured to allow your domain
- **Type errors**: Make sure all packages are installed and TypeScript types are available

