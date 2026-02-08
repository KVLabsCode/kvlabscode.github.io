import type { Metadata } from 'next';
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AmbientBackground from '@/components/ui/ambient-background';
import AnimatedSection from '@/components/ui/animated-section';
import CTASection from '@/components/ui/cta-section';
import AIMonetizationContent from './content';

export const metadata: Metadata = {
  title: 'AI Monetization | Kovio',
  description: 'Monetize AI — embedded, contextual, automated. Turning AI into revenue for publishers.',
};

export default function AIMonetizationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
          <AmbientBackground />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection>
              <p className="text-accent font-mono text-sm tracking-wider uppercase mb-6">
                AI Monetization
              </p>
              <h1 className="text-display-xl font-bold text-foreground mb-6">
                Turning AI into revenue.
              </h1>
              <p className="text-xl text-muted max-w-2xl leading-relaxed">
                Monetize AI — embedded, contextual, automated. Kovio transforms AI interactions
                into revenue streams without degrading the user experience.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <AIMonetizationContent />

        <CTASection
          heading="Monetize AI the right way."
          subtext="See how Kovio turns AI interactions into sustainable revenue."
        />
      </main>

      <Footer />
    </>
  );
}
