import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AdvertiserFlow from '@/components/demo/advertiser-flow';
import Link from 'next/link';

export default function AdvertisersPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        {/* Advertiser Flow Section (hero) */}
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/40 relative overflow-hidden">
          {/* Subtle background accents */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 glass-effect rounded-full mb-4 md:mb-6">
                <span className="text-xs md:text-sm text-primary-300 font-semibold">FOR ADVERTISERS &amp; BRANDS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4">
                How Advertisers Use Kovio
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                From campaign brief to AI-intent matching, real-time delivery, and transparent reporting.
              </p>
            </div>

            <AdvertiserFlow />
          </div>
        </section>

        {/* Advertiser Value Proposition Section */}
        <section id="advertisers" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black/30 relative overflow-hidden">
          {/* Subtle background accents */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/10 to-transparent pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent-500/15 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-6 tracking-tight px-4">
                Why Advertisers Choose Kovio
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
                Kovio turns AI conversations into a high-intent media channel, placing your brand inside assistants
                and chatbots at the exact moment people ask for help.
              </p>

              {/* Metrics strip for advertisers */}
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm px-4">
                <div className="glass-effect rounded-full px-3 md:px-4 py-2 flex items-center gap-2 text-primary-200 w-full sm:w-auto text-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0"></span>
                  <span className="text-left">+3.2x click‑through vs traditional display</span>
                </div>
                <div className="glass-effect rounded-full px-3 md:px-4 py-2 flex items-center gap-2 text-emerald-200 w-full sm:w-auto text-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
                  <span className="text-left">94% session retention on Kovio experiences</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Reach High-Intent Users */}
              <div className="glass-effect-premium rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary-500/30">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 19c4.418 0 8-2.239 8-5s-3.582-5-8-5-8 2.239-8 5c0 1.657 1.343 3.122 3.414 4.023L7 20l3.023-1.513C10.69 18.82 11.33 19 12 19z" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary-300 transition-colors">
                    Reach High-Intent Users
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Show up inside AI assistants and chatbots, where attention is focused and intent is explicit - not lost in a feed.
                  </p>
                </div>
              </div>

              {/* Contextual, AI-Powered Targeting */}
              <div className="glass-effect-premium rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-accent-500/10 rounded-full blur-3xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-accent-500/30">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M10 6a8 8 0 108 8h-2a6 6 0 11-6-6V6z" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-accent-300 transition-colors">
                    Contextual, AI-Powered Targeting
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Kovio matches your campaigns to live intent in conversations - no fragile keyword lists or manual rules.
                  </p>
                </div>
              </div>

              {/* Brand-Safe Inventory & Control */}
              <div className="glass-effect-premium rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 4.5L4.5 9v5.5L12 19.5l7.5-5V9L12 4.5z" />
                      <path d="M9.5 12l1.5 1.5L15 9.5" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-emerald-300 transition-colors">
                    Brand-Safe Inventory &amp; Control
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    Ads only appear in vetted, AI-first applications. Control categories, placements, and block unwanted queries or contexts.
                  </p>
                </div>
              </div>

              {/* Transparent Performance Reporting */}
              <div className="glass-effect-premium rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M4 19h16M5 17V7m4 10V5m4 12v-6m4 6V9" />
                    </svg>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-cyan-300 transition-colors">
                    Transparent Performance Reporting
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    See impressions, clicks, and outcomes in one place, with reporting that maps to your existing measurement stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Advertiser CTA */}
            <div className="mt-8 md:mt-10 text-center px-4">
              <Link href="/waitlist" className="btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 inline-block">
                Advertise with Kovio
              </Link>
              <p className="mt-4 text-xs md:text-sm text-gray-400 max-w-2xl mx-auto">
                Join the early-access advertiser program to plan and launch your first Kovio campaign.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


