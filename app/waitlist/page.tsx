import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import WaitlistForm from '@/components/forms/waitlist-form';

export default function WaitlistPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-screen flex items-center">
                    {/* Enhanced Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/40 via-transparent to-accent-900/40 pointer-events-none"></div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/15 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-500/5 to-accent-500/5 rounded-full blur-3xl"></div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10 w-full">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 glass-effect-premium rounded-full mb-8 shadow-xl">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
                                </span>
                                <span className="text-sm text-primary-300 font-semibold">Limited Early Access</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                                <span className="gradient-text drop-shadow-2xl">Join Kovio Today</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Be among the first to access the future of AI advertising. Get early access to our revolutionary platform and exclusive benefits.
                            </p>
                        </div>

                        {/* Waitlist Form */}
                        <div className="animate-slide-up mb-16">
                            <WaitlistForm />
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                            <div className="glass-effect-premium rounded-xl p-7 text-center group hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/30">
                                        <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Early Access</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Be first to use our platform before public launch</p>
                                </div>
                            </div>

                            <div className="glass-effect-premium rounded-xl p-7 text-center group hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent-500/30">
                                        <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Special Pricing</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Exclusive discounts for early adopters</p>
                                </div>
                            </div>

                            <div className="glass-effect-premium rounded-xl p-7 text-center group hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/30">
                                        <svg className="w-7 h-7 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Priority Support</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">Dedicated onboarding and support team</p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 text-center">
                            <p className="text-sm text-gray-500 mb-4">Trusted by innovative companies worldwide</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
                                <div className="text-gray-600 font-semibold text-lg">TechCorp</div>
                                <div className="text-gray-600 font-semibold text-lg">AI Solutions</div>
                                <div className="text-gray-600 font-semibold text-lg">DataFlow</div>
                                <div className="text-gray-600 font-semibold text-lg">CloudNet</div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
