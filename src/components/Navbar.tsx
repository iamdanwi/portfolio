'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Process', href: '/#process' },
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/#about' },
  { name: 'Blog', href: '/#blogs' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Only update active section
      const sections = navItems.map(item => {
        const sectionId = item.href.replace(/\/#/, '');
        return sectionId === '' ? 'hero' : sectionId;
      });

      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/#hero"
            className="text-xl md:text-2xl font-[family-name:var(--font-lustria)] text-[#333] font-bold"
          >
            Dainwi Choudhary
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#333] hover:text-black"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-[#333] hover:text-black font-[family-name:var(--font-poppins)] transition-colors ${activeSection === (item.href.replace(/\/#/, '') || 'hero') ? 'font-bold' : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={
            isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
          }
          className="md:hidden overflow-hidden"
        >
          <ul className="pt-4 pb-2 space-y-2">
            {navItems.map(item => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-2 text-[#333] hover:text-black font-[family-name:var(--font-poppins)] transition-colors ${activeSection === (item.href.replace(/\/#/, '') || 'hero') ? 'font-bold' : ''
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </header>
  );
};

export default Navbar;