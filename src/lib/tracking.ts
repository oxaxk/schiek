const PHONE_CONVERSION = 'AW-412662118/6fAYCNjKlYQcEOby4sQB';

function canTrack() {
  if (typeof window === 'undefined') return false;
  return (
    (window as any).__CONSENT_MARKETING__ === true &&
    typeof (window as any).gtag === 'function'
  );
}

function sendConversion(sendTo: string) {
  if (!canTrack()) return;

  (window as any).gtag('event', 'conversion', {
    send_to: sendTo,
  });
}

export function trackPhoneClick() {
  sendConversion(PHONE_CONVERSION);
}

export function initPhoneClickTracking() {
  if (typeof window === 'undefined') return;

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null;
    if (!link) return;

    sendConversion(PHONE_CONVERSION);
  });
}