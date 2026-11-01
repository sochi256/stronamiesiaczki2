import { BookOpen } from 'lucide-react';
import { RouteLink } from '@/components/RouteLink';
import { TopicCard } from '@/components/topics/TopicCard';
import { useReveal } from '@/hooks/useReveal';
import { topics } from '@/content/topics';

export function TopicsPreview() {
  const { ref, visible } = useReveal();

  return (
    <section id="tematy" className="py-24 sm:py-32 bg-gradient-to-b from-primary-50/30 to-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} max-w-3xl mx-auto text-center mb-14`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-100 mb-5">
            <BookOpen className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-500 text-primary-700">Podstrony tematyczne</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-700 text-ink mb-6 text-balance">
            Czytaj o tym, co Cię interesuje
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed text-balance">
            Każdy temat ma osobną stronę z konkretnymi wskazówkami i informacją, kiedy warto
            zgłosić się do lekarza.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <div
              key={topic.slug}
              className={`reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <TopicCard topic={topic} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <RouteLink
            to="/tematy"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white border border-primary-200 text-ink font-600 hover:border-primary-400 hover:shadow-md transition-all duration-300"
            style={{ textDecoration: 'none' }}
          >
            Zobacz wszystkie tematy
          </RouteLink>
        </div>
      </div>
    </section>
  );
}
