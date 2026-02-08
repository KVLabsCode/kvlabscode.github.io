'use client';

import { motion } from 'framer-motion';
import { aiMonetizationEvents } from '@/lib/dashboard-data';

export default function AiMonetizationPreview() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="bg-white/[0.02] border border-white/[0.06] rounded-lg overflow-hidden"
      >
        {/* Header */}
        <div className="px-3 sm:px-5 py-3 border-b border-white/[0.04] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </div>
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-wider font-mono">
              AI Monetization · Live
            </h3>
          </div>
          <span className="text-[9px] font-mono text-muted">Active</span>
        </div>

        {/* Events */}
        <div className="divide-y divide-white/[0.03]">
          {aiMonetizationEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="px-3 sm:px-5 py-3 flex items-center justify-between gap-3 sm:gap-4 hover:bg-white/[0.015] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                <p className="text-xs text-foreground/70">{event.action}</p>
              </div>
              <span className="text-[9px] font-mono text-muted whitespace-nowrap">{event.time}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
