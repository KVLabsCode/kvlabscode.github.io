import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';

export const metadata = {
  title: 'Cookie Policy | Kovio',
  description: 'Cookie Policy for Kovio agentic ad infrastructure platform.',
};

export default function CookiesPage() {
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
              Cookie Policy
            </h1>
            <p className="text-gray-600">Last updated: December 30, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. What Are Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide and improve our services, remember your preferences, and analyze how our platform is used.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-700 mb-2">Required for the platform to function properly.</p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Authentication and session management</li>
                      <li>• Security and fraud prevention</li>
                      <li>• Load balancing and performance</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-700 mb-2">Help us understand how visitors use our website.</p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Page views and navigation patterns</li>
                      <li>• Feature usage and engagement</li>
                      <li>• Error tracking and diagnostics</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Preference Cookies</h3>
                    <p className="text-gray-700 mb-2">Remember your settings and preferences.</p>
                    <ul className="text-gray-600 text-sm space-y-1 ml-4">
                      <li>• Language and region preferences</li>
                      <li>• Dashboard layout customization</li>
                      <li>• Agent configuration settings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Third-Party Cookies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use third-party services that set cookies, including analytics providers and authentication services (Google OAuth). These third parties have their own privacy policies governing their use of data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Managing Cookies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can control and manage cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>View what cookies are stored and delete them individually</li>
                  <li>Block third-party cookies</li>
                  <li>Block all cookies</li>
                  <li>Delete all cookies when you close your browser</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Note that blocking or deleting cookies may impact your ability to use certain features of Kovio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Updates to Cookie Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements. Check this page periodically for updates.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about cookies, please contact us at <a href="mailto:privacy@kovio.dev" className="text-purple-600 hover:text-purple-700 font-medium">privacy@kovio.dev</a>.
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

