import { useState, type FormEvent } from 'react';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || '',
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-semibold mb-4 text-center"
          // Removed inline style
        >
          Kontakt &amp; Anfrage
        </h2>

        <p
          className="text-base md:text-lg mb-6 text-center"
          // Removed inline style
        >
          Im Notfall erreichst du unseren Abschleppdienst in Berlin am schnellsten telefonisch. Für allgemeine Fragen, Rückrufwünsche oder nicht akute Einsätze – etwa Pannenhilfe, Unfallbergung oder Falschparker auf Privatgrund – kannst du uns auch über das Formular kontaktieren.
        </p>

        <div className="mt-2 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
          {/* Linke Infospalte */}
          <div className="space-y-6 text-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:+4917655677271"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
                // Removed inline style
              >
                <i className="ri-phone-line text-lg" aria-hidden="true" />
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4917655677271"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
                // Removed inline style
              >
                <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
                WhatsApp schreiben
              </a>
            </div>

            <div className="space-y-3">
              <h3
                className="text-2xl md:text-3xl font-semibold text-center"
                // Removed inline style
              >
                So läuft deine Anfrage
              </h3>
              <p
                className="text-base leading-relaxed text-center"
                // Removed inline style
              >
                Über das Formular kannst du uns deinen Fall schildern – etwa Standort in Berlin, Fahrzeugtyp oder Art des Einsatzes (Panne, Unfall oder Falschparker). Wir prüfen deine Anfrage als privater Abschleppdienst in Berlin und melden uns mit Rückfragen oder einem Rückruf.
              </p>
            </div>

            <ul
              className="space-y-2 text-sm md:text-base text-center"
              // Removed inline style
            >
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                <span>24/7 Abschleppdienst und Pannenhilfe in ganz Berlin sowie im Umland.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                <span>Falschparker auf Privatparkplätzen, Einfahrten oder Zufahrten in Berlin – rechtssicheres Abschleppen auf Privatgrund.</span>
              </li>
              <li className="flex items-start gap-2 justify-center">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                <span>Für dringende Einsätze oder akute Notfälle empfehlen wir den direkten Anruf – das Formular dient für nicht zeitkritische Anfragen an unseren Abschleppdienst in Berlin.</span>
              </li>
            </ul>
          </div>

          {/* Rechte Formular-Karte */}
          <div className="bg-[#0F3D8C]/95 text-white backdrop-blur-xl rounded-3xl shadow-[0_18px_60px_rgba(15,61,140,0.75)] border border-white/20 px-6 py-7 md:px-7 md:py-8">
            <form className="grid gap-6 md:grid-cols-2 text-left" onSubmit={handleSubmit} noValidate autoComplete="on">
              <div className="md:col-span-2">
                <p
                  className="text-sm text-white/90"
                  // Removed inline style
                >
                  Über dieses Formular kannst du uns deinen Fall schicken. Wir prüfen deine Angaben und melden uns
                  mit Rückfragen oder einem Rückruf. Im Notfall ruf bitte direkt an.
                </p>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                  // Removed inline style
                >
                  Name*
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                  // Removed inline style
                >
                  E-Mail (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="email"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block mb-2 text-sm font-medium text-white"
                  // Removed inline style
                >
                  Anliegen*
                </label>
                <select
                  required
                  id="service"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="service"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="pannenhilfe">Pannenhilfe / Fahrzeug startet nicht</option>
                  <option value="unfall">Unfall / Bergung</option>
                  <option value="falschparker">Falschparker auf Privatgrund</option>
                  <option value="hof-tiefgarage">Fahrzeug in Hof / Tiefgarage</option>
                  <option value="motorrad-roller">Motorrad / Roller</option>
                  <option value="sonstiges">Sonstiges Anliegen</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-white"
                  // Removed inline style
                >
                  Datum &amp; Uhrzeit (optional)
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  name="date"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-white"
                  // Removed inline style
                >
                  Nachricht
                </label>
                <textarea
                  rows={4}
                  id="message"
                  minLength={10}
                  className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="z. B. Standort, Fahrzeugtyp, Kennzeichen, was passiert ist, erreichbare Telefonnummer"
                  name="message"
                />
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full font-semibold text-[0.75rem] sm:text-sm md:text-base shadow-[0_18px_40px_rgba(15,61,140,0.75)] hover:shadow-[0_22px_55px_rgba(12,49,111,0.9)] transition-all duration-300 border border-white/40 bg-[#0F3D8C] hover:bg-[#0C316F] backdrop-blur-xl tracking-[0.22em] uppercase text-white"
                  // Removed inline style
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wird gesendet…' : 'Nachricht senden'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <div
                  className="md:col-span-2 text-right text-sm text-white/80"
                  // Removed inline style
                  aria-live="polite"
                  role="status"
                >
                  Deine Anfrage wurde erfolgreich gesendet.
                </div>
              )}
              {submitStatus === 'error' && (
                <div
                  className="md:col-span-2 text-right text-sm text-white/80"
                  // Removed inline style
                  aria-live="polite"
                  role="alert"
                >
                  Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
