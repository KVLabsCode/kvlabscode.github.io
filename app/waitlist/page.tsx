import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import WaitlistForm from '@/components/forms/waitlist-form';

export default function WaitlistPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-900/30 pointer-events-none"></div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    </div>

                    <div className="max-w-4xl mx-auto relative z-10">
                        {/* Header */}
                        <div className="text-center mb-16 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                                <span className="text-sm text-primary-300 font-medium">Limited Early Access</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                                Join the{' '}
                                <span className="gradient-text">Waitlist</span>
                            </h1>

                            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                Be among the first to access the future of AI advertising. Get early access to our revolutionary platform and exclusive benefits.
                            </p>

                            {/* Benefits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
                                <div className="glass-effect rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Early Access</h3>
                                    <p className="text-sm text-gray-400">Be first to use our platform before public launch</p>
                                </div>

                                <div className="glass-effect rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-accent-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Special Pricing</h3>
                                    <p className="text-sm text-gray-400">Exclusive discounts for early adopters</p>
                                </div>

                                <div className="glass-effect rounded-xl p-6 text-center">
                                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-6 h-6 text-primary-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                            <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Priority Support</h3>
                                    <p className="text-sm text-gray-400">Dedicated onboarding and support team</p>
                                </div>
                            </div>
                        </div>

                        {/* Waitlist Form */}
                        <div className="animate-slide-up">
                            <WaitlistForm />
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
