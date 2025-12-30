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
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  );
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      ${postFields}
    }`,
    { slug }
  );
  return post || null;
}

export async function getPostSlugs(): Promise<string[]> {
  const posts = await client.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return posts.map((post: { slug: string }) => post.slug);
}

