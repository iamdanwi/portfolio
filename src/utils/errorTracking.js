export const initErrorTracking = () => {
  window.onerror = (message, source, lineno, colno, error) => {
    console.error('Global error:', { message, source, lineno, colno, error });
    // Send to your error tracking service
  };

  window.onunhandledrejection = (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // Send to your error tracking service
  };
}; 