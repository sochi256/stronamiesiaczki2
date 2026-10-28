import { Moon, Sparkles, ArrowDown, Calendar, Droplet, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-primary-200/40 animate-blob blur-3xl -z-10" />
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-secondary-200/30 animate-blob blur-3xl -z-10" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-accent-200/20 animate-blob blur-3xl -z-10" style={{ animationDelay: '8s' }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-primary-200 mb-6">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-500 text-primary-700">Twój przewodnik po świecie cyklu</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-700 leading-[1.05] text-ink mb-6 text-balance">
            Rozum swoje ciało,
            <br />
            <span className="gradient-text">kochaj swój cykl</span>
          </h1>

          <p className="text-lg sm:text-xl text-ink/60 leading-relaxed max-w-xl mb-8 text-balance">
            Kompleksowy, napisany prostym językiem przewodnik o miesiączce dla młodych kobiet.
            Bez wstydu, bez tabu — tylko wiedza, która daje pewność siebie.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#co-to-jest"
              className="flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-600 shadow-xl shadow-primary-300/40 hover:shadow-2xl hover:shadow-primary-300/50 hover:-translate-y-1 transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              <BookOpen className="w-5 h-5" />
              Zacznij czytać
            </a>
            <a
              href="#fazy-cyklu"
              className="flex items-center gap-2 px-7 py-4 rounded-full bg-white/80 border border-primary-200 text-ink font-600 hover:border-primary-400 hover:bg-white transition-all duration-300"
              style={{ textDecoration: 'none' }}
            >
              <Calendar className="w-5 h-5 text-primary-500" />
              Poznaj fazy cyklu
            </a>
          </div>

          <div className="flex gap-8 mt-10">
            <div>
              <div className="font-display text-3xl font-700 text-primary-600">28</div>
              <div className="text-sm text-ink/50">dni średniego cyklu</div>
            </div>
            <div className="w-px bg-primary-200" />
            <div>
              <div className="font-display text-3xl font-700 text-primary-600">4</div>
              <div className="text-sm text-ink/50">fazy cyklu</div>
            </div>
            <div className="w-px bg-primary-200" />
            <div>
              <div className="font-display text-3xl font-700 text-primary-600">100%</div>
              <div className="text-sm text-ink/50">naturalne i normalne</div>
            </div>
          </div>
        </div>

        {/* Right: visual */}
        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative w-[460px] h-[460px]">
            {/* Main circle */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-100 via-white to-secondary-100 shadow-2xl shadow-primary-200/40" />
            <div className="absolute inset-8 rounded-full border-2 border-dashed border-primary-200 animate-pulse-soft" />

            {/* Moon icon center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-2xl shadow-primary-300/50 animate-float">
                <Moon className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute top-8 -right-4 px-4 py-3 rounded-2xl bg-white shadow-xl border border-primary-100 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2">
                <Droplet className="w-5 h-5 text-primary-500" />
                <span className="text-sm font-600 text-ink">3–5 dni</span>
              </div>
              <div className="text-xs text-ink/50 mt-0.5">trwa miesiączka</div>
            </div>

            <div className="absolute bottom-12 -left-4 px-4 py-3 rounded-2xl bg-white shadow-xl border border-accent-100 animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent-500" />
                <span className="text-sm font-600 text-ink">Owulacja</span>
              </div>
              <div className="text-xs text-ink/50 mt-0.5">ok. 14. dnia</div>
            </div>

            <div className="absolute top-1/2 -right-8 px-4 py-3 rounded-2xl bg-white shadow-xl border border-secondary-100 animate-float" style={{ animationDelay: '3s' }}>
              <div className="text-sm font-600 text-ink">Faza lutealna</div>
              <div className="text-xs text-ink/50 mt-0.5">przygotowanie</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink/30">
        <span className="text-xs font-500 tracking-widest uppercase">Przewiń</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
