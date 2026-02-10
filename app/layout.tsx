import type { Metadata, Viewport } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Outlive: The Information-Age Guide to Longevity | Peter Attia MD",
    template: "%s | Outlive Guide",
  },
  description:
    "A comprehensive strategy to live longer and better. Based on the #1 NYT Bestseller by Dr. Peter Attia. Master Medicine 3.0 today.",
  keywords: [
    "Peter Attia",
    "Outlive Book",
    "Medicine 3.0",
    "Longevity Strategy",
    "Healthspan",
    "Zone 2 Training",
    "Rapamycin",
    "Metabolic Health",
    "Early Medical",
  ],
  authors: [{ name: "Dr. Peter Attia", url: "https://peterattiamd.com" }],
  creator: "Peter Attia MD",
  openGraph: {
    type: "book",
    locale: "en_US",
    url: "https://outlive-guide.com",
    siteName: "Outlive Guide",
    title: "Outlive: The Science & Art of Longevity",
    description:
      "Stop waiting for disease. Start engineering your health. The definite guide to physical and cognitive longevity.",
    images: [
      {
        url: "/book_cover.webp", // Ideally this exists
        width: 1200,
        height: 630,
        alt: "Outlive Book Cover & Strategy Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outlive: The Science & Art of Longevity",
    description:
      "A proactive medical strategy to extend your lifespan and healthspan.",
    creator: "@PeterAttiaMD",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://outlive-guide.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "name": "Outlive: The Science and Art of Longevity",
  "author": {
    "@type": "Person",
    "name": "Peter Attia MD"
  },
  "url": "https://outlive-guide.com",
  "genre": "Health & Fitness",
  "publisher": "Harmony",
  "datePublished": "2023-03-28",
  "image": "https://outlive-guide.com/book_cover.webp",
  "description": "A groundbreaking manifesto on living better and longer that challenges the conventional medical thinking on aging and reveals a new approach to preventing chronic disease and extending long-term health.",
  "offers": {
    "@type": "Offer",
    "price": "29.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://gumroad.com/l/outlive"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-text-primary overflow-x-hidden selection:bg-cyan-100 selection:text-cyan-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gray-900 focus:text-white focus:rounded-lg focus:text-sm shadow-xl"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
