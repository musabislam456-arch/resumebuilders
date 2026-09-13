import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://resumebuilders.utilix.site'),
  title: 'ResumeBuilder Pro — Modern ATS-Friendly Resume Builder',
  description:
    'Create an executive-level, ATS-optimized resume in minutes with live real-time preview, professional templates, and instant 300 DPI PDF export. 100% private, client-side tool.',
  keywords: [
    'resume builder',
    'ATS resume',
    'executive resume templates',
    'free resume maker',
    'resume pdf export',
    'ATS friendly resume 2026',
  ],
  authors: [{ name: 'ResumeBuilder Pro Team' }],
  openGraph: {
    title: 'ResumeBuilder Pro — Modern ATS-Friendly Resume Builder',
    description:
      'Engineered for 2026 applicant tracking systems. Live real-time preview, multi-template switching, and 1-click vector PDF export.',
    type: 'website',
    url: 'https://resumebuilders.utilix.site',
    siteName: 'ResumeBuilder Pro',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'ResumeBuilder Pro — Modern ATS-Friendly Resume Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResumeBuilder Pro — Modern ATS-Friendly Resume Builder',
    description:
      'Create an executive-level, ATS-optimized resume in minutes with live real-time preview and instant PDF export.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: '/icon',
    shortcut: '/icon',
    apple: '/apple-icon',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'I_SaNu0LrbiQSkKmCb7bm8LRBISuViD4KTJh0FHRo2s',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* ===================================================================== */}
        {/* <!-- CHATBOT_SCRIPT_START --> */}
        {/* <!-- Paste client's chatbot <script> embed code here --> */}
        {/* <!-- CHATBOT_SCRIPT_END --> */}
        {/* ===================================================================== */}
      </body>
    </html>
  );
}
