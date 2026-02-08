'use client';

import { motion } from 'framer-motion';
import { platforms, categoryColors } from '@/lib/platforms';
import PlatformNode from './platform-node';

const orbits = [
  { radius: 80, category: 'ad-servers' as const, speed: 60 },
  { radius: 130, category: 'demand' as const, speed: 80 },
  { radius: 180, category: 'programmatic' as const, speed: 100 },
  { radius: 220, category: 'measurement' as const, speed: 120 },
];

export default function SystemMap() {
  const cx = 250;
  const cy = 250;

  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square">
      <svg viewBox="0 0 500 500" className="w-full h-full">
        {/* Center glow */}
        <defs>
          <radialGradient id="center-glow">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={cx} cy={cy} r="60" fill="url(#center-glow)" />

        {/* Orbit rings */}
        {orbits.map((orbit) => (
          <circle
            key={orbit.category}
            cx={cx}
            cy={cy}
            r={orbit.radius}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        ))}

        {/* Kovio center */}
        <circle cx={cx} cy={cy} r="24" fill="#111114" stroke="#6366f1" strokeWidth="2" opacity="0.9" />
        <text x={cx} y={cy + 5} textAnchor="middle" fill="#e0e0e6" fontSize="10" fontWeight="bold">K</text>

        {/* Rotating orbit groups with platform nodes */}
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
                const angle = (i / Math.max(categoryPlatforms.length, 1)) * 2 * Math.PI;
                const px = cx + orbit.radius * Math.cos(angle);
                const py = cy + orbit.radius * Math.sin(angle);

                return (
                  <PlatformNode
                    key={platform.id}
                    node={platform}
                    x={px}
                    y={py}
                    color={color}
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
