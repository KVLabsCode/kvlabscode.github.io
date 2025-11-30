'use client';

import { useState, useEffect } from 'react';

export default function AnimatedDemo() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const timings = [1200, 1500, 1200, 2000]; // Faster timing for each step
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
    }, timings[step]);

    return () => clearTimeout(timer);
  }, [step, isAnimating]);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Demo Container */}
      <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 space-y-6">
          {/* Step 1: User Query */}
          <div
            className={`transition-all duration-700 ${
              step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                U
              </div>
              <div className="flex-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4 backdrop-blur-sm">
                  <p className="text-gray-200 text-lg">
                    What are the best running shoes for marathon training?
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-2">User Query</p>
              </div>
            </div>
          </div>

          {/* Step 2: Processing Indicator */}
          <div
            className={`transition-all duration-700 flex items-center gap-3 ml-14 ${
              step >= 1 && step < 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
            <span className="text-sm text-gray-400">AI is thinking...</span>
          </div>

          {/* Step 3: AI Response */}
          <div
            className={`transition-all duration-700 ${
              step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold shadow-lg shadow-purple-500/30">
                AI
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl rounded-tl-none p-5 backdrop-blur-sm">
                  <p className="text-gray-200 leading-relaxed mb-4">
                    For marathon training, you'll want shoes with excellent cushioning and support. 
                    Here are the top recommendations:
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white">Nike ZoomX Vaporfly Next%</strong> - Elite racing shoe with carbon plate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white">ASICS Gel-Nimbus 25</strong> - Maximum cushioning for long distances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span><strong className="text-white">Brooks Ghost 15</strong> - Balanced ride, great for daily training</span>
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-2 ml-2">AI Response</p>
              </div>
            </div>
          </div>

          {/* Step 4: Sponsored Ad */}
          <div
            className={`transition-all duration-700 ml-14 ${
              step >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            <div className="relative group">
              {/* Animated border glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-gradient-x"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs font-semibold text-primary-300">
                      SPONSORED
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                  Get 20% Off Running Shoes at FleetFeet
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Expert fitting, premium brands, and personalized gait analysis. Find your perfect marathon training shoe today.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">FleetFeet</div>
                      <div className="text-xs text-gray-500">fleetfeet.com</div>
                    </div>
                  </div>
                  
                  <button className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 group-hover:scale-105">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 ml-2">Contextual Sponsored Ad</p>
          </div>
        </div>

        {/* Play/Pause Control */}
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

      {/* Flow Arrows (subtle indicators) */}
      <div className="absolute left-6 top-24 bottom-24 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50 hidden md:block"></div>
    </div>
  );
}

