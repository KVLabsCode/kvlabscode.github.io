'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import AnimatedSection from '@/components/ui/animated-section';

// ─── Reusable Icons ─────────────────────────────────────────────────────────

const icons = {
  // Architecture
  screen: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
    </svg>
  ),
  cpu: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  brain: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  trendingUp: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  shield: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),

  // SDK pipeline
  eye: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  lightbulb: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  cursorClick: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  ),
  bolt: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  chart: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),

  // Monetize pillars
  target: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
  ),
  crosshair: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  fork: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  lightning: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  dollar: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),

  // Flow-specific icons
  user: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  document: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  clock: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  arrowPath: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  robot: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  banknotes: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  sparkle: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
    </svg>
  ),
  insertPin: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
    </svg>
  ),
  cursorArrow: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    </svg>
  ),
};

// ─── Data ───────────────────────────────────────────────────────────────────

const sdkSteps = [
  { label: 'Observe', color: '#6366f1', icon: icons.eye },
  { label: 'Determine', color: '#818cf8', icon: icons.lightbulb },
  { label: 'Select', color: '#a78bfa', icon: icons.cursorClick },
  { label: 'Execute', color: '#c4b5fd', icon: icons.bolt },
  { label: 'Attribute', color: '#6366f1', icon: icons.chart },
];

const formats = [
  {
    title: 'Inline',
    description: 'Contextual placements within AI responses, matched to user intent.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
  },
  {
    title: 'Generation-Time',
    description: 'Timed placements during long-form AI outputs, without breaking flow.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Sponsored Follow-ups',
    description: 'Paid next actions after AI response. Labeled, relevant, conversion-ready.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    ),
  },
  {
    title: 'Commerce Cards',
    description: 'Rich, actionable cards for products, services, or bookings inline with AI.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
];

const flows = [
  {
    title: 'Inline Decision',
    color: '#6366f1',
    steps: [
      { label: 'User Intent', icon: icons.crosshair, iconColor: '#6366f1' },
      { label: 'Contextual Placement', icon: icons.insertPin, iconColor: '#818cf8' },
      { label: 'Revenue', icon: icons.banknotes, iconColor: '#22c55e' },
    ],
  },
  {
    title: 'Generation',
    color: '#818cf8',
    steps: [
      { label: 'AI Response', icon: icons.document, iconColor: '#818cf8' },
      { label: 'Timed Insert', icon: icons.clock, iconColor: '#a78bfa' },
      { label: 'Revenue', icon: icons.banknotes, iconColor: '#22c55e' },
    ],
  },
  {
    title: 'Sponsored Follow-up',
    color: '#a78bfa',
    steps: [
      { label: 'Decision Moment', icon: icons.arrowPath, iconColor: '#a78bfa' },
      { label: 'Paid Next Step', icon: icons.cursorArrow, iconColor: '#c4b5fd' },
      { label: 'Conversion', icon: icons.banknotes, iconColor: '#22c55e' },
    ],
  },
  {
    title: 'Agent Commerce',
    color: '#c4b5fd',
    steps: [
      { label: 'User Delegates', icon: icons.robot, iconColor: '#c4b5fd' },
      { label: 'Agent Completes', icon: icons.check, iconColor: '#a78bfa' },
      { label: 'Pay-per-Action', icon: icons.banknotes, iconColor: '#22c55e' },
    ],
  },
];

const industries = [
  'Consumer Apps', 'Productivity', 'Content & Media',
  'Gaming', 'Commerce', 'Creator Tools',
  'Education', 'Enterprise', 'Healthcare',
  'Finance', 'Vertical Platforms',
];

const futureSignals = [
  { now: 'Impressions', future: 'Actions' },
  { now: 'Clicks', future: 'Outcomes' },
  { now: 'CPMs', future: 'Per-action pricing' },
  { now: 'Ad networks', future: 'Model-native demand' },
];

// ─── Vertical connector ─────────────────────────────────────────────────────

function VerticalConnector({ fromColor, toColor }: { fromColor: string; toColor: string }) {
  return (
    <div className="flex flex-col items-center py-1">
      <div
        className="w-px h-6"
        style={{ background: `linear-gradient(to bottom, ${fromColor}50, ${toColor}50)` }}
      />
      <div
        className="w-0 h-0"
        style={{
          borderLeft: '3px solid transparent',
          borderRight: '3px solid transparent',
          borderTop: `4px solid ${toColor}50`,
        }}
      />
    </div>
  );
}

// ─── Component ──────────────────────────────────────────────────────────────

export default function AIMonetizationContent() {
  return (
    <>
      {/* 1. Architecture Diagram — Where Kovio Sits */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Architecture</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-3">
              AI needs an operating system.
            </h2>
            <p className="text-muted max-w-xl mb-12">
              Kovio sits between your app and the AI stack — handling monetization so you can focus on experience.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="space-y-3">
              {/* App Layer */}
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-3">
                <div className="text-foreground/40 hidden sm:block">{icons.screen}</div>
                <div className="text-center">
                  <span className="text-xs font-mono text-foreground/80 uppercase tracking-wider">Your AI App</span>
                  <p className="text-[10px] text-muted mt-0.5">Experience &middot; Interface &middot; Users</p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-6 bg-gradient-to-b from-white/10 to-accent/40" />
              </div>

              {/* Kovio SDK Layer */}
              <div className="bg-accent/[0.06] border border-accent/20 rounded-lg px-3 sm:px-6 py-4 sm:py-5">
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
                  <div className="text-accent/70">{icons.cpu}</div>
                  <span className="text-[10px] sm:text-xs font-mono text-accent uppercase tracking-wider font-medium">Kovio SDK — Monetization Runtime</span>
                </div>
                {/* Pipeline with icons — horizontal on sm+, grid on mobile */}
                <div className="hidden sm:flex items-center justify-center gap-1.5">
                  {sdkSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-1.5">
                      <div
                        className="flex items-center gap-1.5 px-3 py-2 rounded-md"
                        style={{ backgroundColor: `${step.color}12` }}
                      >
                        <div style={{ color: step.color }}>{step.icon}</div>
                        <span className="text-[11px] font-mono font-medium" style={{ color: step.color }}>
                          {step.label}
                        </span>
                      </div>
                      {i < sdkSteps.length - 1 && (
                        <svg className="w-3 h-3 text-accent/25 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                {/* Mobile: compact 5-icon row */}
                <div className="flex sm:hidden items-center justify-between px-2">
                  {sdkSteps.map((step, i) => (
                    <div key={step.label} className="flex items-center gap-1">
                      <div
                        className="flex flex-col items-center gap-1 px-2 py-1.5 rounded-md"
                        style={{ backgroundColor: `${step.color}12` }}
                      >
                        <div style={{ color: step.color }}>{step.icon}</div>
                        <span className="text-[8px] font-mono font-medium leading-none" style={{ color: step.color }}>
                          {step.label}
                        </span>
                      </div>
                      {i < sdkSteps.length - 1 && (
                        <svg className="w-2.5 h-2.5 text-accent/25 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Connectors */}
              <div className="flex justify-center gap-[30%]">
                <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-white/10" />
                <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-white/10" />
                <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-white/10" />
              </div>

              {/* Bottom Layer — Models, Demand, Safety with icons */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: 'AI Models', sub: 'Cost, latency, safety', icon: icons.brain, color: '#a78bfa' },
                  { label: 'Demand', sub: 'Sources & pricing', icon: icons.trendingUp, color: '#818cf8' },
                  { label: 'Safety', sub: 'Policy & consent', icon: icons.shield, color: '#6366f1' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-2 sm:px-4 py-2.5 sm:py-3 flex flex-col items-center gap-1">
                    <div style={{ color: item.color }}>{item.icon}</div>
                    <span className="text-[10px] sm:text-xs font-mono text-foreground/80">{item.label}</span>
                    <p className="text-[9px] sm:text-[10px] text-muted hidden sm:block">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. What We Monetize — with icons */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">What We Monetize</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-8">
              Not attention. Intent.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto"
          >
            {[
              { label: 'Intent', icon: icons.crosshair },
              { label: 'Decisions', icon: icons.fork },
              { label: 'Actions', icon: icons.lightning },
              { label: 'Outcomes', icon: icons.dollar },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="border border-accent/15 bg-accent/[0.04] rounded-lg py-3 sm:py-4 flex flex-col items-center gap-1.5 sm:gap-2"
              >
                <div className="text-accent/70">{item.icon}</div>
                <span className="text-xs sm:text-sm font-semibold text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection>
            <p className="text-muted text-sm mt-6 max-w-md mx-auto">
              Native, contextual, measured — never interrupting, never polluting answers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. Formats — 2×2 with larger icons */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Formats</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-8 sm:mb-10">
              Four revenue surfaces.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {formats.map((format) => (
              <motion.div
                key={format.title}
                variants={staggerItem}
                className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-5 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/[0.08] border border-accent/10 flex items-center justify-center flex-shrink-0 text-accent/60 group-hover:text-accent group-hover:bg-accent/[0.12] transition-colors">
                    {format.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1">{format.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{format.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-5 justify-center">
            {['Context-aware', 'Policy-guarded', 'Measured end-to-end'].map((prop) => (
              <span key={prop} className="text-[10px] font-mono text-accent/60 bg-accent/[0.05] px-2.5 py-1 rounded">
                {prop}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Monetization Flows — Vertical card grid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Flows</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-8 sm:mb-10">
              How revenue happens.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3"
          >
            {flows.map((flow) => (
              <motion.div
                key={flow.title}
                variants={staggerItem}
                className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-4 sm:p-5 hover:border-white/10 transition-colors"
              >
                {/* Flow title */}
                <h3 className="text-[11px] font-mono font-medium mb-5 text-center" style={{ color: flow.color }}>
                  {flow.title}
                </h3>

                {/* Vertical flow */}
                <div className="flex flex-col items-center">
                  {flow.steps.map((step, i) => (
                    <div key={step.label} className="flex flex-col items-center">
                      {/* Step node */}
                      <div className="flex flex-col items-center gap-1.5">
                        <div
                          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center border"
                          style={{
                            backgroundColor: `${step.iconColor}10`,
                            borderColor: `${step.iconColor}25`,
                            color: step.iconColor,
                          }}
                        >
                          {step.icon}
                        </div>
                        <span className="text-[10px] text-muted text-center leading-tight">
                          {step.label}
                        </span>
                      </div>

                      {/* Vertical arrow between steps */}
                      {i < flow.steps.length - 1 && (
                        <VerticalConnector
                          fromColor={step.iconColor}
                          toColor={i === flow.steps.length - 2 ? '#22c55e' : flow.steps[i + 1].iconColor}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Industries — Compact pill grid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Applications</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6 sm:mb-8">
              Every AI surface is a revenue surface.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap justify-center gap-2"
          >
            {industries.map((item) => (
              <motion.span
                key={item}
                variants={staggerItem}
                className="bg-white/[0.04] border border-white/[0.06] rounded-full px-4 py-2 text-xs text-foreground/80 hover:border-accent/20 hover:text-foreground transition-colors cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Trust + Future — Combined */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Trust */}
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-accent/60">{icons.shield}</div>
                <p className="text-accent font-mono text-[11px] tracking-wider uppercase">Safety & Trust</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-5">
                Earned, not assumed.
              </h3>
              <div className="space-y-2.5">
                {[
                  'Clear sponsored content labeling',
                  'Consent-aware monetization',
                  'Policy & category guardrails',
                  'Fraud detection',
                  'Outcome-level attribution',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Future */}
            <AnimatedSection delay={0.15}>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-accent/60">{icons.sparkle}</div>
                <p className="text-accent font-mono text-[11px] tracking-wider uppercase">What Comes Next</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-5">
                The shift is already happening.
              </h3>
              <div className="space-y-3">
                {futureSignals.map((signal) => (
                  <div key={signal.now} className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[11px] sm:text-xs text-muted/50 w-20 sm:w-28 text-right flex-shrink-0 line-through decoration-white/10">
                      {signal.now}
                    </span>
                    <svg className="w-3.5 h-3.5 text-accent/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <span className="text-sm text-foreground font-medium">{signal.future}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted mt-5">
                Kovio is building the control plane for this economy.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
