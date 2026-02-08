'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOnce } from '@/lib/animations';

interface CTASectionProps {
  heading: string;
  subtext: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  heading,
  subtext,
  buttonText = 'Request Demo',
  buttonHref = '#',
}: CTASectionProps) {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 ambient-glow opacity-50" />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-3xl mx-auto px-4 text-center relative z-10"
      >
        <h2 className="text-display-lg font-bold text-foreground mb-6">{heading}</h2>
        <p className="text-lg text-muted mb-10 max-w-xl mx-auto">{subtext}</p>
        <Link href={buttonHref} className="btn-primary inline-block text-lg px-10 py-4">
          {buttonText}
        </Link>
      </motion.div>
    </section>
  );
}
