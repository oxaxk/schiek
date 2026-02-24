import { useEffect, useState } from 'react';

const ADS_ID = import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined;

type ConsentStatus = 'accepted' | 'rejected' | 'unset';

const STORAGE_KEY = 'abschlepp1-cookie-consent-v1';

function getInitialStatus(): ConsentStatus {
  if (typeof window === 'undefined') return 'unset';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'accepted' || stored === 'rejected') {
      return stored as ConsentStatus;
    }
  } catch {
    // Fallback, wenn localStorage geblockt ist
  }
  return 'unset';
}

function loadGoogleAdsTag() {
  if (typeof window === 'undefined') return;

  if (typeof document === 'undefined') return;

  if (!ADS_ID) return;

  if ((window as any).googleAdsLoaded) {
    return;
  }

  (window as any).googleAdsLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
  script.setAttribute('data-cookie', 'google-ads');
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('consent', 'default', {
      ad_storage: 'granted',
      analytics_storage: 'denied'
    });
    gtag('js', new Date());
    gtag('config', '${ADS_ID}', { anonymize_ip: true });
  `;
  inline.setAttribute('data-cookie', 'google-ads');
  document.head.appendChild(inline);
}

function loadDesignAssets() {
  if (typeof window === 'undefined') return;

  if ((window as any).designAssetsLoaded) {
    return;
  }

  (window as any).designAssetsLoaded = true;

  const links = [
    {
      id: 'fa-css',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    },
    {
      id: 'ri-css',
      href: 'https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css',
    },
  ];

  links.forEach((link) => {
    if (!document.head.querySelector(`link[data-id="${link.id}"]`)) {
      const el = document.createElement('link');
      el.rel = 'stylesheet';
      el.href = link.href;
      el.setAttribute('data-id', link.id);
      document.head.appendChild(el);
    }
  });
}

export default function CookieBanner() {
  const [status, setStatus] = useState<ConsentStatus>('unset');
  const isVisible = status === 'unset';

  useEffect(() => {
    const initial = getInitialStatus();
    setStatus(initial);
    if (initial === 'accepted') {
      loadGoogleAdsTag();
      loadDesignAssets();
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, 'accepted');
      } catch {
        // ignore storage errors
      }
    }
    setStatus('accepted');
    loadGoogleAdsTag();
    loadDesignAssets();
  };

  const handleReject = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, 'rejected');
      } catch {
        // ignore storage errors
      }
    }
    setStatus('rejected');
    // Remove Google Ads scripts
    document
      .querySelectorAll('script[data-cookie="google-ads"]')
      .forEach((el) => el.remove());
    // Remove optional design assets
    document
      .querySelectorAll('link[data-id="fa-css"], link[data-id="ri-css"]')
      .forEach((el) => el.remove());
    // Reset runtime flags
    (window as any).googleAdsLoaded = false;
    (window as any).designAssetsLoaded = false;
    // Hier sicherstellen: keine optionalen Cookies / Tracker laden.
  };

  // Wenn noch keine Entscheidung getroffen wurde: großer Overlay-Dialog
  if (isVisible) {
    return (
      <div role="dialog" aria-modal="true" className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center bg-black/60">
        <div className="w-full sm:max-w-xl mx-4 mb-4 sm:mb-0 rounded-3xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.35)] p-5 sm:p-6">
          <h2
            className="text-base sm:text-lg font-semibold mb-2"
          >
            Cookies &amp; Datenschutz
          </h2>
          <p
            className="text-xs sm:text-sm text-[#0F172A]/80 mb-4"
          >
            Wir verwenden technisch notwendige Cookies. Tracking, Marketing und externe Dienste (z. B. Google Ads, Icon-Fonts) werden nur nach deiner ausdrücklichen Einwilligung geladen. 
            Details findest du in unserer&nbsp;
            <a href="/datenschutz" className="underline hover:no-underline">
              Datenschutzerklärung
            </a>
            &nbsp;und in den&nbsp;
            <a href="/cookie" className="underline hover:no-underline">
              Cookie-Einstellungen
            </a>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <button
              type="button"
              onClick={handleReject}
              className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium border border-[#0F3D8C]/30 text-[#0F3D8C] hover:bg-[#0F3D8C]/5 transition-colors"
            >
              Nur notwendige Cookies
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium bg-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] transition-colors"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Nach Entscheidung: kleines Widget unten rechts
  return (
    <button
      type="button"
      aria-label="Cookie-Einstellungen öffnen"
      onClick={() => setStatus('unset')}
      className="fixed bottom-4 right-4 z-[9998] px-4 py-2.5 rounded-full bg-[#0F3D8C] text-white text-xs sm:text-sm font-medium shadow-[0_10px_30px_rgba(15,61,140,0.45)] hover:bg-[#0C316F] transition-colors"
    >
      Cookie-Einstellungen
    </button>
  );
}