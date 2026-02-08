'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import AnimatedSection from '@/components/ui/animated-section';

// ─── Icons ───────────────────────────────────────────────────────────────────

const icons = {
  waterfall: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25" />
    </svg>
  ),
  currency: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  scale: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  ),
  network: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
  beaker: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  // Outcome icons
  trendUp: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  userMinus: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
  ),
  bolt: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  eye: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  // Architecture icons
  screen: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  cpu: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5M4.5 15.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  cloud: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  ),
  chart: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const controls = [
  { label: 'Waterfall ordering', description: 'Reorders demand sources in real-time based on performance', icon: icons.waterfall, color: '#6366f1' },
  { label: 'Floor prices', description: 'Sets and adjusts eCPM floors across all placements', icon: icons.currency, color: '#818cf8' },
  { label: 'Bidding allocation', description: 'Balances bidding vs. waterfall for optimal yield', icon: icons.scale, color: '#a78bfa' },
  { label: 'Network mediation', description: 'Manages priority and timeout across ad networks', icon: icons.network, color: '#6366f1' },
  { label: 'A/B testing', description: 'Runs continuous experiments on configurations', icon: icons.beaker, color: '#818cf8' },
  { label: 'Policy compliance', description: 'Validates all changes against network policies', icon: icons.shield, color: '#a78bfa' },
];

const outcomes = [
  { title: 'Higher yield', description: 'Continuous optimization means your stack never sits idle.', icon: icons.trendUp, color: '#22c55e' },
  { title: 'Less ops work', description: 'Your team stops configuring and starts strategizing.', icon: icons.userMinus, color: '#818cf8' },
  { title: 'Faster decisions', description: 'Changes deploy in seconds, not days.', icon: icons.bolt, color: '#f59e0b' },
  { title: 'Full visibility', description: 'Every action is logged, every outcome measured.', icon: icons.eye, color: '#6366f1' },
];

const beforeAfter = [
  { before: 'Manual floor price updates', after: 'Autonomous real-time pricing' },
  { before: '3–5 dashboards open at once', after: 'Single control plane' },
  { before: 'Weekly optimization cycles', after: 'Continuous 24/7 optimization' },
  { before: 'Gut-feel A/B tests', after: 'Statistically-driven experiments' },
  { before: 'Reactive to drops', after: 'Predictive yield management' },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function PublishersContent() {
  return (
    <>
      {/* Architecture — How Kovio sits in your stack */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Architecture</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-3">
              Your stack, unified.
            </h2>
            <p className="text-muted max-w-xl mb-8 sm:mb-12">
              Kovio connects to your existing ad networks and operates them as a single, intelligent system.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Publisher App Layer */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center gap-3">
              <div className="text-foreground/40 hidden sm:block">{icons.screen}</div>
              <div className="text-center">
                <span className="text-xs font-mono text-foreground/80 uppercase tracking-wider">Your App</span>
                <p className="text-[10px] text-muted mt-0.5">Placements &middot; Users &middot; Sessions</p>
              </div>
            </div>

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-6 bg-gradient-to-b from-white/10 to-accent/40" />
            </div>

            {/* Kovio Layer */}
            <div className="bg-accent/[0.06] border border-accent/20 rounded-lg px-3 sm:px-6 py-4 sm:py-5">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="text-accent/70">{icons.cpu}</div>
                <span className="text-[10px] sm:text-xs font-mono text-accent uppercase tracking-wider font-medium">Kovio · Publisher Operating System</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['Observe', 'Decide', 'Execute', 'Learn'].map((step, i) => {
                  const colors = ['#6366f1', '#818cf8', '#a78bfa', '#c4b5fd'];
                  return (
                    <div
                      key={step}
                      className="flex items-center justify-center px-2 py-2 rounded-md text-center"
                      style={{ backgroundColor: `${colors[i]}12` }}
                    >
                      <span className="text-[10px] sm:text-[11px] font-mono font-medium" style={{ color: colors[i] }}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Connectors */}
            <div className="flex justify-center gap-[20%] sm:gap-[25%]">
              <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-white/10" />
              <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-white/10" />
              <div className="w-px h-6 bg-gradient-to-b from-accent/30 to-white/10" />
            </div>

            {/* Ad Networks Layer */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { label: 'Ad Networks', sub: 'AdMob, AppLovin, ironSource', icon: icons.cloud, color: '#a78bfa' },
                { label: 'Bidding', sub: 'Waterfall & real-time', icon: icons.network, color: '#818cf8' },
                { label: 'Analytics', sub: 'Revenue & attribution', icon: icons.chart, color: '#6366f1' },
              ].map((item) => (
                <div key={item.label} className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-2 sm:px-4 py-2.5 sm:py-3 flex flex-col items-center gap-1">
                  <div style={{ color: item.color }}>{item.icon}</div>
                  <span className="text-[10px] sm:text-xs font-mono text-foreground/80">{item.label}</span>
                  <p className="text-[9px] sm:text-[10px] text-muted hidden sm:block">{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Kovio Controls — with icons */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">System Control</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-4">
              What Kovio controls.
            </h2>
            <p className="text-muted max-w-2xl mb-8 sm:mb-12">
              Every lever in your ad stack, managed as a unified system.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {controls.map((control) => (
              <motion.div
                key={control.label}
                variants={staggerItem}
                className="border border-white/[0.06] rounded-lg p-5 hover:border-accent/20 transition-colors bg-white/[0.02] group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors"
                    style={{
                      backgroundColor: `${control.color}08`,
                      borderColor: `${control.color}15`,
                      color: `${control.color}99`,
                    }}
                  >
                    {control.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1 font-mono">{control.label}</h3>
                    <p className="text-xs text-muted leading-relaxed">{control.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {['API-connected', 'Real-time', 'Rollback-safe', 'Policy-compliant'].map((prop) => (
              <span key={prop} className="text-[10px] font-mono text-accent/60 bg-accent/[0.05] px-2.5 py-1 rounded">
                {prop}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Before → After */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">The Shift</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-8 sm:mb-10">
              What your team stops doing.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-3"
          >
            {beforeAfter.map((item) => (
              <motion.div
                key={item.before}
                variants={staggerItem}
                className="flex items-center gap-2 sm:gap-3 py-2.5"
              >
                <span className="text-[11px] sm:text-xs text-muted/50 w-[140px] sm:w-48 text-right flex-shrink-0 line-through decoration-white/10">
                  {item.before}
                </span>
                <svg className="w-3.5 h-3.5 text-accent/40 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-sm text-foreground font-medium">{item.after}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Outcomes — with icons */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Outcomes</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-8 sm:mb-12">
              What changes.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {outcomes.map((outcome) => (
              <motion.div
                key={outcome.title}
                variants={staggerItem}
                className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-5 sm:p-6 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-colors"
                    style={{
                      backgroundColor: `${outcome.color}10`,
                      borderColor: `${outcome.color}25`,
                      color: outcome.color,
                    }}
                  >
                    {outcome.icon}
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold text-base mb-1.5">{outcome.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{outcome.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
