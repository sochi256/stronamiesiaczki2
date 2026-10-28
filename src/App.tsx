import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatIsMenstruation } from '@/components/WhatIsMenstruation';
import { CyclePhases } from '@/components/CyclePhases';
import { SymptomsManagement } from '@/components/SymptomsManagement';
import { Hygiene } from '@/components/Hygiene';
import { MythsFacts } from '@/components/MythsFacts';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <WhatIsMenstruation />
        <CyclePhases />
        <SymptomsManagement />
        <Hygiene />
        <MythsFacts />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
