import { BookOpen } from 'lucide-react';
import { TopicCard } from '@/components/topics/TopicCard';
import { topics } from '@/content/topics';

export function TopicsIndexPage() {
  return (
    <main className="pt-32 pb-24 sm:pb-32 bg-gradient-to-b from-primary-50/40 to-cream">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 mb-5">
            <BookOpen className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-500 text-primary-700">Wszystkie tematy</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Wiedza o miesiączce, krok po kroku
          </h1>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Wybierz temat, który Cię interesuje. Każdy opisuje sprawę prostym językiem, bez tabu.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </div>
    </main>
  );
}
