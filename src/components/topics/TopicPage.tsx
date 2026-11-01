import { ArrowLeft, ChevronRight, CircleAlert } from 'lucide-react';
import { RouteLink } from '@/components/RouteLink';
import { TopicCard } from '@/components/topics/TopicCard';
import { TopicSectionCard } from '@/components/topics/TopicSectionCard';
import { toneClasses } from '@/components/topics/tones';
import { getTopicBySlug, topics } from '@/content/topics';

interface TopicPageProps {
  slug: string;
}

export function TopicPage({ slug }: TopicPageProps) {
  const topic = getTopicBySlug(slug);

  if (!topic) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center px-5 pt-32 pb-24">
        <div className="max-w-md text-center">
          <div className="w-16 h-16 rounded-2xl bg-warning-100 text-warning-700 flex items-center justify-center mx-auto mb-6">
            <CircleAlert className="w-8 h-8" />
          </div>
          <h1 className="font-display text-3xl font-700 text-ink mb-4">Nie znaleźliśmy tego tematu</h1>
          <p className="text-ink/60 leading-relaxed mb-8">
            Ten adres nie istnieje lub temat został przeniesiony. Wybierz jeden z dostępnych tematów.
          </p>
          <RouteLink
            to="/tematy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-600 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ textDecoration: 'none' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Wszystkie tematy
          </RouteLink>
        </div>
      </main>
    );
  }

  const tone = toneClasses[topic.tone];
  const Icon = topic.icon;
  const otherTopics = topics.filter((item) => item.slug !== topic.slug);

  return (
    <main className="pt-32 pb-24 sm:pb-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-ink/50 mb-8" aria-label="Ścieżka">
          <RouteLink to="/" className="hover:text-primary-600 transition-colors" style={{ textDecoration: 'none' }}>
            Strona główna
          </RouteLink>
          <ChevronRight className="w-4 h-4" />
          <RouteLink to="/tematy" className="hover:text-primary-600 transition-colors" style={{ textDecoration: 'none' }}>
            Tematy
          </RouteLink>
          <ChevronRight className="w-4 h-4" />
          <span className="text-ink/80 font-500">{topic.title}</span>
        </nav>

        <header className="mb-14 animate-fade-in-up">
          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${tone.iconGradient} flex items-center justify-center shadow-xl mb-6`}>
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div className={`text-sm font-600 uppercase tracking-wider ${tone.text} mb-3`}>{topic.kicker}</div>
          <h1 className="font-display text-4xl sm:text-5xl font-700 text-ink leading-[1.1] mb-6 text-balance">
            {topic.title}
          </h1>
          <p className="text-lg sm:text-xl text-ink/60 leading-relaxed text-balance">{topic.summary}</p>
        </header>

        <div className="space-y-6">
          {topic.sections.map((section, i) => (
            <TopicSectionCard key={section.title} section={section} index={i} tone={topic.tone} />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-ink/10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-700 text-ink">Inne tematy</h2>
            <RouteLink
              to="/tematy"
              className="inline-flex items-center gap-2 text-sm font-600 text-primary-600 hover:text-primary-700 transition-colors"
              style={{ textDecoration: 'none' }}
            >
              <ArrowLeft className="w-4 h-4" />
              Wszystkie tematy
            </RouteLink>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherTopics.map((item) => (
              <TopicCard key={item.slug} topic={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
