import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-50 border border-purple-100 rounded-full mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm text-purple-900 font-medium">Now in Early Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
                AI that runs your entire ad stack
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
                Agentic AI that manages, operates, and optimizes AdMob, mediation platforms, and ad ops workflows—automatically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                <Link 
                  href="/waitlist" 
                  className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-medium rounded-lg transition-colors text-base sm:text-lg text-center"
                >
                  Get early access →
                </Link>
                <a 
                  href="#how-it-works" 
                  className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-900 font-medium rounded-lg transition-colors text-base sm:text-lg text-center"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What It Does - Mobile Optimized Cards */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4 sm:mb-6 px-2">
                The agent manages your entire ad stack
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                From AdMob configuration to mediation optimization—fully automated
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">👁️</span>
          </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Monitors</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Watches all ad networks, mediation platforms, and performance metrics 24/7
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">⚙️</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Configures</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Manages AdMob settings, mediation waterfalls, and ad ops workflows via API
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-emerald-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">📈</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Optimizes</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Continuously tunes floors, formats, and mediation strategies for maximum revenue
                </p>
                </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-purple-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">🛡️</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Protects</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Validates every change against policies to prevent violations and account issues
                </p>
                </div>
              </div>
            </div>
          </section>

        {/* How It Works - Mobile Optimized */}
        <section id="how-it-works" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4 sm:mb-6 px-2">
                How it works
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Connect your ad stack, instruct the agent, and watch it optimize
              </p>
            </div>

            <div className="space-y-10 sm:space-y-12">
              {/* Step 1 - Connect Stack */}
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="px-2">
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm sm:text-base">1</div>
                    <span className="text-xs sm:text-sm uppercase tracking-wide text-purple-600 font-semibold">Connect</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Connect your ad stack</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    Sign in with Google and grant API access to your AdMob, AppLovin MAX, and mediation platforms. The agent connects in seconds—no SDK, no code changes.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    OAuth secure • API-only • Full account ownership
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-200">
                  <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">Connected Networks</span>
                      <span className="text-xs text-gray-500">API Access</span>
                    </div>
                    {/* List */}
                    <div className="p-4 space-y-3">
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">A</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Google AdMob</p>
                            <p className="text-xs text-gray-500">Connected via OAuth</p>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-sm">M</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">AppLovin MAX</p>
                            <p className="text-xs text-gray-500">Connected via API</p>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-50">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-gray-400 flex items-center justify-center text-white font-bold text-sm">I</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">ironSource</p>
                            <p className="text-xs text-gray-500">Coming soon</p>
                          </div>
                        </div>
                </div>
              </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Agent Chat */}
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                    {/* Chat Header */}
                    <div className="border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 bg-white">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md">
                          <span className="text-lg sm:text-xl">🤖</span>
                        </div>
                        <div>
                          <p className="text-sm sm:text-base font-semibold text-gray-900">Kovio Agent</p>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <p className="text-xs text-gray-500">Active now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="h-72 sm:h-80 overflow-y-auto bg-white">
                      {/* User Message 1 */}
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 hover:bg-gray-50 transition-colors">
                        <div className="flex gap-2 sm:gap-3 md:gap-4">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-semibold text-gray-600">
                            Y
                          </div>
                          <div className="flex-1 pt-0.5 sm:pt-1">
                            <p className="text-sm sm:text-base text-gray-900 leading-relaxed">Increase AdMob floors for banner ads by 15%</p>
                          </div>
                        </div>
                      </div>

                      {/* Agent Response 1 */}
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 bg-gray-50 hover:bg-gray-100 transition-colors">
                        <div className="flex gap-2 sm:gap-3 md:gap-4">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-sm sm:text-base">🤖</span>
                          </div>
                          <div className="flex-1 pt-0.5 sm:pt-1">
                            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-2 sm:mb-3">
                              <span className="inline-flex items-center gap-1 sm:gap-1.5 text-emerald-600 font-medium text-xs sm:text-sm">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Applied
                              </span>
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              Floor increase applied to 8 ad units. Current eCPM adjusted from <span className="font-semibold text-gray-900">$2.40</span> to <span className="font-semibold text-emerald-600">$2.76</span>. Monitoring fill rate impact over the next 4 hours.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* User Message 2 */}
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 hover:bg-gray-50 transition-colors">
                        <div className="flex gap-2 sm:gap-3 md:gap-4">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-xs sm:text-sm font-semibold text-gray-600">
                            Y
                          </div>
                          <div className="flex-1 pt-0.5 sm:pt-1">
                            <p className="text-sm sm:text-base text-gray-900 leading-relaxed">Optimize waterfall for interstitial ads</p>
                          </div>
                        </div>
                      </div>

                      {/* Agent Response 2 */}
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 bg-gray-50">
                        <div className="flex gap-2 sm:gap-3 md:gap-4">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-sm sm:text-base">🤖</span>
                          </div>
                          <div className="flex-1 pt-0.5 sm:pt-1">
                            <p className="text-sm sm:text-base text-gray-900 leading-relaxed mb-2 sm:mb-3">
                              <span className="inline-flex items-center gap-1 sm:gap-1.5 text-emerald-600 font-medium text-xs sm:text-sm">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Optimized
                              </span>
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 sm:mb-3">
                              Reordered mediation waterfall based on 7-day eCPM analysis. Fill rate improved from <span className="font-semibold text-gray-900">87%</span> to <span className="font-semibold text-emerald-600">94%</span>.
                            </p>
                            <div className="flex items-center gap-2 text-xs sm:text-sm">
                              <span className="text-gray-500">Running A/B test:</span>
                              <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">Variant testing</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Input */}
                    <div className="border-t border-gray-200 p-3 sm:p-4 bg-white">
                      <div className="flex items-end gap-2 sm:gap-3">
                        <div className="flex-1 bg-gray-100 rounded-lg sm:rounded-xl border border-gray-200 focus-within:border-purple-300 focus-within:ring-2 focus-within:ring-purple-100 transition-all">
                          <input 
                            type="text" 
                            placeholder="Message Kovio Agent..."
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
                            disabled
                          />
                        </div>
                        <button className="px-3 sm:px-5 py-2 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg sm:rounded-xl font-medium transition-colors shadow-sm">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 px-2">
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm sm:text-base">2</div>
                    <span className="text-xs sm:text-sm uppercase tracking-wide text-purple-600 font-semibold">Instruct</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Talk to the agent</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    Use natural language to instruct the agent. "Increase floors," "optimize waterfall," "test new formats"—the agent understands and executes immediately.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Conversational interface • Instant execution • Full audit trail
                  </p>
                </div>
              </div>

              {/* Step 3 - Dashboard */}
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="px-2">
                  <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-sm sm:text-base">3</div>
                    <span className="text-xs sm:text-sm uppercase tracking-wide text-purple-600 font-semibold">Monitor</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Watch it optimize</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    The agent works 24/7—monitoring performance, running experiments, and optimizing your entire ad stack. Track results in real time from your dashboard.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Autonomous optimization • Real-time analytics • Policy-safe changes
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-emerald-200">
                  <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="bg-gray-50 border-b border-gray-200 px-3 sm:px-4 py-2 sm:py-3">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700">Performance Dashboard</p>
                    </div>
                    {/* Metrics Grid */}
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3 sm:p-4 border border-emerald-200">
                          <p className="text-xs text-gray-600 mb-1">Revenue (24h)</p>
                          <p className="text-xl sm:text-2xl font-bold text-gray-900">$12,847</p>
                          <p className="text-xs text-emerald-600 font-semibold mt-1">↑ 42%</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 border border-gray-200">
                          <p className="text-xs text-gray-600 mb-1">Fill Rate</p>
                          <p className="text-xl sm:text-2xl font-bold text-gray-900">94.2%</p>
                          <p className="text-xs text-blue-600 font-semibold mt-1">↑ 7%</p>
                        </div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 sm:p-4 border border-purple-200">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            <p className="text-xs font-semibold text-purple-900">Agent Active</p>
                          </div>
                          <span className="text-xs text-purple-600">Just now</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700">Adjusted 3 ad unit floors based on eCPM trends</p>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-3 sm:p-4 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-600">Policy Status</p>
                            <p className="text-base sm:text-lg font-bold text-emerald-700">All Clear ✓</p>
                          </div>
                          <span className="text-xl sm:text-2xl">🛡️</span>
                        </div>
                      </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Multi-Network - Mobile Optimized Scrolling Logos */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4 sm:mb-6 px-2">
                One login. Your entire ad stack managed.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                The agent controls all networks via API—no code changes, no SDK installation
              </p>
            </div>

            {/* Scrolling Logo Strip */}
            <div className="relative overflow-hidden py-8 sm:py-12">
              {/* Gradient Fade Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
              
              {/* Scrolling Container */}
              <div className="flex animate-scroll">
                {/* First Set */}
                <div className="flex items-center gap-8 sm:gap-12 md:gap-16 px-6 shrink-0">
                  {/* Google AdMob */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/admob-logo.svg" 
                        alt="Google AdMob" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* AppLovin MAX */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/applovin-logo.svg" 
                        alt="AppLovin MAX" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* ironSource */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/ironsource-logo.svg" 
                        alt="ironSource" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* Unity Ads */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/unity-logo.svg" 
                        alt="Unity Ads" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* Chartboost */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/chartboost-logo.svg" 
                        alt="Chartboost" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* Vungle */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/vungle-logo.svg" 
                        alt="Vungle" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Duplicate Set for Seamless Loop */}
                <div className="flex items-center gap-8 sm:gap-12 md:gap-16 px-6 shrink-0">
                  {/* Google AdMob */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/admob-logo.svg" 
                        alt="Google AdMob" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* AppLovin MAX */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/applovin-logo.svg" 
                        alt="AppLovin MAX" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* ironSource */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/ironsource-logo.svg" 
                        alt="ironSource" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* Unity Ads */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/unity-logo.svg" 
                        alt="Unity Ads" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* Chartboost */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/chartboost-logo.svg" 
                        alt="Chartboost" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                  
                  {/* Vungle */}
                  <div className="px-6 sm:px-8 py-4 sm:py-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all min-w-[140px] sm:min-w-[180px]">
                    <div className="h-8 sm:h-10 flex items-center justify-center">
                      <img 
                        src="/logos/vungle-logo.svg" 
                        alt="Vungle" 
                        className="h-full w-auto object-contain max-w-[150px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">No lock-in</h4>
                <p className="text-xs sm:text-sm text-gray-600">You own all accounts. Revoke access anytime.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Instant connection</h4>
                <p className="text-xs sm:text-sm text-gray-600">Link networks in seconds via OAuth.</p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Easy expansion</h4>
                <p className="text-xs sm:text-sm text-gray-600">Add new networks without code changes.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Final CTA - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-gray-900 mb-6 sm:mb-8 px-2">
              Ready to let AI run your ad stack?
            </h2>
            <Link href="/waitlist" className="inline-block w-full sm:w-auto px-8 sm:px-10 py-4 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-medium rounded-lg transition-colors text-base sm:text-lg">
              Get early access →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
