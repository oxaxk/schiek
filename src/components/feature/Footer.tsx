export default function Footer() {
  return (
    <footer className="py-14 bg-[#020617] text-slate-100 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & Description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <a href="/" aria-label="Startseite Abschleppdienst Schiek" className="mb-4 flex flex-col items-center md:items-start gap-1">
              <span
                className="text-xl md:text-[1.7rem] font-semibold tracking-[0.28em] uppercase"
              >
                SCHIEK
              </span>
              <span
                className="text-[0.65rem] md:text-[0.75rem] tracking-[0.22em] uppercase text-sky-300/90"
              >
                24/7 ABSCHLEPP- &amp; BERGUNGSDIENST
              </span>
            </a>
            <p className="text-slate-300/80 mb-6 max-w-md text-sm md:text-base">
              Abschlepp- &amp; Bergungsdienst Schiek – privater Abschleppdienst für 24/7 Pannenhilfe, Unfallbergung und Falschparker auf Privatparkplätzen und Einfahrten in Berlin und Umgebung.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a 
                href="tel:+4917655677271"
                aria-label="Telefon anrufen"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-sky-400/70 shadow-[0_12px_32px_rgba(15,23,42,0.8)] hover:bg-[#1E293B] hover:border-sky-300 transition-colors"
              >
                <i aria-hidden="true" className="ri-phone-line text-sky-300 text-lg"></i>
              </a>
              <a 
                href="mailto:info@abschleppdienst-schiek.de"
                aria-label="E-Mail schreiben"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0F172A] border border-slate-500/80 shadow-[0_12px_32px_rgba(15,23,42,0.8)] hover:bg-[#1E293B] hover:border-sky-300 transition-colors"
              >
                <i aria-hidden="true" className="ri-mail-line text-slate-100 text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4
              className="font-semibold text-xl md:text-2xl mb-4"
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#hero" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/leistungen" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="/kontakt" className="text-slate-400 hover:text-sky-300 transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="/faq" className="text-slate-400 hover:text-sky-300 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs md:text-sm text-center md:text-left">
            © 2026 Abschleppdienst Schiek. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 justify-center md:justify-end">
            <a href="/impressum" className="text-slate-400 hover:text-sky-300 text-xs md:text-sm transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-slate-400 hover:text-sky-300 text-xs md:text-sm transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
