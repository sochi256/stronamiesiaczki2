import { useState } from 'react';
import { X, Check, Zap } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const myths = [
  {
    myth: 'Nie można myć włosów podczas miesiączki',
    fact: 'To stary mit. Mycie włosów nie ma żadnego wpływu na miesiączkę ani na zdrowie. Możesz normalnie się kąpać i dbać o siebie.',
  },
  {
    myth: 'Miesiączka oznacza, że jesteś chora',
    fact: 'Miesiączka to oznaka zdrowia i prawidłowego funkcjonowania organizmu. Jej brak (poza ciążą) jest powodem do niepokoju, nie jej obecność.',
  },
  {
    myth: 'Nie można uprawiać sportu podczas miesiączki',
    fact: 'Ruch jest wręcz wskazany! Łagodna aktywność fizyczna, jak joga czy spacer, zmniejsza skurcze i poprawia nastrój dzięki endorfinom.',
  },
  {
    myth: 'Miesiączka jest „brudna"',
    fact: 'Krew menstruacyjna to tkanka i krew — to czysty produkt fizjologiczny. Nie ma w niej nic brudnego ani toksycznego.',
  },
  {
    myth: 'Tracisz dużo krwi — to niebezpieczne',
    fact: 'Średnio traci się 30–80 ml krwi, co jest bezpieczne dla zdrowego organizmu. Organizm szybko to regeneruje.',
  },
  {
    myth: 'Kobiety w ciąży nie mogą mieć miesiączki',
    fact: 'To prawda — w ciąży miesiączka ustaje. Ale lekkie plamienie może wystąpić i nie zawsze jest powodem do niepokoju. Skonsultuj się z lekarzem.',
  },
];

export function MythsFacts() {
  const [flipped, setFlipped] = useState<number[]>([]);
  const { ref, visible } = useReveal();

  const toggle = (i: number) => {
    setFlipped((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const allFlipped = flipped.length === myths.length;

  return (
    <section id="mity" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-100/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center mb-14`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 border border-secondary-100 mb-5">
            <Zap className="w-4 h-4 text-secondary-500" />
            <span className="text-sm font-500 text-secondary-700">Mity i fakty</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Obalamy mity o miesiączce
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Wokół miesiączki narosło wiele mitów. Kliknij kartę, aby odkryć prawdę.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <button
            onClick={() => setFlipped(allFlipped ? [] : myths.map((_, i) => i))}
            className="px-6 py-3 rounded-full bg-white border-2 border-primary-200 text-primary-600 font-600 text-sm hover:bg-primary-50 transition-all"
          >
            {allFlipped ? 'Ukryj wszystkie odpowiedzi' : 'Odkryj wszystkie odpowiedzi'}
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {myths.map((item, i) => {
            const isFlipped = flipped.includes(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className="relative h-64 rounded-3xl overflow-hidden text-left transition-all duration-500 hover:scale-[1.02]"
                style={{ perspective: '1000px' }}
              >
                {/* Myth side */}
                <div
                  className={`absolute inset-0 p-7 rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-primary-300 flex flex-col transition-all duration-500 ${
                    isFlipped ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-9 h-9 rounded-full bg-primary-500 text-white flex items-center justify-center">
                      <X className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-700 uppercase tracking-wider text-primary-700">Mit</span>
                  </div>
                  <p className="font-display text-lg font-600 text-primary-900 leading-snug flex-1">
                    „{item.myth}"
                  </p>
                  <span className="text-xs text-primary-500 font-500 mt-2 opacity-60">Kliknij, by zobaczyć fakt</span>
                </div>

                {/* Fact side */}
                <div
                  className={`absolute inset-0 p-7 rounded-3xl bg-gradient-to-br from-success-50 to-accent-50 border-2 border-success-200 flex flex-col transition-all duration-500 ${
                    isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-9 h-9 rounded-full bg-success-500 text-white flex items-center justify-center">
                      <Check className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-700 uppercase tracking-wider text-success-700">Fakt</span>
                  </div>
                  <p className="text-ink/70 leading-relaxed flex-1 text-sm">{item.fact}</p>
                  <span className="text-xs text-success-500 font-500 mt-2 opacity-60">Kliknij, by wrócić</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
