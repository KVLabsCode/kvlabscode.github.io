'use client';

import { motion } from 'framer-motion';
import { arpdauTimeSeries } from '@/lib/dashboard-data';
import type { ViewMode } from './view-toggle';

interface ArpdauChartProps {
  viewMode: ViewMode;
}

// Chart dimensions
const W = 560;
const H = 180;
const PAD = { top: 20, right: 20, bottom: 28, left: 48 };
const innerW = W - PAD.left - PAD.right;
const innerH = H - PAD.top - PAD.bottom;

function scaleX(i: number, total: number): number {
  return PAD.left + (i / (total - 1)) * innerW;
}

function scaleY(val: number, min: number, max: number): number {
  return PAD.top + innerH - ((val - min) / (max - min)) * innerH;
}

function buildSmoothPath(data: number[], min: number, max: number): string {
  const points = data.map((v, i) => [scaleX(i, data.length), scaleY(v, min, max)] as [number, number]);

  if (points.length < 2) return '';
  let d = `M ${points[0][0]} ${points[0][1]}`;

  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx = (prev[0] + curr[0]) / 2;
    d += ` C ${cpx} ${prev[1]}, ${cpx} ${curr[1]}, ${curr[0]} ${curr[1]}`;
  }

  return d;
}

function buildConfidenceBand(
  data: number[],
  min: number,
  max: number,
  bandWidth: number
): string {
  const len = data.length;
  const upper = data.map((v, i) => [scaleX(i, len), scaleY(v + bandWidth, min, max)] as [number, number]);
  const lower = data.map((v, i) => [scaleX(i, len), scaleY(v - bandWidth, min, max)] as [number, number]);

  // Build forward path (upper) then reverse path (lower)
  let d = `M ${upper[0][0]} ${upper[0][1]}`;
  for (let i = 1; i < upper.length; i++) {
    const prev = upper[i - 1];
    const curr = upper[i];
    const cpx = (prev[0] + curr[0]) / 2;
    d += ` C ${cpx} ${prev[1]}, ${cpx} ${curr[1]}, ${curr[0]} ${curr[1]}`;
  }

  // Reverse through lower
  d += ` L ${lower[lower.length - 1][0]} ${lower[lower.length - 1][1]}`;
  for (let i = lower.length - 2; i >= 0; i--) {
    const prev = lower[i + 1];
    const curr = lower[i];
    const cpx = (prev[0] + curr[0]) / 2;
    d += ` C ${cpx} ${prev[1]}, ${cpx} ${curr[1]}, ${curr[0]} ${curr[1]}`;
  }

  d += ' Z';
  return d;
}

export default function ArpdauChart({ viewMode }: ArpdauChartProps) {
  const allValues = [...arpdauTimeSeries.admob, ...arpdauTimeSeries.applovin];
  const dataMin = Math.min(...allValues) - 0.005;
  const dataMax = Math.max(...allValues) + 0.005;

  const admobPath = buildSmoothPath(arpdauTimeSeries.admob, dataMin, dataMax);
  const applovinPath = buildSmoothPath(arpdauTimeSeries.applovin, dataMin, dataMax);

  // Y-axis tick values
  const yTicks = [0.12, 0.13, 0.14, 0.15];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-4 bg-white/[0.02] border border-white/[0.06] rounded-lg p-4"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0 mb-3">
        <h3 className="text-[10px] sm:text-xs font-medium text-muted uppercase tracking-wider font-mono">
          ARPDAU Over Time
        </h3>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-[2px] bg-accent rounded-full" />
            <span className="text-[9px] sm:text-[10px] text-muted">AdMob</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-[2px] bg-purple-400 rounded-full" />
            <span className="text-[9px] sm:text-[10px] text-muted">AppLovin MAX</span>
          </div>
        </div>
      </div>

      {/* SVG Chart */}
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet">
        {/* Grid lines */}
        {yTicks.map((tick) => {
          const y = scaleY(tick, dataMin, dataMax);
          return (
            <g key={tick}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y}
                y2={y}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth={1}
              />
              <text
                x={PAD.left - 8}
                y={y + 3}
                textAnchor="end"
                fill="#8b8b9e"
                fontSize={9}
                fontFamily="JetBrains Mono, monospace"
              >
                ${tick.toFixed(2)}
              </text>
            </g>
          );
        })}

        {/* X-axis labels (show every other) */}
        {arpdauTimeSeries.labels.map((label, i) => {
          if (i % 2 !== 0 && i !== arpdauTimeSeries.labels.length - 1) return null;
          const x = scaleX(i, arpdauTimeSeries.labels.length);
          return (
            <text
              key={label}
              x={x}
              y={H - 4}
              textAnchor="middle"
              fill="#8b8b9e"
              fontSize={8}
              fontFamily="JetBrains Mono, monospace"
            >
              {label}
            </text>
          );
        })}

        {/* Confidence bands (Kovio mode) */}
        {viewMode === 'kovio' && (
          <>
            <motion.path
              d={buildConfidenceBand(arpdauTimeSeries.admob, dataMin, dataMax, 0.006)}
              fill="rgba(99, 102, 241, 0.06)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.path
              d={buildConfidenceBand(arpdauTimeSeries.applovin, dataMin, dataMax, 0.008)}
              fill="rgba(168, 85, 247, 0.05)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </>
        )}

        {/* Lines */}
        <motion.path
          d={admobPath}
          fill="none"
          stroke="#6366f1"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.path
          d={applovinPath}
          fill="none"
          stroke="#a855f7"
          strokeWidth={2}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />

        {/* Data points */}
        {arpdauTimeSeries.admob.map((v, i) => (
          <motion.circle
            key={`admob-${i}`}
            cx={scaleX(i, arpdauTimeSeries.admob.length)}
            cy={scaleY(v, dataMin, dataMax)}
            r={2}
            fill="#6366f1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.5 + i * 0.05 }}
          />
        ))}
        {arpdauTimeSeries.applovin.map((v, i) => (
          <motion.circle
            key={`applovin-${i}`}
            cx={scaleX(i, arpdauTimeSeries.applovin.length)}
            cy={scaleY(v, dataMin, dataMax)}
            r={2}
            fill="#a855f7"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 + i * 0.05 }}
          />
        ))}
      </svg>
    </motion.div>
  );
}
