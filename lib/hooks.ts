'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * Returns a value that slowly ticks around a base value,
 * simulating a live data feed.
 */
export function useTickingValue(base: number, variance = 0.005, intervalMs = 4000): number {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const jitterInterval = intervalMs + Math.random() * 1500;

    const id = setInterval(() => {
      const jitter = base * variance * (Math.random() - 0.5) * 2;
      setValue((prev) => {
        const next = prev + jitter;
        // Clamp to avoid drifting too far from base
        if (Math.abs(next - base) > base * variance * 4) {
          return base + jitter;
        }
        return next;
      });
    }, jitterInterval);

    return () => clearInterval(id);
  }, [base, variance, intervalMs]);

  return value;
}

/**
 * Cycles through an array of items at a given interval.
 * Returns the current index and a stable reference to the current item.
 */
export function useRotatingIndex(length: number, intervalMs = 10000): number {
  const [index, setIndex] = useState(0);

  const advance = useCallback(() => {
    setIndex((prev) => (prev + 1) % length);
  }, [length]);

  useEffect(() => {
    const id = setInterval(advance, intervalMs);
    return () => clearInterval(id);
  }, [advance, intervalMs]);

  return index;
}
