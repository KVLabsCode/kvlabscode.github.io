'use client';

import { motion } from 'framer-motion';
import { viewportOnce } from '@/lib/animations';

const steps = [
  { label: 'Observe', description: 'Collect signals from every touchpoint' },
  { label: 'Decide', description: 'AI selects the optimal action' },
  { label: 'Execute', description: 'Changes deploy across the stack' },
  { label: 'Measure', description: 'Outcomes feed back into the model' },
];

export default function IntelligenceLoop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6 }}
      className="relative max-w-lg mx-auto"
    >
      <div className="grid grid-cols-2 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-colors bg-surface"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-accent font-mono text-xs">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="text-foreground font-semibold">{step.label}</h3>
            </div>
            <p className="text-sm text-muted">{step.description}</p>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 text-accent/40 hidden md:block">
                {i === 1 ? null : <span>&#x2192;</span>}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Loop arrow */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 text-accent/50">
          <span className="text-xs font-mono">&#x21bb; continuous loop</span>
        </div>
      </div>
    </motion.div>
  );
}
