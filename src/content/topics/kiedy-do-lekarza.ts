import { Stethoscope } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const kiedyDoLekarzaTopic: Topic = {
  slug: 'kiedy-do-lekarza',
  title: 'Kiedy zgłosić się do specjalisty',
  kicker: 'Zdrowie i pomoc',
  summary:
    'Jakie objawy wymagają natychmiastowej pomocy, jakie warto omówić z lekarzem w ciągu kilku tygodni oraz jak przygotować się do wizyty u ginekologa.',
  icon: Stethoscope,
  tone: 'primary',
  sections: [
    {
      title: 'Pilnie: natychmiast do lekarza lub na SOR',
      paragraphs: [
        'Te objawy nie czekają. Zadzwoń pod numer 112 lub uda się na izbę przyjęć.',
      ],
      bullets: [
        'Krwawienie tak obfite, że przesiąka wkładkę co godzinę przez kilka godzin z rzędu',
        'Skrzepy większe niż moneta 2,5 zł (ok. 2,5 cm)',
        'Silny ból, którego nie łagodzą leki, lub wymioty z bólem brzucha',
        'Omdlenie, zawroty głowy, duszność lub bardzo wysoka gorączka',
        'Krwawienie w czasie ciąży lub podejrzenie ciąży z bólem i plamieniem',
        'Objawy wstrząsu toksycznego opisane w osobnym temacie o bezpieczeństwie',
      ],
    },
    {
      title: 'W ciągu kilku tygodni: umów wizytę',
      paragraphs: [
        'Te sytuacje nie są zagrożeniem życia, ale warto je sprawdzić, zanim zaczną się nasilać.',
      ],
      bullets: [
        'Cykle krótsze niż 21 dni lub dłuższe niż 35 dni, albo nagle nieregularne',
        'Brak pierwszej miesiączki do 15. roku życia',
        'Brak miesiączki przez ponad 3 miesiące przy wcześniej regularnych cyklach, gdy nie ma ciąży',
        'Krwawienie trwające dłużej niż 7 dni',
        'Krwawienie między miesiącami lub po stosunku',
        'Ból podczas stosunku lub bolesne miesiączki utrudniające codzienne funkcjonowanie',
        'Nagłe zmiany wagi, nadmierne owłosienie lub silny trądzik',
      ],
    },
    {
      title: 'Pierwsza wizyta u ginekologa',
      paragraphs: [
        'Pierwsza wizyta nie musi oznaczać badania. Najczęściej to rozmowa o cyklu, zdrowiu i pytaniach. Warto ją odbyć między 13. a 15. rokiem życia, nawet bez dolegliwości, albo wtedy, gdy masz wątpliwości.',
      ],
    },
    {
      title: 'Jak przygotować się do wizyty',
      paragraphs: [
        'Dobre przygotowanie pozwala lekarzowi szybciej zrozumieć Twoją sytuację i wykluczyć przyczyny.',
      ],
      bullets: [
        'Zapisz daty początku i końca ostatnich kilku miesiączek',
        'Opisz nasilenie krwawienia i bólu oraz objawy towarzyszące',
        'Przygotuj listę przyjmowanych leków, suplementów i stosowanej antykoncepcji',
        'Zapisz pytania, które chcesz zadać, bo w stresie łatwo o nich zapomnieć',
      ],
      callout: {
        tone: 'info',
        title: 'Masz prawo do pytań i do wyjaśnień',
        text: 'Możesz poprosić o wyjaśnienie każdego badania i zabiegu oraz o czas na podjęcie decyzji. Nie musisz wracać z tym do domu bez odpowiedzi.',
      },
    },
  ],
};
