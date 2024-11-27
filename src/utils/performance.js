import { CONFIG } from '../config/production';

// Image optimization
export const getOptimizedImageUrl = (url, width = 800) => {
  if (!url) return '';
  return `${url}?w=${width}&q=${CONFIG.IMAGE_QUALITY}`;
};

// Lazy loading
export const lazyLoadOptions = {
  root: null,
  rootMargin: CONFIG.LAZY_LOAD_OFFSET,
  threshold: 0.1
};

// Cache management
const cache = new Map();

export const getCachedData = (key) => {
  const cached = cache.get(key);
  if (!cached) return null;
  
  if (Date.now() - cached.timestamp > CONFIG.CACHE_DURATION) {
    cache.delete(key);
    return null;
  }
  
  return cached.data;
};

export const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
}; 