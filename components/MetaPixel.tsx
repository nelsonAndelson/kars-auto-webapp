"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function MetaPixel() {
  useEffect(() => {
    const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    if (!pixelId) {
      console.error('Facebook Pixel ID is not defined in environment variables');
      return;
    }
  }, []);

  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  if (!pixelId) return null;

  return (
    <>
      <Script 
        id="facebook-pixel" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Meta Pixel loaded successfully');
        }}
        onError={(e) => {
          console.error('Meta Pixel failed to load:', e);
        }}
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${pixelId}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
} 