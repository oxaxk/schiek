// File: src/pages/about/page.tsx
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import Button from '../../components/base/Button';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 pt-24 pb-20 bg-white">
        {/* Hero / Intro */}
        <section className="py-12 sm:py-16 bg-white" aria-labelledby="about-hero-heading">
          <div className="max-w-5xl mx-auto px-6">
            <p
              className="text-xs tracking-[0.22em] uppercase mb-4 text-[#0F3D8C]"
            >
              Über uns
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight"
              id="about-hero-heading"
              style={{ color: '#0F172A' }}
            >
              SCHIEK Abschleppdienst in Berlin
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <div className="flex items-center gap-2">
                <div className="flex text-[#FBBF24] text-lg">
                  <i className="ri-star-fill" aria-hidden="true" />
                  <i className="ri-star-fill" aria-hidden="true" />
                  <i className="ri-star-fill" aria-hidden="true" />
                  <i className="ri-star-fill" aria-hidden="true" />
                  <i className="ri-star-fill" aria-hidden="true" />
                </div>
                <span
                  className="text-sm sm:text-base text-[#0F3D8C]"
                >
                  5,0/5 aus 328 Bewertungen
                </span>
              </div>
            </div>

            <p
              className="text-base sm:text-lg leading-relaxed text-[#0F172A]/85 max-w-3xl"
            >
              Wir sind ein privater Abschlepp- und Bergungsdienst aus Berlin – ohne Club- oder
              Versicherungsbindung, direkt erreichbar und mit klaren Absprachen. Unser Fokus:
              schnelle Hilfe bei Pannen, Unfällen und Falschparkern auf Privatgrund in allen
              Berliner Bezirken und im Umland.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="tel:+4917655677271"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                <i className="ri-phone-line mr-3 text-xl" aria-hidden="true" />
                Jetzt anrufen
              </Button>
              <Button
                href="/kontakt"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                Kontaktseite öffnen
              </Button>
            </div>
          </div>
        </section>

        {/* Wer wir sind */}
        <section className="py-12 bg-white" aria-labelledby="about-who-heading">
          <div className="max-w-5xl mx-auto px-6 grid gap-10 md:grid-cols-[1.15fr,0.95fr] items-start">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                id="about-who-heading"
                style={{ color: '#0F172A' }}
              >
                Wer wir sind
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-4 text-[#0F172A]/85"
              >
                SCHIEK ist ein familiengeführter, privater Abschlepp- und Bergungsdienst aus Berlin.
                Wir arbeiten nicht für einen Automobilclub und sind nicht an eine spezielle
                Versicherung gebunden. Stattdessen sind wir direkt für dich da, wenn du uns brauchst –
                ohne Umwege über Hotlines und Warteschleifen.
              </p>
              <p
                className="text-base leading-relaxed mb-4 text-[#0F172A]/85"
              >
                Unser Kerngeschäft: Pannenhilfe, Unfallbergung und das Abschleppen von Falschparkern
                auf Privatparkplätzen, Einfahrten und Zufahrten. Wir kennen die Gegebenheiten in
                Berlin und wissen, wie wichtig schnelle, saubere Lösungen im Alltag sind – egal ob
                morgens im Berufsverkehr oder nachts auf leerer Straße.
              </p>
              <p
                className="text-base leading-relaxed text-[#0F172A]/85"
              >
                Dabei legen wir Wert auf eine ruhige, professionelle Art vor Ort. Viele Situationen
                sind angespannt – unser Job ist es, Ordnung reinzubringen, Risiken abzusichern und
                dir eine klare Perspektive zu geben, was als nächstes passiert.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-[#0F3D8C]/10 bg-[#0F3D8C] text-white px-6 py-6 backdrop-blur-xl shadow-[0_18px_50px_rgba(15,61,140,0.55)]">
                <h3
                  className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3"
                >
                  Was uns wichtig ist
                </h3>
                <ul className="space-y-2 text-sm md:text-base">
                  <li>✔ Schnelle Reaktionszeiten in Berlin &amp; Umland</li>
                  <li>✔ Klare Preise und transparente Kommunikation</li>
                  <li>✔ Saubere Dokumentation für Versicherung &amp; Unterlagen</li>
                  <li>✔ Ruhiges, professionelles Auftreten vor Ort</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-[#0F3D8C]/10 bg-white px-6 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                <h3
                  className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3 text-[#0F172A]"
                >
                  Wann wir die Richtigen sind
                </h3>
                <ul
                  className="space-y-2 text-sm md:text-base text-[#0F172A]/85"
                >
                  <li>– Dein Fahrzeug ist liegen geblieben oder startet nicht mehr.</li>
                  <li>– Du hattest einen Unfall und brauchst Bergung &amp; Transport.</li>
                  <li>– Jemand blockiert deine Einfahrt oder deinen Privatparkplatz.</li>
                  <li>– Du möchtest einen direkten Ansprechpartner statt Hotline.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Einsatzgebiet */}
        <section className="py-12 bg-white" aria-labelledby="about-area-heading">
          <div className="max-w-5xl mx-auto px-6">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              id="about-area-heading"
              style={{ color: '#0F172A' }}
            >
              Einsatzgebiet Berlin &amp; Umgebung
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-4 text-[#0F172A]/85"
            >
              Wir sind in allen Berliner Bezirken unterwegs – von Mitte, Kreuzberg, Friedrichshain
              und Neukölln bis Charlottenburg, Spandau, Reinickendorf, Lichtenberg, Pankow,
              Marzahn-Hellersdorf, Tempelhof-Schöneberg, Steglitz-Zehlendorf und Treptow-Köpenick.
            </p>
            <p
              className="text-base leading-relaxed mb-4 text-[#0F172A]/85"
            >
              Dazu kommen angrenzende Orte im Berliner Umland, in denen viele unserer Kund:innen
              wohnen oder arbeiten. Wichtig ist für uns, dass wir im Ernstfall sinnvoll reagieren
              können – wenn wir merken, dass eine Anfahrt zeitlich oder organisatorisch keinen Sinn
              ergibt, sprechen wir das offen an und schlagen Alternativen vor.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                >
                  Innenstadt
                </h3>
                <p
                  className="text-sm text-[#0F172A]/85"
                >
                  Mitte, Friedrichshain-Kreuzberg, Neukölln, Tempelhof-Schöneberg.
                </p>
              </div>
              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                >
                  West &amp; Nord
                </h3>
                <p
                  className="text-sm text-[#0F172A]/85"
                >
                  Charlottenburg-Wilmersdorf, Spandau, Reinickendorf, Pankow, Steglitz-Zehlendorf.
                </p>
              </div>
              <div className="rounded-3xl border border-[#0F3D8C]/15 bg-white px-5 py-5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
                <h3
                  className="text-xs tracking-[0.18em] uppercase mb-2 text-[#0F3D8C]"
                >
                  Ost &amp; Süden
                </h3>
                <p
                  className="text-sm text-[#0F172A]/85"
                >
                  Lichtenberg, Marzahn-Hellersdorf, Treptow-Köpenick und Berliner Umland.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rechtlicher Hinweis / Was wir nicht machen */}
        <section className="py-12 bg-white" aria-labelledby="about-not-heading">
          <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-[1.1fr,0.9fr] items-start">
            <div>
              <h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                id="about-not-heading"
                style={{ color: '#0F172A' }}
              >
                Was wir nicht anbieten
              </h2>
              <p
                className="text-base leading-relaxed mb-4 text-[#0F172A]/85"
              >
                Wir sind kein Automobilclub und übernehmen keine Clubleistungen wie Mitgliedschaften
                oder Punktesysteme. Ebenfalls bieten wir keine regelmäßigen Fahrzeugtransporte für
                Autohäuser, Händler oder Messeveranstalter an.
              </p>
              <p
                className="text-base leading-relaxed text-[#0F172A]/85"
              >
                Unser Fokus liegt klar auf Einsätzen, bei denen schnelle Hilfe gefragt ist:
                Pannenhilfe, Unfallbergung und Falschparker auf Privatgrund. Genau dafür sind wir
                ausgerüstet und strukturiert.
              </p>
            </div>

            <div className="rounded-3xl border border-[#0F3D8C]/15 bg-[#0F3D8C]/5 px-6 py-6">
              <h3
                className="text-sm md:text-base font-medium tracking-[0.18em] uppercase mb-3 text-[#0F3D8C]"
              >
                Transparenz &amp; Dokumentation
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed text-[#0F172A]/85 mb-3"
              >
                Wir arbeiten nach den geltenden rechtlichen Rahmenbedingungen und dokumentieren
                unsere Einsätze so, dass du Unterlagen z. B. für Versicherung, Arbeitgeber oder
                Eigentümergemeinschaft nutzen kannst.
              </p>
              <p
                className="text-sm md:text-base leading-relaxed text-[#0F172A]/85"
              >
                Wenn du dir unsicher bist, ob dein Fall in unseren Bereich fällt, ruf kurz an – wir
                sagen dir offen, ob und wie wir dir helfen können.
              </p>
            </div>
          </div>
        </section>

        {/* Abschluss-CTA */}
        <section className="py-12 bg-white" aria-labelledby="about-cta-heading">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              id="about-cta-heading"
              style={{ color: '#0F172A' }}
            >
              Bereit, uns kennenzulernen?
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed mb-6 text-[#0F172A]/85"
            >
              Ob akute Panne, Falschparker oder allgemeine Fragen – melde dich kurz bei uns. Am
              Telefon klären wir schnell, was sinnvoll ist und wie der nächste Schritt aussieht.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                href="tel:+4917655677271"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                <i className="ri-phone-line mr-3 text-xl" aria-hidden="true" />
                Jetzt anrufen
              </Button>
              <Button
                href="/kontakt"
                size="lg"
                className="text-[0.75rem] sm:text-sm md:text-base px-8 py-3.5 rounded-full tracking-[0.22em] uppercase"
              >
                Kontaktseite öffnen
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;