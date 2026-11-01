import { Calendar } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const przebiegCyklaTopic: Topic = {
  slug: 'przebieg-cyklu',
  title: 'Przebieg cyklu menstruacyjnego',
  kicker: 'Cykl menstruacyjny',
  summary:
    'Jak liczyć długość cyklu, co dzieje się w ciele z dnia na dzień i jak rozpoznać owulację. Wyjaśniamy też, co jest normalną zmiennością, a co warto sprawdzić.',
  icon: Calendar,
  tone: 'accent',
  sections: [
    {
      title: 'Jak liczyć cykl',
      paragraphs: [
        'Pierwszym dniem cyklu jest pierwszy dzień krwawienia. Ostatnim dniem jest dzień przed kolejnym krwawieniem. Całkowita długość cyklu wynosi zwykle od 21 do 35 dni.',
      ],
      bullets: [
        'Cykl 28-dniowy jest tylko jedną z wielu możliwości, nie jest wzorem',
        'Ważniejsza od długości jest regularność, czyli podobna długość z miesiąca na miesiąc',
      ],
    },
    {
      title: 'Faza menstruacyjna (dni 1–5 lub 1–7)',
      paragraphs: [
        'Błona śluzowa macicy złuszcza się, ponieważ poziom estrogenu i progesteronu spadł. To czas krwawienia, który u większości osób trwa od 3 do 7 dni.',
      ],
    },
    {
      title: 'Faza folikularna',
      paragraphs: [
        'Przysadka mózgowa wydziela hormon FSH, który pobudza rozwój pęcherzyków w jajnikach. Jeden z nich dojrzewa, a poziom estrogenu rośnie, odbudowując wyściółkę macicy.',
      ],
    },
    {
      title: 'Owulacja',
      paragraphs: [
        'Dojrzały pęcherzyk uwalnia komórkę jajową. W cyklu 28-dniowym dzieje się to zwykle około 14. dnia, ale w praktyce moment ten zmienia się z cyklu na cykl.',
      ],
      bullets: [
        'Śluz szyjkowy staje się przezroczysty, śliski i rozciągliwy, podobny do białka jaja',
        'Niektóre osoby czują łagodny ból po jednej stronie dolnej części brzucha',
        'Temperatura ciała w spoczynku wzrasta o około 0,2–0,5°C',
      ],
    },
    {
      title: 'Faza lutealna',
      paragraphs: [
        'Po owulacji ciałko żółte wydziela progesteron, który przygotowuje macicę na ewentualną ciążę. Jeśli do niej nie dojdzie, poziom hormonów spada i rozpoczyna się kolejne krwawienie. Faza ta trwa zwykle 12–16 dni i jest najbardziej stała w długości.',
      ],
    },
    {
      title: 'Co jest normalne, a co warto sprawdzić',
      paragraphs: [
        'Przez pierwsze 1–2 lata po pierwszej miesiączce cykle bywają bardzo nieregularne. Później wahania o kilka dni również są normalne.',
      ],
      callout: {
        tone: 'info',
        title: 'Kiedy zapisać się do lekarza',
        text: 'Jeśli cykle są krótsze niż 21 dni lub dłuższe niż 35, albo nagle zmieniają się bez wyraźnej przyczyny, warto przedyskutować to z ginekologiem.',
      },
    },
  ],
};
