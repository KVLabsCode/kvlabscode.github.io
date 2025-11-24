'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isHomePage && !isScrolled
                ? 'bg-transparent border-transparent'
                : 'glass-effect border-b border-white/10'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                        <span className="text-xl font-bold gradient-text">AdInfra AI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-center space-x-8">
                            <Link href="/#features" className={`transition-colors ${
                                isHomePage && !isScrolled
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-gray-300 hover:text-white'
                            }`}>
                                Features
                            </Link>
                            <Link href="/#proven-results" className={`transition-colors ${
                                isHomePage && !isScrolled
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-gray-300 hover:text-white'
                            }`}>
                                Case Studies
                            </Link>
                        </div>
                        <div className="flex items-center space-x-3 ml-8">
                            <a 
                                href="https://chat-ad-network.vercel.app/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`transition-all ${
                                    isHomePage && !isScrolled
                                        ? 'px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg'
                                        : 'btn-secondary'
                                }`}
                            >
                                Dashboard
                            </a>
                            <Link href="/waitlist" className="btn-primary">
                                Join Waitlist
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className={`md:hidden transition-colors ${
                            isHomePage && !isScrolled
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

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className={`md:hidden py-4 space-y-4 animate-fade-in ${
                        isHomePage && !isScrolled
                            ? 'bg-black/40 backdrop-blur-md rounded-b-xl'
                            : ''
                    }`}>
                        <Link
                            href="/#features"
                            className={`block transition-colors ${
                                isHomePage && !isScrolled
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="/#proven-results"
                            className={`block transition-colors ${
                                isHomePage && !isScrolled
                                    ? 'text-white/90 hover:text-white'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Case Studies
                        </Link>
                        <div className="flex gap-3">
                            <a
                                href="https://chat-ad-network.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 btn-secondary text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dashboard
                            </a>
                            <Link
                                href="/waitlist"
                                className="flex-1 btn-primary text-center"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
