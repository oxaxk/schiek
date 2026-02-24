// File: src/pages/leistungen/Page.tsx
// no React default import needed
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

const services = [
  {
    icon: 'ri-roadster-line',
    title: '24/7 Pannenhilfe',
    description:
      'Schnelle Hilfe bei Liegenbleiben in Berlin und Umgebung – wir sichern die Stelle, laden dein Fahrzeug und bringen es sicher zur Wunschwerkstatt.',
  },
  {
    icon: 'ri-alert-line',
    title: 'Unfallbergung',
    description:
      'Bergung von Unfallfahrzeugen nach Kollision oder Schaden – inkl. Absicherung der Unfallstelle und abgestimmtem Abtransport.',
  },
  {
    icon: 'ri-parking-box-line',
    title: 'Falschparker Privat',
    description:
      'Abschleppen von Falschparkern auf Privatparkplätzen, Einfahrten und Zufahrten – mit Dokumentation und transparenter Abwicklung.',
  },
  {
    icon: 'ri-battery-2-charge-line',
    title: 'Starthilfe & Pannendienst',
    description:
      'Starthilfe bei leerer Batterie, Unterstützung bei Reifenpannen und kleine Soforthilfen vor Ort, damit du im besten Fall gar nicht abgeschleppt werden musst.',
  },
  {
    icon: 'ri-building-4-line',
    title: 'Hof & Tiefgarage',
    description:
      'Abschleppen und Bergen von Fahrzeugen aus engen Höfen, Tiefgaragen und Zufahrten – mit passendem Gerät und viel Erfahrung.',
  },
  {
    icon: 'ri-motorbike-line',
    title: 'Motorrad & Roller',
    description:
      'Sicherer Transport von Motorrädern, Rollern und kleinen Fahrzeugen nach Panne oder Unfall – ohne regelmäßige Händler- oder Autotransporte.',
  },
];

const LeistungenPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-white">
        {/* Hero / Intro */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="leistungen-hero-heading">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
            >
              Leistungen
            </p>

            <h1
              id="leistungen-hero-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight text-[#0F172A]"
            >
              Privater Abschleppdienst für Berlin &amp; Umgebung
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-4"
            >
              Wir sind ein privater Abschlepp- und Bergungsdienst – ohne Club- oder
              Versicherungsbindung. Keine Mitgliedschaft, keine Gutscheine, keine direkte
              Abrechnung mit Versicherern. Du beauftragst uns direkt und hast einen klaren
              Ansprechpartner.
            </p>
            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-6"
            >
              Unser Fokus: Pannenhilfe, Unfallbergung und das Abschleppen von Falschparkern auf
              Privatgrund in allen Berliner Bezirken und im Umland. Alles auf Rechnungsbasis
              zwischen dir und uns – Versicherungsfragen klärst du im Anschluss mit deinem
              Versicherer.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="tel:+4917655677271"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                <i className="ri-phone-line mr-3 text-xl" aria-hidden="true" />
                Jetzt anrufen
              </Button>
              <Button
                href="https://wa.me/4917655677271"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                <i className="ri-whatsapp-line mr-3 text-xl" aria-hidden="true" />
                WhatsApp schreiben
              </Button>
            </div>
          </div>
        </section>

        {/* Leistungsübersicht */}
        <section className="py-12 bg-white" aria-labelledby="leistungen-core-heading">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2
                id="leistungen-core-heading"
                className="text-2xl md:text-3xl font-semibold mb-4 text-[#0F172A]"
              >
                Unsere Kernleistungen
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed text-[#0F172A]/80"
              >
                Von der Panne am Straßenrand bis zum Falschparker auf deiner Einfahrt – hier siehst du,
                wobei wir dich konkret unterstützen können.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex flex-col h-full rounded-3xl bg-[#0F3D8C]/95 border border-white/20 shadow-[0_18px_50px_rgba(15,61,140,0.65)] px-6 py-6 md:px-7 md:py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,61,140,0.9)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                      <i className={`${service.icon} text-xl text-white`} aria-hidden="true" />
                    </div>
                    <h3
                      className="text-sm md:text-base font-semibold text-white"
                    >
                      {service.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm md:text-base leading-relaxed text-white/85"
                  >
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Privat, keine Versicherungsfälle / Club */}
        <section className="py-12 bg-white" aria-labelledby="leistungen-privat-heading">
          <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2
                id="leistungen-privat-heading"
                className="text-2xl md:text-3xl font-semibold mb-4 text-[#0F172A]"
              >
                Privater Abschleppdienst – keine Club- oder Versicherungsfälle
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-4 text-[#0F172A]/85"
              >
                Wir arbeiten als privater Abschleppdienst direkt mit dir – nicht über Automobilclubs
                oder Versicherungen. Wir rechnen nicht direkt mit Versicherern ab, nehmen keine
                Clubkarten, Mitgliedsnummern oder Gutscheine entgegen und sind kein Partner von
                Automobilclubs.
              </p>
              <p
                className="text-base leading-relaxed mb-4 text-[#0F172A]/85"
              >
                Du erhältst von uns eine klare Rückmeldung zu den Kosten vor dem Einsatz und auf
                Wunsch eine ordentliche Rechnung, die du bei deiner Versicherung, deinem Arbeitgeber
                oder deiner Hausverwaltung einreichen kannst. Ob und in welcher Höhe Kosten
                übernommen werden, klärst du direkt mit deiner Versicherung.
              </p>
              <p
                className="text-base leading-relaxed text-[#0F172A]/85"
              >
                Für dich heißt das: direkter Ansprechpartner, kurze Wege, keine Abhängigkeit von
                Clubbedingungen oder Versicherungsverträgen.
              </p>
            </div>

            <div className="rounded-3xl border border-[#0F3D8C]/15 bg-[#0F3D8C]/5 px-6 py-6">
              <h3
                className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3 text-[#0F3D8C]"
              >
                Was das für dich bedeutet
              </h3>
              <ul
                className="space-y-2 text-sm md:text-base text-[#0F172A]/85"
              >
                <li>– Direkter Kontakt statt Hotline oder Callcenter.</li>
                <li>– Klare Preise vor dem Einsatz, keine versteckten Kosten.</li>
                <li>– Rechnung geeignet für Versicherung oder Unterlagen.</li>
                <li>– Keine Mitgliedschaft, keine Club- oder Bonusprogramme.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Typische Einsatzszenarien */}
        <section className="py-12 bg-white" aria-labelledby="leistungen-typisch-heading">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              id="leistungen-typisch-heading"
              className="text-2xl md:text-3xl font-semibold mb-4 text-[#0F172A]"
            >
              Typische Einsätze im Alltag
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-6 text-[#0F172A]/85"
            >
              Jede Situation ist anders – trotzdem gibt es Fälle, die wir täglich sehen. Ein paar
              Beispiele, bei denen wir regelmäßig gerufen werden:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                >
                  Pannen &amp; Startprobleme
                </h3>
                <ul
                  className="space-y-1.5 text-sm text-[#0F172A]/85"
                >
                  <li>– Fahrzeug startet nicht mehr vor der Haustür.</li>
                  <li>– Batterie leer nach längerer Standzeit.</li>
                  <li>– Liegenbleiber unterwegs in Berlin.</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                >
                  Falschparker &amp; Zufahrten
                </h3>
                <ul
                  className="space-y-1.5 text-sm text-[#0F172A]/85"
                >
                  <li>– Zugeparkte Einfahrt oder Garage in Berlin.</li>
                  <li>– Falschparker auf Kunden- oder Mitarbeiterparkplätzen.</li>
                  <li>– Blockierte Zufahrten für Liefer- oder Einsatzfahrzeuge.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LeistungenPage;