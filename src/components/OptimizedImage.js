import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OptimizedImage({ src, alt, className, sizes = "100vw" }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [blurDataUrl, setBlurDataUrl] = useState('');

  useEffect(() => {
    // Create tiny placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 10;
    canvas.height = 10;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, 0, 10, 10);
    setBlurDataUrl(canvas.toDataURL());
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse"
          />
        )}
      </AnimatePresence>
      
      {/* Blurred placeholder */}
      <div
        className="absolute inset-0 blur-xl scale-110"
        style={{
          backgroundImage: `url(${blurDataUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        className={`relative w-full h-full object-cover ${isError ? 'hidden' : ''}`}
        sizes={sizes}
      />

      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
          <span className="text-slate-400">Failed to load image</span>
        </div>
      )}
    </div>
  );
} 