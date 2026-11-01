import { ArrowRight } from 'lucide-react';
import { RouteLink } from '@/components/RouteLink';
import { toneClasses } from '@/components/topics/tones';
import type { Topic } from '@/content/topics/types';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {
  const tone = toneClasses[topic.tone];
  const Icon = topic.icon;

  return (
    <RouteLink
      to={`/tematy/${topic.slug}`}
      className={`group flex flex-col h-full p-7 rounded-3xl bg-white border-2 ${tone.card} shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500`}
      style={{ textDecoration: 'none' }}
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${tone.iconGradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="font-display text-xl font-700 text-ink leading-snug mb-3">{topic.title}</h3>
      <p className="text-ink/60 leading-relaxed text-sm mb-6 flex-1">{topic.summary}</p>
      <span className={`inline-flex items-center gap-2 text-sm font-600 ${tone.text}`}>
        Czytaj temat
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </RouteLink>
  );
}
