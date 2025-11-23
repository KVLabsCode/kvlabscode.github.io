import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import CaseStudyCard from '@/components/cards/case-study-card';
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
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
                The Future of{' '}
                <span className="gradient-text">AI Advertising</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 animate-slide-up">
                Revolutionary ad infrastructure enabling publishers to monetize AI chatbots
                and advertisers to reach users in conversational interfaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
                <Link href="/waitlist" className="btn-primary text-lg px-8 py-4">
                  Join Waitlist
                </Link>
                <Link href="/case-studies" className="btn-secondary text-lg px-8 py-4">
                  View Case Studies
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center glass-effect rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">600%</div>
                <div className="text-gray-400">Average Revenue Increase</div>
              </div>
              <div className="text-center glass-effect rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">1 Hour</div>
                <div className="text-gray-400">Integration Time</div>
              </div>
              <div className="text-center glass-effect rounded-xl p-6">
                <div className="text-4xl font-bold gradient-text mb-2">45%</div>
                <div className="text-gray-400">Higher Engagement</div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
              Built for the AI Era
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* For Publishers */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">For Publishers</h3>
                <p className="text-gray-300 mb-6">
                  Monetize your AI chatbot without compromising user experience. Our contextual ad system
                  seamlessly integrates into conversations, delivering relevant ads that users actually engage with.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">1-hour integration with simple API</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">600% revenue increase per session</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Maintain 94%+ user satisfaction</span>
                  </li>
                </ul>
              </div>

              {/* For Advertisers */}
              <div className="glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-accent-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">For Advertisers</h3>
                <p className="text-gray-300 mb-6">
                  Reach your audience where they're already engaged. Place your ads in AI-powered conversations
                  across premium chatbots with unprecedented targeting and engagement rates.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">45% higher engagement than traditional ads</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">3x ROI vs. previous channels</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-400 mr-3 mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">Access premium AI chatbot network</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
              How It Works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Integrate</h3>
                <p className="text-gray-400">
                  Simple API integration takes less than an hour. No complex setup required.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Optimize</h3>
                <p className="text-gray-400">
                  Our AI analyzes context and user intent to deliver perfectly matched ads.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Scale</h3>
                <p className="text-gray-400">
                  Watch your revenue grow while maintaining exceptional user experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Preview */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-400">
                See how publishers and advertisers are succeeding with AdInfra AI
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

        {/* Final CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your{' '}
              <span className="gradient-text">AI Advertising?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the waitlist today and be among the first to access our revolutionary platform
            </p>
            <Link href="/waitlist" className="btn-primary text-lg px-8 py-4 inline-block">
              Join the Waitlist
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
