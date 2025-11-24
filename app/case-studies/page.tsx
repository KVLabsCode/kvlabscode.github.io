import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import CaseStudyCard from '@/components/cards/case-study-card';
import { caseStudies } from '@/lib/case-studies';
import Link from 'next/link';

export default function CaseStudiesPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen pt-24 pb-20">
                {/* Header */}
                <section className="px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-900/20">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
                            Success Stories
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Discover how publishers and advertisers are transforming their businesses
                            with AdInfra AI's revolutionary ad infrastructure.
                        </p>
                    </div>
                </section>

                {/* Case Studies Grid */}
                <section className="px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 gap-10 lg:gap-12">
                            {caseStudies.map((caseStudy, index) => (
                                <div 
                                    key={caseStudy.id}
                                    className="animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CaseStudyCard caseStudy={caseStudy} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto text-center glass-effect rounded-2xl p-12">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to Join Them?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Start your journey to revolutionizing AI advertising today.
                        </p>
                        <Link href="/#waitlist" className="btn-primary text-lg px-8 py-4 inline-block">
                            Join the Waitlist
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
