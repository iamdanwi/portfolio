'use client';

// import type { Metadata } from 'next';
import { Lustria, Poppins } from 'next/font/google';
import './globals.css';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { usePathname } from 'next/navigation';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: '200',
  display: 'swap',
});

const lustria = Lustria({
  variable: '--font-lustria',
  subsets: ['latin'],
  weight: '400',
});

// const metadata: Metadata = {
//   title: 'Dainwi Kumar',
//   description: 'A full stack developer',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 2000);

    // Scroll progress handler
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lustria.variable} ${poppins.variable} antialiased `}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-[#333] font-[family-name:var(--font-lustria)]"
              >
                Dainwi Choudhary
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Progress
                value={scrollProgress}
                className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent"
              />
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
