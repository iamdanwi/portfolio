import { motion } from 'framer-motion';

export default function SkeletonLoader({ type = "text", count = 1 }) {
  const skeletons = {
    text: "h-4 bg-slate-200 dark:bg-slate-700 rounded w-full",
    title: "h-8 bg-slate-200 dark:bg-slate-700 rounded w-3/4",
    image: "aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg",
    avatar: "w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full",
    button: "h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-32"
  };

  return (
    <div className="space-y-4 w-full">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: i * 0.1 }}
          className={skeletons[type]}
        >
          <div className="h-full w-full animate-pulse" />
        </motion.div>
      ))}
    </div>
  );
} 