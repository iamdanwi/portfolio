import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

export default function ResumeButton() {
  return (
    <motion.a
      href="/resume.pdf"
      download
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full 
                 hover:bg-indigo-700 transition-colors gap-2 shadow-lg"
    >
      <ArrowDownTrayIcon className="h-5 w-5" />
      Download Resume
    </motion.a>
  );
} 