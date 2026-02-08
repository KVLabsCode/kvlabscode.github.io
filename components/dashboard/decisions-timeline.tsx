'use client';

import { motion } from 'framer-motion';
import { decisions } from '@/lib/dashboard-data';
import type { Decision } from '@/lib/dashboard-data';

const typeStyles: Record<Decision['type'], { color: string; bg: string }> = {
  optimization: { color: 'text-accent/80', bg: 'bg-accent/20' },
  alert: { color: 'text-amber-400/80', bg: 'bg-amber-400/20' },
  feature: { color: 'text-emerald-400/80', bg: 'bg-emerald-400/20' },
  learning: { color: 'text-purple-400/80', bg: 'bg-purple-400/20' },
  prediction: { color: 'text-cyan-400/80', bg: 'bg-cyan-400/20' },
};

export default function DecisionsTimeline() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-2">
          Kovio Decisions
        </p>
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-1">
          Acting continuously, not periodically.
        </h2>
        <p className="text-sm text-muted">
          Recent autonomous decisions made by Kovio across your stack.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/[0.06]" />

        <div className="space-y-1">
          {decisions.map((decision, i) => {
            const style = typeStyles[decision.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex items-start gap-4 py-2.5 pl-6 group"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-[14px] w-[15px] h-[15px] rounded-full border-2 border-background flex items-center justify-center ${style.bg}`}
                >
                  <div className={`w-[5px] h-[5px] rounded-full ${style.bg.replace('/20', '/60')}`} />
                </div>

                {/* Content */}
                <div className="flex-1 flex items-start justify-between gap-4">
                  <p className="text-sm text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors">
                    {decision.action}
                  </p>
                  <span className="flex-shrink-0 text-[10px] font-mono text-muted whitespace-nowrap mt-0.5">
                    {decision.time}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
