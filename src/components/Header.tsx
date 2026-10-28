import { useState, useEffect } from 'react';
import { Moon, Heart, BookOpen, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#co-to-jest', label: 'Co to jest' },
  { href: '#fazy-cyklu', label: 'Fazy cyklu' },
  { href: '#objawy', label: 'Objawy' },
  { href: '#higiena', label: 'Higiena' },
  { href: '#mity', label: 'Mity i fakty' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[0_2px_20px_rgba(224,74,111,0.08)] py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-300/40 group-hover:scale-110 transition-transform duration-300">
            <Moon className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl font-700 text-ink tracking-tight">
            Cykl
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm font-500 text-ink/70 hover:text-primary-600 hover:bg-primary-50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#faq"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-600 shadow-lg shadow-primary-300/40 hover:shadow-xl hover:shadow-primary-300/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4" />
            Dowiedz się więcej
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center text-ink"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mx-5 mt-3 p-4 rounded-2xl glass shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-500 text-ink/80 hover:text-primary-600 hover:bg-primary-50 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
