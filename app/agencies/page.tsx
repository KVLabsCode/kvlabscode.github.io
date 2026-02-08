import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AmbientBackground from '@/components/ui/ambient-background';
import AnimatedSection from '@/components/ui/animated-section';
import CTASection from '@/components/ui/cta-section';
import AgenciesContent from './content';

export const metadata: Metadata = {
  title: 'Agencies | Kovio',
  description: 'Leverage without headcount. Manage more publishers without adding more people.',
};

export default function AgenciesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 md:pt-44 md:pb-32 overflow-hidden">
          <AmbientBackground />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent font-mono text-sm tracking-wider uppercase mb-6">
                For Agencies
              </p>
              <h1 className="text-3xl sm:text-display-lg lg:text-display-xl font-bold text-foreground mb-4 sm:mb-6">
                Leverage without headcount.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                Manage more publishers without adding more people. Kovio gives every
                publisher their own autonomous stack — operated from a single control plane.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <AgenciesContent />

        <CTASection
          heading="Scale without hiring."
          subtext="See how agencies use Kovio to manage publisher portfolios at scale."
          buttonText="Talk to Us"
        />
      </main>

      <Footer />
    </>
  );
}
