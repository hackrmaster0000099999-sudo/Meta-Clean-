import type {Metadata, Viewport} from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#4F46E5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://metaclean.app'),
  title: 'meta Clean App Download – AI Detection Bypass & C2PA Metadata Cleaner',
  description:
    'Bypass social media AI detection and preserve organic reach. Download MetaClean Android APK to strip C2PA signatures and EXIF metadata offline.',
  keywords: [
    'MetaClean',
    'MetaClean App Download',
    'AI detection bypass',
    'strip C2PA metadata',
    'remove Midjourney watermark',
    'DALL-E metadata remover',
    'clean EXIF video android',
    'Start.io app verification',
    'com.metaclean.bypass',
  ],
  authors: [{name: 'MetaClean Core Team'}],
  creator: 'MetaClean Security Labs',
  publisher: 'MetaClean',
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'start.io-app-verification': 'metaclean-bypass-app-url-verified-2026',
    'google-play-app': 'app-id=com.metaclean.bypass',
    'package-name': 'com.metaclean.bypass',
    'application-name': 'MetaClean',
  },
  openGraph: {
    title: 'meta Clean App Download – AI Detection Bypass Utility',
    description:
      'Bypass social media AI detection and keep your organic reach. Remove EXIF metadata, C2PA digital signatures, and AI fingerprints offline in seconds.',
    url: 'https://metaclean.app',
    siteName: 'MetaClean App Download',
    images: [
      {
        url: '/images/hero_app_showcase_1790616048527.jpg',
        width: 1200,
        height: 675,
        alt: 'MetaClean Android App Download',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'meta Clean App Download – AI Detection Bypass Utility',
    description:
      'Bypass social media AI detection and preserve organic reach. Download MetaClean Android APK.',
    images: ['/images/hero_app_showcase_1790616048527.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MetaClean',
  alternateName: 'meta Clean App Download',
  operatingSystem: 'Android 8.0 and up',
  applicationCategory: 'UtilitiesApplication',
  softwareVersion: '1.0.4',
  fileSize: '18.4MB',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2840',
    bestRating: '5',
    worstRating: '1',
  },
  description:
    'Remove hidden EXIF metadata, C2PA digital signatures, and AI fingerprints from Midjourney, DALL-E, Sora, and Runway images and videos offline.',
  downloadUrl: '#download',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22%234F46E5%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z%22/><path d=%22m9 12 2 2 4-4%22/></svg>" />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] antialiased selection:bg-indigo-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
