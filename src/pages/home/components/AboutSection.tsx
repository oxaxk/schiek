export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
          {/* LEFT: TITLE + COPY */}
          <div>
            <p
              className="text-[0.7rem] tracking-[0.24em] uppercase mb-3 text-sky-300/90"
            >
              Über uns
            </p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-semibold mb-4 text-slate-50"
            >
              Abschleppdienst Berlin 24h – Pannenhilfe, Unfall &amp; Falschparker
              <span className="block text-sky-300/90">
                Privater Abschlepp- und Pannendienst in allen Berliner Bezirken
              </span>
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed text-slate-300/90 mb-5"
            >
              Als privater Abschleppdienst in Berlin sind wir 24 Stunden erreichbar und übernehmen Pannenhilfe, Unfallbergung sowie das rechtssichere Abschleppen von Falschparkern auf Privatgrund. Unser Einsatzgebiet umfasst alle Berliner Bezirke wie Mitte, Neukölln, Charlottenburg, Pankow und Spandau sowie das Berliner Umland.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-sky-500/15 border border-sky-400/60">
                  <i className="ri-time-line text-sky-300 text-sm" aria-hidden="true" />
                </span>
                <div>
                  <p
                    className="text-sm font-semibold text-slate-100 mb-1"
                  >
                    24/7 erreichbar
                  </p>
                  <p
                    className="text-xs text-slate-400"
                  >
                    Rund um die Uhr erreichbar – auch nachts, am Wochenende und an Feiertagen.
                    Direkter Kontakt, keine Hotline, keine Warteschleifen.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-sky-500/15 border border-sky-400/60">
                  <i className="ri-map-pin-line text-sky-300 text-sm" aria-hidden="true" />
                </span>
                <div>
                  <p
                    className="text-sm font-semibold text-slate-100 mb-1"
                  >
                    Berlin &amp; Umland
                  </p>
                  <p
                    className="text-xs text-slate-400"
                  >
                    Einsatz in allen Berliner Bezirken wie Mitte, Neukölln, Charlottenburg
                    sowie im gesamten Berliner Umland.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: HIGHLIGHT-CARD */}
          <div className="rounded-3xl border border-sky-400/40 bg-slate-900/80 px-6 py-7 md:px-7 md:py-8 shadow-[0_22px_60px_rgba(15,23,42,0.95)]">
            <p
              className="text-[0.65rem] tracking-[0.24em] uppercase text-sky-300/90 mb-3"
            >
              Unsere Leistungen
            </p>
            <div className="space-y-5">
              <div className="border-l-2 border-sky-400/70 pl-4">
                <h3
                  className="text-sm md:text-base font-semibold mb-1 text-slate-50"
                >
                  Schnelle Hilfe
                </h3>
                <p
                  className="text-xs md:text-sm leading-relaxed text-slate-300/90"
                >
                  Kurze Reaktionszeiten und schnelle Anfahrt innerhalb Berlins.
                  Sie wissen vorab, was passiert – ohne Überraschungen.
                </p>
              </div>

              <div className="border-l-2 border-sky-400/70 pl-4">
                <h3
                  className="text-sm md:text-base font-semibold mb-1 text-slate-50"
                >
                  Privat &amp; Falschparker
                </h3>
                <p
                  className="text-xs md:text-sm leading-relaxed text-slate-300/90"
                >
                  Abschleppen von Falschparkern auf Privatparkplätzen, Einfahrten und Zufahrten in Berlin – inklusive Dokumentation und transparenter Abwicklung im rechtlich zulässigen Rahmen.
                </p>
              </div>

              <div className="border-l-2 border-sky-400/70 pl-4">
                <h3
                  className="text-sm md:text-base font-semibold mb-1 text-slate-50"
                >
                  Fair &amp; transparent
                </h3>
                <p
                  className="text-xs md:text-sm leading-relaxed text-slate-300/90"
                >
                  Klare Preise vorab. Keine versteckten Kosten.
                  Auf Wunsch mit Rechnung für Versicherung oder Arbeitgeber.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
