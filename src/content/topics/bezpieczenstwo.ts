import { ShieldCheck } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const bezpieczenstwoTopic: Topic = {
  slug: 'bezpieczenstwo',
  title: 'Bezpieczeństwo podczas miesiączki',
  kicker: 'Bezpieczeństwo',
  summary:
    'Rzadkie, ale poważne zagrożenia związane z miesiączką, bezpieczne używanie produktów higienicznych, a także ochrona prywatności w aplikacjach do śledzenia cyklu.',
  icon: ShieldCheck,
  tone: 'warning',
  sections: [
    {
      title: 'Zespół wstrząsu toksycznego (TSS)',
      paragraphs: [
        'To rzadka, ale bardzo poważna infekcja bakteryjna. Ryzyko rośnie, gdy tampon zostaje w ciele zbyt długo lub gdy używa się zbyt chłonnego produktu.',
      ],
      bullets: [
        'Nagła, wysoka gorączka',
        'Wysypka przypominająca oparzenie słoneczne, szczególnie na dłoniach i stopach',
        'Wymioty, biegunka, bóle mięśni',
        'Zawroty głowy, omdlenia, spadek ciśnienia',
        'Zaczerwienienie oczu, ust lub gardła',
      ],
      callout: {
        tone: 'danger',
        title: 'Co zrobić natychmiast',
        text: 'Wyjmij tampon i zadzwoń pod numer 112 lub jedź na SOR. Nie czekaj, aż objawy miną same.',
      },
    },
    {
      title: 'Bezpieczne używanie tamponów',
      paragraphs: [
        'Tampony są bezpieczne, jeśli stosuje się je prawidłowo. Kluczowe są higiena, właściwa chłonność i regularna wymiana.',
      ],
      bullets: [
        'Zawsze myj ręce przed włożeniem i wyjęciem tamponu',
        'Wybieraj najmniejszą chłonność, która wystarcza na Twoje krwawienie',
        'Nie używaj tamponu na noc dłużej niż 8 godzin',
        'Sprawdź, czy sznurek nie zrobił się zbyt długi i nie wysunął na zewnątrz',
        'Jeśli nie możesz znaleźć tamponu, który wcześniej włożyłaś, skonsultuj się z lekarzem',
      ],
    },
    {
      title: 'Produkty i ich skład',
      paragraphs: [
        'Podpaski, tampony i kubeczki powinny być produktami sprawdzonymi i dopuszczonymi do sprzedaży. Unikaj wyrobów z uszkodzonym opakowaniem lub podejrzanym pochodzeniem.',
      ],
      bullets: [
        'Wybieraj produkty od znanych producentów i sprawdzaj datę ważności',
        'Ostrożnie z produktami mocno perfumowanymi, bo mogą podrażniać skórę',
        'Jeśli po zmianie produktu pojawia się swędzenie, pieczenie lub wysypka, przestań go używać',
      ],
    },
    {
      title: 'Aktywność fizyczna i pływanie',
      paragraphs: [
        'Miesiączka nie powinna Cię zatrzymywać. Tampony i kubeczki pozwalają swobodnie pływać i uprawiać sport. Podpaski nie nadają się do wody, bo nie chłoną krwi poza ciałem.',
      ],
      bullets: [
        'Przed pływaniem zmień tampon lub kubeczek na świeży',
        'Jeśli ćwiczysz intensywnie i odczuwasz silny ból lub zawroty głowy, przerwij trening',
      ],
    },
    {
      title: 'Prywatność w aplikacjach do śledzenia cyklu',
      paragraphs: [
        'Dane o miesiączce są bardzo wrażliwe. Zanim zaczniesz korzystać z aplikacji, sprawdź, co dokładnie zbiera i komu je udostępnia.',
      ],
      bullets: [
        'Przeczytaj politykę prywatności i ustaw aplikację tak, by udostępniała jak najmniej danych',
        'Włącz blokadę kodem PIN lub biometrią',
        'Wyłącz udostępnianie lokalizacji, jeśli nie jest potrzebne',
        'Nie wysyłaj zrzutów ekranu z danymi cyklu osobom, którym nie ufasz',
      ],
    },
    {
      title: 'Bezpieczeństwo w szkole i wśród znajomych',
      paragraphs: [
        'Nikt nie ma prawa wyśmiewać Cię ani upokarzać z powodu miesiączki. Jeśli tak się dzieje, możesz porozmawiać z pielęgniarką szkolną, wychowawcą lub zaufanym dorosłym.',
      ],
    },
  ],
};
