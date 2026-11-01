import { ShowerHead } from 'lucide-react';
import type { Topic } from '@/content/topics/types';

export const higienaTopic: Topic = {
  slug: 'higiena',
  title: 'Higiena menstruacyjna',
  kicker: 'Higiena i samopieka',
  summary:
    'Jak dbać o ciało w czasie miesiączki: jak często zmieniać podpaski, tampony i kubeczki, jak myć okolice intymne oraz jak wybrać produkty, które są wygodne i bezpieczne.',
  icon: ShowerHead,
  tone: 'success',
  sections: [
    {
      title: 'Jak często wymieniać podpaskę, tampon i kubeczek',
      paragraphs: [
        'Częstotliwość zależy od obfitości krwawienia. Ważne, by nie zostawiać wkładki zbyt długo, bo wilgoć sprzyja podrażnieniom i bakteriom.',
      ],
      bullets: [
        'Podpaska: zwykle co 3–6 godzin, a w pierwszych dniach częściej',
        'Tampon: co 4–8 godzin, nigdy dłużej niż 8 godzin, nawet w nocy',
        'Kubeczek: opróżnij i przepłucz co 8–12 godzin, zgodnie z instrukcją producenta',
      ],
    },
    {
      title: 'Codzienna pielęgnacja okolic intymnych',
      paragraphs: [
        'Pochwa sama się oczyszcza, dlatego wystarczy delikatne mycie zewnętrznych części ciepłą wodą. Po umyciu osusz skórę, delikatnie przykładając ręcznik, i zawsze wycieraj od przodu do tyłu.',
      ],
      bullets: [
        'Używaj łagodnego, neutralnego środka bez zapachu lub samej wody',
        'Unikaj dopochwowych irygacji, perfumowanych żeli i wkładek codziennego użytku w czasie krwawienia',
        'Myj ręce przed każdą zmianą wkładki, tamponu lub kubeczka',
      ],
    },
    {
      title: 'Bielizna i ubranie',
      paragraphs: [
        'W czasie miesiączki najlepiej sprawdza się przewiewna, bawełniana bielizna. Ciasne, syntetyczne ubrania mogą zatrzymywać wilgoć i powodować podrażnienia.',
      ],
      bullets: [
        'Zmieniaj bieliznę codziennie, a jeśli trzeba, nawet częściej',
        'Na noc wybierz podpaskę o większej chłonności lub bieliznę z dobrą osłoną',
      ],
    },
    {
      title: 'Kubeczek menstruacyjny: higiena krok po kroku',
      paragraphs: [
        'Kubeczek wielokrotnego użytku wymaga regularnego czyszczenia. Przed pierwszym użyciem i między cyklami warto go wyparzyć, a w trakcie miesiączki wystarczy przepłukać go wodą lub łagodnym mydłem.',
      ],
      bullets: [
        'Przed pierwszym użyciem wyparz kubeczek we wrzątku przez kilka minut',
        'Między cyklami przechowuj go suchy, w bawełnianym woreczku',
        'Jeśli zauważysz nieprzyjemny zapach, podrażnienie lub zmianę koloru śluzu, skonsultuj się z lekarzem',
      ],
    },
    {
      title: 'Jak wyrzucać zużyte produkty',
      paragraphs: [
        'Podpaski i tampony nie wrzucamy do toalety, bo mogą zatkać rury. Zawiń je w papier lub zapakowanie od nowej wkładki i wyrzuć do kosza.',
      ],
      callout: {
        tone: 'info',
        title: 'Dobra wiadomość',
        text: 'Sam fakt, że dbasz o higienę w czasie miesiączki, jest zdrowy. Nie ma jednego właściwego sposobu, ważne, by wybrany produkt był wygodny dla Ciebie.',
      },
    },
  ],
};
