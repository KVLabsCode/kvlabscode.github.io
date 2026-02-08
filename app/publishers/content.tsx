'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import AnimatedSection from '@/components/ui/animated-section';

const controls = [
  { label: 'Waterfall ordering', description: 'Reorders demand sources in real-time based on performance' },
  { label: 'Floor prices', description: 'Sets and adjusts eCPM floors across all placements' },
  { label: 'Bidding allocation', description: 'Balances bidding vs. waterfall for optimal yield' },
  { label: 'Network mediation', description: 'Manages priority and timeout across ad networks' },
  { label: 'A/B testing', description: 'Runs continuous experiments on configurations' },
  { label: 'Policy compliance', description: 'Validates all changes against network policies' },
];

const humanStops = [
  'Manually adjusting floor prices every morning',
  'Checking waterfall performance across dashboards',
  'Comparing eCPMs between ad networks by hand',
  'Running one-off A/B tests and forgetting results',
  'Waiting for quarterly reviews to optimize',
];

const outcomes = [
  { title: 'Higher yield', description: 'Continuous optimization means your stack never sits idle.' },
  { title: 'Less ops work', description: 'Your team stops configuring and starts strategizing.' },
  { title: 'Faster decisions', description: 'Changes deploy in seconds, not days.' },
  { title: 'Full visibility', description: 'Every action is logged, every outcome measured.' },
];

export default function PublishersContent() {
  return (
    <>
      {/* What Kovio Controls */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">System Control</p>
            <h2 className="text-display font-bold text-foreground mb-4">
              What Kovio controls.
            </h2>
            <p className="text-muted max-w-2xl mb-12">
              Every lever in your ad stack, managed as a unified system.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {controls.map((control) => (
              <motion.div
                key={control.label}
                variants={staggerItem}
                className="border border-white/10 rounded-lg p-5 hover:border-accent/30 transition-colors bg-surface"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <h3 className="text-foreground font-medium text-sm font-mono">{control.label}</h3>
                </div>
                <p className="text-sm text-muted">{control.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Humans Stop Doing */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Human Offloading</p>
            <h2 className="text-display font-bold text-foreground mb-12">
              What your team stops doing.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {humanStops.map((item) => (
              <motion.div
                key={item}
                variants={staggerItem}
                className="flex items-center gap-4 py-3 border-b border-white/5 group"
              >
                <span className="text-muted/50 group-hover:text-accent transition-colors">&#x2014;</span>
                <p className="text-muted line-through decoration-accent/40 group-hover:decoration-accent transition-colors">
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Outcomes</p>
            <h2 className="text-display font-bold text-foreground mb-12">
              What changes.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {outcomes.map((outcome) => (
              <motion.div
                key={outcome.title}
                variants={staggerItem}
                className="border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-foreground font-semibold text-lg mb-2">{outcome.title}</h3>
                <p className="text-muted">{outcome.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
