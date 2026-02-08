'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import type { SystemBehavior } from '@/types';

interface BehaviorRevealProps {
  behaviors: SystemBehavior[];
}

export default function BehaviorReveal({ behaviors }: BehaviorRevealProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="space-y-6"
    >
      {behaviors.map((behavior, index) => (
        <motion.div
          key={behavior.title}
          variants={staggerItem}
          className="border-l-2 border-accent/40 pl-6 py-4 hover:border-accent transition-colors group"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-accent font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
              {behavior.title}
            </h3>
          </div>
          <p className="text-muted leading-relaxed">{behavior.description}</p>
          <p className="text-sm text-muted/70 mt-2 font-mono">{behavior.detail}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
