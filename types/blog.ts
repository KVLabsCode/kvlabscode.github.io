import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description?: string;
  author?: string;
  publishedAt: string;
  mainImage?: SanityImageSource;
  body?: PortableTextBlock[];
  categories?: string[];
}

