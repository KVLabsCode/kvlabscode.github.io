import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export const metadata = {
  title: 'AI Hype Is High, but Profitability Remains Elusive | Kovio Blog',
  description: 'Exploring the reality behind AI hype: why most AI companies struggle with profitability despite massive growth and investment.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-purple-50 border border-purple-100 rounded-full mb-6">
              <span className="text-sm text-purple-900 font-medium">BLOG</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-6 leading-tight">
              AI Hype Is High, but Profitability Remains Elusive for Most Players
            </h1>
            <p className="text-lg text-gray-600">
              Published on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Artificial Intelligence is everywhere. From flashy product launches to billion-dollar valuations, AI has become the defining tech narrative. Yet beneath the hype, a quieter truth emerges: <strong className="text-gray-900">most AI companies are still struggling to make real, sustainable profits</strong>.
              </p>

              {/* Visual: Hype vs Reality */}
              <div className="my-12 p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">The Hype Gap</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Hype</h4>
                    <p className="text-gray-600">Massive valuations, viral launches, endless potential</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Reality</h4>
                    <p className="text-gray-600">Struggling margins, unclear monetization, high costs</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">The Cost Problem</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Training and running AI models is expensive. Unlike traditional SaaS where costs decrease with scale, <strong className="text-gray-900">each new AI customer often increases costs faster than revenue</strong>.
              </p>

              {/* Visual: Cost Structure Comparison */}
              <div className="my-12 p-8 bg-gray-50 rounded-2xl border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Cost Structure: Traditional SaaS vs AI</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-900 font-medium">Traditional SaaS</span>
                      <span className="text-emerald-600 font-semibold text-sm">Marginal costs → 0</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-4 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-900 font-medium">AI Companies</span>
                      <span className="text-red-600 font-semibold text-sm">Costs scale with usage</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 h-4 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl mb-2">💰</div>
                    <p className="text-xs text-gray-600 font-medium">Expensive GPUs</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="text-xs text-gray-600 font-medium">High compute</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <p className="text-xs text-gray-600 font-medium">Large teams</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
                    <div className="text-2xl mb-2">🔄</div>
                    <p className="text-xs text-gray-600 font-medium">Continuous retraining</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">The Monetization Challenge</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Customers expect AI tools to be cheap or free. When multiple products use the same underlying models, differentiation becomes thin—leading to a race to the bottom on pricing.
              </p>

              {/* Visual: Value Chain */}
              <div className="my-12 p-8 bg-purple-50 rounded-2xl border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-8 text-center">Where the Real Value Goes</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1 text-center p-6 bg-white border border-gray-200 rounded-xl">
                    <div className="text-3xl mb-2">☁️</div>
                    <p className="text-gray-900 font-semibold">Cloud Providers</p>
                    <p className="text-emerald-600 text-sm mt-2 font-medium">Win</p>
                  </div>
                  <div className="text-purple-400 text-2xl hidden md:block">→</div>
                  <div className="flex-1 text-center p-6 bg-white border border-gray-200 rounded-xl">
                    <div className="text-3xl mb-2">🔧</div>
                    <p className="text-gray-900 font-semibold">Chip Makers</p>
                    <p className="text-emerald-600 text-sm mt-2 font-medium">Win</p>
                  </div>
                  <div className="text-purple-400 text-2xl hidden md:block">→</div>
                  <div className="flex-1 text-center p-6 bg-white border border-gray-200 rounded-xl">
                    <div className="text-3xl mb-2">🤖</div>
                    <p className="text-gray-900 font-semibold">Model Platforms</p>
                    <p className="text-emerald-600 text-sm mt-2 font-medium">Win</p>
                  </div>
                  <div className="text-purple-400 text-2xl hidden md:block">→</div>
                  <div className="flex-1 text-center p-6 bg-red-50 border border-red-200 rounded-xl">
                    <div className="text-3xl mb-2">💼</div>
                    <p className="text-gray-900 font-semibold">AI Apps</p>
                    <p className="text-red-600 text-sm mt-2 font-medium">Struggle</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-semibold text-gray-900 mt-12 mb-6">The Path Forward</h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                The market will consolidate. Survivors will solve real problems, build proprietary advantages, and optimize for efficiency—not just impressive demos.
              </p>

              {/* Visual: Success Factors */}
              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 text-lg">What Works</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Solve real problems</li>
                        <li>• Build proprietary data</li>
                        <li>• Optimize for margins</li>
                        <li>• Treat AI as enabler</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-red-50 rounded-2xl border border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 text-lg">What Doesn\'t</h4>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Impressive demos only</li>
                        <li>• Generic AI features</li>
                        <li>• Ignoring unit economics</li>
                        <li>• AI as the product</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200">
                <p className="text-xl text-gray-900 font-semibold text-center leading-relaxed">
                  The next phase of AI won\'t be defined by who has the biggest model—but by who can turn intelligence into a <span className="text-purple-600">profitable, durable business</span>.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-12 text-center mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Build a Profitable Ad Business?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Kovio helps large publishers automate their entire ad stack with AI—managing AdMob, mediation platforms, and ad ops workflows autonomously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/waitlist" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-lg">
                  Get early access →
                </Link>
                <Link href="/" className="px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-medium rounded-lg transition-colors text-lg">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
