import { useState } from 'react';
import type { FormEvent } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      service: formData.get('service')?.toString() || '',
      date: formData.get('date')?.toString() || '',
      message: formData.get('message')?.toString() || ''
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      if (import.meta.env.DEV) console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-white">
        {/* Hero / Intro */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="kontakt-heading">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
            >
              Kontakt
            </p>

            <h1
              id="kontakt-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
              style={{ color: '#0F172A' }}
            >
              Kontakt zum Abschleppdienst Schiek
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl mb-6"
            >
              Im Notfall rufst du uns am besten direkt an. Für allgemeine Fragen, Rückrufwünsche oder
              nicht akute Fälle kannst du uns auch bequem über das Kontaktformular schreiben.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+4917655677271"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
              >
                <i className="ri-phone-line text-lg" aria-hidden="true" />
                Jetzt anrufen
              </a>
              <a
                href="https://wa.me/4917655677271"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-[0.75rem] sm:text-sm md:text-base font-semibold tracking-[0.22em] uppercase bg-[#0F3D8C] border border-[#0F3D8C] text-white shadow-[0_18px_40px_rgba(15,61,140,0.55)] hover:bg-[#0C316F] hover:shadow-[0_22px_55px_rgba(12,49,111,0.7)] transition-all duration-200"
              >
                <i className="ri-whatsapp-line text-lg" aria-hidden="true" />
                WhatsApp schreiben
              </a>
            </div>
          </div>
        </section>

        {/* Kontaktformular */}
        <section className="py-8 bg-white">
          <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[1.05fr,1.15fr] items-start">
            {/* Infospalte */}
            <div className="space-y-6">
              <h2
                className="text-2xl md:text-3xl font-semibold mb-2"
                style={{ color: '#0F172A' }}
              >
                Wie du uns erreichen kannst
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed text-[#0F172A]/85"
              >
                Über das Formular kannst du uns kurz deinen Fall schildern – zum Beispiel wo das
                Fahrzeug steht, was passiert ist und wie wir dich am besten erreichen. Wir melden
                uns mit Rückfragen oder rufen dich zurück.
              </p>

              <ul
                className="space-y-2 text-sm md:text-base"
                style={{ color: '#0F172A' }}
              >
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                  <span>24/7 Abschlepp- und Pannenhilfe in Berlin und Umgebung.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                  <span>
                    Privatparkplätze, Einfahrten und Zufahrten – wir unterstützen dich bei Falschparkern auf deinem
                    Grundstück.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0F3D8C]" />
                  <span>Für dringende Notfälle bitte immer anrufen – das Formular ist für nicht zeitkritische Anfragen gedacht.</span>
                </li>
              </ul>
            </div>

            {/* Formular */}
            <div className="bg-[#0F3D8C]/95 backdrop-blur-xl rounded-3xl shadow-[0_18px_60px_rgba(15,61,140,0.75)] border border-white/20 px-6 py-7 md:px-7 md:py-8">
              <form className="grid gap-6 md:grid-cols-2 text-left" onSubmit={handleSubmit}>
                <div className="md:col-span-2">
                  <p
                    className="text-sm"
                    style={{ color: '#E5E7EB' }}
                  >
                    Über dieses Formular kannst du uns deinen Fall schicken. Wir prüfen deine Angaben und melden uns
                    mit Rückfragen oder einem Rückruf. Im Notfall ruf bitte direkt an.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    autoComplete="name"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    name="name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
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
                    className="block mb-2 text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    Anliegen*
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    style={{ backgroundPosition: 'right 1rem center' }}
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
                    className="block mb-2 text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
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
                    className="block mb-2 text-sm font-medium"
                    style={{ color: '#FFFFFF' }}
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    minLength={10}
                    rows={4}
                    className="w-full px-4 py-3 rounded-2xl border border-white/20 bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="z. B. Standort, Fahrzeugtyp, Kennzeichen, was passiert ist, erreichbare Telefonnummer"
                    name="message"
                  />
                </div>

                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-full font-semibold text-[0.75rem] sm:text-sm md:text-base shadow-[0_18px_40px_rgba(15,61,140,0.75)] hover:shadow-[0_22px_55px_rgba(12,49,111,0.9)] transition-all duration-300 border border-white/40 bg-[#0F3D8C] hover:bg-[#0C316F] backdrop-blur-xl tracking-[0.22em] uppercase text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Wird gesendet…' : 'Nachricht senden'}
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div
                    role="status"
                    className="md:col-span-2 text-right text-sm text-white/80"
                  >
                    Deine Anfrage wurde erfolgreich gesendet.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div
                    role="alert"
                    className="md:col-span-2 text-right text-sm text-white/80"
                  >
                    Beim Senden ist ein Fehler aufgetreten. Bitte versuche es später erneut.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;