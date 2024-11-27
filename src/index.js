import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { initErrorTracking } from './utils/errorTracking';
import { CONFIG } from './config/production';
import './index.css';

// Initialize error tracking
initErrorTracking();

// Performance monitoring
if (CONFIG.ENABLE_PERFORMANCE_MONITORING) {
  // Report Web Vitals
  const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };

  // Monitor performance
  reportWebVitals(console.log);
}

// Create root with error boundary
const container = document.getElementById('root');
const root = createRoot(container);

// Render app with providers
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Enable service worker for PWA
if ('serviceWorker' in navigator && CONFIG.ENABLE_PWA) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('SW registered:', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed:', registrationError);
      });
  });
}
