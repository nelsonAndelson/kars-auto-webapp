import { FacebookEventParams } from "@/types/facebook";

export const trackFBEvent = (
  eventName: string, 
  params?: FacebookEventParams
) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, params);
      if (process.env.NODE_ENV !== 'production') {
        console.log('FB Event Tracked:', eventName, params);
      }
    }
  } catch (error) {
    console.error('FB Event Error:', error);
  }
};

export const trackCustomFBEvent = (
  eventName: string, 
  params?: FacebookEventParams
) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, params);
      if (process.env.NODE_ENV !== 'production') {
        console.log('FB Custom Event Tracked:', eventName, params);
      }
    }
  } catch (error) {
    console.error('FB Custom Event Error:', error);
  }
}; 