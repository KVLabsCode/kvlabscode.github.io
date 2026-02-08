'use client';

import { useState } from 'react';
import { platforms, categoryColors } from '@/lib/platforms';
import PlatformNode from './platform-node';

const orbits = [
  { radius: 100, category: 'ad-servers' as const, speed: 70, startAngle: 0 },
  { radius: 170, category: 'demand' as const, speed: 100, startAngle: Math.PI * 0.25 },
];

export default function SystemMap() {
  const cx = 250;
  const cy = 250;
  const [isCenterHovered, setIsCenterHovered] = useState(false);

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] mx-auto aspect-square">
      <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
        <defs>
          {/* Center glow */}
          <radialGradient id="center-glow">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>

          {/* Orbit ring gradient for visibility */}
          <radialGradient id="orbit-ring-1" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.05" />
          </radialGradient>
          <radialGradient id="orbit-ring-2" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        {/* Ambient center glow */}
        <circle cx={cx} cy={cy} r="80" fill="url(#center-glow)" />

        {/* Orbit rings — solid, clearly visible */}
        <circle
          cx={cx}
          cy={cy}
          r={orbits[0].radius}
          fill="none"
          stroke="rgba(99, 102, 241, 0.15)"
          strokeWidth="1"
        />
        <circle
          cx={cx}
          cy={cy}
          r={orbits[0].radius}
          fill="none"
          stroke="rgba(99, 102, 241, 0.08)"
          strokeWidth="8"
        />
        <circle
          cx={cx}
          cy={cy}
          r={orbits[1].radius}
          fill="none"
          stroke="rgba(139, 92, 246, 0.12)"
          strokeWidth="1"
        />
        <circle
          cx={cx}
          cy={cy}
          r={orbits[1].radius}
          fill="none"
          stroke="rgba(139, 92, 246, 0.06)"
          strokeWidth="8"
        />

        {/* Subtle dashed tick marks on orbits */}
        <circle
          cx={cx}
          cy={cy}
          r={orbits[0].radius}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="2 12"
        />
        <circle
          cx={cx}
          cy={cy}
          r={orbits[1].radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          strokeDasharray="2 16"
        />

        {/* Kovio center node */}
        <g
          style={{ cursor: 'pointer' }}
          onMouseEnter={() => setIsCenterHovered(true)}
          onMouseLeave={() => setIsCenterHovered(false)}
        >
          <circle cx={cx} cy={cy} r="30" fill="#0e0e11" stroke={isCenterHovered ? '#818cf8' : '#6366f1'} strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="30" fill={isCenterHovered ? 'rgba(99, 102, 241, 0.12)' : 'rgba(99, 102, 241, 0.06)'} />

          {/* Kovio logo mark — foreignObject for perfect centering */}
          <foreignObject x={cx - 20} y={cy - 20} width="40" height="40">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="4 1 26 30" fill="none" width="30" height="30" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4v24" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" />
                <path d="M14 16L26 5" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" />
                <path d="M14 16L26 27" stroke="#a78bfa" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
          </foreignObject>

          {/* Hover tooltip */}
          {isCenterHovered && (
            <foreignObject x={cx - 60} y={cy + 34} width="120" height="24">
              <div className="flex items-center justify-center">
                <span className="text-[10px] text-foreground bg-surface/95 px-2.5 py-0.5 rounded whitespace-nowrap border border-white/10 shadow-lg">
                  Kovio AI Engine
                </span>
              </div>
            </foreignObject>
          )}
        </g>

        {/* Rotating orbit groups with platform logos */}
        {orbits.map((orbit) => {
          const categoryPlatforms = platforms.filter(p => p.category === orbit.category);
          const color = categoryColors[orbit.category];

          return (
            <g key={orbit.category}>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={`0 ${cx} ${cy}`}
                to={`360 ${cx} ${cy}`}
                dur={`${orbit.speed}s`}
                repeatCount="indefinite"
              />
              {categoryPlatforms.map((platform, i) => {
                const angle = orbit.startAngle + (i / Math.max(categoryPlatforms.length, 1)) * 2 * Math.PI;
                const px = cx + orbit.radius * Math.cos(angle);
                const py = cy + orbit.radius * Math.sin(angle);

                return (
                  <PlatformNode
                    key={platform.id}
                    node={platform}
                    x={px}
                    y={py}
                    color={color}
                    orbitSpeed={orbit.speed}
                    cx={cx}
                    cy={cy}
                  />
                );
              })}
            </g>
          );
        })}
      </svg>

      {/* Center label below SVG */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
        <span className="text-xs text-muted font-mono tracking-wider uppercase">Control Plane</span>
      </div>
    </div>
  );
}
