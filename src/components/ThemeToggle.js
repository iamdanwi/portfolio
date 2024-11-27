import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function ThemeToggle() {
  const { isDark, setIsDark } = useTheme();

  return (
    <motion.button
      initial={false}
      animate={{ 
        rotate: isDark ? 180 : 0,
        scale: [1, 1.1, 1]
      }}
      transition={{ duration: 0.2 }}
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0 
        }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <SunIcon className="h-5 w-5 text-yellow-400" />
        ) : (
          <MoonIcon className="h-5 w-5 text-gray-600" />
        )}
      </motion.div>
    </motion.button>
  );
} 