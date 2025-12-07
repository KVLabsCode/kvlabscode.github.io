'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/logo';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const isWaitlistPage = pathname === '/waitlist';
    const isCaseStudiesPage = pathname === '/case-studies';
    const isDocsPage = pathname === '/docs';
    const shouldBeTransparent = (isHomePage || isWaitlistPage || isCaseStudiesPage || isDocsPage) && !isScrolled;
    const showNewsBanner = !isDocsPage; // Hide news banner on docs page

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            shouldBeTransparent
                ? 'bg-transparent border-transparent'
                : 'glass-effect border-b border-white/10'
        }`}>
            {/* Top announcement / news bar - above navbar */}
            {showNewsBanner && (
              <div
                  className={`hidden sm:flex items-center justify-center py-2 text-xs sm:text-sm border-b border-white/10 ${
                      shouldBeTransparent ? 'bg-black/60 backdrop-blur-md' : 'bg-slate-900/80 backdrop-blur-md'
                  }`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center">
                    <div className="flex items-center gap-3 text-center">
                        <span className="px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-300 text-[11px] font-semibold uppercase tracking-wide">
                            News
                        </span>
                        <span className={shouldBeTransparent ? 'text-white/80' : 'text-gray-200'}>
                            Starting the seed round raise for Kovio!
                        </span>
                        <Link
                            href="/waitlist"
                            className="inline-flex items-center gap-1 text-primary-300 hover:text-primary-200 font-medium"
                        >
                            <span>Read more</span>
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
              </div>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <Logo />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center space-x-8">
                            <Link href="/#features" className={`transition-colors ${
                                shouldBeTransparent
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-gray-300 hover:text-white'
                            }`}>
                                Publishers
                            </Link>
                            <Link href="/docs" className={`transition-colors ${
                                shouldBeTransparent
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-gray-300 hover:text-white'
                            }`}>
                                Docs
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3 ml-8">
                            <a 
                                href="https://chat-ad-network.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`transition-all ${
                                    shouldBeTransparent
                                        ? 'px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg'
                                        : 'btn-secondary'
                                }`}
                            >
                                Dashboard
                            </a>
                            <Link href="/waitlist" className="btn-primary">
                                Request Access
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`md:hidden transition-colors ${
                            shouldBeTransparent
                                ? 'text-white/90 hover:text-white'
                                : 'text-gray-300 hover:text-white'
                        }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile menu - Improved with better spacing and touch targets */}
                {isMenuOpen && (
                    <div className={`md:hidden py-4 space-y-2 animate-fade-in ${
                        shouldBeTransparent
                            ? 'bg-black/90 backdrop-blur-xl rounded-b-xl border-t border-white/10'
                            : 'bg-slate-900/95 backdrop-blur-xl border-t border-white/10'
                    }`}>
                        <Link
                            href="/#features"
                            className={`block px-4 py-3 mx-2 rounded-lg transition-all ${
                                shouldBeTransparent
                                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Publishers
                        </Link>
                        <Link
                            href="/docs"
                            className={`block px-4 py-3 mx-2 rounded-lg transition-all ${
                                shouldBeTransparent
                                    ? 'text-white/90 hover:text-white hover:bg-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Docs
                        </Link>
                        <div className="pt-3 mt-2 border-t border-white/10 space-y-2 px-2">
                            <a
                                href="https://chat-ad-network.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full btn-secondary text-center py-3.5 text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </a>
                            <Link
                                href="/waitlist"
                                className="block w-full btn-primary text-center py-3.5 text-base"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Request Access
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
