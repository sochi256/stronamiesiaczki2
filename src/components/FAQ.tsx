import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const faqs = [
  {
    q: 'Czy mój cykl jest normalny, jeśli trwa krócej lub dłużej niż 28 dni?',
    a: 'Tak! Cykl od 21 do 35 dni jest uważany za normalny. Tylko niewielki odsetek kobiet ma dokładnie 28-dniowy cykl. Ważne jest, by Twój cykl był w miarę regularny — czyli podobnej długości z miesiąca na miesiąc.',
  },
  {
    q: 'Ile krwi tracę podczas miesiączki?',
    a: 'Średnio kobiety tracą 30–80 ml krwi podczas jednej miesiączki — to około 2–4 łyżki. Jeśli używasz więcej niż 6 podpasek dziennie lub zmieniasz tampon co godzinę, warto skonsultować się z lekarzem, ponieważ może to wskazywać na obfite krwawienie (menorrhagia).',
  },
  {
    q: 'Czy ból podczas miesiączki jest normalny?',
    a: 'Łagodny do umiarkowany ból jest normalny i powszechny. Ale jeśli ból jest tak silny, że uniemożliwia Ci normalne funkcjonowanie, nie ustępuje po lekach przeciwbólowych lub towarzyszą mu wymioty, skonsultuj się z ginekologiem. Może to być objaw endometriozy lub innych schorzeń.',
  },
  {
    q: 'Czy można zajść w ciążę podczas miesiączki?',
    a: 'Tak, choć jest to mniej prawdopodobne. Plemniki mogą przeżyć w ciele kobiety do 5 dni, a owulacja może wystąpić wcześniej u kobiet z krótkim cyklem. Jeśli nie planujesz ciąży, stosuj ochronę również podczas miesiączki.',
  },
  {
    q: 'Kiedy powinnam udać się do ginekologa?',
    a: 'Warto umówić się na pierwszą wizytę u ginekologa między 13. a 15. rokiem życia, nawet jeśli nie masz problemów — to wizyta profilaktyczna. Pilnie skonsultuj się z lekarzem, jeśli: miesiączka jest bardzo obfita, ból jest nie do zniesienia, cykl jest bardzo nieregularny, krwawienie trwa dłużej niż 7 dni lub wystąpiło krwawienie między miesiączkami.',
  },
  {
    q: 'Jak mogę śledzić swój cykl?',
    a: 'Istnieje wiele sposobów: tradycyjny kalendarz papierowy, aplikacje na telefon (np. Flo, Clue, Period Tracker), notes. Warto notować datę rozpoczęcia i zakończenia krwawienia, nasilenie objawów, nastrój i ewentualne bóle. Po kilku miesiącach zauważysz swój wzorzec.',
  },
  {
    q: 'Co to jest PMS i czy każda kobieta go ma?',
    a: 'PMS (zespół napięcia przedmiesiączkowego) to zestaw objawów fizycznych i emocjonalnych występujących przed miesiączką. Nie każda kobieta go doświadcza, a u tych, które mają — objawy mogą być łagodne lub silne. Jeśli objawy są bardzo nasilone i zakłócają codzienne życie, może to być PMDD (zespół dysforycznego napięcia przedmiesiączkowego) — warto wtedy skonsultować się z lekarzem.',
  },
  {
    q: 'Czy dieta wpływa na miesiączkę?',
    a: 'Tak. Zbilansowana dieta bogata w żelazo, wapń, magnez i kwasy omega-3 może złagodzić objawy. Z kolei nadmiar kofeiny, soli i cukru może nasilać wzdęcia, drażliwość i skurcze. Warto też ograniczyć alkohol w tym okresie.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useReveal();

  return (
    <section id="faq" className="py-24 sm:py-32 bg-gradient-to-b from-white to-primary-50/30">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} text-center mb-14`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-5">
            <HelpCircle className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-500 text-primary-700">Najczęstsze pytania</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Pytania, które możesz mieć
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Zebraliśmy odpowiedzi na pytania, które najczęściej zadają młode kobiety.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`reveal ${visible ? 'is-visible' : ''} rounded-2xl bg-white border-2 overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-primary-300 shadow-lg' : 'border-ink/8 hover:border-primary-200'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className={`font-600 text-ink leading-snug ${isOpen ? 'text-primary-700' : ''}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-primary-500 text-white rotate-180' : 'bg-primary-50 text-primary-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-6 text-ink/60 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 text-white text-center">
          <h3 className="font-display text-2xl font-700 mb-3">Masz więcej pytań?</h3>
          <p className="text-white/80 mb-5 max-w-xl mx-auto leading-relaxed">
            Nie wstydź się pytać. Porozmawiaj z mamą, starszą siostrą, szkolną pielęgniarką
            lub lekarzem ginekologiem. Wiedza to pewność siebie.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-600 font-600 hover:bg-primary-50 transition-all"
            style={{ textDecoration: 'none' }}
          >
            Wróć na górę
          </a>
        </div>
      </div>
    </section>
  );
}
