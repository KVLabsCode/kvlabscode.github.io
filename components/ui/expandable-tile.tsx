'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ExpandableTile as ExpandableTileType } from '@/types';

interface ExpandableTileProps {
  tile: ExpandableTileType;
  index: number;
}

export default function ExpandableTile({ tile, index }: ExpandableTileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <div>
          <h3 className="text-lg font-semibold text-foreground">{tile.title}</h3>
          <p className="text-sm text-muted mt-1">{tile.subtitle}</p>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-accent text-2xl flex-shrink-0 ml-4"
        >
          +
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-white/5 pt-4">
              <p className="text-muted mb-4">{tile.description}</p>
              <ul className="space-y-2">
                {tile.details.map((detail, i) => (
                  <li key={i} className="text-sm text-muted flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#x2022;</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
