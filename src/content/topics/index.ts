import { bezpieczenstwoTopic } from '@/content/topics/bezpieczenstwo';
import { higienaTopic } from '@/content/topics/higiena';
import { kiedyDoLekarzaTopic } from '@/content/topics/kiedy-do-lekarza';
import { przebiegCyklaTopic } from '@/content/topics/przebieg-cyklu';
import { standardyPieknaTopic } from '@/content/topics/standardy-piekna';
import { zdrowiePsychiczneTopic } from '@/content/topics/zdrowie-psychiczne';
import { zmianyHormonalneTopic } from '@/content/topics/zmiany-hormonalne';
import type { Topic } from '@/content/topics/types';

export const topics: Topic[] = [
  przebiegCyklaTopic,
  zmianyHormonalneTopic,
  higienaTopic,
  bezpieczenstwoTopic,
  standardyPieknaTopic,
  zdrowiePsychiczneTopic,
  kiedyDoLekarzaTopic,
];

export function getTopicBySlug(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}
