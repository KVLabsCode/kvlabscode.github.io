'use client';

import { useState, useEffect, useRef } from 'react';

// Mirrors the animated publisher flow pattern, but with advertiser journey steps
export default function AdvertiserFlow() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Scroll-triggered start
  useEffect(() => {
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
  }, [hasStarted]);

  // Timed progression through steps (no looping)
  useEffect(() => {
    if (!isAnimating) return;

    const timings = [1200, 1500, 1200, 2000];
    const clampedStep = Math.min(step, timings.length - 1);

    const timer = setTimeout(() => {
      setStep((prev) => {
        if (prev >= timings.length - 1) {
          setIsAnimating(false);
          return timings.length - 1;
        }
        return prev + 1;
      });
    }, timings[clampedStep]);

    return () => clearTimeout(timer);
  }, [step, isAnimating]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Flow Container */}
      <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[380px] md:min-h-[460px]">
        {/* Background glow effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-6">
          {/* Step 1: Create Campaign */}
          <div
            className={`transition-all duration-700 ${
              step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-primary-500/40">
                1
              </div>
              <div className="flex-1">
                <div className="glass-effect rounded-2xl rounded-tl-none p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                        Create Campaign
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                      <span>Brief</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-[11px] text-gray-200">
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-300">Budget &amp; pacing</p>
                      <div className="flex items-center justify-between px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                        <span>$50k</span>
                        <span className="text-[10px] text-gray-400">Monthly</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-medium text-gray-300">Context</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-2 py-1 rounded-full bg-primary-500/10 border border-primary-500/40 text-[10px] text-primary-200">
                          Finance
                        </span>
                        <span className="px-2 py-1 rounded-full bg-primary-500/10 border border-primary-500/40 text-[10px] text-primary-200">
                          SaaS tools
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 ml-1">
                  Advertiser sets budget, formats, and contextual categories.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: AI Context & Intent Matching */}
          <div
            className={`transition-all duration-700 ${
              step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-4 ml-6 md:ml-12">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-accent-500/40">
                2
              </div>
              <div className="flex-1">
                <div className="glass-effect rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      AI Context &amp; Intent Matching
                    </span>
                    <span className="text-[10px] text-primary-300 font-medium">Real time</span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 mb-2">
                        <p className="text-xs text-gray-200">
                          “I need a tool to help manage my startup&apos;s runway and burn.”
                        </p>
                      </div>
                      <p className="text-[10px] text-gray-500 ml-1">User query</p>
                    </div>
                    <div className="hidden md:block w-12 h-px bg-gradient-to-r from-primary-500/40 via-accent-500/60 to-emerald-400/60"></div>
                    <div className="flex-1">
                      <div className="rounded-2xl p-3 border border-primary-500/40 bg-gradient-to-br from-primary-500/15 via-accent-500/10 to-emerald-500/15">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 rounded-full bg-primary-500/20 border border-primary-500/50 text-[9px] font-semibold text-primary-200">
                            MATCHED AD
                          </span>
                          <span className="text-[10px] text-gray-300">Runway dashboard SaaS</span>
                        </div>
                        <p className="text-xs text-gray-200">
                          Kovio maps the brief to live queries using AI-based context and intent.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Real-Time Delivery */}
          <div
            className={`transition-all duration-700 ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-4 ml-8 md:ml-16">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center text-white font-semibold shadow-lg shadow-emerald-500/40">
                3
              </div>
              <div className="flex-1">
                <div className="glass-effect rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      Real-Time Delivery
                    </span>
                    <span className="text-[10px] text-emerald-300 font-medium">Milliseconds</span>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3">
                      <p className="text-xs text-gray-200">
                        The AI assistant responds and Kovio injects the sponsored answer inline.
                      </p>
                    </div>

                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-60 group-hover:opacity-100 blur transition duration-500 animate-gradient-x"></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-4 border border-primary-500/40">
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-2 py-0.5 bg-primary-500/20 border border-primary-500/40 rounded-full text-[9px] font-semibold text-primary-200">
                            SPONSORED ANSWER
                          </span>
                          <span className="text-[10px] text-gray-400">Brand-safe AI app</span>
                        </div>
                        <p className="text-xs text-gray-200 mb-2">
                          FlowFinance – runway tracking for SaaS teams, matched to this conversation.
                        </p>
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span>Inline in the AI response</span>
                          <span className="text-emerald-300 font-semibold">+3.2x CTR</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4: Measure & Optimise */}
          <div
            className={`transition-all duration-700 ${
              step >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <div className="flex items-start gap-4 mb-2 ml-10 md:ml-20">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold shadow-lg shadow-cyan-500/40">
                4
              </div>
              <div className="flex-1">
                <div className="glass-effect rounded-2xl p-4 border border-white/10 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-gray-200 uppercase tracking-wide">
                      Measure &amp; Optimise
                    </span>
                    <span className="text-[10px] text-cyan-300 font-medium">Dashboard</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3 text-[10px] text-gray-200">
                    <div className="glass-effect rounded-lg p-2 border border-white/10">
                      <p className="text-[9px] text-gray-400 mb-1">Impressions</p>
                      <p className="text-sm font-semibold text-white">1.2M</p>
                    </div>
                    <div className="glass-effect rounded-lg p-2 border border-white/10">
                      <p className="text-[9px] text-gray-400 mb-1">CTR</p>
                      <p className="text-sm font-semibold text-emerald-300">3.2%</p>
                    </div>
                    <div className="glass-effect rounded-lg p-2 border border-white/10">
                      <p className="text-[9px] text-gray-400 mb-1">Conversions</p>
                      <p className="text-sm font-semibold text-primary-300">+48%</p>
                    </div>
                  </div>

                  <div className="h-16 mt-1 flex items-end gap-1">
                    {[40, 60, 35, 70, 55].map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-t-full bg-gradient-to-t from-primary-500/20 via-accent-500/40 to-emerald-400/70"
                        style={{ height: `${height}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-2 ml-1">
                  Advertisers see performance by app, query, and creative.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Play/Pause & Step Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
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


