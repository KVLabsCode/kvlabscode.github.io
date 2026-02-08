'use client';

import { motion } from 'framer-motion';
import { useTickingValue } from '@/lib/hooks';
import {
  arms,
  formatArpdau,
  formatEcpm,
  formatPercent,
  formatCurrency,
} from '@/lib/dashboard-data';
import type { ViewMode } from './view-toggle';

interface ArmCardProps {
  arm: typeof arms.admob;
  otherArm: typeof arms.admob;
  viewMode: ViewMode;
  delay: number;
}

function DeltaIndicator({ value, suffix = '' }: { value: number; suffix?: string }) {
  const isPositive = value > 0;
  return (
    <span
      className={`text-[10px] font-mono ml-1.5 ${
        isPositive ? 'text-emerald-500/70' : 'text-red-400/70'
      }`}
    >
      {isPositive ? '+' : ''}
      {value.toFixed(value < 1 ? 3 : 1)}
      {suffix}
    </span>
  );
}

function ArmCard({ arm, otherArm, viewMode, delay }: ArmCardProps) {
  const arpdau = useTickingValue(arm.arpdau, 0.004, 4500);
  const ecpm = useTickingValue(arm.ecpm, 0.003, 5000);
  const fillRate = useTickingValue(arm.fillRate, 0.001, 6000);
  const revenue = useTickingValue(arm.revenue, 0.002, 5500);

  const arpdauDelta = arm.arpdau - otherArm.arpdau;
  const ecpmDelta = arm.ecpm - otherArm.ecpm;
  const fillDelta = arm.fillRate - otherArm.fillRate;
  const revDelta = arm.revenue - otherArm.revenue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={`relative bg-white/[0.02] border rounded-lg p-5 ${
        arm.isWinner ? 'border-accent/20' : 'border-white/[0.06]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-foreground">{arm.name}</h3>
        {arm.isWinner && viewMode === 'publisher' && (
          <span className="text-[10px] font-mono text-accent/80 bg-accent/10 px-2 py-0.5 rounded">
            Leading
          </span>
        )}
        {arm.isWinner && viewMode === 'kovio' && (
          <span className="text-[10px] font-mono text-accent/80 bg-accent/10 px-2 py-0.5 rounded">
            P-value: 0.023
          </span>
        )}
      </div>

      {/* Metrics */}
      <div className="space-y-3">
        <MetricRow label="Traffic" value={`${arm.trafficPercent}%`} />
        <MetricRow
          label={viewMode === 'kovio' ? 'ARPDAU (μ)' : 'ARPDAU'}
          value={formatArpdau(arpdau)}
          delta={arpdauDelta}
          showDelta={arm.isWinner}
        />
        <MetricRow
          label="eCPM"
          value={formatEcpm(ecpm)}
          delta={ecpmDelta}
          showDelta={arm.isWinner}
          deltaSuffix=""
        />
        <MetricRow
          label="Fill Rate"
          value={formatPercent(fillRate)}
          delta={fillDelta}
          showDelta={arm.isWinner}
          deltaSuffix="pp"
        />
        <MetricRow
          label="Revenue"
          value={formatCurrency(revenue)}
          delta={revDelta}
          showDelta={arm.isWinner}
          isLargeNumber
        />
      </div>

      {/* Kovio mode: extra signals */}
      {viewMode === 'kovio' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 pt-3 border-t border-white/5"
        >
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-muted">Volatility</span>
              <span className="text-foreground/70">{arm.isWinner ? '0.012' : '0.019'}</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-muted">Confidence</span>
              <span className="text-foreground/70">{arm.isWinner ? '94.2%' : '-'}</span>
            </div>
            <div className="flex justify-between text-[10px] font-mono">
              <span className="text-muted">Samples</span>
              <span className="text-foreground/70">{arm.isWinner ? '5.18M' : '5.06M'}</span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

function MetricRow({
  label,
  value,
  delta,
  showDelta = false,
  deltaSuffix = '',
  isLargeNumber = false,
}: {
  label: string;
  value: string;
  delta?: number;
  showDelta?: boolean;
  deltaSuffix?: string;
  isLargeNumber?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-muted">{label}</span>
      <span className="text-sm font-medium text-foreground tabular-nums">
        {value}
        {showDelta && delta !== undefined && (
          <DeltaIndicator
            value={isLargeNumber ? delta / 1000 : delta}
            suffix={isLargeNumber ? 'K' : deltaSuffix}
          />
        )}
      </span>
    </div>
  );
}

interface ArmComparisonProps {
  viewMode: ViewMode;
}

export default function ArmComparison({ viewMode }: ArmComparisonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
      <ArmCard arm={arms.admob} otherArm={arms.applovin} viewMode={viewMode} delay={0.15} />
      <ArmCard arm={arms.applovin} otherArm={arms.admob} viewMode={viewMode} delay={0.25} />
    </div>
  );
}
