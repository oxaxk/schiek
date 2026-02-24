import { useEffect, useState } from 'react';

const socialImages = [
  {
    src: '/images/projects/5.png',
    alt: 'Abschleppdienst Schiek – Abschleppwagen bei einem Einsatz in Berlin',
    badge: 'Einsatz',
    label: 'Pannenhilfe Berlin'
  },
  {
    src: '/images/projects/6.png',
    alt: 'Abschleppdienst Schiek – Unfallbergung auf einer Berliner Straße',
    badge: 'Unfall',
    label: 'Unfallbergung'
  },
  {
    src: '/images/projects/7.png',
    alt: 'Abschleppdienst Schiek – Abschleppen eines Falschparkers auf Privatgrund',
    badge: 'Privatgrund',
    label: 'Falschparker'
  }
];

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % socialImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="einsaetze" aria-labelledby="einsaetze-heading" className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4 text-sky-300"
          >
            Unsere Einsätze
          </p>
          <h2
            id="einsaetze-heading"
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
          >
            Einsatzbilder – Abschleppdienst Berlin & Falschparker
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed text-slate-200 mb-2"
          >
            Hier erhältst du einen Einblick in typische Einsätze unseres Abschleppdienstes in Berlin – von Pannenhilfe und Unfallbergung bis zum Abschleppen von Falschparkern auf Privatgrund. Unsere Einsätze finden in allen Berliner Bezirken sowie im Berliner Umland statt.
          </p>
        </div>

        <div className="mt-10">
          <div className="max-w-[360px] mx-auto sm:max-w-none px-4 sm:px-0">
            {/* Mobile: Single fading card, Desktop: Collage */}
            <div className="-mx-2 sm:mx-0">
              {/* Mobile Carousel */}
              <div className="sm:hidden flex justify-center">
                <div className="relative w-full max-w-xs mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_18px_50px_rgba(15,61,140,0.35)]">
                  {socialImages.map((image, index) => (
                    <img
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                        index === activeIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Collage */}
              <div className="hidden sm:grid sm:grid-cols-3 sm:gap-5">
                {socialImages.map((image) => (
                  <div key={image.src} className="group min-w-[220px] sm:min-w-0">
                    <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.22)] transition-transform duration-300 group-hover:-translate-y-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-transparent" />
                      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
                        <div className="inline-flex flex-col">
                          <span className="inline-flex items-center rounded-full bg-black/55 px-3 py-1 text-[0.7rem] tracking-[0.18em] uppercase text-slate-100">
                            {image.badge}
                          </span>
                          <span className="mt-1 text-xs text-slate-100 drop-shadow">
                            {image.label}
                          </span>
                        </div>
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/90 text-white shadow-[0_10px_24px_rgba(56,189,248,0.6)]">
                          <i className="ri-arrow-right-up-line text-base" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <a
                href="tel:+4917655677271"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
              >
                <i className="ri-phone-line w-5 h-5" aria-hidden="true" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
