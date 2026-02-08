'use client';

import { useState } from 'react';
import ViewToggle, { type ViewMode } from './view-toggle';
import ExperimentHeader from './experiment-header';
import ArmComparison from './arm-comparison';
import OptimizationInsight from './optimization-insight';
import ArpdauChart from './arpdau-chart';
import NetworkTable from './network-table';

export default function LiveDashboard() {
  const [viewMode, setViewMode] = useState<ViewMode>('publisher');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Dashboard chrome */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-muted uppercase tracking-widest">
            Kovio Control Plane
          </span>
        </div>
        <ViewToggle mode={viewMode} onChange={setViewMode} />
      </div>

      {/* Dashboard panel */}
      <div className="bg-surface/50 border border-white/[0.06] rounded-xl p-3 sm:p-5 md:p-6 backdrop-blur-sm">
        <ExperimentHeader viewMode={viewMode} />
        <ArmComparison viewMode={viewMode} />
        <OptimizationInsight viewMode={viewMode} />
        <ArpdauChart viewMode={viewMode} />
        <NetworkTable viewMode={viewMode} />
      </div>
    </div>
  );
}
