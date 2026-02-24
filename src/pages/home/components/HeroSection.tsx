import { useEffect, useState } from 'react';
import Button from '../../../components/base/Button';

const heroImages = [
  {
    src: '/images/hero/1.png',
    alt: 'Abschleppdienst Schiek – Abschleppfahrzeug im Einsatz in Berlin'
  },
  {
    src: '/images/hero/2.png',
    alt: 'Abschleppdienst Schiek – Pannenhilfe nachts in Berlin'
  },
  {
    src: '/images/hero/3.png',
    alt: 'Abschleppdienst Schiek – Unfallbergung auf einer Berliner Straße'
  },
  {
    src: '/images/hero/4.png',
    alt: 'Abschleppdienst Schiek – Abschleppwagen bei der Bergung eines Fahrzeugs'
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    const start = () => {
      if (!interval) {
        interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000);
      }
    };

    const stop = () => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        start();
      } else {
        stop();
      }
    };

    start();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const handleMoreClick = () => {
    if (typeof document === 'undefined') return;

    const target = document.getElementById('services');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCallClick = () => {
    if (typeof window === 'undefined') return;

    // Google Ads Conversion (nur wenn gtag geladen wurde)
    if ((window as any).gtag && import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID) {
      (window as any).gtag('event', 'conversion', {
        send_to: import.meta.env.VITE_GOOGLE_ADS_CONVERSION_ID
      });
    }

    window.location.href = 'tel:+4917655677271';
  };

  const handleWhatsAppClick = () => {
    if (typeof window === 'undefined') return;
    window.open('https://wa.me/4917655677271', '_blank');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-stretch">
          {/* Left: Card with content */}
          <div className="relative">
            <div className="absolute -top-8 -left-10 h-20 w-20 rounded-full bg-sky-100/70 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-16 h-24 w-24 rounded-full bg-sky-200/60 blur-3xl pointer-events-none" />

            <div className="relative h-full rounded-3xl bg-white shadow-[0_22px_60px_rgba(15,23,42,0.08)] border border-slate-100 px-6 sm:px-8 py-7 sm:py-8 flex flex-col justify-between">
              <div>
                <p
                  className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-1.5 text-[0.7rem] tracking-[0.22em] uppercase text-[#0F3D8C] mb-5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Abschleppdienst Berlin 24/7
                </p>

                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-4xl lg:text-[2.4rem] font-semibold leading-tight mb-3 text-slate-900"
                >
                  Abschleppdienst Berlin – 24/7 Notdienst
                  <span className="block text-[1.05rem] sm:text-[1.1rem] font-normal text-slate-600 mt-1.5">
                    Schnelle Hilfe bei Panne & Unfall · Falschparker auf Privatgrund · Berlin & Umland
                  </span>
                </h1>

                <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-amber-50 border border-amber-200 px-4 py-2">
                  <div className="flex items-center gap-1 text-amber-500 text-base">
                    <i className="ri-star-fill" aria-hidden="true" />
                    <i className="ri-star-fill" aria-hidden="true" />
                    <i className="ri-star-fill" aria-hidden="true" />
                    <i className="ri-star-fill" aria-hidden="true" />
                    <i className="ri-star-fill" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    4,9 bei Google · Direkter Kontakt · 24/7 erreichbar
                  </span>
                </div>

                <p
                  className="mt-4 text-base sm:text-[1.02rem] leading-relaxed text-slate-700 max-w-xl"
                >
                  Schnelle Hilfe bei Panne oder Unfall. Direkter Kontakt zum Fahrer, transparente Preise vorab und Einsatz rund um die Uhr – auch nachts und an Feiertagen.
                </p>

                <ul className="mt-5 space-y-2.5 text-sm sm:text-[0.95rem] text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-4 w-4 rounded-full bg-emerald-500/15 flex items-center justify-center text-[0.65rem] text-emerald-600">
                      ✓
                    </span>
                    <span>24/7 Pannenhilfe, Abschleppdienst &amp; Unfallbergung in ganz Berlin.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-4 w-4 rounded-full bg-sky-500/15 flex items-center justify-center text-[0.65rem] text-sky-600">
                      ✓
                    </span>
                    <span>Falschparker abschleppen auf Privatgrund, Einfahrten und Stellplätzen in Berlin.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1 h-4 w-4 rounded-full bg-slate-900/5 flex items-center justify-center text-[0.65rem] text-slate-700">
                      ✓
                    </span>
                    <span>Direkte Erreichbarkeit unseres Abschleppdienstes – ohne Vermittlungsplattform.</span>
                  </li>
                </ul>
              </div>

              {/* CTAs */}
              <div className="mt-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    type="button"
                    onClick={handleCallClick}
                    size="lg"
                    className="text-[0.75rem] sm:text-sm md:text-[0.9rem] px-7 sm:px-8 py-3.5 rounded-full bg-sky-500 text-white border border-sky-500 shadow-[0_16px_38px_rgba(56,189,248,0.45)] tracking-[0.22em] uppercase hover:bg-sky-600 hover:border-sky-600"
                  >
                    <i className="ri-phone-line mr-3 text-lg sm:text-xl" aria-hidden="true" />
                    Jetzt anrufen
                  </Button>

                  <Button
                    type="button"
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="text-[0.75rem] sm:text-sm md:text-[0.9rem] px-6 sm:px-7 py-3 rounded-full bg-emerald-500 text-white border border-emerald-500 shadow-[0_16px_38px_rgba(16,185,129,0.5)] tracking-[0.22em] uppercase hover:bg-emerald-600 hover:border-emerald-600"
                  >
                    <i className="ri-whatsapp-line mr-2 text-lg" aria-hidden="true" />
                    WhatsApp
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={handleMoreClick}
                  className="inline-flex items-center gap-2 text-[0.75rem] sm:text-xs md:text-sm font-medium tracking-[0.22em] uppercase text-sky-700 hover:text-sky-900"
                >
                  Leistungen ansehen
                  <span className="h-px w-10 bg-sky-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Visual column mit Carousel */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-y-4 right-0 w-full rounded-3xl bg-gradient-to-b from-[#0F3D8C] via-sky-700 to-sky-500 opacity-90 blur-3xl pointer-events-none" />

            <div className="relative w-full max-w-md">
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden border border-white/40 shadow-[0_22px_60px_rgba(15,23,42,0.75)] bg-slate-900/95 backdrop-blur-xl">
                {heroImages.map((image, index) => (
                  <img
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    decoding="async"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Vorheriges Bild"
                  className="h-9 w-9 rounded-full bg-white/95 text-[#0F3D8C] flex items-center justify-center text-lg shadow-[0_10px_25px_rgba(15,23,42,0.35)] border border-slate-200 hover:bg-sky-50 hover:text-sky-800"
                >
                  ‹
                </button>

                <div className="flex items-center gap-2">
                  {heroImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentIndex(idx)}
                      aria-label={`Bild ${idx + 1} anzeigen`}
                      className={`h-2.5 w-2.5 rounded-full border ${
                        idx === currentIndex
                          ? 'bg-white border-white'
                          : 'bg-white/25 border-white/60'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Nächstes Bild"
                  className="h-9 w-9 rounded-full bg-white/95 text-[#0F3D8C] flex items-center justify-center text-lg shadow-[0_10px_25px_rgba(15,23,42,0.35)] border border-slate-200 hover:bg-sky-50 hover:text-sky-800"
                >
                  ›
                </button>
              </div>

              <div className="mt-4 rounded-2xl bg-white/95 border border-slate-100 px-4 py-3 text-xs sm:text-[0.8rem] text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-medium">
                    Einsatzgebiet Berlin &amp; Brandenburg
                  </span>
                  <span className="inline-flex items-center gap-1 text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Bereitschaft aktiv
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}