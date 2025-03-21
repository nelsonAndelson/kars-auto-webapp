// Meta Pixel Event Data Types
interface BaseEventData {
  value?: number;
  currency?: string;
  content_name?: string;
}

interface LeadEventData extends BaseEventData {
  status?: 'submitted' | 'success' | 'failed';
  vehicle_type?: string;
  buying_stage?: string;
  payment_range?: string;
  lead_type?: string;
}

interface ViewContentEventData extends BaseEventData {
  content_category?: string;
  content_ids?: string[];
  content_type?: string;
}

interface CheckoutEventData extends BaseEventData {
  content_ids?: string[];
  content_type?: string;
  num_items?: number;
}

interface ContactEventData extends BaseEventData {
  status?: 'submitted' | 'success' | 'failed';
  contact_type?: 'general' | 'sales' | 'service';
  preferred_contact_method?: 'email' | 'phone';
}

interface CustomEventData extends BaseEventData {
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    fbq: (
      method: 'track' | 'trackCustom',
      eventName: string,
      data?: BaseEventData
    ) => void;
  }
}

// Standard Events
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
    console.log('🔍 Meta Pixel Event: PageView');
  }
};

export const trackLead = (data: LeadEventData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', data);
    console.log('🎯 Meta Pixel Event: Lead', data);
  }
};

export const trackViewContent = (data: ViewContentEventData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', data);
    console.log('👀 Meta Pixel Event: ViewContent', data);
  }
};

export const trackInitiateCheckout = (data: CheckoutEventData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', data);
    console.log('🛒 Meta Pixel Event: InitiateCheckout', data);
  }
};

export const trackContact = (data: ContactEventData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', data);
    console.log('📞 Meta Pixel Event: Contact', data);
  }
};

// Custom Events
export const trackCustomEvent = (eventName: string, data: CustomEventData) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, data);
    console.log(`🎈 Meta Pixel Custom Event: ${eventName}`, data);
  }
}; 