
import React from 'react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenChat: () => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenChat }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <h1 className="font-serif text-xl font-bold tracking-tighter uppercase">Cecilia's</h1>
          <nav className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-black/50">
            <a href="#how-it-works" className="hover:text-black transition-colors">{lang === 'en' ? 'Process' : 'Proceso'}</a>
            <a href="#pricing" className="hover:text-black transition-colors">{lang === 'en' ? 'Payments' : 'Pagos'}</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex bg-black/5 rounded-full p-1">
            <button 
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-black' : 'text-black/40'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLang('es')}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'es' ? 'bg-white shadow-sm text-black' : 'text-black/40'}`}
            >
              ES
            </button>
          </div>
          <button 
            onClick={onOpenChat}
            className="hidden sm:block text-[10px] font-bold uppercase tracking-widest border-b-2 border-black pb-0.5 hover:opacity-50 transition-opacity"
          >
            {lang === 'en' ? 'Personal Shopper' : 'Personal Shopper'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
