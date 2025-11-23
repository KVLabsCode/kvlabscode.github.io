'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                        <span className="text-xl font-bold gradient-text">AdInfra AI</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                            Home
                        </Link>
                        <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                            Case Studies
                        </Link>
                        <a href="#waitlist" className="btn-primary">
                            Join Waitlist
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-white"
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
                    <div className="md:hidden py-4 space-y-4 animate-fade-in">
                        <Link
                            href="/"
                            className="block text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/case-studies"
                            className="block text-gray-300 hover:text-white transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Case Studies
                        </Link>
                        <a
                            href="#waitlist"
                            className="block btn-primary text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Join Waitlist
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
