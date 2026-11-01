import type { LucideIcon } from 'lucide-react';

export type TopicTone = 'primary' | 'secondary' | 'accent' | 'success' | 'warning';

export interface TopicCallout {
  tone: 'info' | 'danger';
  title: string;
  text: string;
}

export interface TopicSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: TopicCallout;
}

export interface Topic {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  icon: LucideIcon;
  tone: TopicTone;
  sections: TopicSection[];
}
