export interface FacebookEventParams {
  content_type?: string;
  content_category?: string;
  content_ids?: string[];
  content_name: string;
  value?: number;
  currency: string;
  status?: string;
  [key: string]: string | string[] | number | undefined;
}

declare global {
  interface Window {
    fbq: (
      eventName: 'track' | 'trackCustom' | 'init', 
      action: string,
      params?: FacebookEventParams
    ) => void;
  }
} 