'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';

const publishers = ['Publisher A', 'Publisher B', 'Publisher C', 'Publisher D'];

export default function MultiTenantMap() {
  const [isCoreHovered, setIsCoreHovered] = useState(false);

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
        className="flex flex-col items-center justify-center mb-12"
      >
        <div
          className={`relative w-20 h-20 rounded-full bg-accent/20 border-2 flex items-center justify-center cursor-pointer transition-colors ${
            isCoreHovered ? 'border-accent-hover bg-accent/30' : 'border-accent'
          }`}
          onMouseEnter={() => setIsCoreHovered(true)}
          onMouseLeave={() => setIsCoreHovered(false)}
        >
          <svg viewBox="4 1 26 30" fill="none" className="w-9 h-9" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 4v24" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" />
            <path d="M14 16L26 5" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" />
            <path d="M14 16L26 27" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        {isCoreHovered && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 text-[10px] text-foreground bg-surface/95 px-2.5 py-0.5 rounded whitespace-nowrap border border-white/10 shadow-lg"
          >
            Kovio AI Engine
          </motion.span>
        )}
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
