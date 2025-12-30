import { client } from './sanity';
import { Post } from '@/types/blog';

const postFields = `
  _id,
  title,
  slug,
  description,
  author,
  publishedAt,
  mainImage,
  body,
  "categories": categories[]->title
`;

export async function getAllPosts(): Promise<Post[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  
  try {
    const posts = await client.fetch(
      `*[_type == "post"] | order(publishedAt desc) {
        ${postFields}
      }`
    );
    return posts || [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }
  
  try {
    const post = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        ${postFields}
      }`,
      { slug }
    );
    return post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return [];
  }
  
  try {
    const posts = await client.fetch(
      `*[_type == "post"]{ "slug": slug.current }`
    );
    return posts ? posts.map((post: { slug: string }) => post.slug) : [];
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

