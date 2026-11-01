import { Brain } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const zdrowiePsychiczneTopic: Topic = {
  slug: 'zdrowie-psychiczne',
  title: 'Zdrowie psychiczne a cykl',
  kicker: 'Nastrój i emocje',
  summary:
    'Dlaczego nastrój zmienia się w ciągu cyklu, czym różni się zwykły PMS od poważniejszych zaburzeń oraz jak zadbać o siebie, gdy emocje są trudne.',
  icon: Brain,
  tone: 'accent',
  sections: [
    {
      title: 'Wahania nastroju przed miesiączką',
      paragraphs: [
        'Po owulacji spada poziom estrogenu i progesteronu, co może wpływać na nastrój, sen i poziom energii. Część osób odczuwa to lekko, a część mocniej. Oba przypadki są częścią zdrowego funkcjonowania.',
      ],
    },
    {
      title: 'PMS i PMDD',
      paragraphs: [
        'Zespół napięcia przedmiesiączkowego (PMS) to zestaw objawów, które pojawiają się w drugiej połowie cyklu i ustępują po rozpoczęciu krwawienia. Jeśli objawy są bardzo silne i zakłócają naukę, pracę lub relacje, może to być PMDD, czyli zaburzenie dysforyczne przedmiesiączkowe.',
      ],
      bullets: [
        'Silny smutek, beznadziejność lub myśli, że nic się nie uda',
        'Ogromna drażliwość, wybuchy złości i lęk',
        'Trudności z koncentracją i wycofanie się z bliskich osób',
      ],
    },
    {
      title: 'Stres, sen i emocje',
      paragraphs: [
        'Stres i brak snu nasilają wszystkie objawy nastroju. W czasie cyklu, gdy organizm jest bardziej wrażliwy, warto zadbać o odpoczynek i spokojniejsze tempo dnia.',
      ],
    },
    {
      title: 'Wstyd i lęk związany z miesiączką',
      paragraphs: [
        'Ukrywanie krwawienia, unikanie szkoły czy sportu z powodu strachu przed plamami to częste doświadczenia. Miesiączka jest zdrowym procesem i nie ma powodu, by się jej wstydzić.',
      ],
    },
    {
      title: 'Co pomaga na co dzień',
      paragraphs: [
        'Małe, regularne nawyki potrafią realnie poprawić samopoczucie w trudnych dniach cyklu.',
      ],
      bullets: [
        'Prowadź dziennik nastroju, by zobaczyć swój wzorzec',
        'Ruszaj się regularnie, nawet krótkim spacerem',
        'Ogranicz kofeinę i alkohol, zwłaszcza przed miesiączką',
        'Spróbuj ćwiczeń oddechowych, gdy czujesz napięcie',
        'Rozmawiaj z zaufaną osobą zamiast zostawać z emocjami sama',
      ],
    },
    {
      title: 'Kiedy szukać pomocy',
      paragraphs: [
        'Jeśli smutek, lęk lub drażliwość utrzymują się dłużej niż dwa tygodnie, odbierają radość z życia albo pojawiają się myśli o krzywdzeniu siebie, nie czekaj. Skontaktuj się z lekarzem lub psychologiem.',
      ],
      callout: {
        tone: 'danger',
        title: 'Gdy jest bardzo źle',
        text: 'Jeśli masz myśli o odebraniu sobie życia lub skrzywdzeniu siebie, zadzwoń pod numer 112 albo na Centrum Wsparcia dla Osób w Kryzysie Emocjonalnym: 800 70 2222 (całodobowo).',
      },
    },
  ],
};
