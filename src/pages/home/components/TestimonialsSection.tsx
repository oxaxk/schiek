import { useEffect, useRef, useState } from 'react';

type Testimonial = {
  name: string;
  rating: number;
  text: string;
  image: string | null;
};

const testimonials: Testimonial[] = [
  {
    name: 'Pannenhilfe Berlin-Mitte',
    rating: 5,
    text: 'Mein Auto ist morgens in Mitte stehen geblieben. Schiek war schnell vor Ort, hat alles abgesichert und den Wagen direkt zur Werkstatt gebracht. Klare Absprachen und faire Preise.',
    image: null
  },
  {
    name: 'Unfall auf der Stadtautobahn',
    rating: 5,
    text: 'Nach einem Unfall auf der A100 wurde mein Fahrzeug professionell geborgen. Die Kollegen waren ruhig, strukturiert und haben sich um alles gekümmert, inklusive Abtransport.',
    image: null
  },
  {
    name: 'Falschparker Privatparkplatz Neukölln',
    rating: 5,
    text: 'Ein Falschparker hat regelmäßig unsere Einfahrt blockiert. Schiek hat die Lage dokumentiert und das Fahrzeug zuverlässig umgesetzt. Kommunikation war klar und transparent.',
    image: null
  },
  {
    name: 'Einfahrt blockiert in Pankow',
    rating: 5,
    text: 'Unsere Einfahrt war komplett zugeparkt. Nach dem Anruf war der Abschleppwagen schnell da und hat die Situation sauber gelöst. Wir wurden über jeden Schritt informiert.',
    image: null
  },
  {
    name: 'Nachts liegen geblieben in Kreuzberg',
    rating: 5,
    text: 'Mitten in der Nacht liegen geblieben – Schiek war trotzdem erreichbar und hat mich und das Auto sicher aus der Situation geholt. Sehr freundlich und professionell.',
    image: null
  },
  {
    name: 'Motorradpanne in Charlottenburg',
    rating: 5,
    text: 'Mein Motorrad sprang nicht mehr an. Der Transport lief sicher und ohne Stress ab. Man merkt, dass hier Routine und Erfahrung im Abschleppdienst vorhanden sind.',
    image: null
  }
];

function TestimonialCard({
  testimonial,
  className = ''
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  return (
    <article
      className={`flex flex-col h-full rounded-3xl bg-[#0F3D8C]/95 border border-white/20 shadow-[0_18px_50px_rgba(15,61,140,0.65)] px-6 py-6 md:px-7 md:py-7 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,61,140,0.9)] transition-all duration-300 ${className}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-11 h-11 rounded-full overflow-hidden bg-white/10 border border-white/40 flex items-center justify-center text-sm font-semibold text-white">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{testimonial.name.charAt(0)}</span>
          )}
        </div>

        <div className="flex-1">
          <h4 className="text-lg md:text-xl font-semibold leading-snug">
            {testimonial.name}
          </h4>
        </div>
      </div>

      <p className="text-sm md:text-[0.95rem] leading-relaxed italic">
        “{testimonial.text}”
      </p>
    </article>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const lastScrollYRef = useRef<number | null>(null);
  const lastScrollAtRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef<number | null>(null);
  const currentXRef = useRef<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;

      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const container = mobileScrollRef.current;
        if (container) {
          const width = container.clientWidth;
          container.scrollTo({
            left: next * width,
            behavior: 'smooth'
          });
        }
        return next;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 768) return;

      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.bottom <= 0 || rect.top >= viewportHeight) return;

      const currentY = window.scrollY || window.pageYOffset;
      const now = Date.now();

      const COOLDOWN = 400;
      if (now - lastScrollAtRef.current < COOLDOWN) {
        lastScrollYRef.current = currentY;
        return;
      }

      if (lastScrollYRef.current === null) {
        lastScrollYRef.current = currentY;
        return;
      }

      const diff = currentY - lastScrollYRef.current;
      const THRESHOLD = 120;

      if (Math.abs(diff) < THRESHOLD) {
        return;
      }

      if (diff > 0) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = (prev - 1 + testimonials.length) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }

      lastScrollYRef.current = currentY;
      lastScrollAtRef.current = now;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length !== 1) return;
    isDraggingRef.current = true;
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    currentXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current || startXRef.current === null || currentXRef.current === null) {
      isDraggingRef.current = false;
      startXRef.current = null;
      currentXRef.current = null;
      return;
    }

    const diff = currentXRef.current - startXRef.current;
    const THRESHOLD = 50;

    if (Math.abs(diff) > THRESHOLD) {
      if (diff < 0) {
        setActiveIndex((prev) => {
          const next = (prev + 1) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      } else {
        setActiveIndex((prev) => {
          const next = (prev - 1 + testimonials.length) % testimonials.length;
          const container = mobileScrollRef.current;
          if (container) {
            const width = container.clientWidth;
            container.scrollTo({
              left: next * width,
              behavior: 'smooth'
            });
          }
          return next;
        });
      }
    }

    isDraggingRef.current = false;
    startXRef.current = null;
    currentXRef.current = null;
  };

  const handleHorizontalScroll = () => {
    const container = mobileScrollRef.current;
    if (!container) return;

    const { scrollLeft, clientWidth } = container;
    if (!clientWidth) return;

    const index = Math.round(scrollLeft / clientWidth);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      aria-labelledby="testimonials-heading"
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
          >
            Kundenstimmen
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
          >
            Erfahrungen mit Abschleppdienst Schiek in Berlin
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#0F172A]/80"
          >
            Erfahrungsberichte von Kund:innen aus Berlin: Ob Pannenhilfe, Unfallbergung oder Falschparker auf Privatgrund – hier teilen Auftraggeber aus Bezirken wie Mitte, Neukölln, Kreuzberg, Charlottenburg und Pankow ihre Erfahrungen mit unserem Abschleppdienst.
          </p>
        </div>

        {/* Mobile: Scroll-/Auto-Carousel im Service-Style */}
        <div className="mt-10 md:hidden">
          <div className="relative overflow-hidden">
            <div
              ref={mobileScrollRef}
              className="flex w-full overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onScroll={handleHorizontalScroll}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 snap-center px-1">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center gap-2 md:hidden">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`h-2.5 w-2.5 rounded-full transition-colors border ${
                  idx === activeIndex
                    ? 'bg-[#0F3D8C] border-[#0F3D8C]'
                    : 'bg-[#0F3D8C]/20 border-[#0F3D8C]/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Horizontales Carousel mit drei Karten pro Reihe */}
        <div className="mt-10 hidden md:block">
          <div className="relative overflow-hidden">
            <div className="flex w-full overflow-x-auto no-scrollbar gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-1"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
