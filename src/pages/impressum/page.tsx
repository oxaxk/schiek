import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16" aria-labelledby="impressum-heading">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h1
            id="impressum-heading"
            className="text-3xl md:text-4xl font-semibold mb-8"
          >
            Impressum
          </h1>
          
          <div
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 DDG</h2>
            <p className="mb-4">
              <strong>Abschlepp- und Bergungsdienst Schiek</strong><br />
              Inhaber: Ahmad Ayyach<br />
              Reinickendorfer Straße 87<br />
              13347 Berlin
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Kontakt</h2>
            <p className="mb-4">
              Telefon:{' '}
              <a href="tel:017655677271" className="hover:underline">
                0176 55 677 271
              </a><br />
              E-Mail:{' '}
              <a href="mailto:info@abschleppdienst-schiek.de" className="hover:underline">
                info@abschleppdienst-schiek.de
              </a>
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Steuernummer</h2>
            <p className="mb-4">23/213/03748</p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Aufsichtsbehörde</h2>
            <p className="mb-4">
              Industrie- und Handelskammer zu Berlin<br />
              Fasanenstraße 85<br />
              10623 Berlin
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Berufsrechtliche Regelungen</h2>
            <p className="mb-4">
              Die Tätigkeit als Abschleppdienst unterliegt den Bestimmungen der Straßenverkehrsordnung (StVO) sowie den jeweils geltenden lokalen Regelungen.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Inhalte</h2>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Eine permanente inhaltliche Kontrolle der verlinkten Inhalte ist jedoch nicht zumutbar.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Haftung für Links</h2>
            <p className="mb-4">
              Diese Seite enthält Links zu externen Websites Dritter. Auf die Inhalte dieser Websites haben wir keinen Einfluss. 
              Für diese fremden Inhalte übernehmen wir keine Haftung; verantwortlich ist stets der jeweilige Betreiber der Seiten.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Urheberrecht</h2>
            <p className="mb-4">
              Alle Fotos, Texte und Designs auf dieser Seite sind urheberrechtlich geschützt.  
              Eine Nutzung oder Vervielfältigung ist nur nach vorheriger schriftlicher Zustimmung erlaubt.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Hinweis zu Bildmaterial / KI</h2>
            <p className="mb-4">
              Sollte Bildmaterial oder Inhalte mit Unterstützung von Künstlicher Intelligenz erstellt worden sein, wird dies entsprechend gekennzeichnet.
            </p>

            <h2 className="text-2xl font-semibold mb-4 mt-8">Verbraucherstreitbeilegung / OS-Plattform</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline ml-1">
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p className="mb-8">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <div className="mt-12 pt-8 border-t-2 border-slate-900">
              <p className="text-sm opacity-70">
                Stand: Januar 2026
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}