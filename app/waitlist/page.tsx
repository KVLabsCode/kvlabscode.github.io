import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import WaitlistForm from '@/components/forms/waitlist-form';

export default function WaitlistPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-white">
                {/* Waitlist Section */}
                <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-8">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm text-blue-900 font-medium">Limited Early Access</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal text-gray-900 mb-6 tracking-tight">
                                Join Kovio Today
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Be the first to access AI that runs your entire ad stack. Get early access to our revolutionary platform and exclusive benefits.
                            </p>
                        </div>

                        {/* Waitlist Form */}
                        <div className="mb-16">
                            <WaitlistForm />
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 text-center hover:border-purple-200 hover:shadow-sm transition-all">
                                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Access</h3>
                                <p className="text-sm text-gray-600">Be first to use our platform before public launch</p>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center hover:border-emerald-200 hover:shadow-sm transition-all">
                                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Free to Start</h3>
                                <p className="text-sm text-gray-600">Early adopters get free access during beta</p>
                            </div>

                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center hover:border-blue-200 hover:shadow-sm transition-all">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Priority Support</h3>
                                <p className="text-sm text-gray-600">Dedicated onboarding and support team</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
