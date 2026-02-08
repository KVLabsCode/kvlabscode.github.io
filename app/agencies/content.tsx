'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import AnimatedSection from '@/components/ui/animated-section';
import MultiTenantMap from '@/components/visuals/multi-tenant-map';

const benefits = [
  {
    title: 'One platform, many publishers',
    description: 'Each publisher gets an isolated, autonomous stack — all managed from your single dashboard.',
  },
  {
    title: 'Consistent optimization',
    description: 'Every publisher benefits from the same AI-driven optimization, regardless of portfolio size.',
  },
  {
    title: 'Instant onboarding',
    description: 'Add new publishers in minutes. Connect their ad networks, and Kovio starts operating immediately.',
  },
  {
    title: 'Transparent reporting',
    description: 'Every action, every decision, every outcome — logged and reportable per publisher.',
  },
];

export default function AgenciesContent() {
  return (
    <>
      {/* Multi-tenant visualization */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">Multi-Tenant Architecture</p>
            <h2 className="text-display font-bold text-foreground mb-4 text-center">
              One core. Many stacks.
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-16 text-center">
              Kovio operates as a single control plane that branches into independent
              publisher stacks — each with its own optimization model.
            </p>
          </AnimatedSection>

          <MultiTenantMap />
        </div>
      </section>

      {/* Why Agencies Win */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Agency Advantages</p>
            <h2 className="text-display font-bold text-foreground mb-12">
              Why agencies win with Kovio.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-foreground font-semibold text-lg mb-3">{benefit.title}</h3>
                <p className="text-muted leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* White-label */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-muted leading-relaxed text-lg">
              Kovio operates behind the scenes. Your publishers see your brand, your
              reporting, your optimization — powered by infrastructure that scales
              without additional headcount. White-label ready.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
