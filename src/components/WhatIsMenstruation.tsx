import { BookOpen, HeartPulse, Brain, Leaf } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const aspects = [
  {
    icon: HeartPulse,
    title: 'Naturalny proces',
    text: 'Miesiączka to biologiczny proces, który świadczy o tym, że Twoje ciało funkcjonuje prawidłowo. To nie choroba — to znak zdrowia.',
    color: 'bg-primary-50 text-primary-600',
    border: 'border-primary-200',
  },
  {
    icon: Brain,
    title: 'Harmonia hormonalna',
    text: 'Twoje hormony tańczą przez cały miesiąc. Estrogen, progesteron, FSH i LH pracują razem, tworząc rytm, który wpływa na Twoje samopoczucie.',
    color: 'bg-accent-50 text-accent-600',
    border: 'border-accent-200',
  },
  {
    icon: Leaf,
    title: 'Bez wstydu',
    text: 'Miesiączka to nie tabu. Miliony kobiet na całym świecie doświadczają tego samego. Warto o tym mówić otwarcie i bez skrępowania.',
    color: 'bg-secondary-50 text-secondary-600',
    border: 'border-secondary-200',
  },
];

export function WhatIsMenstruation() {
  const { ref, visible } = useReveal();

  return (
    <section id="co-to-jest" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center mb-16`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-5">
            <BookOpen className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-500 text-primary-700">Podstawy</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Co to jest miesiączka?
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Miesiączka (menstruacja) to comiesięczne krwawienie z dróg rodnych, które występuje
            u kobiet w wieku rozrodczym. Jest częścią cyklu menstruacyjnego — naturalnego rytmu
            Twojego ciała, który przygotowuje je do ewentualnej ciąży.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {aspects.map((aspect, i) => {
            const Icon = aspect.icon;
            return (
              <div
                key={aspect.title}
                className={`reveal ${visible ? 'is-visible' : ''} p-8 rounded-3xl bg-white border ${aspect.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl ${aspect.color} flex items-center justify-center mb-5`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-700 text-ink mb-3">{aspect.title}</h3>
                <p className="text-ink/60 leading-relaxed">{aspect.text}</p>
              </div>
            );
          })}
        </div>

        {/* Info box */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-100">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-md">
              <HeartPulse className="w-6 h-6 text-primary-500" />
            </div>
            <div>
              <h3 className="font-display text-xl font-700 text-ink mb-2">
                Kiedy zaczyna się pierwsza miesiączka?
              </h3>
              <p className="text-ink/60 leading-relaxed">
                Pierwsza miesiączka (menarche) pojawia się zazwyczaj między 11. a 15. rokiem życia,
                choć u niektórych dziewcząt może wystąpić wcześniej lub później. To indywidualne
                i zależy od wielu czynników — genetyki, wagi ciała, odżywiania i ogólnego stanu zdrowia.
                Nie ma powodów do obaw, jeśli Twoja przychodzi trochę wcześniej lub później niż u koleżanek.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
