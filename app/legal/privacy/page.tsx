import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'Privacy Policy | Kovio',
  description: 'Privacy Policy for Kovio publisher operating system.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-white/5 rounded-full mb-6">
              <span className="text-sm text-muted font-medium uppercase tracking-wide">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted">Last updated: December 30, 2025</p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted leading-relaxed mb-4">
                When you use Kovio, we collect the following information:
              </p>
              <ul className="text-muted space-y-2 ml-6 list-disc">
                <li><strong className="text-foreground">Account Information:</strong> Name, email address, company details provided during registration</li>
                <li><strong className="text-foreground">Ad Network Data:</strong> Performance metrics, configuration settings, and optimization data accessed via API from your connected ad networks</li>
                <li><strong className="text-foreground">Usage Data:</strong> How you interact with the Kovio platform, including agent instructions and dashboard activity</li>
                <li><strong className="text-foreground">Technical Data:</strong> IP addresses, browser type, device information for security and service improvement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="text-muted space-y-2 ml-6 list-disc">
                <li>Operate the AI agent and optimize your ad stack</li>
                <li>Monitor performance and provide analytics</li>
                <li>Validate configurations against ad network policies</li>
                <li>Improve our AI models and service quality</li>
                <li>Communicate with you about service updates and support</li>
                <li>Ensure platform security and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Sharing and Disclosure</h2>
              <p className="text-muted leading-relaxed mb-4">
                We do not sell your personal information or ad performance data. We may share information only in the following circumstances:
              </p>
              <ul className="text-muted space-y-2 ml-6 list-disc">
                <li><strong className="text-foreground">Service Providers:</strong> Third-party services that help us operate the platform (hosting, analytics)</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                <li><strong className="text-foreground">Ad Networks:</strong> API access to your ad network accounts as authorized by you</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted leading-relaxed">
                We implement industry-standard security measures to protect your data, including encryption at rest and in transit, secure API connections, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide services. Performance data and logs are retained for up to 24 months for optimization and compliance purposes. You may request deletion of your data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="text-muted space-y-2 ml-6 list-disc">
                <li>Access and review your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Revoke API access to your ad networks</li>
                <li>Export your data in a portable format</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted leading-relaxed">
                We use cookies and similar technologies to operate the platform and improve user experience. See our Cookie Policy for details. You may control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Changes to Privacy Policy</h2>
              <p className="text-muted leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of material changes via email and update the &quot;Last updated&quot; date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Contact Us</h2>
              <p className="text-muted leading-relaxed">
                For questions about this Privacy Policy or to exercise your rights, please contact us at <a href="mailto:privacy@kovio.dev" className="text-accent hover:text-accent-hover font-medium">privacy@kovio.dev</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
