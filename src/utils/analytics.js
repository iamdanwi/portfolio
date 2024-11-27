export const logPageView = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'YOUR-GA-ID', {
      page_path: window.location.pathname,
    });
  }
};

export const logEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}; 