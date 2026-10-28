import { useState } from 'react';
import { Calendar, Droplet, Sun, CloudRain, ChevronRight } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const phases = [
  {
    id: 'menstrualna',
    name: 'Miesiączkowa',
    days: 'Dzień 1–5',
    icon: Droplet,
    color: 'from-primary-400 to-primary-600',
    bg: 'bg-primary-50',
    border: 'border-primary-200',
    text: 'text-primary-600',
    description:
      'To początek cyklu. Jeśli nie doszło do zapłodnienia, błona śluzowa macicy złuszcza się i zostaje wydalona w postaci krwawienia. To naturalny „reset" Twojego ciała.',
    symptoms: ['krwawienie', 'skurcze brzucha', 'zmęczenie', 'wahania nastroju'],
    duration: '3–7 dni',
  },
  {
    id: 'folikularna',
    name: 'Pęcherzykowa',
    days: 'Dzień 1–13',
    icon: Sun,
    color: 'from-accent-400 to-accent-600',
    bg: 'bg-accent-50',
    border: 'border-accent-200',
    text: 'text-accent-600',
    description:
      'Przysadka mózgowa wysyła FSH, który stymuluje wzrost pęcherzyków w jajnikach. Rośnie poziom estrogenu, a błona śluzowa macicy zaczyna się odbudowywać. Czujesz przypływ energii.',
    symptoms: ['wzrost energii', 'lepszy nastrój', 'jasna śluzówka', 'wyższa pewność siebie'],
    duration: 'ok. 13 dni',
  },
  {
    id: 'owulacja',
    name: 'Owulacja',
    days: 'Dzień 14',
    icon: Calendar,
    color: 'from-secondary-400 to-secondary-600',
    bg: 'bg-secondary-50',
    border: 'border-secondary-200',
    text: 'text-secondary-600',
    description:
      'Dojrzały pęcherzyek uwalnia jajeczko, które wędruje do jajowodu. To moment największej płodności. Możesz odczuwać delikatny ból po jednej stronie brzucha i zmiany w śluzie szyjkowym.',
    symptoms: ['ból owulacyjny', 'śliski śluz', 'podwyższone libido', 'lekkie plamienie'],
    duration: '24–36 godzin',
  },
  {
    id: 'lutealna',
    name: 'Ciałka żółtego',
    days: 'Dzień 15–28',
    icon: CloudRain,
    color: 'from-warning-400 to-warning-600',
    bg: 'bg-warning-50',
    border: 'border-warning-200',
    text: 'text-warning-600',
    description:
      'Po owulacji progesteron dominuje, przygotowując macicę na ewentualną ciążę. Jeśli jajeczko nie zostanie zapłodnione, poziom hormonów spada, co może powodować objawy PMS.',
    symptoms: ['tkliwość piersi', 'wzdęcia', 'zmiany nastroju', 'zwiększony apetyt'],
    duration: 'ok. 14 dni',
  },
];

export function CyclePhases() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useReveal();
  const phase = phases[active];
  const ActiveIcon = phase.icon;

  return (
    <section id="fazy-cyklu" className="py-24 sm:py-32 bg-gradient-to-b from-white to-primary-50/50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/30 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center mb-14`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 border border-accent-100 mb-5">
            <Calendar className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-500 text-accent-700">Cykl menstruacyjny</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Cztery fazy Twojego cyklu
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Twój cykl to nie tylko krwawienie. To skomplikowany, piękny rytm, w którym hormony
            dyrygują zmianami w Twoim ciele i nastroju. Poznaj każdą fazę.
          </p>
        </div>

        {/* Phase selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {phases.map((p, i) => {
            const Icon = p.icon;
            const isActive = i === active;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full border-2 font-600 text-sm transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-lg`
                    : `bg-white ${p.border} ${p.text} hover:shadow-md`
                }`}
              >
                <Icon className="w-4 h-4" />
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Active phase detail */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Visual */}
          <div className={`relative p-10 rounded-[2.5rem] ${phase.bg} border-2 ${phase.border} overflow-hidden`}>
            <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br ${phase.color} opacity-10 blur-2xl`} />

            {/* Cycle diagram */}
            <div className="relative w-full aspect-square max-w-sm mx-auto">
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                {/* Background ring */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#e5e7eb" strokeWidth="14" />
                {/* Progress ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  fill="none"
                  stroke="url(#phaseGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={`${(active + 1) * 25 * 5.34} 534`}
                  className="transition-all duration-700 ease-out"
                />
                <defs>
                  <linearGradient id="phaseGrad" x1="0" y1='0" x2="1" y2="1'>
                    <stop offset="0%" stopColor="#ec7591" />
                    <stop offset="100%" stopColor="#a8244b" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-2xl mb-3`}>
                  <ActiveIcon className="w-12 h-12 text-white" />
                </div>
                <div className={`font-display text-2xl font-700 ${phase.text}`}>{phase.days}</div>
                <div className="text-sm text-ink/40 mt-1">Faza {active + 1} z 4</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className={`font-display text-3xl font-700 ${phase.text} mb-1`}>
                Faza {phase.name}
              </h3>
              <p className="text-sm font-500 text-ink/40 mb-4">Trwa: {phase.duration}</p>
              <p className="text-lg text-ink/70 leading-relaxed">{phase.description}</p>
            </div>

            <div>
              <p className="text-sm font-600 text-ink/50 mb-3 uppercase tracking-wider">
                Typowe objawy
              </p>
              <div className="flex flex-wrap gap-2">
                {phase.symptoms.map((symptom) => (
                  <span
                    key={symptom}
                    className={`px-4 py-2 rounded-full ${phase.bg} ${phase.text} text-sm font-500 border ${phase.border}`}
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActive((active - 1 + 4) % 4)}
                className="px-4 py-2.5 rounded-full bg-white border border-ink/10 text-ink/60 text-sm font-500 hover:border-primary-300 hover:text-primary-600 transition-all"
              >
                ← Poprzednia
              </button>
              <button
                onClick={() => setActive((active + 1) % 4)}
                className="flex items-center gap-1 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white text-sm font-600 shadow-lg hover:shadow-xl transition-all"
              >
                Następna faza
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
