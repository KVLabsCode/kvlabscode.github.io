import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import AmbientBackground from '@/components/ui/ambient-background';
import AnimatedSection from '@/components/ui/animated-section';
import BehaviorReveal from '@/components/ui/behavior-reveal';
import CTASection from '@/components/ui/cta-section';
import SystemMap from '@/components/visuals/system-map';
import type { SystemBehavior } from '@/types';

const behaviors: SystemBehavior[] = [
  {
    title: 'Observes',
    description: 'Continuously monitors performance across every ad network, placement, and bidding layer in your stack.',
    detail: 'Real-time signals from AdMob, AppLovin, Unity, and more',
  },
  {
    title: 'Decides',
    description: 'Evaluates millions of configurations and selects the optimal action — without human bottlenecks.',
    detail: 'ML-driven waterfall, bidding, and floor price decisions',
  },
  {
    title: 'Executes',
    description: 'Deploys changes directly to your ad networks via API. No dashboards, no manual toggles.',
    detail: 'Atomic changes with rollback safety across platforms',
  },
  {
    title: 'Learns',
    description: 'Every outcome feeds back into the model. The system gets sharper with every cycle.',
    detail: 'Closed-loop optimization with continuous feedback',
  },
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
          <AmbientBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <p className="text-accent font-mono text-sm tracking-wider uppercase mb-6">
                  The Publisher Operating System
                </p>
                <h1 className="text-display-xl font-bold text-foreground mb-6">
                  Your ad stack,
                  <br />
                  on autopilot.
                </h1>
                <p className="text-lg text-muted max-w-lg leading-relaxed mb-8">
                  Kovio is the operating system that observes, decides, executes, and learns
                  across your entire monetization stack — so your team doesn&apos;t have to.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="btn-primary">Request Demo</a>
                  <a href="#behaviors" className="btn-secondary">How it works</a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <SystemMap />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Behaviors */}
        <section id="behaviors" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">System Behaviors</p>
              <h2 className="text-display font-bold text-foreground mb-4">
                Not features. Behaviors.
              </h2>
              <p className="text-muted max-w-2xl mb-16">
                Kovio doesn&apos;t give you more buttons to press. It operates your ad stack
                as a continuous, autonomous system.
              </p>
            </AnimatedSection>

            <BehaviorReveal behaviors={behaviors} />
          </div>
        </section>

        {/* Credibility */}
        <section className="py-24 md:py-32 border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Built for Scale</p>
              <h2 className="text-display font-bold text-foreground mb-6">
                Trusted by publishers who move fast.
              </h2>
              <p className="text-muted max-w-2xl leading-relaxed">
                Kovio is built for publishers and agencies managing complex, multi-network
                ad stacks. Our infrastructure connects to every major ad platform
                and runs autonomously — so your team can focus on growth, not configuration.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          heading="Ready to let your stack run itself?"
          subtext="See how Kovio operates your entire ad infrastructure — from observation to execution."
        />
      </main>

      <Footer />
    </>
  );
}
