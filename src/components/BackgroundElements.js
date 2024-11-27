import { motion } from 'framer-motion';

export default function BackgroundElements() {
  return (
    <>
      {/* Hero section decorative elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-indigo-400/30 
                   dark:bg-indigo-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-[10%] -left-[10%] w-[600px] h-[600px] bg-purple-400/30 
                   dark:bg-purple-500/20 rounded-full blur-[100px]"
        />
      </div>
      
      {/* Grid pattern */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/20 
                      bg-[size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]" />
      </div>
    </>
  );
} 