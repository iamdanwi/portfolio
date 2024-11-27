import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function BackgroundElements() {
  const { isDark } = useTheme();

  return (
    <>
      {/* Gradient Orbs */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2 }}
          className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] bg-indigo-400/30 
                   dark:bg-indigo-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-[20%] -left-[20%] w-[900px] h-[900px] bg-purple-400/30 
                   dark:bg-purple-500/20 rounded-full blur-[120px]"
        />
      </div>
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 -z-40 pointer-events-none">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 
                      bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-white/10' : 'bg-slate-900/10'
            }`}
          />
        ))}
      </div>

      {/* Theme-based Overlay */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-transparent via-transparent to-slate-50/50 
                    dark:to-slate-900/50 pointer-events-none" />
    </>
  );
} 