'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { networkBreakdown, formatEcpm, formatCurrency, formatPercent, formatNumber } from '@/lib/dashboard-data';
import type { ViewMode } from './view-toggle';

interface NetworkTableProps {
  viewMode: ViewMode;
}

export default function NetworkTable({ viewMode }: NetworkTableProps) {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="mt-4 bg-white/[0.02] border border-white/[0.06] rounded-lg overflow-hidden"
    >
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/[0.04]">
        <h3 className="text-xs font-medium text-muted uppercase tracking-wider font-mono">
          Network Breakdown
        </h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto -webkit-overflow-scrolling-touch">
        <table className="w-full text-sm min-w-[480px]">
          <thead>
            <tr className="border-b border-white/[0.04]">
              <th className="text-left text-[10px] font-mono text-muted uppercase tracking-wider px-4 py-2.5">
                Network
              </th>
              <th className="text-right text-[10px] font-mono text-muted uppercase tracking-wider px-4 py-2.5">
                eCPM
              </th>
              <th className="text-right text-[10px] font-mono text-muted uppercase tracking-wider px-4 py-2.5">
                Revenue
              </th>
              <th className="text-right text-[10px] font-mono text-muted uppercase tracking-wider px-4 py-2.5">
                Fill Rate
              </th>
              <th className="text-right text-[10px] font-mono text-muted uppercase tracking-wider px-4 py-2.5">
                Impressions
              </th>
            </tr>
          </thead>
          <tbody>
            {networkBreakdown.map((row, i) => (
              <tr
                key={row.network}
                className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors relative"
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="px-4 py-2.5 text-xs font-medium text-foreground">
                  {row.network}
                </td>
                <td className="px-4 py-2.5 text-xs text-foreground/80 text-right tabular-nums">
                  {formatEcpm(row.ecpm)}
                </td>
                <td className="px-4 py-2.5 text-xs text-foreground/80 text-right tabular-nums">
                  {formatCurrency(row.revenue)}
                </td>
                <td className="px-4 py-2.5 text-xs text-foreground/80 text-right tabular-nums">
                  {formatPercent(row.fillRate)}
                </td>
                <td className="px-4 py-2.5 text-xs text-foreground/80 text-right tabular-nums">
                  {formatNumber(row.impressions)}
                </td>

                {/* Stack Awareness Tooltip */}
                {hoveredRow === i && row.executor && (
                  <td className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-surface border border-white/10 rounded px-2 py-1 text-[9px] font-mono text-accent/70 whitespace-nowrap shadow-lg"
                    >
                      {row.executor}
                    </motion.div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kovio mode footer */}
      {viewMode === 'kovio' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 py-2 border-t border-white/[0.04] flex flex-wrap items-center gap-2 sm:gap-4"
        >
          <span className="text-[9px] font-mono text-muted">
            Last sync: 12s ago
          </span>
          <span className="text-[9px] font-mono text-muted">
            Data source: Real-time aggregation pipeline
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}
