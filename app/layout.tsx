import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://lesmoutonsmarseillais­.fr';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Les moutons Marseillais', // Fallback if no title set
    template: '%s | Les moutons Marseillais', // Format: "Page Name | Site Name"
  },
  description: 'LES MOUTONS MARSEILLAIS est un élevage ovin urbain et itinérant en plein air intégral, implanté sur le territoire de la métropole Aix Marseille Provence.',
  openGraph: {
    title: 'Les moutons Marseillais',
    description: 'LES MOUTONS MARSEILLAIS est un élevage ovin urbain et itinérant en plein air intégral, implanté sur le territoire de la métropole Aix Marseille Provence.',
    url: baseUrl,
    siteName: 'Les moutons Marseillais',
    images: [
      {
        url: '/assets/logo.png', // Place in /public
        width: 500,
        height: 500,
        alt: 'Les moutons Marseillais',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
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
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
