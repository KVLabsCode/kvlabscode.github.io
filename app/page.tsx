import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import CaseStudyCard from '@/components/cards/case-study-card';
import CarouselDemo from '@/components/demo/carousel-demo';
import FAQ from '@/components/sections/faq';
import { caseStudies } from '@/lib/case-studies';
import Link from 'next/link';

export default function Home() {
  const featuredCaseStudies = caseStudies.slice(0, 2);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700/25 via-slate-900/40 to-accent-700/25 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Hero Copy */}
              <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
                  Monetize Your
                  <br />
                  <span className="gradient-text">AI Solutions</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-slide-up max-w-xl">
                  Seamless, contextual ads that turn AI conversations into revenue without breaking the user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                  <Link href="/waitlist" className="btn-primary text-lg px-8 py-4">
                    Get Started
                  </Link>
                  <Link href="/docs" className="btn-secondary text-lg px-8 py-4">
                    View Docs
                  </Link>
                </div>
              </div>

              {/* Chat Monetization Preview */}
              <div className="hidden lg:block">
                <div className="relative max-w-md ml-auto animate-float">
                  {/* Glow */}
                  <div className="absolute -inset-10 bg-gradient-to-br from-primary-500/20 via-accent-500/15 to-emerald-400/10 blur-3xl"></div>

                  <div className="relative space-y-4">
                    {/* User message */}
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white/10 border border-white/15 px-4 py-3 shadow-lg">
                        <p className="text-sm text-gray-100">
                          “I need a simple way to track my startup’s runway and burn rate.”
                        </p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-slate-900/90 border border-primary-500/40 px-4 py-3 shadow-lg">
                        <p className="text-sm text-gray-100 mb-1">
                          You can use a lightweight finance dashboard that auto-updates from your bank and payroll.
                        </p>
                        <p className="text-xs text-primary-300">Powered by your AI assistant</p>
                      </div>
                    </div>

                    {/* Sponsored Ad inside chat */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl bg-gradient-to-br from-emerald-500/15 via-primary-500/10 to-accent-500/15 border border-emerald-400/40 px-4 py-3 shadow-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                            SPONSORED
                          </span>
                          <span className="text-xs text-gray-400">Matched to this conversation in real time</span>
                        </div>
                        <p className="text-sm text-gray-100 font-medium mb-1">
                          Try FlowFinance – automated runway tracking for SaaS startups.
                        </p>
                        <p className="text-xs text-gray-300 mb-3">
                          Connect Stripe, bank accounts, and payroll in under 5 minutes.
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-400">flowfinance.ai</p>
                            <p className="text-xs text-emerald-300 font-semibold">+42% higher LTV from AdInfra traffic</p>
                          </div>
                          <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-400 text-gray-900 transition-colors">
                            Learn more
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Small metrics strip */}
                    <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span>94% session retention</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary-400"></span>
                        <span>+3.2x click‑through on sponsored answers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Demo Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Multiple ad formats that seamlessly integrate into AI conversations
              </p>
            </div>

            <CarouselDemo />
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
                Trusted by Top AI Apps
              </p>
              
              {/* Partner Logos Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 mb-16">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-full h-16 glass-effect rounded-lg flex items-center justify-center hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">5x</div>
                <div className="text-gray-400 font-medium">Higher Payouts</div>
              </div>
              <div className="text-center glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-gray-400 font-medium">Premium Ads</div>
              </div>
              <div className="text-center glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">40%</div>
                <div className="text-gray-400 font-medium">Revenue Increase</div>
              </div>
              <div className="text-center glass-effect rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">99.9%</div>
                <div className="text-gray-400 font-medium">User Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Maximize Your AI App's Revenue
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                The only scalable monetization solution built for AI-first applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Scale Up Revenue */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Scale Up Revenue</h3>
                <p className="text-gray-300 leading-relaxed">
                  Earn for every click while maintaining full control over your user experience. Go live in just 10 minutes.
                </p>
              </div>

              {/* Max LLM Performance */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Max LLM Performance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ads served in milliseconds with zero latency impact. Your app stays lightning fast and responsive.
                </p>
              </div>

              {/* Seamless UX */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Seamless UX</h3>
                <p className="text-gray-300 leading-relaxed">
                  Contextual ads that feel native to your app. Users get helpful information, not interruptions.
                </p>
              </div>

              {/* Instant SDK Integration */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Instant Integration</h3>
                <p className="text-gray-300 leading-relaxed">
                  Simple SDK setup with just a few lines of code. Available on all major platforms and frameworks.
                </p>
              </div>

              {/* Contextual & Native */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Contextual & Native</h3>
                <p className="text-gray-300 leading-relaxed">
                  AI-powered matching ensures ads are always relevant to the conversation and user intent.
                </p>
              </div>

              {/* Premium Advertisers */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Premium Network</h3>
                <p className="text-gray-300 leading-relaxed">
                  Access to top-tier brands and advertisers. 100% premium ads with higher payouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Integrate in Minutes
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Start generating revenue with our intuitive SDK
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-8 md:p-12 overflow-hidden relative">
                {/* Glow effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary-500/20 blur-3xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-4">Install SDK</span>
                  </div>

                  <div className="bg-black/50 rounded-xl p-6 border border-white/10 mb-6">
                    <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                      <code className="block">
                        <span className="text-pink-400">npm install</span>
                        <span className="text-gray-300"> @adinfra/sdk</span>
                      </code>
                    </pre>
                  </div>

                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-400 text-sm ml-4">Add to your app</span>
                  </div>

                  <div className="bg-black/50 rounded-xl p-6 border border-white/10">
                    <pre className="text-sm font-mono leading-relaxed overflow-x-auto">
                      <code className="block">
                        <span className="text-purple-400">import</span>
                        <span className="text-gray-300"> {'{ AdInfra }'} </span>
                        <span className="text-purple-400">from</span>
                        <span className="text-green-400"> '@adinfra/sdk'</span>
                        <span className="text-gray-500">;</span>
                        <br />
                        <br />
                        <span className="text-gray-500">// Initialize with your publisher ID</span>
                        <br />
                        <span className="text-cyan-400">AdInfra</span>
                        <span className="text-gray-300">.</span>
                        <span className="text-yellow-400">init</span>
                        <span className="text-gray-300">(</span>
                        <span className="text-green-400">'your-publisher-id'</span>
                        <span className="text-gray-300">);</span>
                        <br />
                        <br />
                        <span className="text-gray-500">// Show contextual ad in your AI response</span>
                        <br />
                        <span className="text-purple-400">const</span>
                        <span className="text-gray-300"> ad = </span>
                        <span className="text-purple-400">await</span>
                        <span className="text-gray-300"> </span>
                        <span className="text-cyan-400">AdInfra</span>
                        <span className="text-gray-300">.</span>
                        <span className="text-yellow-400">getAd</span>
                        <span className="text-gray-300">({'{'}</span>
                        <br />
                        <span className="ml-4 text-gray-300">context</span>
                        <span className="text-gray-500">:</span>
                        <span className="text-gray-300"> userQuery</span>
                        <span className="text-gray-500">,</span>
                        <br />
                        <span className="ml-4 text-gray-300">format</span>
                        <span className="text-gray-500">:</span>
                        <span className="text-green-400"> 'inline'</span>
                        <br />
                        <span className="text-gray-300">{'}'});</span>
                      </code>
                    </pre>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/docs" className="btn-primary text-center">
                      View Full Documentation
                    </Link>
                    <Link href="/waitlist" className="btn-secondary text-center">
                      Get API Key
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / Beyond Expectations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Beyond Expectations
              </h2>
              <p className="text-xl text-gray-400">
                AdInfra is powering the next generation of AI apps to build scalable, sustainable businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">Sarah Chen</div>
                    <div className="text-sm text-gray-400">CEO @ AI Assistant Co</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "AdInfra helped us develop a new revenue stream that actually enhances user experience. 
                  The contextual ads are so relevant that users appreciate them. We've seen a 150% increase 
                  in revenue without any drop in retention."
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-purple-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">Marcus Rodriguez</div>
                    <div className="text-sm text-gray-400">CTO @ ChatFlow</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "The integration was incredibly smooth - literally 10 minutes from SDK install to first ad. 
                  The contextual matching is impressive, and our users haven't complained once. It just works."
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">Emily Watson</div>
                    <div className="text-sm text-gray-400">Head of Product @ AI Search</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "We were skeptical about adding ads to our AI assistant, but AdInfra changed our minds. 
                  The ads are genuinely helpful to users and our monetization has scaled beautifully alongside 
                  our user growth."
                </p>
              </div>

              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="font-semibold text-white mb-1">David Park</div>
                    <div className="text-sm text-gray-400">Founder @ SmartQuery</div>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "By far our most engaged revenue source. AdInfra delivers high-quality, contextual ads that 
                  convert quickly. It requires almost no work from us to optimize, and the dashboard makes 
                  tracking performance effortless."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section id="proven-results" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Case Studies
              </h2>
              <p className="text-xl text-gray-400">
                See how leading AI apps scale with AdInfra
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4 inline-block">
                View All Case Studies
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              {/* Background effects */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500/30 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Start Earning Now
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join leading AI apps monetizing conversations. Request access to start serving ads and go live in a day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/waitlist" className="btn-primary text-lg px-8 py-4 inline-block">
                    Request Access
                  </Link>
                  <Link href="/docs" className="btn-secondary text-lg px-8 py-4 inline-block">
                    Read Documentation
                  </Link>
                </div>
                
                <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>10-minute setup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free to start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
