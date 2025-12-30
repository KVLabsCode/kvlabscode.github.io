import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kovio | Agentic AI for Mobile Ad Operations',
  description: 'Agentic AI that manages, operates, and optimizes your entire ad stack - AdMob, mediation platforms, and ad ops workflows - automatically.',
  icons: {
    icon: '/favicon.svg',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
          src="https://www.googletagmanager.com/gtag/js?id=G-65LTH5JML5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-65LTH5JML5');
          `}
        </Script>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="0ae072c1-e117-4757-9f76-79ad6b16c86e"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
