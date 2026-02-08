// ─── Types ──────────────────────────────────────────────────────────────────

export interface ExperimentMetrics {
  totalRevenue: number;
  arpdau: number;
  avgEcpm: number;
  impressions: number;
}

export interface ArmData {
  name: string;
  trafficPercent: number;
  arpdau: number;
  ecpm: number;
  fillRate: number;
  revenue: number;
  isWinner: boolean;
}

export interface NetworkRow {
  network: string;
  ecpm: number;
  revenue: number;
  fillRate: number;
  impressions: number;
  executor?: string;
}

export interface Decision {
  time: string;
  action: string;
  type: 'optimization' | 'alert' | 'feature' | 'learning' | 'prediction';
}

// ─── Mock Data ──────────────────────────────────────────────────────────────

export const experimentConfig = {
  title: 'AdMob vs AppLovin MAX',
  segment: 'US Traffic',
  status: 'Running' as const,
  daysRunning: 14,
  confidence: 92.3,
};

export const experimentMetrics: ExperimentMetrics = {
  totalRevenue: 127843,
  arpdau: 0.142,
  avgEcpm: 12.47,
  impressions: 10243891,
};

export const arms: Record<'admob' | 'applovin', ArmData> = {
  admob: {
    name: 'AdMob',
    trafficPercent: 52,
    arpdau: 0.148,
    ecpm: 13.21,
    fillRate: 94.2,
    revenue: 68432,
    isWinner: true,
  },
  applovin: {
    name: 'AppLovin MAX',
    trafficPercent: 48,
    arpdau: 0.135,
    ecpm: 11.84,
    fillRate: 91.7,
    revenue: 59411,
    isWinner: false,
  },
};

export const insights = [
  'Kovio is reallocating traffic due to higher downstream ARPDAU stability on AdMob for this cohort.',
  'Confidence interval for AdMob arm narrowing — approaching statistical significance at 95%.',
  'Detected 4.2% fill rate improvement after adjusting waterfall position for Unity Ads in Tier-2 geos.',
  'Revenue attribution model updated — incorporating 72h cohort LTV signals for better arm selection.',
  'Network latency anomaly detected on AppLovin MAX — temporarily reducing bid floor by 8%.',
];

export const kovioInsights = [
  'Signal: ARPDAU variance on AdMob arm reduced by 23% over trailing 72h — increasing allocation weight.',
  'Bayesian posterior update: P(AdMob > MAX) = 0.923. Confidence improving at +0.8%/day.',
  'Volatility spike detected on AppLovin MAX at 14:23 UTC — correlated with demand partner latency.',
  'Cohort segmentation: US-iOS-Tier1 showing 2.1σ deviation from baseline — investigating causal signal.',
  'Thompson sampling weights shifted: AdMob 0.62 → 0.67, AppLovin MAX 0.38 → 0.33.',
];

export const arpdauTimeSeries = {
  admob: [0.121, 0.125, 0.131, 0.128, 0.134, 0.139, 0.142, 0.138, 0.145, 0.141, 0.148, 0.146, 0.151, 0.148],
  applovin: [0.118, 0.122, 0.119, 0.125, 0.128, 0.124, 0.131, 0.129, 0.133, 0.130, 0.135, 0.132, 0.137, 0.135],
  labels: ['Jan 25', 'Jan 26', 'Jan 27', 'Jan 28', 'Jan 29', 'Jan 30', 'Jan 31', 'Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7'],
};

export const networkBreakdown: NetworkRow[] = [
  { network: 'AdMob', ecpm: 13.21, revenue: 68432, fillRate: 94.2, impressions: 5182451, executor: 'Executed via AdMob Mediation' },
  { network: 'AppLovin MAX', ecpm: 11.84, revenue: 59411, fillRate: 91.7, impressions: 5061440, executor: 'Executed via AppLovin MAX SDK' },
  { network: 'Unity Ads', ecpm: 9.42, revenue: 21340, fillRate: 88.1, impressions: 2264330, executor: 'Coordinated with AI Monetization Layer' },
  { network: 'ironSource', ecpm: 8.91, revenue: 15892, fillRate: 85.4, impressions: 1783600, executor: 'Executed via ironSource SDK' },
  { network: 'Chartboost', ecpm: 7.23, revenue: 8412, fillRate: 79.8, impressions: 1163210, executor: 'Executed via Chartboost SDK' },
  { network: 'Vungle', ecpm: 6.85, revenue: 5234, fillRate: 76.3, impressions: 764090, executor: 'Executed via Liftoff Monetize' },
];

export const decisions: Decision[] = [
  { time: '2 min ago', action: 'Adjusted rewarded floor for Tier-2 geos', type: 'optimization' },
  { time: '8 min ago', action: 'Detected demand drop on ironSource — rebalanced traffic', type: 'alert' },
  { time: '14 min ago', action: 'Enabled AI embed monetization for video placement', type: 'feature' },
  { time: '23 min ago', action: 'Increased AdMob traffic allocation by 3.2%', type: 'optimization' },
  { time: '31 min ago', action: 'Updated cohort model with fresh ARPDAU signals', type: 'learning' },
  { time: '45 min ago', action: 'Rotated waterfall for interstitial placements', type: 'optimization' },
  { time: '1 hr ago', action: 'Detected seasonal pattern — pre-adjusting evening bid floors', type: 'prediction' },
  { time: '1.5 hrs ago', action: 'AppLovin MAX latency spike — reduced exposure temporarily', type: 'alert' },
];

export const aiMonetizationEvents = [
  { action: 'Sponsored prompt enabled for video assistant', time: '3 min ago' },
  { action: 'In-video product embed selected', time: '12 min ago' },
  { action: 'Revenue attribution recorded — $0.42 eCPM equivalent', time: '18 min ago' },
  { action: 'Context-aware ad placement optimized for user segment', time: '27 min ago' },
];

// ─── Formatters ─────────────────────────────────────────────────────────────

export function formatCurrency(value: number, decimals = 2): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toFixed(decimals)}`;
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return value.toLocaleString();
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}

export function formatArpdau(value: number): string {
  return `$${value.toFixed(3)}`;
}

export function formatEcpm(value: number): string {
  return `$${value.toFixed(2)}`;
}
