'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/logo';

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

    return (
        <>
            {/* Top announcement banner */}
            <div className="bg-purple-600 text-white py-3 px-4 text-center">
                <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm">
                    <span className="hidden sm:inline">🤖</span>
                    <span>Now in Early Access: AI that runs your entire ad stack</span>
                    <Link href="/waitlist" className="underline hover:no-underline font-medium">
                        Get access →
                    </Link>
                </div>
            </div>

            <nav className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/5'
                    : 'bg-white/60 backdrop-blur-sm border-b border-white/10'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center">
                            <div className="flex items-center space-x-8">
                                <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition-colors">
                                    Blog
                                </Link>
                            </div>
                            <div className="flex items-center space-x-3 ml-8">
                                <Link href="/waitlist" className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors">
                                    Get access
                                </Link>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden text-gray-700 hover:text-gray-900"
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
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="space-y-2">
                                <Link
                                    href="/blog"
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Blog
                                </Link>
                                <div className="pt-4 space-y-2 border-t border-gray-200 mt-2">
                                    <Link
                                        href="/waitlist"
                                        className="block px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors text-center"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get access
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
