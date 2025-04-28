import type { Metadata } from 'next';
import { Poppins, Raleway, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Unique monospaced display font for headings and special elements
const syneMono = Syne({
  variable: '--font-syne-mono',
  subsets: ['latin'],
  weight: ['400'],
});

// Primary font for body text and general content
const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

// Accent font for UI elements and special sections
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  title: 'Dainwi Choudhary | Full-Stack & iOS Developer',
  description:
    'Portfolio showcasing frontend, backend, and iOS development work',
  keywords: 'software developer, frontend, backend, iOS, full-stack developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${syneMono.variable}
          ${raleway.variable}
          ${poppins.variable}
          font-raleway antialiased
          max-w-[1200px] mx-auto
          bg-[#171717] text-foreground
          px-4 md:px-6
        `}
      >
        <Navbar />
        <main className="py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
