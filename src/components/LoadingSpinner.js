import { motion } from 'framer-motion';

export default function LoadingSpinner({ size = "md", light = false }) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex justify-center items-center">
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${sizes[size]} border-2 rounded-full ${
          light
            ? 'border-white border-t-transparent'
            : 'border-indigo-600 border-t-transparent'
        }`}
      />
    </div>
  );
} 