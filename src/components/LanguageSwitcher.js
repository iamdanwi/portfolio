import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { language, setLanguage, languages } = useLanguage();

  // Guard against undefined values
  if (!language || !languages || !languages[language]) {
    return null;
  }

  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center gap-1 px-3 py-2 rounded-lg text-slate-700 
                               dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 
                               transition-colors">
            <span className="text-lg">{languages[language].flag}</span>
            <ChevronDownIcon 
              className={`w-4 h-4 transition-transform duration-200 ${
                open ? 'transform rotate-180' : ''
              }`} 
            />
          </Menu.Button>
          
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-800 
                                 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
                                 border dark:border-slate-700 z-50">
              <div className="p-1">
                {Object.entries(languages).map(([code, lang]) => (
                  <Menu.Item key={code}>
                    {({ active }) => (
                      <motion.button
                        whileHover={{ x: 4 }}
                        onClick={() => setLanguage(code)}
                        className={`
                          ${active || language === code
                            ? 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
                            : 'text-slate-700 dark:text-slate-300'
                          }
                          group flex w-full items-center rounded-lg px-3 py-2 text-sm
                        `}
                      >
                        <span className="text-lg mr-2">{lang.flag}</span>
                        {lang.name}
                      </motion.button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
} 