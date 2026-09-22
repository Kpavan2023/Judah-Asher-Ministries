// Suppress missing type declarations for global CSS import
// TypeScript may not have a declaration for '*.css' in this project setup
// @ts-ignore
import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jcwmm.org'),

  title: 'Judah Asher Ministries',

  description:
    'Official website of Judah Asher Ministries. Join us for worship, prayer, Bible study, live sermons, and fellowship in Hyderabad, Telangana.',

  keywords: [
    'Judah Asher Ministries',
    'church Hyderabad',
    'Telangana church',
    'worship',
    'sermons',
    'prayer',
    'Sunday service',
    'Christian church India',
  ],

  authors: [{ name: 'Judah Asher Ministries' }],

  /* Favicon + mobile icons */
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },

  /* Web app manifest */
  manifest: '/site.webmanifest',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Judah Asher Ministries',
    description:
      'Official website of Judah Asher Ministries. Join us for worship, prayer, Bible study, live sermons, and fellowship.',
    siteName: 'Judah Asher Ministries',
    images: [
      {
        url: '/images/both_pic.png',
        width: 800,
        height: 800,
        alt: 'Judah Asher Ministries Logo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Judah Asher Ministries',
    description:
      "Official website of Judah Asher Ministries — Sharing God's Word, Transforming Lives, Walking in Faith.",
    images: ['/images/both_pic.png'],
  },

  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Church',
      name: 'Judah Asher Ministries',
      description:
        'A Spirit-filled, Word-centered ministry committed to making disciples and transforming lives.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN',
      },
      url: 'https://jcwmm.org',
      sameAs: [
        'https://www.youtube.com/@JCWMMOFFICIAL',
        'https://www.facebook.com/JCWMMOFFICIAL',
        'https://www.instagram.com/jcwmmofficial',
      ],
    }),
  },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('jcwmm-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} font-inter antialiased`}>{children}</body>
    </html>
  );
}
