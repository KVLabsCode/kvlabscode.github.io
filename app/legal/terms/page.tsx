import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'Terms of Use | Kovio',
  description: 'Terms of Use for Kovio agentic ad infrastructure platform.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full mb-6">
              <span className="text-sm text-gray-600 font-medium uppercase tracking-wide">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-gray-900 mb-4">
              Terms of Use
            </h1>
            <p className="text-gray-600">Last updated: December 30, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Kovio\'s services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kovio provides agentic AI infrastructure for mobile advertising. Our AI agent manages, configures, and optimizes ad networks including Google AdMob, AppLovin MAX, and other mediation platforms on behalf of publishers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Ownership and Access</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You maintain full ownership of all ad network accounts connected to Kovio. Kovio operates on your behalf via official APIs and OAuth connections. You may revoke API access at any time through your respective ad network platforms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Use of AI Agent</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kovio\'s AI agent makes autonomous decisions regarding ad configurations, mediation strategies, and optimization. While the agent validates changes against known policies, you remain ultimately responsible for compliance with all ad network policies and terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may set guardrails, approve changes manually, or configure the agent to operate autonomously based on your preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data and Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kovio accesses performance data from your ad networks to make optimization decisions. We do not sell or share your data with third parties. See our Privacy Policy for detailed information about data handling.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Kovio is provided "as is" without warranties of any kind. We are not liable for any revenue loss, policy violations, or account suspensions resulting from the use of our service. The AI agent operates as a tool to assist you - final responsibility rests with the account owner.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may terminate your use of Kovio at any time by revoking API access and closing your account. Upon termination, the AI agent will immediately cease all operations on your behalf.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of material changes via email. Continued use of the service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms of Use, please contact us at <a href="mailto:legal@kovio.dev" className="text-purple-600 hover:text-purple-700 font-medium">legal@kovio.dev</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

