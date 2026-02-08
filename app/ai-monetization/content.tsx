'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '@/lib/animations';
import AnimatedSection from '@/components/ui/animated-section';
import ExpandableTile from '@/components/ui/expandable-tile';
import IntelligenceLoop from '@/components/visuals/intelligence-loop';
import type { ExpandableTile as ExpandableTileType } from '@/types';

const tiles: ExpandableTileType[] = [
  {
    title: 'Video Embeds',
    subtitle: 'Contextual video ads within AI responses',
    description: 'Embed relevant video content directly into AI-generated responses, matching context and user intent.',
    details: [
      'Context-aware placement based on query intent',
      'Non-intrusive formatting within response flow',
      'Performance-optimized loading and rendering',
    ],
  },
  {
    title: 'Sponsored Prompts',
    subtitle: 'Brand-sponsored AI interactions',
    description: 'Allow brands to sponsor specific prompt categories, delivering value-aligned content alongside AI responses.',
    details: [
      'Category-level sponsorship matching',
      'Brand safety controls and content filtering',
      'Transparent labeling for user trust',
    ],
  },
  {
    title: 'Paywalled AI',
    subtitle: 'Premium AI features behind subscription',
    description: 'Gate advanced AI capabilities behind subscription tiers, creating predictable recurring revenue.',
    details: [
      'Flexible tier configuration',
      'Usage-based metering and billing',
      'Graceful fallback for free-tier users',
    ],
  },
  {
    title: 'Agent-as-a-Service',
    subtitle: 'Monetize specialized AI agents',
    description: 'Package and sell domain-specific AI agents as standalone products or API services.',
    details: [
      'White-label agent deployment',
      'Per-query or subscription pricing models',
      'Custom training on publisher data',
    ],
  },
  {
    title: 'API Monetization',
    subtitle: 'Revenue from AI API access',
    description: 'Expose AI capabilities as paid APIs, letting developers and partners build on your intelligence layer.',
    details: [
      'Rate-limited API key management',
      'Usage tracking and billing integration',
      'Developer portal and documentation',
    ],
  },
];

const signals = [
  { label: 'User Intent', description: 'What the user is trying to accomplish' },
  { label: 'Content Context', description: 'The semantic meaning of the interaction' },
  { label: 'Engagement History', description: 'Past behavior and preferences' },
  { label: 'Revenue Opportunity', description: 'Real-time bid and pricing signals' },
];

export default function AIMonetizationContent() {
  return (
    <>
      {/* Expandable Tiles */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Revenue Models</p>
            <h2 className="text-display font-bold text-foreground mb-4">
              Five ways to monetize AI.
            </h2>
            <p className="text-muted max-w-2xl mb-12">
              Each model works independently or together — Kovio orchestrates the right mix
              for your audience and content.
            </p>
          </AnimatedSection>

          <div className="space-y-3">
            {tiles.map((tile, index) => (
              <ExpandableTile key={tile.title} tile={tile} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Loop */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4 text-center">
              Intelligence Loop
            </p>
            <h2 className="text-display font-bold text-foreground mb-4 text-center">
              Continuous optimization.
            </h2>
            <p className="text-muted max-w-2xl mx-auto mb-16 text-center">
              Every interaction feeds the system. Every outcome sharpens the model.
            </p>
          </AnimatedSection>

          <IntelligenceLoop />
        </div>
      </section>

      {/* AI + Ads Coordination */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">AI + Ads</p>
            <h2 className="text-display font-bold text-foreground mb-6">
              AI and ads, coordinated.
            </h2>
            <p className="text-muted max-w-2xl leading-relaxed mb-12">
              Traditional ad stacks and AI monetization don&apos;t need to compete. Kovio
              coordinates both — deciding when to show an ad, when to upsell a premium
              feature, and when to let the AI speak for itself.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {signals.map((signal) => (
              <motion.div
                key={signal.label}
                variants={staggerItem}
                className="border border-white/10 rounded-lg p-5 hover:border-accent/30 transition-colors bg-surface"
              >
                <h3 className="text-foreground font-medium text-sm font-mono mb-1">{signal.label}</h3>
                <p className="text-sm text-muted">{signal.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Safety & Privacy */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">Safety & Privacy</p>
            <h2 className="text-display font-bold text-foreground mb-6">
              Built with trust in mind.
            </h2>
            <p className="text-muted leading-relaxed mb-4">
              Monetization should never compromise user trust. Kovio ensures brand safety,
              content quality, and privacy compliance at every step of the AI monetization pipeline.
            </p>
            <p className="text-muted leading-relaxed">
              All sponsored content is clearly labeled. All data processing follows
              privacy-first principles. All AI outputs are monitored for quality and safety.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
