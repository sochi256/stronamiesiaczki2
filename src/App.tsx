import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatIsMenstruation } from '@/components/WhatIsMenstruation';
import { CyclePhases } from '@/components/CyclePhases';
import { SymptomsManagement } from '@/components/SymptomsManagement';
import { Hygiene } from '@/components/Hygiene';
import { MythsFacts } from '@/components/MythsFacts';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { TopicsPreview } from '@/components/topics/TopicsPreview';
import { TopicsIndexPage } from '@/components/topics/TopicsIndexPage';
import { TopicPage } from '@/components/topics/TopicPage';
import { usePathname } from '@/hooks/useRouter';

function HomePage() {
  return (
    <main>
      <Hero />
      <WhatIsMenstruation />
      <CyclePhases />
      <SymptomsManagement />
      <Hygiene />
      <MythsFacts />
      <TopicsPreview />
      <FAQ />
    </main>
  );
}

function renderPage(pathname: string) {
  if (pathname === '/tematy') return <TopicsIndexPage />;

  const topicMatch = pathname.match(/^\/tematy\/([^/]+)\/?$/);
  if (topicMatch) return <TopicPage slug={topicMatch[1]} />;

  return <HomePage />;
}

function App() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      {renderPage(pathname)}
      <Footer />
    </div>
  );
}

export default App;
