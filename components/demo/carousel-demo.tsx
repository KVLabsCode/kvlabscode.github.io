'use client';

import { useState, useEffect } from 'react';

type AdFormat = 'inline' | 'generation' | 'followup' | 'card';

// Order here controls carousel order; put music generation second
const formats = [
  { id: 'inline' as AdFormat, name: 'Inline Ads', description: 'Rich contextual ads within responses' },
  { id: 'generation' as AdFormat, name: 'Generation Ads', description: 'Ads during AI generation (non-chat)' },
  { id: 'followup' as AdFormat, name: 'Follow-up Questions', description: 'Sponsored question suggestions' },
  { id: 'card' as AdFormat, name: 'Card Format', description: 'Lead generation cards' },
];

export default function CarouselDemo() {
  const [activeFormat, setActiveFormat] = useState<AdFormat>('inline');
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  // Animation steps within each format
  useEffect(() => {
    if (!isAnimating) return;

    // Special timing/flow for Generation format
    if (activeFormat === 'generation') {
      // If we're not currently generating, keep us in the initial state
      if (!isGenerating) {
        if (step !== 0) setStep(0);
        return;
      }

      // step 0 -> 1: brief generation state
      // step 1 -> 2: show ad prominently for ~5s, then reveal songs
      const genTimings = [800, 5000, 0, 0];
      const delay = genTimings[step] ?? 0;

      // Once we reach step 2 (songs visible), stop auto-advancing
      if (step >= 2 || delay === 0) return;

      const timer = setTimeout(() => {
        setStep((prev) => {
          if (prev >= 2) return prev;
          return prev + 1;
        });
      }, delay);

      return () => clearTimeout(timer);
    }

    // Default timing for other formats
    const timings = [1500, 1800, 1500, 2500];
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 4);
    }, timings[step]);

    return () => clearTimeout(timer);
  }, [step, isAnimating, activeFormat, isGenerating]);

  // Auto-play carousel (switch formats)
  useEffect(() => {
    if (!isAutoPlay) return;

    const carouselTimer = setTimeout(() => {
      const currentIndex = formats.findIndex(f => f.id === activeFormat);
      const nextIndex = (currentIndex + 1) % formats.length;
      setActiveFormat(formats[nextIndex].id);
      setStep(0);
    }, 14000); // Switch format every 14 seconds (longer for 4 formats)

    return () => clearTimeout(carouselTimer);
  }, [activeFormat, isAutoPlay]);

  const goToFormat = (format: AdFormat) => {
    setActiveFormat(format);
    setStep(0);
    setIsGenerating(false);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 15000); // Resume auto-play after 15s
  };

  const handleGenerateSong = () => {
    // Start a fresh generation cycle for the Generation format
    setIsGenerating(true);
    setStep(0); // Start at generation state, effect will move to ad after a short delay
    setIsAutoPlay(false); // Pause carousel while this flow plays out
  };

  const nextFormat = () => {
    const currentIndex = formats.findIndex(f => f.id === activeFormat);
    const nextIndex = (currentIndex + 1) % formats.length;
    goToFormat(formats[nextIndex].id);
  };

  const prevFormat = () => {
    const currentIndex = formats.findIndex(f => f.id === activeFormat);
    const prevIndex = (currentIndex - 1 + formats.length) % formats.length;
    goToFormat(formats[prevIndex].id);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Format Indicator */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 glass-effect rounded-full px-6 py-3">
          <div className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></div>
          <span className="text-sm font-semibold text-white">
            {formats.find(f => f.id === activeFormat)?.name}
          </span>
          <span className="text-xs text-gray-400">
            {formats.find(f => f.id === activeFormat)?.description}
          </span>
        </div>
      </div>

      {/* Demo Container */}
      <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl"></div>

        {/* Navigation Arrows */}
        <button
          onClick={prevFormat}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-effect hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Previous format"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextFormat}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass-effect hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 group"
          aria-label="Next format"
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative z-10 space-y-6">
          {/* User Query - Different for Generation Format */}
          {activeFormat !== 'generation' ? (
            <div
              className={`transition-all duration-500 ${
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
                      {activeFormat === 'inline' && 'What are the best running shoes for marathon training?'}
                      {activeFormat === 'followup' && 'How do I start learning web development?'}
                      {activeFormat === 'card' && 'What are the top productivity apps for 2024?'}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-2">User Query</p>
                </div>
              </div>
            </div>
          ) : (
            /* Music Generation Interface */
            <div
              className={`transition-all duration-500 ${
                step >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="glass-effect rounded-2xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">AI Music Studio</h3>
                </div>
                
                <div className="mb-4">
                  <label className="text-sm text-gray-400 mb-2 block">Describe your song</label>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-gray-200">Create a romantic love song for Valentine's Day</p>
                  </div>
                </div>
                
                <button 
                  onClick={handleGenerateSong}
                  disabled={isGenerating}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Generate Song
                    </>
                  )}
                </button>
                <p className="text-xs text-gray-500 mt-2">Click to generate</p>
              </div>
            </div>
          )}

          {/* Processing Indicator - For Generation, show BLURRED BACKGROUND then FOREGROUND AD */}
          {activeFormat !== 'generation' ? (
            <div
              className={`transition-all duration-500 flex items-center gap-3 ml-14 ${
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
          ) : isGenerating && step === 0 ? (
            // Pure generation state (no ad yet)
            <div
              className={`transition-all duration-500 ${
                step === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="glass-effect rounded-2xl p-6 mb-6 flex items-center gap-4">
                <div className="relative">
                  <svg className="w-10 h-10 animate-spin text-purple-500" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold mb-1">Generating your song...</p>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full animate-pulse" style={{ width: '45%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Preparing your tracks before showing a short ad</p>
                </div>
              </div>
            </div>
          ) : isGenerating && step === 1 ? (
            /* Full-screen Ad Overlay with Blurred Background */
            <div
              className={`transition-all duration-500 ${
                step === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="relative min-h-[600px] flex items-center justify-center">
                {/* Blurred Background - Generating State */}
                <div className="absolute inset-0 blur-xl opacity-40 pointer-events-none">
                  <div className="glass-effect rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative">
                        <svg className="w-10 h-10 animate-spin text-purple-500" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-semibold">Generating your song...</p>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Foreground Video/Interstitial Ad */}
                <div className="relative z-10 max-w-2xl w-full animate-fade-in">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 rounded-3xl opacity-75 blur-2xl animate-gradient-x"></div>
                    
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-pink-500/50 shadow-2xl">
                      {/* Video Ad Simulation */}
                      <div className="relative aspect-video bg-gradient-to-br from-pink-600 via-red-600 to-pink-700 overflow-hidden">
                        {/* Play Icon Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center animate-pulse">
                            <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Video Content Mockup */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                              </svg>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                              Valentine's Day Sale
                            </h3>
                            <p className="text-xl text-white font-semibold drop-shadow-lg">
                              40% Off All Gifts 💝
                            </p>
                          </div>
                        </div>

                        {/* Video Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                          <div className="h-full bg-white animate-pulse" style={{ width: '70%' }}></div>
                        </div>

                        {/* Sponsored Badge */}
                        <div className="absolute top-3 left-3 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-bold text-white">SPONSORED</span>
                        </div>

                        {/* Skip in X seconds */}
                        <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full">
                          <span className="text-xs font-semibold text-white">Ad • 5s</span>
                        </div>

                        {/* Generating indicator */}
                        <div className="absolute bottom-3 left-3 px-3 py-1.5 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-white">Generating your song...</span>
                        </div>
                      </div>

                      {/* Ad Details Below Video */}
                      <div className="p-6 bg-gradient-to-br from-gray-900 to-black">
                        <p className="text-gray-300 leading-relaxed mb-4">
                          Express your love with personalized jewelry, premium chocolates, fresh flowers & romantic experiences. Limited time offer!
                        </p>
                        
                        <button className="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-500 hover:to-red-500 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-3 group">
                          <span>Shop Now</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                        
                        <p className="text-center text-xs text-gray-500 mt-3">
                          LoveGifts.com • Your content will appear after this ad
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">Video ad displays while song generates in blurred background</p>
            </div>
          ) : null}

          {/* AI Response or Generated Songs as Cards */}
          {activeFormat !== 'generation' ? (
            <div
              className={`transition-all duration-500 ${
                step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold shadow-lg shadow-purple-500/30">
                  AI
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl rounded-tl-none p-5 backdrop-blur-sm">
                    {activeFormat === 'inline' && (
                      <>
                        <p className="text-gray-200 leading-relaxed mb-4">
                          For marathon training, you'll want shoes with excellent cushioning and support. 
                          Here are the top recommendations:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span><strong className="text-white">Nike ZoomX Vaporfly</strong> - Elite racing shoe with carbon plate</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span><strong className="text-white">ASICS Gel-Nimbus 25</strong> - Maximum cushioning</span>
                          </li>
                        </ul>
                      </>
                    )}
                    
                    {activeFormat === 'followup' && (
                      <>
                        <p className="text-gray-200 leading-relaxed mb-4">
                          Great question! Here's a beginner-friendly roadmap for web development:
                        </p>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">1.</span>
                            <span><strong className="text-white">HTML & CSS</strong> - Start with the fundamentals</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">2.</span>
                            <span><strong className="text-white">JavaScript</strong> - Learn programming basics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">3.</span>
                            <span><strong className="text-white">React or Vue</strong> - Modern frameworks</span>
                          </li>
                        </ul>
                      </>
                    )}
                    
                    {activeFormat === 'card' && (
                      <>
                        <p className="text-gray-200 leading-relaxed mb-4">
                          Here are the top productivity apps that can help you stay organized and efficient:
                        </p>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span><strong className="text-white">Notion</strong> - All-in-one workspace</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span><strong className="text-white">Todoist</strong> - Task management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary-400 mt-1">•</span>
                            <span><strong className="text-white">RescueTime</strong> - Time tracking</span>
                          </li>
                        </ul>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-2 ml-2">AI Response</p>
                </div>
              </div>
            </div>
          ) : step >= 2 ? (
            /* Generated Songs as Card Blocks (Suno-style) */
            <div
              className={`transition-all duration-500 ${
                step >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white mb-3">Your songs are ready</h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Song Card 1 */}
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400">
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
                        3:24
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-primary-400 transition-colors">Love's Sweet Melody</h4>
                    <p className="text-sm text-gray-400">Romantic Ballad</p>
                  </div>

                  {/* Song Card 2 */}
                  <div className="group cursor-pointer">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gradient-to-br from-green-400 via-yellow-400 to-orange-400">
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform">
                          <svg className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Duration Badge */}
                      <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-semibold">
                        3:18
                      </div>
                    </div>
                    <h4 className="text-white font-semibold mb-1 group-hover:text-primary-400 transition-colors">Hearts Together</h4>
                    <p className="text-sm text-gray-400">Valentine's Special</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">Songs generated successfully • Click to play</p>
              </div>
            </div>
          ) : null}

          {/* Sponsored Ads - Different Formats */}
          <div
            className={`transition-all duration-500 ml-14 ${
              step >= 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
            }`}
          >
            {/* Inline Ad Format */}
            {activeFormat === 'inline' && (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2.5 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs font-semibold text-primary-300">
                      SPONSORED
                    </span>
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
            )}

            {/* Follow-up Questions Format */}
            {activeFormat === 'followup' && (
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-400 mb-3">Related questions:</p>
                
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-500"></div>
                  <button className="relative w-full bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-white font-medium mb-1">Best coding bootcamps for beginners?</div>
                        <div className="text-xs text-primary-400 font-semibold">SPONSORED • Codecademy</div>
                      </div>
                    </div>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">What's the difference between frontend and backend?</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">How long does it take to learn JavaScript?</span>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Card Format */}
            {activeFormat === 'card' && (
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="px-2.5 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs font-semibold text-primary-300">
                        SPONSORED
                      </span>
                    </div>
                    
                    <div className="flex gap-4 mb-4">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0">
                        <svg className="w-10 h-10 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors">
                          Notion - Your All-in-One Workspace
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          Write, plan, collaborate, and get organized. Millions trust Notion for productivity.
                        </p>
                      </div>
                    </div>
                    
                    {/* Email Capture Form */}
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-gray-300 mb-3 font-medium">
                        Get started with a free template
                      </p>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:bg-white/10 transition-all text-sm"
                          onClick={(e) => e.preventDefault()}
                        />
                        <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-500 hover:to-accent-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2 whitespace-nowrap">
                          <span>Get Free Template</span>
                          <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        No credit card required • Free forever
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500 mt-2 ml-2">
              {activeFormat === 'inline' && 'Inline Sponsored Ad'}
              {activeFormat === 'followup' && 'Follow-up Question Ad Format'}
              {activeFormat === 'card' && 'Card Format Sponsored Ad'}
              {activeFormat === 'generation' && 'Contextual Ad During Generation'}
            </p>
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
          
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="px-4 py-2 glass-effect hover:bg-white/10 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            {isAutoPlay ? (
              <>
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
                Auto-play On
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Auto-play Off
              </>
            )}
          </button>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {formats.map((format) => (
          <button
            key={format.id}
            onClick={() => goToFormat(format.id)}
            className="group flex flex-col items-center gap-2"
          >
            <div
              className={`transition-all duration-300 rounded-full ${
                activeFormat === format.id
                  ? 'w-12 h-2 bg-primary-500'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
              }`}
            />
            {activeFormat === format.id && (
              <span className="text-xs text-gray-400 font-medium">{format.name}</span>
            )}
          </button>
        ))}
      </div>

      {/* Flow Arrow */}
      <div className="absolute left-6 top-32 bottom-32 w-0.5 bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-primary-500/50 hidden md:block"></div>
    </div>
  );
}

