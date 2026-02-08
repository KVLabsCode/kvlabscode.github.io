import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AmbientBackground from '@/components/ui/ambient-background';
import CTASection from '@/components/ui/cta-section';
import LiveDashboard from '@/components/dashboard/live-dashboard';
import DecisionsTimeline from '@/components/dashboard/decisions-timeline';
import AiMonetizationPreview from '@/components/dashboard/ai-monetization-preview';

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Live Dashboard — Above the fold */}
        <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden">
          <AmbientBackground />
          <LiveDashboard />
        </section>

        {/* Kovio Decisions Timeline */}
        <section className="py-16 md:py-20 border-t border-white/5">
          <DecisionsTimeline />
        </section>

        {/* AI Monetization Preview */}
        <section className="py-16 md:py-20 border-t border-white/5">
          <AiMonetizationPreview />
        </section>

        {/* CTA */}
        <CTASection
          heading="See Kovio in action."
          subtext="Watch the system that runs your entire ad stack — from observation to execution."
        />
      </main>

      <Footer />
    </>
  );
}
