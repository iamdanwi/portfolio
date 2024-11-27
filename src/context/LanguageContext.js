import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: {
    name: 'English',
    code: 'en',
    flag: '🇺🇸'
  },
  hi: {
    name: 'हिंदी',
    code: 'hi',
    flag: '🇮🇳'
  }
};

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    // Add more translations
  },
  hi: {
    'nav.home': 'होम',
    'nav.about': 'परिचय',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.contact': 'संपर्क',
    // Add more translations
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const value = {
    language,
    setLanguage,
    t: (key) => translations[language][key] || key
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 