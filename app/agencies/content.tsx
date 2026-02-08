'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import AnimatedSection from '@/components/ui/animated-section';
import MultiTenantMap from '@/components/visuals/multi-tenant-map';

// ─── Icons ───────────────────────────────────────────────────────────────────

const icons = {
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  ),
  cog: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  document: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  // Workflow icons
  userPlus: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
    </svg>
  ),
  link: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
  play: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
    </svg>
  ),
  chartBar: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  shield: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  eye: (
    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  ),
};

// ─── Data ────────────────────────────────────────────────────────────────────

const benefits = [
  {
    title: 'One platform, many publishers',
    description: 'Each publisher gets an isolated, autonomous stack — all managed from your single dashboard.',
    icon: icons.users,
    color: '#6366f1',
  },
  {
    title: 'Consistent optimization',
    description: 'Every publisher benefits from the same AI-driven optimization, regardless of portfolio size.',
    icon: icons.cog,
    color: '#818cf8',
  },
  {
    title: 'Instant onboarding',
    description: 'Add new publishers in minutes. Connect their ad networks, and Kovio starts operating immediately.',
    icon: icons.rocket,
    color: '#a78bfa',
  },
  {
    title: 'Transparent reporting',
    description: 'Every action, every decision, every outcome — logged and reportable per publisher.',
    icon: icons.document,
    color: '#6366f1',
  },
];

const workflowSteps = [
  { label: 'Onboard publisher', icon: icons.userPlus, color: '#6366f1' },
  { label: 'Connect networks', icon: icons.link, color: '#818cf8' },
  { label: 'Kovio operates', icon: icons.play, color: '#a78bfa' },
  { label: 'Report outcomes', icon: icons.chartBar, color: '#22c55e' },
];

const capabilities = [
  'Multi-tenant isolation',
  'Per-publisher optimization',
  'Centralized reporting',
  'White-label ready',
  'Role-based access',
  'Bulk operations',
  'Custom branding',
  'API access',
];

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

export default function AgenciesContent() {
  return (
    <>
      {/* Multi-tenant visualization */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4 text-center">Multi-Tenant Architecture</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-4 text-center">
              One core. Many stacks.
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-10 sm:mb-16 text-center">
              Kovio operates as a single control plane that branches into independent
              publisher stacks — each with its own optimization model.
            </p>
          </AnimatedSection>

          <MultiTenantMap />
        </div>
      </section>

      {/* Agency Workflow — Vertical flow */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Workflow</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-3">
              From onboarding to outcomes in minutes.
            </h2>
            <p className="text-muted max-w-xl mb-10">
              Adding a new publisher to Kovio is as simple as connecting their ad accounts.
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {workflowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center border"
                    style={{
                      backgroundColor: `${step.color}10`,
                      borderColor: `${step.color}25`,
                      color: step.color,
                    }}
                  >
                    {step.icon}
                  </div>
                  <span className="text-xs sm:text-sm text-foreground font-medium text-center">
                    {step.label}
                  </span>
                </div>
                {i < workflowSteps.length - 1 && (
                  <VerticalConnector
                    fromColor={step.color}
                    toColor={workflowSteps[i + 1].color}
                  />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Agencies Win — with icons */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Agency Advantages</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-8 sm:mb-12">
              Why agencies win with Kovio.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="bg-white/[0.02] border border-white/[0.06] rounded-lg p-5 sm:p-6 hover:border-accent/20 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors"
                    style={{
                      backgroundColor: `${benefit.color}08`,
                      borderColor: `${benefit.color}15`,
                      color: `${benefit.color}99`,
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-1.5">{benefit.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities — pill grid */}
      <section className="py-16 md:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-accent font-mono text-[11px] tracking-wider uppercase mb-4">Capabilities</p>
            <h2 className="text-2xl sm:text-display font-bold text-foreground mb-6 sm:mb-8">
              Built for agency scale.
            </h2>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-wrap justify-center gap-2"
          >
            {capabilities.map((item) => (
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

      {/* White-label — enhanced with icons */}
      <section className="py-16 sm:py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-accent/60">{icons.eye}</div>
                <p className="text-accent font-mono text-[11px] tracking-wider uppercase">White Label</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-5">
                Your brand, our infrastructure.
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Kovio operates behind the scenes. Your publishers see your brand, your
                reporting, your optimization — powered by infrastructure that scales
                without additional headcount.
              </p>
              <div className="space-y-2.5">
                {[
                  'Custom branding & domain',
                  'Publisher-facing dashboards',
                  'Branded email reports',
                  'Your logo, your colors',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-accent/60">{icons.shield}</div>
                <p className="text-accent font-mono text-[11px] tracking-wider uppercase">Trust & Control</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-5">
                Full control, zero risk.
              </h3>
              <p className="text-muted leading-relaxed mb-6">
                Every optimization has guardrails. Every action is logged. Every publisher
                is isolated. You maintain full control over every decision.
              </p>
              <div className="space-y-2.5">
                {[
                  'Per-publisher isolation',
                  'Role-based access controls',
                  'Audit log for every action',
                  'Rollback on any change',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                    <span className="text-sm text-muted">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
