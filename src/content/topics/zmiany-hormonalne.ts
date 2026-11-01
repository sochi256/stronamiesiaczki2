import { FlaskConical } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const zmianyHormonalneTopic: Topic = {
  slug: 'zmiany-hormonalne',
  title: 'Zmiany hormonalne w ciągu życia',
  kicker: 'Hormony',
  summary:
    'Jakie hormony kierują cyklem, jak zmieniają się w dojrzewaniu, w czasie cyklu i w okresie okołomenopauzalnym, oraz co wpływa na ich równowagę.',
  icon: FlaskConical,
  tone: 'secondary',
  sections: [
    {
      title: 'Najważniejsi gracze',
      paragraphs: [
        'Cykl steruje układ hormonalny, w którym mózg wysyła sygnały do jajników, a jajniki odpowiadają własnymi hormonami.',
      ],
      bullets: [
        'FSH i LH z przysadki mózgowej: pobudzają jajniki i owulację',
        'Estrogen: odbudowuje wyściółkę macicy i wpływa na skórę, włosy oraz nastrój',
        'Progesteron: przygotowuje macicę po owulacji i działa uspokajająco',
        'Testosteron: obecny także u kobiet w niewielkich ilościach',
      ],
    },
    {
      title: 'Dojrzewanie i pierwsza miesiączka',
      paragraphs: [
        'Pierwsza miesiączka (menarche) pojawia się zwykle między 10. a 15. rokiem życia. Przez pierwsze lata cykle mogą być nieregularne, a organizm dopiero uczy się własnego rytmu.',
      ],
    },
    {
      title: 'Wahania w ciągu cyklu',
      paragraphs: [
        'Poziom hormonów zmienia się niemal codziennie. Stąd wynikają zmiany energii, apetytu, nastroju czy wrażliwości piersi. To nie słabość, tylko naturalny efekt pracy organizmu.',
      ],
    },
    {
      title: 'Stres, sen i waga a hormony',
      paragraphs: [
        'Hormony cyklu są ściśle powiązane z układem stresu. Długotrwały stres, zbyt mało snu, gwałtowne odchudzanie czy intensywny sport bez odpowiedniego odżywiania mogą zaburzać owulację i wydłużać cykl.',
      ],
      bullets: [
        'Staraj się spać regularnie, najlepiej 7–9 godzin',
        'Jedz posiłki o stałych porach i nie eliminuj całych grup produktów bez powodu',
        'Zwracaj uwagę, czy nie pojawia się chroniczne zmęczenie',
      ],
    },
    {
      title: 'Antykoncepcja hormonalna',
      paragraphs: [
        'Tabletki, plastry, pierścienie dopochwowe i wkładki hormonalne zmieniają poziom hormonów w organizmie. Cykl może wtedy wyglądać inaczej, a krwawienia mogą być lżejsze lub nieregularne.',
      ],
      callout: {
        tone: 'info',
        title: 'Nie dobieraj hormonów samodzielnie',
        text: 'Wybór i zmiana metody hormonalnej powinny być omówione z lekarzem lub ginekologiem, który uwzględni Twoje zdrowie i historię chorób.',
      },
    },
    {
      title: 'Okres okołomenopauzalny i menopauza',
      paragraphs: [
        'Od około czterdziestego roku życia poziom estrogenu zaczyna się wahać. Cykle stają się nieregularne, a objawy takie jak uderzenia gorąca czy problemy ze snem mogą się nasilać. Menopauza to moment, w którym miesiączki ustają na stałe, zwykle po 12 miesiącach bez krwawienia.',
      ],
    },
  ],
};
