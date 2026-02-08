import type { PlatformNode } from '@/types';

export const platforms: PlatformNode[] = [
  // Inner orbit — Mediation platforms
  { id: 'admob', name: 'Google AdMob', logo: '/logos/admob-icon.svg', category: 'ad-servers' },
  { id: 'applovin', name: 'AppLovin MAX', logo: '/logos/applovin-icon.svg', category: 'ad-servers' },

  // Outer orbit — Demand sources
  { id: 'ironsource', name: 'ironSource (LevelPlay)', logo: '/logos/ironsource-icon.svg', category: 'demand' },
  { id: 'gam', name: 'Google Ad Manager', logo: '/logos/gam-icon.svg', category: 'demand' },
];

export const categoryLabels: Record<PlatformNode['category'], string> = {
  'ad-servers': 'Ad Servers',
  'demand': 'Demand Sources',
  'programmatic': 'Programmatic',
  'measurement': 'Measurement',
};

export const categoryColors: Record<PlatformNode['category'], string> = {
  'ad-servers': '#6366f1',
  'demand': '#8b5cf6',
  'programmatic': '#a78bfa',
  'measurement': '#c4b5fd',
};
