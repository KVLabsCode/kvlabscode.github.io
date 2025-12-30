import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

export const metadata = {
  title: 'Blog | Kovio',
  description: 'Insights on AI, mobile advertising, and ad operations.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-32 pb-20">
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
              <span className="text-sm text-purple-900 font-medium">BLOG</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-6 leading-tight">
              Insights & Updates
            </h1>
            <p className="text-lg text-gray-600 mb-12">
              Latest thoughts on AI, mobile advertising, and ad operations.
            </p>

            {/* Blog Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all"
                  >
                    {post.mainImage && (
                      <div className="relative w-full h-48 bg-gray-100">
                        <Image
                          src={urlFor(post.mainImage).width(600).height(400).url()}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {post.title}
                      </h2>
                      {post.description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>
                      )}
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.author || 'Kovio Team'}</span>
                        {post.publishedAt && (
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No blog posts yet. Check back soon!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
