'use client';

import { PortableText as SanityPortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface PortableTextProps {
  value: PortableTextBlock[];
}

export default function PortableText({ value }: PortableTextProps) {
  return (
    <SanityPortableText
      value={value}
      components={{
        types: {
          image: ({ value }: any) => {
            if (!value?.asset?._ref) {
              return null;
            }
            try {
              const imageUrl = urlFor(value).width(800).url();
              if (!imageUrl) {
                return null;
              }
              return (
                <div className="my-8">
                  <Image
                    src={imageUrl}
                    alt={value.alt || 'Blog image'}
                    width={800}
                    height={400}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              );
            } catch (error) {
              console.error('Error rendering image:', error);
              return null;
            }
          },
        },
        block: {
          h1: ({ children }) => (
            <h1 className="text-4xl font-semibold text-gray-900 mt-12 mb-6">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3">{children}</h4>
          ),
          normal: ({ children }) => (
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>
          ),
        },
        marks: {
          strong: ({ children }) => (
            <strong className="text-gray-900 font-semibold">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic">{children}</em>
          ),
          link: ({ value, children }) => {
            const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
            return (
              <a
                href={value?.href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="text-purple-600 hover:text-purple-700 underline"
              >
                {children}
              </a>
            );
          },
        },
        list: {
          bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">{children}</ul>
          ),
          number: ({ children }) => (
            <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">{children}</ol>
          ),
        },
        listItem: {
          bullet: ({ children }) => <li className="ml-4">{children}</li>,
          number: ({ children }) => <li className="ml-4">{children}</li>,
        },
      }}
    />
  );
}

