import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Alfrin Poulose | Frontend Developer & Software Engineer',
    template: '%s | Alfrin Poulose'
  },
  description: 'Software Engineering professional with experience in Frontend Development, React, Next.js, Spring Boot, and Android. Formerly at Hatio Innov and Levantate Labs.',
  keywords: [
    'Alfrin Poulose',
    'Frontend Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'Full Stack Developer',
    'Web Developer',
    'Portfolio',
    'JavaScript',
    'TypeScript',
    'Tailwind CSS',
    'Spring Boot',
    'Android Developer',
    'Jetpack Compose'
  ],
  authors: [{ name: 'Alfrin Poulose' }],
  creator: 'Alfrin Poulose',
  publisher: 'Alfrin Poulose',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alfrin Poulose | Frontend Developer & Software Engineer',
    description: 'Software Engineering professional with experience in Frontend Development, React, Next.js, Spring Boot, and Android. Formerly at Hatio Innov and Levantate Labs.',
    url: '/',
    siteName: 'Alfrin Poulose Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alfrin Poulose - Frontend Developer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfrin Poulose | Frontend Developer & Software Engineer',
    description: 'Software Engineering professional with experience in Frontend Development, React, Next.js, Spring Boot, and Android.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
