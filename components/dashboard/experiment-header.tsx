'use client';

import { motion } from 'framer-motion';
import { useTickingValue } from '@/lib/hooks';
import {
  experimentConfig,
  experimentMetrics,
  formatCurrency,
  formatArpdau,
  formatEcpm,
  formatNumber,
} from '@/lib/dashboard-data';
import type { ViewMode } from './view-toggle';

interface ExperimentHeaderProps {
  viewMode: ViewMode;
}

function MetricCard({
  label,
  value,
  kovioValue,
  viewMode,
}: {
  label: string;
  value: string;
  kovioValue?: string;
  viewMode: ViewMode;
}) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3">
      <p className="text-[10px] sm:text-[11px] text-muted font-mono uppercase tracking-wider mb-1">{label}</p>
      <p className="text-sm sm:text-lg font-semibold text-foreground tabular-nums truncate">
        {viewMode === 'kovio' && kovioValue ? kovioValue : value}
      </p>
    </div>
  );
}

export default function ExperimentHeader({ viewMode }: ExperimentHeaderProps) {
  const revenue = useTickingValue(experimentMetrics.totalRevenue, 0.002, 5000);
  const arpdau = useTickingValue(experimentMetrics.arpdau, 0.003, 4500);
  const ecpm = useTickingValue(experimentMetrics.avgEcpm, 0.003, 4000);
  const impressions = useTickingValue(experimentMetrics.impressions, 0.001, 6000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Experiment title + status */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-5">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="relative flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-400/90">{experimentConfig.status}</span>
          </div>
          <span className="text-white/10 hidden sm:inline">|</span>
          <h2 className="text-xs sm:text-sm font-medium text-foreground">
            {experimentConfig.title}
          </h2>
          <span className="text-[10px] sm:text-xs text-muted font-mono">— {experimentConfig.segment}</span>
        </div>
        {viewMode === 'kovio' && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[11px] font-mono text-accent/70 bg-accent/10 px-2 py-0.5 rounded"
          >
            Confidence: {experimentConfig.confidence}%
          </motion.span>
        )}
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <MetricCard
          label="Total Revenue"
          value={formatCurrency(revenue)}
          kovioValue={`${formatCurrency(revenue)} ± $1.2K`}
          viewMode={viewMode}
        />
        <MetricCard
          label="ARPDAU"
          value={formatArpdau(arpdau)}
          kovioValue={`${formatArpdau(arpdau)} (σ: 0.008)`}
          viewMode={viewMode}
        />
        <MetricCard
          label="Avg eCPM"
          value={formatEcpm(ecpm)}
          kovioValue={`${formatEcpm(ecpm)} [11.2–13.8]`}
          viewMode={viewMode}
        />
        <MetricCard
          label="Impressions"
          value={formatNumber(impressions)}
          kovioValue={`${formatNumber(impressions)} samples`}
          viewMode={viewMode}
        />
      </div>
    </motion.div>
  );
}
