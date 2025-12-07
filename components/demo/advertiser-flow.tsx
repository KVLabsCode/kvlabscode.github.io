'use client';

import { useState, useEffect, useRef } from 'react';

// Mirrors the animated publisher flow pattern, but with advertiser journey steps
export default function AdvertiserFlow() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Detect mobile to keep experience static on small screens
  useEffect(() => {
    const updateIsMobile = () => {
      if (typeof window === 'undefined') return;
      setIsMobile(window.innerWidth < 768);
    };

    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  // Scroll-triggered start
  useEffect(() => {
    // On mobile, keep flow static and show final state
    if (isMobile) {
      setHasStarted(true);
      setIsAnimating(false);
      setStep(3);
      return;
    }

    const el = containerRef.current;
    if (!el || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setStep(0);
            setIsAnimating(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [hasStarted, isMobile]);

  // Timed progression through steps (no looping)
  useEffect(() => {
    if (isMobile) return;
    if (!isAnimating) return;

    const timings = [1200, 1500, 1200, 2000];
    const clampedStep = Math.min(step, timings.length - 1);

    const timer = setTimeout(() => {
      // Loop through steps on desktop/tablet
      setStep((prev) => (prev + 1) % timings.length);
    }, timings[clampedStep]);

    return () => clearTimeout(timer);
  }, [step, isAnimating, isMobile]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Flow Container */}
      <div className="glass-effect rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-12 relative overflow-hidden min-h-[420px] md:min-h-[460px]">
        {/* Background glow effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-4 md:space-y-6">
          {/* Step 1: Enter Landing Page URL */}
          <div
            className={`transition-all duration-700 ${
              step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-4 mb-3 md:mb-4">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-sm sm:text-base font-semibold shadow-lg shadow-primary-500/40">
                1
              </div>
              <div className="flex-1 min-w-0">
                <div className="glass-effect rounded-xl sm:rounded-2xl rounded-tl-none p-3 sm:p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      Enter Landing Page
                    </span>
                    <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-gray-400">
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary-400"></span>
                      <span>Step 1</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-[11px] sm:text-xs text-gray-300 mb-1 sm:mb-2">Your landing page URL</p>
                    <div className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-white/5 border border-white/20">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[11px] sm:text-xs text-gray-200 truncate">stylevault.com</span>
                    </div>
                    <button className="w-full px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white text-[11px] sm:text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 sm:gap-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>Analyze Website</span>
                    </button>
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1.5 sm:mt-2 ml-1">
                  Kovio extracts brand info, keywords, and messaging from your site.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: AI Analyzes & Extracts Info */}
          <div
            className={`transition-all duration-700 ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-4 mb-3 md:mb-4 ml-3 sm:ml-6 md:ml-12">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white text-sm sm:text-base font-semibold shadow-lg shadow-accent-500/40">
                2
              </div>
              <div className="flex-1 min-w-0">
                <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      AI Analyzes Website
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-accent-400 animate-pulse"></div>
                      <span className="text-[9px] sm:text-[10px] text-accent-300 font-medium">Analyzing...</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px]">
                      <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10">
                        <p className="text-gray-400 mb-0.5 sm:mb-1">Campaign Title</p>
                        <p className="text-white font-medium text-[10px] sm:text-xs break-words">Trendy Styles at StyleVault</p>
                      </div>
                      <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10">
                        <p className="text-gray-400 mb-0.5 sm:mb-1">Keywords</p>
                        <div className="flex flex-wrap gap-0.5 sm:gap-1">
                          <span className="px-1 sm:px-1.5 py-0.5 rounded-full bg-primary-500/20 text-primary-200 text-[8px] sm:text-[9px]">fashion</span>
                          <span className="px-1 sm:px-1.5 py-0.5 rounded-full bg-primary-500/20 text-primary-200 text-[8px] sm:text-[9px]">affordable</span>
                        </div>
                      </div>
                    </div>
                    <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10">
                      <p className="text-gray-400 text-[9px] sm:text-[10px] mb-0.5 sm:mb-1">Ad Message</p>
                      <p className="text-white text-[10px] sm:text-xs break-words">Discover the latest fashion trends and unbeatable prices!</p>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1.5 sm:mt-2 ml-1">
                  Kovio extracts campaign details automatically from your landing page.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Set Bid & Budget */}
          <div
            className={`transition-all duration-700 ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-4 mb-3 md:mb-4 ml-4 sm:ml-8 md:ml-16">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white text-sm sm:text-base font-semibold shadow-lg shadow-emerald-500/40">
                3
              </div>
              <div className="flex-1 min-w-0">
                <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      Set Bid &amp; Budget
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-emerald-300 font-medium">Step 3</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="glass-effect rounded-lg p-2 sm:p-3 border border-white/10">
                      <p className="text-[9px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">CPC Bid</p>
                      <div className="flex items-baseline gap-0.5 sm:gap-1">
                        <span className="text-base sm:text-lg font-bold text-white">$10</span>
                        <span className="text-[9px] sm:text-[10px] text-gray-400">per click</span>
                      </div>
                    </div>
                    <div className="glass-effect rounded-lg p-2 sm:p-3 border border-white/10">
                      <p className="text-[9px] sm:text-[10px] text-gray-400 mb-0.5 sm:mb-1">Total Budget</p>
                      <div className="flex items-baseline gap-0.5 sm:gap-1">
                        <span className="text-base sm:text-lg font-bold text-emerald-300">$10k</span>
                        <span className="text-[9px] sm:text-[10px] text-gray-400">campaign</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1.5 sm:mt-2 ml-1">
                  Set how much you'll pay per click and your total campaign spend.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Campaign Goes Live */}
          <div
            className={`transition-all duration-700 ${
              step >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-4 mb-2 ml-5 sm:ml-10 md:ml-20">
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-sm sm:text-base font-semibold shadow-lg shadow-cyan-500/40">
                4
              </div>
              <div className="flex-1 min-w-0">
                <div className="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[9px] sm:text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      Campaign Live
                    </span>
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-[9px] sm:text-[10px] text-emerald-300 font-medium">Active</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    {/* ChatGPT-like chatbot preview */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-xl sm:rounded-2xl opacity-60 blur transition duration-500 animate-gradient-x"></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-primary-500/40">
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <span className="px-1.5 sm:px-2 py-0.5 bg-primary-500/20 border border-primary-500/40 rounded-full text-[8px] sm:text-[9px] font-semibold text-primary-200">
                            LIVE AD IN CHAT
                          </span>
                          <div className="flex items-center gap-0.5 sm:gap-1 text-[8px] sm:text-[9px]">
                            <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                            <span className="text-emerald-300">Serving</span>
                          </div>
                        </div>

                        {/* Chatbot interface */}
                        <div className="space-y-2 sm:space-y-3">
                          {/* User message */}
                          <div className="flex items-start gap-1.5 sm:gap-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0 bg-gray-800/50 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                              <p className="text-[10px] sm:text-xs text-gray-200 break-words">Where can I find affordable summer dresses?</p>
                            </div>
                          </div>

                          {/* AI response with ad */}
                          <div className="flex items-start gap-1.5 sm:gap-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                              <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
                              <div className="bg-gray-800/30 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                                <p className="text-[10px] sm:text-xs text-gray-300 break-words">Here are some great options for affordable summer dresses:</p>
                              </div>

                              {/* Sponsored ad card */}
                              <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/40 rounded-lg p-2 sm:p-3 space-y-1.5 sm:space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="px-1 sm:px-1.5 py-0.5 bg-primary-500/30 border border-primary-500/50 rounded text-[7px] sm:text-[8px] font-semibold text-primary-200">
                                    SPONSORED
                                  </span>
                                  <span className="text-[7px] sm:text-[8px] text-gray-400">Ad</span>
                                </div>
                                <div>
                                  <p className="text-[10px] sm:text-xs text-white font-semibold mb-0.5 sm:mb-1">StyleVault</p>
                                  <p className="text-[9px] sm:text-[10px] text-gray-300 mb-1.5 sm:mb-2 break-words">Discover the latest fashion trends and unbeatable prices!</p>
                                  <div className="flex items-center gap-1 sm:gap-2">
                                    <span className="text-[8px] sm:text-[9px] text-primary-300 font-medium truncate">Visit stylevault.com</span>
                                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary-300 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                      <path d="M9 5l7 7-7 7" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick metrics under chat */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px]">
                      <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10 text-center">
                        <p className="text-gray-400 mb-0.5 text-[8px] sm:text-[9px]">Impressions</p>
                        <p className="text-white font-semibold text-[10px] sm:text-xs">1.2k</p>
                      </div>
                      <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10 text-center">
                        <p className="text-gray-400 mb-0.5 text-[8px] sm:text-[9px]">Clicks</p>
                        <p className="text-emerald-300 font-semibold text-[10px] sm:text-xs">38</p>
                      </div>
                      <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10 text-center">
                        <p className="text-gray-400 mb-0.5 text-[8px] sm:text-[9px]">CTR</p>
                        <p className="text-primary-300 font-semibold text-[10px] sm:text-xs">3.2%</p>
                      </div>
                    </div>

                    {/* Advertiser dashboard snapshot */}
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500/60 via-accent-500/60 to-emerald-500/60 rounded-xl sm:rounded-2xl opacity-50 blur transition duration-500 group-hover:opacity-80"></div>
                      <div className="relative bg-gradient-to-br from-gray-950 to-gray-900 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-primary-500/40 space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <div className="space-y-0.5 min-w-0 flex-1">
                            <p className="text-[9px] sm:text-[11px] text-gray-400 uppercase tracking-wide">Advertiser Dashboard</p>
                            <p className="text-[10px] sm:text-xs font-semibold text-white truncate">StyleVault – Summer Dresses</p>
                          </div>
                          <span className="px-1.5 sm:px-2 py-0.5 bg-emerald-500/15 border border-emerald-500/40 rounded-full text-[8px] sm:text-[9px] font-semibold text-emerald-300 flex items-center gap-0.5 sm:gap-1 flex-shrink-0">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            Live
                          </span>
                        </div>

                        {/* KPI cards */}
                        <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-[9px] sm:text-[10px]">
                          <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10">
                            <p className="text-gray-400 mb-0.5 text-[8px] sm:text-[9px] leading-tight">Total Impressions</p>
                            <p className="text-white font-semibold text-[10px] sm:text-xs">128k</p>
                            <p className="text-[7px] sm:text-[9px] text-emerald-300">+24%</p>
                          </div>
                          <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10">
                            <p className="text-gray-400 mb-0.5 text-[8px] sm:text-[9px] leading-tight">Conversions</p>
                            <p className="text-emerald-300 font-semibold text-[10px] sm:text-xs">3.2k</p>
                            <p className="text-[7px] sm:text-[9px] text-emerald-300">3.3%</p>
                          </div>
                          <div className="glass-effect rounded-lg p-1.5 sm:p-2 border border-white/10">
                            <p className="text-gray-400 mb-0.5 text-[8px] sm:text-[9px] leading-tight">ROAS</p>
                            <p className="text-primary-200 font-semibold text-[10px] sm:text-xs">3.1x</p>
                            <p className="text-[7px] sm:text-[9px] text-gray-400">social</p>
                          </div>
                        </div>

                        {/* Trend + top queries */}
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 sm:gap-3 items-stretch">
                          {/* Trend sparkline */}
                          <div className="sm:col-span-3 glass-effect rounded-lg p-2 border border-primary-500/30 flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-1">
                              <p className="text-[9px] sm:text-[10px] text-gray-300">Conversions over time</p>
                              <span className="text-[8px] sm:text-[9px] text-emerald-300 font-medium">+41%</span>
                            </div>
                            <div className="mt-1 h-8 sm:h-10 w-full rounded-md bg-gradient-to-r from-primary-500/20 via-accent-500/30 to-emerald-500/20 relative overflow-hidden">
                              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-500/60 via-accent-500/60 to-transparent" />
                              <div className="absolute inset-1 flex items-end justify-between gap-0.5 sm:gap-1">
                                <div className="w-full h-[35%] rounded-t-full bg-primary-400/80"></div>
                                <div className="w-full h-[55%] rounded-t-full bg-primary-400/80"></div>
                                <div className="w-full h-[45%] rounded-t-full bg-primary-400/80"></div>
                                <div className="w-full h-[65%] rounded-t-full bg-primary-400/80"></div>
                                <div className="w-full h-[80%] rounded-t-full bg-primary-400/80"></div>
                                <div className="w-full h-[60%] rounded-t-full bg-primary-400/80"></div>
                                <div className="w-full h-[90%] rounded-t-full bg-primary-400/80"></div>
                              </div>
                            </div>
                          </div>

                          {/* Top intents */}
                          <div className="sm:col-span-2 glass-effect rounded-lg p-2 border border-white/10 flex flex-col">
                            <p className="text-[9px] sm:text-[10px] text-gray-300 mb-1">Top live queries</p>
                            <div className="space-y-1 sm:space-y-1.5 text-[8px] sm:text-[9px] text-gray-200">
                              <div className="flex items-center justify-between gap-2">
                                <span className="truncate">“affordable summer dresses”</span>
                                <span className="text-primary-300 font-medium">38%</span>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="truncate">“vacation outfit ideas”</span>
                                <span className="text-primary-300 font-medium">24%</span>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <span className="truncate">“casual date night looks”</span>
                                <span className="text-primary-300 font-medium">17%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 mt-1.5 sm:mt-2 ml-1">
                  Ads go live instantly and serve across AI assistants with real-time reporting.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Play/Pause & Step Controls (desktop/tablet only) */}
        <div className="mt-8 hidden md:flex items-center justify-center gap-4">
          <button
            onClick={() => setIsAnimating(!isAnimating)}
            className="px-4 py-2 glass-effect hover:bg-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            {isAnimating ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play
              </>
            )}
          </button>

          <div className="flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => {
                  setStep(i);
                  setIsAnimating(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  step === i ? 'bg-primary-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Vertical flow indicator */}
      <div className="absolute left-6 top-24 bottom-24 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50 hidden md:block"></div>
    </div>
  );
}


