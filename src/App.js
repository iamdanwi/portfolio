import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import { ThemeProvider } from './context/ThemeContext';
import { BookOpenIcon, MusicalNoteIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialLink from './components/SocialLink';
import BackgroundElements from './components/BackgroundElements';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <BackgroundElements />
        <ScrollProgress />
        <Navigation />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 font-serif">
          Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Dainwi Choudhary</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light">
          Full Stack Developer & Problem Solver
        </p>
        <div className="flex justify-center gap-4">
          <SocialLink href="https://www.linkedin.com/in/dainwi-choudhary-80612a325/" icon="linkedin" />
          <SocialLink href="https://github.com/dainwi" icon="github" />
          <SocialLink href="https://instagram.com/iamdainwichoudhary" icon="instagram" />
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  const hobbies = [
    {
      icon: <BookOpenIcon className="h-6 w-6" />,
      title: "Reading",
      description: "Exploring new perspectives through books"
    },
    {
      icon: <MusicalNoteIcon className="h-6 w-6" />,
      title: "Music",
      description: "Finding inspiration in melodies"
    },
    {
      icon: <CodeBracketIcon className="h-6 w-6" />,
      title: "Coding",
      description: "Building innovative solutions"
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
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I am a passionate full-stack developer with a strong foundation in programming and a love 
            for creating innovative solutions. I specialize in modern web development technologies like 
            React, Next.js, Tailwind CSS, and PostgreSQL. Beyond coding, I enjoy reading books that 
            broaden my perspective and listening to music that fuels my creativity.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 text-center"
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
