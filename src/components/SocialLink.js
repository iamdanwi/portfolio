import { motion } from 'framer-motion';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram 
} from 'react-icons/fa';

export default function SocialLink({ href, icon }) {
  const icons = {
    linkedin: FaLinkedinIn,
    github: FaGithub,
    instagram: FaInstagram
  };

  const Icon = icons[icon];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center 
                 justify-center text-slate-600 dark:text-slate-300 hover:text-indigo-600 
                 dark:hover:text-indigo-400 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
} 