let initialized = false;

const ADS_ID = 'AW-11397219929';

function ensureDataLayer() {
  if (typeof window === 'undefined') return;
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(){(window as any).dataLayer.push(arguments);} 
  (window as any).gtag = (window as any).gtag || gtag;
}

export function initGoogleAds() {
  if (typeof window === 'undefined') return;
  if (initialized) return;

  ensureDataLayer();

  // Required init
  (window as any).gtag('js', new Date());

  // Base config (no automatic consent granted here)
  (window as any).gtag('config', ADS_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
  });
}

export function setConsentDefault() {
  if (typeof window === 'undefined') return;
  ensureDataLayer();

  (window as any).gtag('consent', 'default', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });
}

export function updateConsentGranted() {
  if (typeof window === 'undefined') return;

  if (!initialized) {
    ensureDataLayer();

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
    document.head.appendChild(script);

    (window as any).gtag('js', new Date());

    (window as any).gtag('config', ADS_ID, {
      anonymize_ip: true,
      allow_google_signals: false,
    });

    initialized = true;
  }

  (window as any).gtag('consent', 'update', {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted'
  });
}

export function updateConsentDenied() {
  if (typeof window === 'undefined') return;

  (window as any).gtag('consent', 'update', {
    ad_storage: 'denied',
    analytics_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
}

export function trackCallClick() {
  if (typeof window === 'undefined') return;

  const gtag = (window as any).gtag;
  if (typeof gtag !== 'function') return;

  gtag('event', 'conversion', {
    send_to: 'AW-412662118/6fAYCNjKlYQcEOby4sQB'
  });
}