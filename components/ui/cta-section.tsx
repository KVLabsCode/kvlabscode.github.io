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
  buttonHref = 'https://calendly.com/vivobusiness2001/30min',
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative">
      <div className="absolute inset-0 ambient-glow opacity-50" />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10"
      >
        <h2 className="text-2xl sm:text-display md:text-display-lg font-bold text-foreground mb-4 sm:mb-6">{heading}</h2>
        <p className="text-base sm:text-lg text-muted mb-8 sm:mb-10 max-w-xl mx-auto">{subtext}</p>
        <Link href={buttonHref} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4">
          {buttonText}
        </Link>
      </motion.div>
    </section>
  );
}
