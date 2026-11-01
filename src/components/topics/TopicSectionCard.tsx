import { CircleAlert, Info, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { toneClasses } from '@/components/topics/tones';
import type { TopicSection, TopicTone } from '@/content/topics/types';

interface TopicSectionCardProps {
  section: TopicSection;
  index: number;
  tone: TopicTone;
}

export function TopicSectionCard({ section, index, tone }: TopicSectionCardProps) {
  const { ref, visible } = useReveal();
  const classes = toneClasses[tone];
  const callout = section.callout;
  const isDanger = callout?.tone === 'danger';
  const CalloutIcon = isDanger ? CircleAlert : Info;

  return (
    <article
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} p-7 sm:p-10 rounded-[2rem] bg-white border border-ink/5 shadow-sm`}
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className={`w-11 h-11 rounded-2xl ${classes.iconSoft} flex items-center justify-center font-display text-lg font-700 shrink-0`}
        >
          {index + 1}
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-700 text-ink leading-tight pt-1.5">
          {section.title}
        </h2>
      </div>

      <div className="space-y-4 text-ink/70 leading-relaxed">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {section.bullets && (
        <ul className="mt-6 space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 text-ink/75 leading-relaxed">
              <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${classes.text}`} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {callout && (
        <div
          className={`mt-8 p-5 sm:p-6 rounded-2xl border ${
            isDanger ? 'bg-error-50 border-error-200' : classes.surface
          }`}
        >
          <div
            className={`flex items-center gap-2 font-600 mb-2 ${
              isDanger ? 'text-error-700' : classes.text
            }`}
          >
            <CalloutIcon className="w-5 h-5 shrink-0" />
            {callout.title}
          </div>
          <p className="text-ink/75 leading-relaxed">{callout.text}</p>
        </div>
      )}
    </article>
  );
}
