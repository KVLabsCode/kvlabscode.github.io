'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import type { PlatformNode as PlatformNodeType } from '@/types';

interface PlatformNodeProps {
  node: PlatformNodeType;
  x: number;
  y: number;
  color: string;
}

export default function PlatformNode({ node, x, y, color }: PlatformNodeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Dot */}
      <circle r={isHovered ? 6 : 4} fill={color} opacity={isHovered ? 1 : 0.7}>
        <animate attributeName="opacity" values={isHovered ? '1;1' : '0.5;0.8;0.5'} dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Hover glow */}
      {isHovered && (
        <circle r="20" fill={color} opacity="0.15" />
      )}

      {/* Label on hover */}
      {isHovered && (
        <foreignObject x="-40" y="12" width="80" height="30">
          <div className="flex items-center justify-center">
            <span className="text-xs text-foreground bg-surface/90 px-2 py-0.5 rounded whitespace-nowrap border border-white/10">
              {node.name}
            </span>
          </div>
        </foreignObject>
      )}
    </g>
  );
}
