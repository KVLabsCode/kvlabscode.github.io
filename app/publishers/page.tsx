import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AmbientBackground from '@/components/ui/ambient-background';
import AnimatedSection from '@/components/ui/animated-section';
import CTASection from '@/components/ui/cta-section';
import PublishersContent from './content';

export const metadata: Metadata = {
  title: 'Publishers | Kovio',
  description: 'Autopilot for publisher revenue. Kovio decides how your existing tools are used.',
};

export default function PublishersPage() {
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
                For Publishers
              </p>
              <h1 className="text-3xl sm:text-display-lg lg:text-display-xl font-bold text-foreground mb-4 sm:mb-6">
                Autopilot for revenue.
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
                You already have the tools. Kovio decides how they&apos;re used. Continuously,
                autonomously, and at a speed no human team can match.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <PublishersContent />

        <CTASection
          heading="Let your stack operate itself."
          subtext="See how Kovio runs your entire ad infrastructure on autopilot."
        />
      </main>

      <Footer />
    </>
  );
}
