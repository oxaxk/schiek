// File: src/pages/faq/page.tsx
import { useState, useEffect } from "react";
import Header from "../../components/feature/Header";
import Footer from "../../components/feature/Footer";
import Button from "../../components/base/Button";

const faqs = [
  {
    question: "In welchen Fällen kann ich euch rufen?",
    answer:
      "Wir sind dein Ansprechpartner bei Pannen, wenn das Fahrzeug nicht mehr startet, bei Unfällen mit fahruntüchtigen Fahrzeugen sowie bei Falschparkern auf Privatgrund (z. B. Einfahrten, Hof, Kundenparkplätze) in Berlin und Umgebung. Zusätzlich transportieren wir Motorräder und Roller nach Panne oder Schaden.",
  },
  {
    question: "Seid ihr ein Automobilclub oder arbeitet ihr für Versicherungen?",
    answer:
      "Nein. Wir sind ein privater Abschlepp- und Bergungsdienst und arbeiten direkt mit dir als Auftraggeber:in. Wir rechnen nicht über Clubkarten, Mitgliedsnummern oder Gutscheine ab und sind kein Partner von Automobilclubs. Du erhältst eine ordentliche Rechnung, die du bei deiner Versicherung einreichen kannst.",
  },
  {
    question: "Wie läuft ein Einsatz ab, wenn ich euch anrufe?",
    answer:
      "Am Telefon klären wir kurz, was passiert ist, wo das Fahrzeug steht, um welches Fahrzeug es sich handelt und ob Gefahr im Verzug ist. Danach nennen wir dir einen voraussichtlichen Preisrahmen und eine Einschätzung zur Anfahrtszeit. Wenn du zustimmst, machen wir uns auf den Weg und melden uns kurz vor Ankunft noch einmal.",
  },
  {
    question: "In welchen Bezirken von Berlin seid ihr unterwegs?",
    answer:
      "Wir fahren alle Berliner Bezirke an – von Mitte, Kreuzberg, Neukölln und Friedrichshain bis Charlottenburg, Spandau, Reinickendorf, Lichtenberg, Pankow, Marzahn-Hellersdorf, Tempelhof-Schöneberg, Steglitz-Zehlendorf und Treptow-Köpenick. Einsätze im direkten Berliner Umland sind nach Absprache ebenfalls möglich.",
  },
  {
    question: "Wie schnell seid ihr vor Ort?",
    answer:
      "Das hängt von Uhrzeit, Verkehr und deinem Standort ab. In vielen Fällen sind wir innerhalb von 30–60 Minuten bei dir, manchmal schneller, manchmal etwas länger. Am Telefon sagen wir dir ehrlich, ob ein Einsatz zeitlich Sinn ergibt oder ob eine andere Lösung besser ist.",
  },
  {
    question: "Könnt ihr Falschparker auf Privatparkplätzen abschleppen?",
    answer:
      "Ja. Wir schleppen Falschparker auf Privatparkplätzen, in Einfahrten, Zufahrten oder Höfen ab, wenn du als Berechtigte:r den Auftrag erteilst. Vor Ort dokumentieren wir die Situation (Fotos, Daten) und besprechen mit dir den weiteren Ablauf. Öffentlicher Straßenraum bleibt Sache von Ordnungsamt und Polizei.",
  },
  {
    question: "Wie läuft die Bezahlung ab?",
    answer:
      "In der Regel wird der Einsatz nach Abschluss direkt vor Ort bezahlt. Je nach Situation sind Barzahlung und gängige Kartenzahlungsarten möglich. Auf Wunsch erhältst du eine Rechnung mit ausgewiesenen Positionen, die du für Versicherung, Arbeitgeber oder Hausverwaltung nutzen kannst.",
  },
  {
    question: "Welche Fahrzeuge könnt ihr transportieren?",
    answer:
      "Wir transportieren PKW, leichte Transporter, SUV sowie Motorräder und Roller im Rahmen der technischen Möglichkeiten unserer Fahrzeuge. Für Spezialtransporte (z. B. sehr tiefe Sportwagen, große Transporter oder schwere Nutzfahrzeuge) sagen wir dir offen, ob wir den Einsatz übernehmen können oder ob ein Spezialdienst sinnvoller ist.",
  },
  {
    question: "Übernehmt ihr Versicherungsfälle direkt?",
    answer:
      "Nein. Wir rechnen nicht direkt mit Versicherern oder Clubs ab und nehmen keine Kostenübernahmescheine entgegen. Du beauftragst uns direkt, zahlst unseren Einsatz und kannst die Rechnung anschließend bei deiner Versicherung einreichen.",
  },
  {
    question: "Was ist, wenn ich unsicher bin, ob mein Fall zu euch passt?",
    answer:
      "Dann ruf kurz an oder nutze das Kontaktformular. Wir hören uns deine Situation an und sagen dir klar, ob und wie wir dir helfen können – lieber einmal mehr nachfragen als im Notfall zu lange zu warten.",
  },
];

const FaqPage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    document.title =
      "FAQ Abschleppdienst SCHIEK Berlin | Häufige Fragen & Antworten";

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = "faq-schema";

    const existing = document.getElementById("faq-schema");
    if (!existing) {
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById("faq-schema");
      if (el) {
        document.head.removeChild(el);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-24 pb-20 bg-white">
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="faq-heading">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
            >
              FAQ
            </p>
            <h1
              id="faq-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
            >
              Häufige Fragen zum Abschleppdienst SCHIEK
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-6"
            >
              Hier findest du die wichtigsten Antworten rund um unseren privaten Abschlepp- und
              Bergungsdienst in Berlin. Wenn etwas offen bleibt, melde dich kurz telefonisch oder
              über das Kontaktformular.
            </p>
          </div>
        </section>

        <section className="pb-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
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
                          isActive ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ${
                        isActive ? "pb-4 md:pb-5 opacity-100" : "pb-0 opacity-0"
                      }`}
                      style={{ maxHeight: isActive ? "260px" : "0px" }}
                    >
                      <p
                        className="text-sm md:text-base leading-relaxed text-[#0F172A]/80"
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 md:mt-12 text-center">
              <p
                className="text-sm md:text-base mb-4 text-[#0F172A]/85"
              >
                Deine Frage war nicht dabei? Melde dich kurz bei uns – wir helfen dir weiter.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  href="/kontakt"
                  size="lg"
                  className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
                >
                  Kontaktseite öffnen
                </Button>
                <Button
                  href="tel:+4917655677271"
                  size="lg"
                  className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
                >
                  <i className="ri-phone-line mr-3 text-xl" aria-hidden="true" />
                  Direkt anrufen
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;