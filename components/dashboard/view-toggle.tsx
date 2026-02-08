'use client';

import { motion } from 'framer-motion';

export type ViewMode = 'publisher' | 'kovio';

interface ViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export default function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-muted font-mono uppercase tracking-wider">View as</span>
      <div className="relative flex bg-white/5 rounded-md p-0.5">
        {(['publisher', 'kovio'] as const).map((m) => (
          <button
            key={m}
            onClick={() => onChange(m)}
            className={`relative px-3 py-1 text-xs font-medium rounded transition-colors z-10 ${
              mode === m ? 'text-white' : 'text-muted hover:text-foreground'
            }`}
          >
            {mode === m && (
              <motion.div
                layoutId="viewToggle"
                className="absolute inset-0 bg-white/10 rounded"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative">{m === 'publisher' ? 'Publisher' : 'Kovio'}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
