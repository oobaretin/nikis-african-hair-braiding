import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Niki's African Hair Braiding - African Braids & Boho Hair in Katy, Texas",
  description: "Niki's African hair braiding and boho hair seller. Expert African braids and boho styles in Katy, Texas. Fast, professional, and gentle. Book your appointment today!",
  keywords: 'African hair braiding, boho hair, braids, Katy Texas, hair salon, professional braiding, protective styles, box braids, knotless braids, cornrows, Niki',
  authors: [{ name: "Niki's African Hair Braiding" }],
  creator: "Niki's African Hair Braiding",
  publisher: "Niki's African Hair Braiding",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nikisafricanhair.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Niki's African Hair Braiding - African Braids & Boho Hair in Katy, Texas",
    description: "Niki's African hair braiding and boho hair seller. Expert African braids and boho styles. Fast, professional, and gentle braiding.",
    url: 'https://www.nikisafricanhair.com',
    siteName: "Niki's African Hair Braiding",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Niki's African Hair Braiding - African Braids & Boho Hair",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Niki's African Hair Braiding - African Braids & Boho Hair in Katy, Texas",
    description: "Niki's African hair braiding and boho hair seller. Expert African braids and boho styles. Fast, professional, and gentle braiding.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BookingProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
