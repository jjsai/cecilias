
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PASSection from './components/PASSection';
import HowItWorks from './components/HowItWorks';
import InventorySection from './components/InventorySection';
import SocialProof from './components/SocialProof';
import Positioning from './components/Positioning';
import PricingAndRisk from './components/PricingAndRisk';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIChatOverlay from './components/AIChatOverlay';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
      <Header lang={lang} setLang={setLang} onOpenChat={() => setIsChatOpen(true)} />
      
      <main>
        <Hero lang={lang} />
        
        <div className="max-w-6xl mx-auto px-6">
          <PASSection lang={lang} />
          <HowItWorks lang={lang} />
          <InventorySection lang={lang} />
          <SocialProof lang={lang} />
          <Positioning lang={lang} />
          <PricingAndRisk lang={lang} />
          <FAQ lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />

      {/* Floating Action Button for AI Personal Shopper */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 bg-black text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-3 z-40 group border border-white/20"
      >
        <span className="text-sm font-bold tracking-tight">
          {lang === 'en' ? 'AI Wardrobe Consultant' : 'Consultora de Guardarropa IA'}
        </span>
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
      </button>

      {isChatOpen && (
        <AIChatOverlay 
          onClose={() => setIsChatOpen(false)} 
          lang={lang}
        />
      )}
    </div>
  );
};

export default App;
