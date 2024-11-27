export const CONFIG = {
  // API endpoints
  API_URL: process.env.REACT_APP_API_URL || 'https://api.dainwi.vercel.app',
  
  // Analytics
  GA_TRACKING_ID: process.env.REACT_APP_GA_TRACKING_ID,
  
  // Feature flags
  ENABLE_BLOG: false,
  ENABLE_NEWSLETTER: false,
  
  // Cache settings
  CACHE_DURATION: 3600000, // 1 hour
  
  // Performance settings
  IMAGE_QUALITY: 80,
  LAZY_LOAD_OFFSET: '100px',
  
  // SEO settings
  DEFAULT_LANGUAGE: 'en',
  AVAILABLE_LANGUAGES: ['en', 'hi', 'es', 'fr', 'de'],
  
  // Social media
  SOCIAL_LINKS: {
    LINKEDIN: 'https://www.linkedin.com/in/dainwi-choudhary-80612a325/',
    GITHUB: 'https://github.com/dainwi',
    INSTAGRAM: 'https://instagram.com/iamdainwichoudhary'
  }
}; 