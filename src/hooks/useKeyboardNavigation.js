import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function useKeyboardNavigation() {
  const { setIsDark } = useTheme();
  const { setLanguage } = useLanguage();

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Navigation shortcuts with Alt key
      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'h':
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'a':
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 's':
            document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'p':
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'c':
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 't':
            setIsDark(prev => !prev); // Toggle theme
            break;
          case 'l':
            setLanguage(prev => prev === 'en' ? 'hi' : 'en'); // Toggle language
            break;
          case 'r':
            // Download resume
            document.querySelector('a[download]')?.click();
            break;
          default:
            break;
        }
      }

      // Quick actions with Ctrl key
      if (e.ctrlKey) {
        switch (e.key.toLowerCase()) {
          case 'b':
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Back to top
            break;
          case '/':
            document.querySelector('input[type="text"]')?.focus(); // Focus search/chat
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [setIsDark, setLanguage]);
} 