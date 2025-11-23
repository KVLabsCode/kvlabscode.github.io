import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg"></div>
                            <span className="text-xl font-bold gradient-text">AdInfra AI</span>
                        </div>
                        <p className="text-gray-400 max-w-md">
                            Revolutionary ad infrastructure for AI. Empowering publishers to monetize AI chatbots and advertisers to reach users in conversational interfaces.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                            <li>
                                <a href="#waitlist" className="text-gray-400 hover:text-white transition-colors">
                                    Join Waitlist
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">
                                contact@adinfra.ai
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} AdInfra AI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
