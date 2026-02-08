'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const publishers = ['Publisher A', 'Publisher B', 'Publisher C', 'Publisher D'];

export default function MultiTenantMap() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative max-w-2xl mx-auto"
    >
      {/* Kovio Core */}
      <motion.div
        variants={staggerItem}
        className="flex items-center justify-center mb-12"
      >
        <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
          <span className="text-foreground font-bold text-lg">K</span>
        </div>
      </motion.div>

      {/* Connecting lines + publisher stacks */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {publishers.map((publisher, i) => (
          <motion.div
            key={publisher}
            variants={staggerItem}
            className="flex flex-col items-center gap-3"
          >
            {/* Connecting line */}
            <div className="w-px h-8 bg-gradient-to-b from-accent/40 to-white/10" />

            {/* Publisher card */}
            <div className="w-full border border-white/10 rounded-lg p-4 text-center hover:border-accent/30 transition-colors bg-surface">
              <div className="w-8 h-8 rounded-md bg-white/5 mx-auto mb-2 flex items-center justify-center">
                <span className="text-accent text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="text-sm text-foreground font-medium">{publisher}</p>
              <p className="text-xs text-muted mt-1">Independent stack</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
