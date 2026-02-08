'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/brand/logo';
import type { NavTab } from '@/types';

const tabs: NavTab[] = [
  { label: 'Home', href: '/' },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-dark' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Center: Tabs */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-lg p-1">
            {tabs.map((tab) => {
              const isActive = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-muted hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-md"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#"
              className="px-5 py-2.5 border border-foreground/20 hover:border-foreground/40 text-foreground text-sm font-semibold rounded-lg transition-all"
            >
              Sign In
            </Link>
            <Link
              href="#"
              className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-all"
            >
              Request Demo
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground hover:text-white"
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
            className="md:hidden glass-dark overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {tabs.map((tab) => {
                const isActive = pathname === tab.href;
                return (
                  <Link
                    key={tab.href}
                    href={tab.href}
                    className={`block px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
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
                  href="#"
                  className="block px-4 py-3 border border-foreground/20 text-foreground text-sm font-semibold rounded-lg text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="#"
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
