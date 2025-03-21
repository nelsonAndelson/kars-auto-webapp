declare global {
  interface Window {
    fbq: any;
  }
}

// Standard Events
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
    console.log('🔍 Meta Pixel Event: PageView');
  }
};

export const trackLead = (data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data);
    console.log('🎯 Meta Pixel Event: Lead', data);
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
    console.log('👀 Meta Pixel Event: ViewContent', data);
  }
};

export const trackInitiateCheckout = (data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', data);
    console.log('🛒 Meta Pixel Event: InitiateCheckout', data);
  }
};

export const trackContact = (data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', data);
    console.log('📞 Meta Pixel Event: Contact', data);
  }
};

// Custom Events
export const trackCustomEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
    console.log(`🎈 Meta Pixel Custom Event: ${eventName}`, data);
  }
}; 