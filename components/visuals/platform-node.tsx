'use client';

import { useState } from 'react';
import type { PlatformNode as PlatformNodeType } from '@/types';

interface PlatformNodeProps {
  node: PlatformNodeType;
  x: number;
  y: number;
  color: string;
  orbitSpeed: number;
  cx: number;
  cy: number;
}

export default function PlatformNode({ node, x, y, color, orbitSpeed }: PlatformNodeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const size = isHovered ? 22 : 18;
  const imgSize = size * 2;

  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 0 0"
          to="0 0 0"
          dur={`${orbitSpeed}s`}
          repeatCount="indefinite"
        />

        <circle r={size + 4} fill={color} opacity={isHovered ? 0.12 : 0.05} />

        <foreignObject x={-size} y={-size} width={imgSize} height={imgSize}>
          <img
            src={node.logo}
            alt={node.name}
            width={imgSize}
            height={imgSize}
            style={{ objectFit: 'contain' }}
          />
        </foreignObject>

        {isHovered && (
          <foreignObject x="-60" y={size + 6} width="120" height="24">
            <div className="flex items-center justify-center">
              <span className="text-[10px] text-foreground bg-surface/95 px-2 py-0.5 rounded whitespace-nowrap border border-white/10 shadow-lg">
                {node.name}
              </span>
            </div>
          </foreignObject>
        )}
      </g>
    </g>
  );
}
