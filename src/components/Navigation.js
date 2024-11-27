import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg' 
                : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <button 
                onClick={() => scrollToSection('#home')}
                className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 font-serif"
              >
                DC
              </button>
            </motion.div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 
                             hover:text-indigo-600 dark:text-slate-200 
                             dark:hover:text-indigo-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </nav>
      <div className="h-16" />
    </>
  );
} 