import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage, languages } from '../context/LanguageContext';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 
                 transition-colors flex items-center gap-2"
      >
        <GlobeAltIcon className="w-5 h-5" />
        <span>{languages[language].flag}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full right-0 mt-2 bg-white dark:bg-slate-900 
                     rounded-lg shadow-lg border dark:border-slate-700 py-2"
          >
            {Object.values(languages).map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-slate-100 
                         dark:hover:bg-slate-800 flex items-center gap-2 ${
                           language === lang.code ? 'text-indigo-600' : ''
                         }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 