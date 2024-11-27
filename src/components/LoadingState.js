import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

export default function LoadingState({ text = "Loading..." }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[200px] gap-4"
    >
      <LoadingSpinner size="lg" />
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-slate-600 dark:text-slate-300 font-medium"
      >
        {text}
      </motion.p>
    </motion.div>
  );
} 