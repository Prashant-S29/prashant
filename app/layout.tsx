import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

// Components
import { Footer, MobileHeader, MobileNav, SideNav } from '@/components/layout';

// Providers
import { Providers } from '@/utils/Providers';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Code-Prashant v4 :: Prashant Singh's Portfolio",
  description:
    "It's all about the design and development process. The more you know about it, the better you'll be at it. I am Prashant Singh and this is v4 of my portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}
