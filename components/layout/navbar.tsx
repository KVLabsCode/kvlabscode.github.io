'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/brand/logo';
import type { NavTab } from '@/types';

const tabs: NavTab[] = [
  { label: 'Home', href: '/' },
  { label: 'Product', href: '/product' },
  { label: 'Publishers', href: '/publishers' },
  { label: 'Agencies', href: '/agencies' },
  { label: 'AI Monetization', href: '/ai-monetization' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3">
      <div className="max-w-5xl mx-auto bg-surface/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl px-4 sm:px-6 transition-all duration-300">
        <div className="flex justify-between items-center h-14">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Center: Nav links */}
          <div className="hidden md:flex items-center gap-7">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://calendly.com/vivobusiness2001/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground hover:text-white p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-5xl mx-auto mt-2 bg-surface/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`block px-4 py-3 rounded-lg transition-colors text-sm font-medium min-h-[44px] flex items-center touch-manipulation ${
                      isActive
                        ? 'bg-white/10 text-white'
                        : 'text-muted hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </Link>
                );
              })}
              <div className="pt-4 space-y-2 border-t border-white/10 mt-2">
                <Link
                  href="https://calendly.com/vivobusiness2001/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 bg-accent text-white text-sm font-semibold rounded-lg text-center"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
