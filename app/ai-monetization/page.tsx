import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AmbientBackground from '@/components/ui/ambient-background';
import AnimatedSection from '@/components/ui/animated-section';
import CTASection from '@/components/ui/cta-section';
import AIMonetizationContent from './content';

export const metadata: Metadata = {
  title: 'AI Monetization | Kovio',
  description: 'AI monetization as infrastructure. Intent, decisions, actions, outcomes, monetized natively through the Kovio SDK.',
};

export default function AIMonetizationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero — tight, punchy */}
        <section className="relative pt-24 pb-12 md:pt-44 md:pb-24 overflow-hidden">
          <AmbientBackground />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-6 sm:mb-8">
                AI Monetization
              </p>
              <h1 className="text-display-lg sm:text-display-xl font-bold text-foreground mb-5 sm:mb-6">
                Intent is the new impression.
              </h1>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-3">
                Users stopped browsing and started asking.
                Every AI interaction is a moment of intent. The most valuable surface the internet has ever produced.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-xl">
                Intent is not a rectangle. AI needs a new monetization layer.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <AIMonetizationContent />

        <CTASection
          heading="See AI monetization as infrastructure."
          subtext="Request a demo or explore the Kovio sandbox."
        />
      </main>

      <Footer />
    </>
  );
}
