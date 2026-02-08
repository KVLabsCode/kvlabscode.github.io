import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Kovio | The Publisher OS',
  description: 'The operating system for publisher monetization. Kovio observes, decides, executes, and learns across your entire ad stack.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Kovio | The Publisher OS',
    description: 'The operating system for publisher monetization. Kovio observes, decides, executes, and learns across your entire ad stack.',
    siteName: 'Kovio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Kovio - The Publisher Operating System',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kovio | The Publisher OS',
    description: 'The operating system for publisher monetization. Kovio observes, decides, executes, and learns across your entire ad stack.',
    images: ['/og-image.svg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans grain-overlay`} suppressHydrationWarning>
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
