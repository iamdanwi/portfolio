import { useEffect } from 'react';

export default function useKeyboardNavigation() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Navigation shortcuts
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'a':
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'p':
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'c':
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 't':
            // Toggle theme
            document.querySelector('[aria-label*="theme"]')?.click();
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);
} 