import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

// Components
import { Footer, MobileHeader, MobileNav, SideNav } from '@/components/layout';
import { GoogleAnalytics } from '@/components/analytics';

// Providers
import { Providers } from '@/utils/Providers';
import { siteConfig } from '@/config/site';

const montserrat = Montserrat({ subsets: ['latin'] });

// Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

// Vercel Speed Insights
import { SpeedInsights } from '@vercel/speed-insights/next';


// Metadata
export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    siteName: siteConfig.name,
    url: '/',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitterHandle,
    title: `${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <Analytics />
      <body className={montserrat.className}>
        <Providers>
          <div className="block lg:hidden">
            <MobileHeader />
          </div>
          <div className="flex w-full">
            <div className="sticky top-0 hidden h-screen lg:block">
              <SideNav />
            </div>
            <div className="w-full">
              {children}
              <Footer />
            </div>
            <div className="block lg:hidden">
              <MobileNav />
            </div>
          </div>
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
