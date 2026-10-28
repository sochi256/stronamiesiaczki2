import { Droplets, ShowerHead, Shield, Recycle, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const products = [
  {
    name: 'Podpaski',
    icon: Shield,
    pros: ['Łatwe w użyciu', 'Dobre na początek', 'Wiele rozmiarów', 'Widoczna zmiana nasycenia'],
    cons: ['Może powodować otarcia', 'Mniej ekologiczne'],
    color: 'bg-primary-50 border-primary-200',
    iconBg: 'bg-primary-100 text-primary-600',
  },
  {
    name: 'Tampony',
    icon: Droplets,
    pros: ['Niewidoczne pod ubraniem', 'Swoboda ruchu', 'Można pływać', 'Dyskretne'],
    cons: ['Wymagają wprawy', 'Zmieniać co 4–8 godzin', 'Ryzyko TSS (rzadkie)'],
    color: 'bg-accent-50 border-accent-200',
    iconBg: 'bg-accent-100 text-accent-600',
  },
  {
    name: 'Kubeczki menstruacyjne',
    icon: Recycle,
    pros: ['Wielokrotnego użytku', 'Do 12 godzin ochrony', 'Bardzo ekologiczne', 'Ekonomiczne długoterminowo'],
    cons: ['Wymagają wprawy', 'Wyższy koszt początkowy', 'Wymagają sterylizacji'],
    color: 'bg-success-50 border-success-200',
    iconBg: 'bg-success-100 text-success-600',
  },
];

const hygieneTips = [
  'Zmieniaj podpaskę co 3–4 godziny, tampon co 4–8 godzin',
  'Myj okolice intymne ciepłą wodą — używaj łagodnych środków bez zapachu',
  'Nigdy nie wchodź z tamponem na noc na dłużej niż 8 godzin',
  'Noś przewiewną, bawełnianą bieliznę w czasie miesiączki',
  'Pij dużo wody — pomaga zmniejszyć wzdęcia i zatrzymanie wody',
  'Śledź swój cykl w kalendarzu lub aplikacji — to daje poczucie kontroli',
];

export function Hygiene() {
  const { ref, visible } = useReveal();

  return (
    <section id="higiena" className="py-24 sm:py-32 bg-gradient-to-b from-primary-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center mb-16`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-50 border border-success-100 mb-5">
            <ShowerHead className="w-4 h-4 text-success-500" />
            <span className="text-sm font-500 text-success-700">Higiena i samopieka</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Produkty i higiena intymna
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Istnieje wiele sposobów na radzenie sobie z krwawieniem. Wybierz ten, który jest
            dla Ciebie najwygodniejszy. Nie ma jednego „właściwego" wyboru.
          </p>
        </div>

        {/* Product comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className={`reveal ${visible ? 'is-visible' : ''} p-7 rounded-3xl bg-white border-2 ${product.color} hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${product.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-700 text-ink mb-5">{product.name}</h3>

                <div className="space-y-2 mb-4">
                  {product.pros.map((pro) => (
                    <div key={pro} className="flex items-start gap-2 text-sm text-ink/70">
                      <CheckCircle2 className="w-4 h-4 text-success-500 mt-0.5 shrink-0" />
                      {pro}
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-ink/5 space-y-2">
                  {product.cons.map((con) => (
                    <div key={con} className="flex items-start gap-2 text-sm text-ink/50">
                      <AlertCircle className="w-4 h-4 text-warning-500 mt-0.5 shrink-0" />
                      {con}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hygiene tips */}
        <div className="p-8 sm:p-10 rounded-[2rem] bg-white border border-primary-100 shadow-sm">
          <h3 className="font-display text-2xl font-700 text-ink mb-6 text-center">
            Zasady higieny intymnej
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
            {hygieneTips.map((tip, i) => (
              <div
                key={tip}
                className={`reveal ${visible ? 'is-visible' : ''} flex items-start gap-3`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-7 h-7 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-700 shrink-0">
                  {i + 1}
                </div>
                <p className="text-ink/70 leading-relaxed pt-0.5">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
