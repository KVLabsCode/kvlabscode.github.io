import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  console.warn('Warning: NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Blog features will be disabled.');
}

export const client = createClient({
  projectId: projectId || '',
  dataset: dataset,
  apiVersion: '2024-01-01',
  useCdn: true, // Set to false if statically generating pages, using ISR or revalidation
});

// Helper function for using images
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  try {
    return builder.image(source);
  } catch (error) {
    console.error('Error building image URL:', error);
    // Return a builder-like object that returns empty string
    return {
      width: () => ({ height: () => ({ url: () => '' }) }),
      height: () => ({ width: () => ({ url: () => '' }) }),
      url: () => '',
    } as any;
  }
}

