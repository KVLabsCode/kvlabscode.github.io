'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRotatingIndex } from '@/lib/hooks';
import { insights, kovioInsights } from '@/lib/dashboard-data';
import type { ViewMode } from './view-toggle';

interface OptimizationInsightProps {
  viewMode: ViewMode;
}

export default function OptimizationInsight({ viewMode }: OptimizationInsightProps) {
  const source = viewMode === 'kovio' ? kovioInsights : insights;
  const index = useRotatingIndex(source.length, 10000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.35 }}
      className="mt-4 bg-accent/[0.04] border border-accent/10 rounded-lg px-4 py-3"
    >
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-h-[2.5rem] flex items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4 }}
              className="text-xs text-foreground/70 leading-relaxed"
            >
              {source[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Kovio label */}
        <span className="flex-shrink-0 text-[9px] font-mono text-accent/50 uppercase tracking-wider mt-1">
          {viewMode === 'kovio' ? 'Signal' : 'Insight'}
        </span>
      </div>
    </motion.div>
  );
}
