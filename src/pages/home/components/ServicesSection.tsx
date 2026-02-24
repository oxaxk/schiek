import { useState, useRef, useEffect } from 'react';
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import Button from '../../../components/base/Button';

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const currentXRef = useRef<number>(0);
  const isDraggingRef = useRef<boolean>(false);

  const services = [
    {
      icon: 'ri-roadster-line',
      title: 'Pannenhilfe Berlin 24/7',
      description:
        'Schnelle Pannenhilfe in Berlin und Umgebung – wir sichern die Stelle, laden dein Fahrzeug und bringen es sicher zur Wunschwerkstatt.',
      image: '/images/services/5.png'
    },
    {
      icon: 'ri-alert-line',
      title: 'Unfallbergung Berlin',
      description:
        'Bergung von Unfallfahrzeugen in Berlin nach Kollision oder Schaden – inkl. Absicherung der Unfallstelle und abgestimmtem Abtransport.',
      image: '/images/services/6.png'
    },
    {
      icon: 'ri-parking-box-line',
      title: 'Falschparker abschleppen Privatgrund',
      description:
        'Abschleppen von Falschparkern auf Privatparkplätzen, Einfahrten und Zufahrten in Berlin – mit sauberer Dokumentation und transparenter Abwicklung.',
      image: '/images/services/7.png'
    },
    {
      icon: 'ri-battery-2-charge-line',
      title: 'Starthilfe & Pannendienst Berlin',
      description:
        'Starthilfe bei leerer Batterie, Reifenpannen-Unterstützung und kleine Soforthilfen vor Ort in Berlin – Teil unseres Abschleppdienstes, damit du im besten Fall gar nicht abgeschleppt werden musst.',
      image: '/images/services/8.png'
    },
    {
      icon: 'ri-building-4-line',
      title: 'Abschleppen Hof & Tiefgarage',
      description:
        'Abschleppdienst und Bergen von Fahrzeugen aus engen Höfen, Tiefgaragen und Zufahrten in Berlin – mit passendem Gerät und viel Erfahrung.',
      image: '/images/services/9.png'
    },
    {
      icon: 'ri-motorbike-line',
      title: 'Motorrad & Roller abschleppen',
      description:
        'Sicherer Transport von Motorrädern, Rollern und kleinen Fahrzeugen in Berlin nach Panne oder Unfall – ohne Autohaus- oder Händlertransporte.',
      image: '/images/services/10.png'
    }
  ];

  const goToSlide = (index: number) => {
    const normalizedIndex = (index + services.length) % services.length;
    if (normalizedIndex === currentIndex) return;

    setCurrentIndex(normalizedIndex);

    const el = mobileScrollRef.current;
    if (el) {
      el.scrollTo({
        left: normalizedIndex * el.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex + 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    goToSlide(currentIndex - 1);
    setTimeout(() => setIsTransitioning(false), 350);
  };

  // Touch/Mouse handlers for swipe functionality
  const handleStart = (clientX: number) => {
    if (isTransitioning) return;
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDraggingRef.current || isTransitioning) return;
    currentXRef.current = clientX;
  };

  const handleEnd = () => {
    if (!isDraggingRef.current || isTransitioning) return;
    
    const deltaX = currentXRef.current - startXRef.current;
    const threshold = 50;

    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    isDraggingRef.current = false;
  };

  // Mobile scroll handler for snap carousel
  const handleMobileScroll = () => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const newIndex = Math.round(el.scrollLeft / el.clientWidth);
    if (newIndex !== currentIndex) setCurrentIndex(newIndex);
  };

  // Mouse events
  const handleMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };


  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e: ReactTouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    handleStart(touch.clientX);
  };

  const handleTouchMove = (e: ReactTouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    handleMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = sectionRef.current;
      const el = mobileScrollRef.current;
      if (!sectionEl || !el) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      // Nur reagieren, wenn Section im Viewport ist
      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const sectionHeight = rect.height || 1;
      const distanceFromTop = Math.min(Math.max(-rect.top, 0), sectionHeight);
      const progress = distanceFromTop / sectionHeight; // 0 = oben, 1 = unten

      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      const targetScrollLeft = progress * maxScrollLeft;

      el.scrollTo({ left: targetScrollLeft, behavior: 'smooth' });

      const maxIndex = services.length - 1;
      const targetIndex = Math.round(progress * maxIndex);
      if (targetIndex !== currentIndex) {
        setCurrentIndex(targetIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentIndex, services.length]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDraggingRef.current) {
        handleEnd();
      }
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        handleMove(e.clientX);
      }
    };

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);


  return (
    <section
      id="services"
      ref={sectionRef}
      aria-labelledby="services-heading"
      className="py-14 lg:py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 lg:mb-16">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-3 text-[#0F3D8C]"
          >
            Unsere Leistungen
          </p>
          <h2
            id="services-heading"
            className="text-3xl lg:text-4xl font-semibold mb-4 text-[#0F172A]"
          >
            Abschleppdienst Berlin 24h – Pannenhilfe, Unfall & Falschparker
          </h2>
          <p
            className="text-base lg:text-lg opacity-90 max-w-3xl mx-auto text-[#0F172A]"
          >
            Unser Abschleppdienst in Berlin bietet 24/7 Pannenhilfe, Unfallbergung und das rechtssichere Abschleppen von Falschparkern auf Privatgrund. Wir sind in allen Berliner Bezirken sowie im Berliner Umland im Einsatz und direkt erreichbar.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">

          {/* Card Container with proper spacing - jetzt für alle Viewports */}
          <div className="w-full px-4 lg:px-20">
            <div
              ref={mobileScrollRef}
              className="w-full flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-6 px-4"
              onScroll={handleMobileScroll}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {services.map((svc) => (
                <div key={svc.title} className="shrink-0 w-[85%] md:w-[45%] lg:w-[38%] snap-center">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                    <div className="px-6 pt-6 pb-4 flex-1 flex flex-col">
                      <div className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-full bg-[#0F3D8C]/10 text-[#0F3D8C] flex items-center justify-center shadow-[0_10px_24px_rgba(15,61,140,0.25)]">
                          <i className={`${svc.icon} text-xl`} aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <p
                            className="text-[0.7rem] tracking-[0.22em] uppercase text-sky-700/80 mb-1"
                          >
                            Leistung
                          </p>
                          <h3
                            className="text-sm md:text-base lg:text-[1.05rem] font-semibold text-slate-900"
                          >
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="mt-4 text-sm md:text-[0.95rem] leading-relaxed text-slate-700 flex-1"
                      >
                        {svc.description}
                      </p>
                    </div>

                    <div className="px-6 pb-6 pt-1 flex flex-wrap items-center gap-3">
                      <Button
                        href="tel:+4917655677271"
                        size="sm"
                        gaSendTo="AW-412662118/SERVICE_PHONE"
                        className="inline-flex items-center gap-2 rounded-full bg-[#0F3D8C] text-white border border-[#0F3D8C] px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase hover:bg-[#0C316F]"
                      >
                        <i className="ri-phone-line text-base" aria-hidden="true" />
                        Anrufen
                      </Button>

                      <Button
                        href="https://wa.me/4917655677271"
                        size="sm"
                        gaSendTo="AW-412662118/SERVICE_WHATSAPP"
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-500 text-white border border-emerald-500 px-5 py-2.5 text-[0.7rem] tracking-[0.22em] uppercase hover:bg-emerald-600"
                      >
                        <i className="ri-whatsapp-line text-base" aria-hidden="true" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Dots Navigation mit Pfeilen */}
          <div className="flex items-center justify-center mt-8 lg:mt-12 space-x-4">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/60 bg-[#0F3D8C]/90 hover:bg-[#0C316F] transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-left-s-line text-lg text-white" aria-hidden="true"></i>
            </button>

            <div className="flex space-x-3">
              <button
                onClick={() => goToSlide(0)}
                disabled={isTransitioning}
                className={`h-2.5 w-7 rounded-full bg-[#0F3D8C] transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === 0 ? 'opacity-100' : 'opacity-40'
                }`}
              />
              <button
                onClick={() => goToSlide(services.length - 1)}
                disabled={isTransitioning}
                className={`h-2.5 w-7 rounded-full bg-[#0F3D8C] transition-all duration-300 cursor-pointer disabled:opacity-50 ${
                  currentIndex === services.length - 1 ? 'opacity-100' : 'opacity-40'
                }`}
              />
            </div>

            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-white/60 bg-[#0F3D8C]/90 hover:bg-[#0C316F] transition-all duration-200 cursor-pointer disabled:opacity-40"
            >
              <i className="ri-arrow-right-s-line text-lg text-white" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-16">
          <Button
            href="tel:+4917655677271"
            size="lg"
            className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-[#0F3D8C] text-white border border-[#0F3D8C] shadow-[0_18px_40px_rgba(15,61,140,0.55)] tracking-[0.22em] uppercase hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)]"
          >
            <i className="ri-phone-line mr-3 text-2xl" aria-hidden="true"></i>
            Jetzt anrufen
          </Button>
          <Button
            href="https://wa.me/4917655677271"
            size="lg"
            className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full bg-[#0F3D8C] text-white border border-[#0F3D8C] shadow-[0_18px_40px_rgba(15,61,140,0.55)] tracking-[0.22em] uppercase hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)]"
          >
            <i className="ri-whatsapp-line mr-3 text-2xl" aria-hidden="true"></i>
            WhatsApp schreiben
          </Button>
        </div>
      </div>
    </section>
  );
}
