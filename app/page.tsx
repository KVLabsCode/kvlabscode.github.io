import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section - Mobile Optimized */}
        <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass-card border border-purple-200/30 rounded-full mb-6 sm:mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                <span className="text-xs sm:text-sm text-purple-900 font-medium">Now in Early Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-normal text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
                Agentic Ad Infrastructure for Publisher Monetisation
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
                A canonical control plane that manages, operates, and optimizes AdMob, Google Ad Manager, and multiple mediation platforms - automatically.
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
                  className="w-full sm:w-auto px-8 py-4 glass-card border border-white/30 hover:border-purple-200/50 text-gray-900 font-medium rounded-lg transition-colors text-base sm:text-lg text-center"
                >
                  How it works
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What It Does - Mobile Optimized Cards */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 glass-section">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4 sm:mb-6 px-2">
                Agentic control across your entire ad stack
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Task-based agent workflows that orchestrate AdMob, Google Ad Manager, and mediation platforms
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Card 1 */}
              <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 glass-card rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">📸</span>
          </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Snapshots</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Captures current state across AdMob, Google Ad Manager, and mediation platforms
                </p>
              </div>

              {/* Card 2 */}
              <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">🔍</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Diffs</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Identifies configuration gaps and optimization opportunities across the entire stack
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-emerald-50 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">⚡</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Executes</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Agentic execution of changes via API across all platforms with policy validation
                </p>
                </div>

              {/* Card 4 */}
              <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 glass-card rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl">🔄</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">Orchestrates</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Coordinates workflows across multiple platforms as a unified control plane
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
                Connect your multi-platform stack, the agent snapshots and diffs, then executes changes agentically
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
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Connect your multi-platform stack</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    Sign in with Google and grant API access to AdMob, Google Ad Manager, and multiple mediation platforms. The agent connects in seconds - no SDK, no code changes.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    OAuth secure • API-only • Full account ownership • Multi-platform control
                  </p>
                </div>
                <div className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="glass-card rounded-xl overflow-hidden">
                    {/* Header */}
                    <div className="glass border-b border-white/20 px-4 py-3 flex items-center justify-between">
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
                          <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold text-sm">G</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Google Ad Manager</p>
                            <p className="text-xs text-gray-500">Connected via API</p>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center text-white font-bold text-sm">M</div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Mediation Platforms</p>
                            <p className="text-xs text-gray-500">MAX, ironSource, Unity</p>
                          </div>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                </div>
              </div>
                  </div>
                </div>
              </div>

              {/* Step 2 - Agent Chat */}
              <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                <div className="order-2 md:order-1">
                  <div className="glass-strong rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                    {/* Chat Header */}
                    <div className="border-b border-white/20 px-4 sm:px-6 py-3 sm:py-4 glass">
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
                    <div className="h-72 sm:h-80 overflow-y-auto glass-section">
                      {/* User Message 1 */}
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 hover:bg-white/30 transition-colors">
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
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 glass-section hover:bg-white/40 transition-colors">
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
                              Snapshot captured across AdMob, GAM, and mediation. Diff identified 8 ad units with suboptimal floors. Applied floor increase: eCPM <span className="font-semibold text-gray-900">$2.40</span> → <span className="font-semibold text-emerald-600">$2.76</span>.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* User Message 2 */}
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 hover:bg-white/30 transition-colors">
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
                      <div className="px-3 sm:px-4 md:px-6 py-4 sm:py-5 md:py-6 glass-section">
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
                              Diff analysis across platforms revealed waterfall misconfiguration. Agentic execution reordered mediation stack. Fill rate: <span className="font-semibold text-gray-900">87%</span> → <span className="font-semibold text-emerald-600">94%</span>.
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
                    <div className="border-t border-white/20 p-3 sm:p-4 glass">
                      <div className="flex items-end gap-2 sm:gap-3">
                        <div className="flex-1 glass-card rounded-lg sm:rounded-xl focus-within:ring-2 focus-within:ring-purple-200/50 transition-all">
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
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Agent snapshots and diffs</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    The agent captures snapshots of your entire stack, identifies configuration gaps through diffs, and proposes optimizations across AdMob, GAM, and mediation platforms.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Multi-platform snapshots • Configuration diffs • Agentic decision-making
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
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Agentic execution and orchestration</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                    The agent executes changes across your multi-platform stack via API, orchestrating workflows between AdMob, Google Ad Manager, and mediation platforms. Track all changes in real time.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    Agentic execution • Multi-platform orchestration • Policy-validated changes
                  </p>
                </div>
                <div className="glass-strong rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
                  <div className="glass-card rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
                    {/* Dashboard Header */}
                    <div className="glass border-b border-white/20 px-3 sm:px-4 py-2 sm:py-3">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700">Performance Dashboard</p>
                    </div>
                    {/* Metrics Grid */}
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-2 gap-2 sm:gap-3">
                        <div className="glass-card rounded-lg p-3 sm:p-4">
                          <p className="text-xs text-gray-600 mb-1">Revenue (24h)</p>
                          <p className="text-xl sm:text-2xl font-bold text-gray-900">$12,847</p>
                          <p className="text-xs text-emerald-600 font-semibold mt-1">↑ 42%</p>
                        </div>
                        <div className="glass-card rounded-lg p-3 sm:p-4">
                          <p className="text-xs text-gray-600 mb-1">Fill Rate</p>
                          <p className="text-xl sm:text-2xl font-bold text-gray-900">94.2%</p>
                          <p className="text-xs text-blue-600 font-semibold mt-1">↑ 7%</p>
                        </div>
                      </div>
                      <div className="glass-card rounded-lg p-3 sm:p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                            <p className="text-xs font-semibold text-purple-900">Agent Active</p>
                          </div>
                          <span className="text-xs text-purple-600">Just now</span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700">Executed diff-based changes across AdMob and GAM: 3 ad unit floors optimized</p>
                      </div>
                      <div className="glass-card rounded-lg p-3 sm:p-4">
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

        {/* Multi-Network - Mobile Optimized */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 glass-section">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-normal text-gray-900 mb-4 sm:mb-6 px-2">
                One login. Your entire ad stack managed.
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                Canonical control plane across AdMob, Google Ad Manager, and mediation platforms - no code changes, no SDK installation
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 glass-card rounded-full flex items-center justify-center mx-auto mb-3">
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
              Ready for agentic ad infrastructure?
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
