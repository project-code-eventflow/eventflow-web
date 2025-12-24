import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StakeholderTabs from './components/StakeholderTabs';
import GlobalVision from './components/GlobalVision';
import MobileApp from './components/MobileApp';
import Roadmap from './components/Roadmap';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';
import SEO from './components/SEO';

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        <main>
          <Hero />
          <MobileApp />
          <StakeholderTabs />
          <GlobalVision />
          <Roadmap />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;