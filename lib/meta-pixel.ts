declare global {
  interface Window {
    fbq: any;
  }
}

// Standard Events
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

export const trackLead = (data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data);
  }
};

export const trackViewContent = (data: {
  content_name?: string;
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', data);
  }
};

export const trackInitiateCheckout = (data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', data);
  }
};

export const trackContact = (data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', data);
  }
};

// Custom Events
export const trackCustomEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
  }
}; 