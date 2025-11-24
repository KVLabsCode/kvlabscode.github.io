import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Ad Infrastructure | Monetize AI Chatbots',
  description: 'Revolutionary ad infrastructure for AI. Enable publishers to monetize AI chatbots and advertisers to reach users in conversational interfaces.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="0ae072c1-e117-4757-9f76-79ad6b16c86e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
