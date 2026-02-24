type StepIcon = 'ri-phone-line' | 'ri-roadster-line' | 'ri-truck-line' | 'ri-checkbox-circle-line';

export default function ProcessSection() {
  const steps: Array<{ number: string; title: string; description: string; icon: StepIcon }> = [
    {
      number: '01',
      title: 'Kontakt & Einsatzklärung',
      description:
        'Du nimmst Kontakt mit unserem Abschleppdienst in Berlin auf und schilderst kurz den Fall – zum Beispiel Panne, Unfall oder Falschparker auf Privatgrund – sowie Standort, Fahrzeugtyp und Erreichbarkeit.',
      icon: 'ri-phone-line'
    },
    {
      number: '02',
      title: 'Anfahrt & Einsatzabsicherung',
      description:
        'Wir fahren den Einsatzort an, sichern die Situation ab und prüfen vor Ort die sichere Bergung oder das Abschleppen des Fahrzeugs.',
      icon: 'ri-roadster-line'
    },
    {
      number: '03',
      title: 'Verladung & Fahrzeugtransport',
      description:
        'Das Fahrzeug wird fachgerecht verladen und zur vereinbarten Werkstatt, zum Wunschort oder – bei Falschparkern – zur zuständigen Verwahrstelle transportiert.',
      icon: 'ri-truck-line'
    },
    {
      number: '04',
      title: 'Übergabe & Dokumentation',
      description:
        'Abschließend klären wir offene Fragen und stellen auf Wunsch Belege und Dokumentation bereit – etwa für Versicherung, Eigentümergemeinschaft oder Auftraggeber.',
      icon: 'ri-checkbox-circle-line'
    }
  ];

  return (
    <section className="py-20 bg-white" aria-labelledby="process-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="process-heading"
            className="text-3xl md:text-4xl font-semibold mb-4 leading-tight"
          >
            Ablauf Abschleppdienst Berlin – so arbeiten wir
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-[#0F172A]/80"
          >
            Von der Kontaktaufnahme bis zur Übergabe des Fahrzeugs begleiten wir dich in vier klaren Schritten. Unser Abschleppdienst in Berlin unterstützt bei Pannenhilfe, Unfallbergung und dem rechtssicheren Abschleppen von Falschparkern auf Privatgrund – im gesamten Stadtgebiet und im Umland.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.number} className="group h-full">
                <div className="flex flex-col h-full rounded-2xl border border-slate-100 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.05)] px-5 py-6 sm:px-6 sm:py-7 transition-transform transition-shadow duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_22px_60px_rgba(15,23,42,0.09)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-full bg-[#0F3D8C]/90 flex items-center justify-center text-white shadow-[0_14px_30px_rgba(15,61,140,0.55)]">
                        <i className={`${step.icon} text-lg`} aria-hidden="true" />
                      </div>
                      <div className="flex flex-col">
                        <span
                          className="text-[0.7rem] tracking-[0.22em] uppercase text-sky-700/80"
                        >
                          Schritt {step.number}
                        </span>
                        <h3
                          className="mt-0.5 text-sm sm:text-base font-semibold text-slate-900"
                        >
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className="hidden sm:inline-flex items-center justify-center rounded-full bg-sky-50 px-3 py-1 text-[0.7rem] tracking-[0.18em] uppercase text-[#0F3D8C]"
                    >
                      {index + 1}/4
                    </span>
                  </div>

                  <p
                    className="text-sm sm:text-[0.95rem] leading-relaxed text-slate-700"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
