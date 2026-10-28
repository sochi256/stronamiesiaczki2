import { Activity, Flame, Brain, Utensils, Moon, Heart } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const symptoms = [
  {
    icon: Activity,
    title: 'Skurcze brzucha',
    severity: 'Bardzo częsty',
    text: 'Bolesne skurcze (dysmenorrhea) to jeden z najczęstszych objawów. Macica kurczy się, aby usunąć błonę śluzową. Ból zwykle odczuwalny w dolnej części brzucha.',
    color: 'bg-primary-50 border-primary-200 text-primary-600',
    severityColor: 'bg-primary-100 text-primary-700',
  },
  {
    icon: Brain,
    title: 'Wahania nastroju',
    severity: 'Częsty',
    text: 'Spadek estrogenu i progesteronu może powodować drażliwość, płaczliwość, niepokój. To tzw. PMS — zespół napięcia przedmiesiączkowego.',
    color: 'bg-accent-50 border-accent-200 text-accent-600',
    severityColor: 'bg-accent-100 text-accent-700',
  },
  {
    icon: Flame,
    title: 'Zmęczenie',
    severity: 'Częsty',
    text: 'Spadek poziomu żelaza podczas krwawienia i zmiany hormonalne mogą powodować uczucie wyczerpania. Warto wtedy odpoczywać i nie przeciążać się.',
    color: 'bg-warning-50 border-warning-200 text-warning-600',
    severityColor: 'bg-warning-100 text-warning-700',
  },
  {
    icon: Heart,
    title: 'Tkliwość piersi',
    severity: 'Częsty',
    text: 'Wysoki poziom progesteronu w fazie lutealnej może powodować obrzęk i nadwrażliwość piersi. Po rozpoczęciu krwawienia objaw zazwyczaj ustępuje.',
    color: 'bg-secondary-50 border-secondary-200 text-secondary-600',
    severityColor: 'bg-secondary-100 text-secondary-700',
  },
];

const remedies = [
  {
    icon: Utensils,
    title: 'Zdrowa dieta',
    items: ['Żelazo (szpinak, czerwone mięso)', 'Omega-3 (ryby, orzechy)', 'Mniej soli i kofeiny', 'Ciepłe napoje z imbirem'],
  },
  {
    icon: Activity,
    title: 'Ruch i relaks',
    items: ['Joga i rozciąganie', 'Lekki spacer', 'Oddech i medytacja', 'Masaż dolnej części brzucha'],
  },
  {
    icon: Moon,
    title: 'Odpoczynek',
    items: ['7–9 godzin snu', 'Ciepła kąpiel', 'Termofor na brzuch', 'Czas na siebie'],
  },
  {
    icon: Flame,
    title: 'Leczenie',
    items: ['Leki przeciwbólowe (ibuprofen)', 'Naturalne suplementy', 'Konsultacja z lekarzem', 'Akupresura'],
  },
];

export function SymptomsManagement() {
  const { ref, visible } = useReveal();

  return (
    <section id="objawy" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center mb-16`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning-50 border border-warning-100 mb-5">
            <Activity className="w-4 h-4 text-warning-500" />
            <span className="text-sm font-500 text-warning-700">Samopoczucie</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Objawy i jak sobie radzić
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Każda koba inaczej przeżywa miesiączkę. Niektóre ledwo ją zauważają, inne potrzebują
            kilku dni w łóżku. Oba scenariusze są normalne. Oto najczęstsze objawy i sprawdzone
            sposoby na ulgę.
          </p>
        </div>

        {/* Symptoms grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {symptoms.map((symptom, i) => {
            const Icon = symptom.icon;
            return (
              <div
                key={symptom.title}
                className={`reveal ${visible ? 'is-visible' : ''} p-7 rounded-3xl bg-white border-2 ${symptom.color.split(' ').slice(1).join(' ')} hover:shadow-xl transition-all duration-500`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl ${symptom.color.split(' ')[0]} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-600 ${symptom.severityColor}`}>
                    {symptom.severity}
                  </span>
                </div>
                <h3 className="font-display text-xl font-700 text-ink mb-2">{symptom.title}</h3>
                <p className="text-ink/60 leading-relaxed">{symptom.text}</p>
              </div>
            );
          })}
        </div>

        {/* Remedies */}
        <div className="p-8 sm:p-12 rounded-[2rem] bg-gradient-to-br from-primary-50 via-white to-accent-50 border border-primary-100">
          <h3 className="font-display text-2xl sm:text-3xl font-700 text-ink mb-8 text-center">
            Sposoby na ulgę
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {remedies.map((remedy, i) => {
              const Icon = remedy.icon;
              return (
                <div
                  key={remedy.title}
                  className={`reveal ${visible ? 'is-visible' : ''} p-6 rounded-2xl bg-white border border-ink/5 shadow-sm hover:shadow-lg transition-all duration-500`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-600 text-ink mb-3">{remedy.title}</h4>
                  <ul className="space-y-2">
                    {remedy.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
