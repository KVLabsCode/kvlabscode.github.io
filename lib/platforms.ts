import type { PlatformNode } from '@/types';

export const platforms: PlatformNode[] = [
  // Ad Servers
  { id: 'admob', name: 'AdMob', logo: '/logos/admob-logo.svg', category: 'ad-servers' },
  { id: 'applovin', name: 'AppLovin', logo: '/logos/applovin-logo.svg', category: 'ad-servers' },

  // Demand Sources
  { id: 'unity', name: 'Unity Ads', logo: '/logos/unity-logo.svg', category: 'demand' },
  { id: 'chartboost', name: 'Chartboost', logo: '/logos/chartboost-logo.svg', category: 'demand' },

  // Programmatic
  { id: 'ironsource', name: 'ironSource', logo: '/logos/ironsource-logo.svg', category: 'programmatic' },

  // Measurement
  { id: 'vungle', name: 'Vungle', logo: '/logos/vungle-logo.svg', category: 'measurement' },
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
