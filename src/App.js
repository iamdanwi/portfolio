import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { BookOpenIcon, MusicalNoteIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLink from './components/SocialLink';
import BackgroundElements from './components/BackgroundElements';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import LoadingScreen from './components/LoadingScreen';
import PageTransition from './components/PageTransition';
import ErrorBoundary from './components/ErrorBoundary';
import ResumeButton from './components/ResumeButton';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <SEO />
          <AnimatePresence mode="wait">
            {isLoading ? (
              <LoadingScreen key="loading" />
            ) : (
              <PageTransition key="main">
                <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
                  <BackgroundElements />
                  <ScrollProgress />
                  <Navigation />
                  <main className="flex-grow">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                  </main>
                  <Footer />
                  <ScrollToTop />
                </div>
              </PageTransition>
            )}
          </AnimatePresence>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-2 xs:px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full max-w-4xl px-2 xs:px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-3 xs:mb-4 sm:mb-6 font-serif">
          {t('hero.greeting')} 
          <span className="text-indigo-600 dark:text-indigo-400 block xs:inline">
            Dainwi Choudhary
          </span>
        </h1>
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 xs:mb-6 sm:mb-8 font-light">
          {t('hero.title')}
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex gap-2 xs:gap-4">
            <SocialLink href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/" icon="linkedin" />
            <SocialLink href="https://github.com/dainwi" icon="github" />
            <SocialLink href="https://instagram.com/iamdainwichoudhary" icon="instagram" />
          </div>
          <ResumeButton />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  const { t } = useLanguage();
  
  const hobbies = [
    {
      icon: <BookOpenIcon className="h-6 w-6" />,
      title: t('about.hobbies.reading'),
      description: t('about.hobbies.reading.desc')
    },
    {
      icon: <MusicalNoteIcon className="h-6 w-6" />,
      title: t('about.hobbies.music'),
      description: t('about.hobbies.music.desc')
    },
    {
      icon: <CodeBracketIcon className="h-6 w-6" />,
      title: t('about.hobbies.coding'),
      description: t('about.hobbies.coding.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">
            {t('about.title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 
                            flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">
                {hobby.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;
