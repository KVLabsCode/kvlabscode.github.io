import Link from 'next/link';
import Logo from '@/components/brand/logo';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              The Publisher Operating System. Observe, decide, execute, learn across your entire ad stack.
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/legal/terms" className="text-muted hover:text-foreground transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-muted hover:text-foreground transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-muted hover:text-foreground transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-foreground font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@kovio.dev" className="text-muted hover:text-foreground transition-colors text-sm">
                  hello@kovio.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-muted text-xs">
            &copy; {new Date().getFullYear()} Kovio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
