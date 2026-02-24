import { useState } from 'react';
import Button from '../../../components/base/Button';

const faqs = [
  {
    question: 'Wann kann ich einen Abschleppdienst in Berlin rufen?',
    answer:
      'Du kannst unseren Abschleppdienst in Berlin rufen, wenn dein Fahrzeug aufgrund einer Panne oder eines Unfalls nicht mehr fahrbereit ist oder wenn ein Falschparker deine Einfahrt, Zufahrt oder deinen Privatparkplatz blockiert. Wir übernehmen außerdem den Transport von Motorrädern und Rollern. Unser Einsatzgebiet umfasst alle Berliner Bezirke sowie das Berliner Umland. Wichtig: Bei akuten Notfällen erreichst du uns telefonisch, bei weniger dringenden Anfragen kannst du auch unser Kontaktformular nutzen.',
  },
  {
    question: 'Arbeitet der Abschleppdienst Schiek für Automobilclubs oder Versicherungen?',
    answer:
      'Nein. Abschleppdienst Schiek ist ein privater Abschlepp- und Bergungsdienst in Berlin. Wir arbeiten weder für Automobilclubs noch rechnen wir über Versicherungen, Mitgliedschaften oder Gutscheinsysteme ab. Du beauftragst uns direkt als Auftraggeber. Das ermöglicht klare Absprachen, transparente Preise vorab und eine direkte Kommunikation ohne Vermittlungsplattformen oder Callcenter-Strukturen.',
  },
  {
    question: 'Wie läuft ein Abschlepp-Einsatz in Berlin ab?',
    answer:
      'Ein Abschlepp-Einsatz in Berlin beginnt mit deiner Kontaktaufnahme per Telefon. Du schilderst kurz die Situation, den Standort und den Fahrzeugtyp. Anschließend erhältst du eine Einschätzung zum Ablauf und einen Preisrahmen. Nach deiner Zustimmung fahren wir den Einsatzort an, sichern die Situation ab und verladen das Fahrzeug fachgerecht. Je nach Fall erfolgt der Transport zur Werkstatt, zum Wunschort oder zur Verwahrstelle.',
  },
  {
    question: 'Was kostet ein Abschleppdienst in Berlin und wie wird bezahlt?',
    answer:
      'Die Kosten für einen Abschleppdienst in Berlin hängen vom Einsatzfall, der Entfernung und dem Fahrzeugtyp ab. In der Regel erhältst du vorab einen transparenten Preisrahmen. Die Bezahlung erfolgt meist direkt nach dem Einsatz vor Ort – bar oder per Kartenzahlung. Auf Wunsch stellen wir eine Rechnung aus, zum Beispiel für Versicherung, Arbeitgeber oder Eigentümergemeinschaft.',
  },
];

export default function SpecialsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-[#020617]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-3 text-sky-300"
          >
            Fragen &amp; Antworten
          </p>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: '#F9FAFB' }}
          >
            FAQ – Abschleppdienst Berlin, Falschparker & Kosten
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-slate-200"
          >
            Hier beantworten wir die wichtigsten Fragen rund um unseren privaten Abschlepp- und
            Bergungsdienst in Berlin. Wenn etwas offen bleibt, melde dich einfach kurz bei uns.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-3xl border border-[#0F3D8C]/12 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.06)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
                  aria-expanded={isActive}
                  aria-controls={`faq-panel-${index}`}
                >
                  <span
                    className="text-sm md:text-base font-medium text-[#0F172A]"
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border border-[#0F3D8C]/40 text-[#0F3D8C] text-sm transition-transform duration-200 ${
                      isActive ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isActive && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className="px-5 pb-4 md:px-6 md:pb-5"
                  >
                    <p
                      className="text-sm md:text-base leading-relaxed text-[#0F172A]/80"
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 md:mt-12 text-center">
          <p
            className="text-sm md:text-base mb-4 text-slate-200"
          >
            Nicht die passende Antwort gefunden? Schick uns deine Frage oder ruf direkt an.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/faq"
              size="lg"
              className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
            >
              <i className="ri-file-text-line mr-3 text-xl" aria-hidden="true" />
              Noch Fragen?
            </Button>
            <Button
              href="tel:+4917655677271"
              size="lg"
              className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
            >
              <i className="ri-phone-line mr-3 text-xl" aria-hidden="true" />
              Direkt anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
