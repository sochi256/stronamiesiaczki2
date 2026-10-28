import { Moon, Heart, Mail, Phone, ExternalLink } from 'lucide-react';

const resources = [
  { label: 'Wiedza o cyklu', href: '#fazy-cyklu' },
  { label: 'Objawy i pomoc', href: '#objawy' },
  { label: 'Higiena', href: '#higiena' },
  { label: 'Mity i fakty', href: '#mity' },
  { label: 'FAQ', href: '#faq' },
];

const helplines = [
  { label: 'Telefon Zaufania dla Dzieci i Młodzieży', number: '116 111' },
  { label: 'Telefon Zaufania dla Kobiet', number: '600 900 000' },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <Moon className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-700 text-white">Cykl</span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-md mb-6">
              Twój przewodnik po świecie miesiączki. Tworzony z myślą o młodych kobietach,
              które chcą rozumieć swoje ciało — bez wstydu i tabu.
            </p>
            <p className="flex items-center gap-2 text-sm text-white/40">
              Stworzone z <Heart className="w-4 h-4 text-primary-400 fill-primary-400" /> dla kobiet
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg font-600 text-white mb-4">Nawigacja</h4>
            <ul className="space-y-2.5">
              {resources.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    className="text-sm text-white/50 hover:text-primary-300 transition-colors"
                    style={{ textDecoration: 'none' }}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-display text-lg font-600 text-white mb-4">Gdzie szukać pomocy</h4>
            <ul className="space-y-3">
              {helplines.map((h) => (
                <li key={h.number} className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm text-white/80 font-500">{h.number}</div>
                    <div className="text-xs text-white/40">{h.label}</div>
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-white/50">W razie wątpliwości skonsultuj się z ginekologiem</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 mb-8">
          <p className="text-sm text-white/40 leading-relaxed flex items-start gap-2">
            <ExternalLink className="w-4 h-4 mt-0.5 shrink-0" />
            <span>
              Ta strona ma charakter wyłącznie edukacyjny i informacyjny. Nie zastępuje porady
              medycznej. W przypadku problemów zdrowotnych skonsultuj się z lekarzem lub pielęgniarką.
            </span>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © 2026 Cykl — Przewodnik po miesiączce. Wszystkie prawa zastrzeżone.
          </p>
          <p className="text-sm text-white/40">
            Dla młodych kobiet, z szacunkiem i empatią.
          </p>
        </div>
      </div>
    </footer>
  );
}
