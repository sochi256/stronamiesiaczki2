import { Sparkles } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const standardyPieknaTopic: Topic = {
  slug: 'standardy-piekna',
  title: 'Niezdrowe standardy piękna',
  kicker: 'Akceptacja ciała',
  summary:
    'Skąd biorą się nierealne ideały urody, jak wpływają na Twoje ciało i samopoczucie oraz jak budować zdrowszy stosunek do siebie w czasie cyklu.',
  icon: Sparkles,
  tone: 'primary',
  sections: [
    {
      title: 'Skąd biorą się nierealne ideały',
      paragraphs: [
        'Zdjęcia w mediach społecznościowych i reklamach są zwykle wyretuszowane, oświetlone i wybrane spośród dziesiątek ujęć. Nawet zawodowe modelki nie wyglądają tak na co dzień.',
      ],
    },
    {
      title: 'Ciało w czasie cyklu się zmienia',
      paragraphs: [
        'Przed miesiączką wielu osób zatrzymuje wodę, ma wzdęcia, większe piersi, trądzik lub większy apetyt. To normalne reakcje hormonów, a nie wada. Zmiana wyglądu w ciągu miesiąca jest zdrowa.',
      ],
      bullets: [
        'Ważenie się w jednym dniu cyklu może dawać mylący wynik',
        'Ciało ma prawo mieć różny rozmiar, kształt i kolor skóry w różnych fazach',
      ],
    },
    {
      title: 'Dieta, odchudzanie i cykl',
      paragraphs: [
        'Restrykcyjne diety i bardzo mała ilość jedzenia mogą zaburzać owulację, powodować brak miesiączki i prowadzić do niedoboru żelaza. Organizm potrzebuje energii, żeby prawidłowo funkcjonować.',
      ],
      bullets: [
        'Jedz regularnie i nie pomijaj posiłków',
        'Dbaj o źródła żelaza, takie jak rośliny strączkowe, mięso i zielone warzywa',
        'Ograniczenia żywieniowe ustalaj z lekarzem lub dietetykiem, a nie z internetu',
      ],
    },
    {
      title: 'Depilacja, makijaż i pielęgnacja',
      paragraphs: [
        'Nie ma obowiązku, by wyglądać według czyjegoś wzoru. Jeśli lubisz makijaż, depilację czy pielęgnację, rób to dla siebie. Jeśli nie, też jest w porządku.',
      ],
    },
    {
      title: 'Sygnały ostrzegawcze',
      paragraphs: [
        'Obsesyjne myślenie o wyglądzie, pomijanie posiłków, ukrywanie jedzenia, nadmierne ćwiczenia mimo bólu lub silny wstyd z powodu ciała mogą być sygnałem zaburzeń odżywiania. Nie musisz się z tym mierzyć sama.',
      ],
      callout: {
        tone: 'info',
        title: 'Porozmawiaj z kimś zaufanym',
        text: 'Lekarz rodzinny, psycholog lub poradnia zaburzeń odżywiania mogą pomóc. Im wcześniej zaczniesz, tym łatwiej.',
      },
    },
    {
      title: 'Jak budować zdrowsze podejście',
      paragraphs: [
        'Zmiana tego, co oglądasz, ma realny wpływ na samopoczucie. Warto zadbać o to, z czym spędzasz czas w sieci.',
      ],
      bullets: [
        'Odobserwuj konta, po których czujesz się gorzej ze sobą',
        'Śledź profile pokazujące różnorodne ciała i naturalną skórę',
        'Zamiast porównywać się, zwracaj uwagę na to, co Twoje ciało potrafi',
      ],
    },
  ],
};
