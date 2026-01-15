
import React from 'react';
import { Language } from '../types';

const Footer: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 space-y-6">
          <h2 className="font-serif text-3xl font-bold uppercase tracking-tighter">Cecilia's</h2>
          <p className="text-white/40 text-sm max-w-sm leading-relaxed">
            {lang === 'en' 
              ? 'Providing the elite athletes of Mexico City with the world\'s finest performance apparel since 2015.'
              : 'Proveyendo a los atletas de élite de la CDMX con la mejor ropa de alto rendimiento del mundo desde 2015.'}
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/40">{lang === 'en' ? 'Navigation' : 'Navegación'}</h4>
          <ul className="text-sm space-y-2 font-medium">
            <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">Process</a></li>
            <li><a href="#inventory" className="hover:text-emerald-400 transition-colors">Collection</a></li>
            <li><a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold tracking-widest uppercase text-white/40">Legal</h4>
          <ul className="text-sm space-y-2 font-medium">
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms</a></li>
            <li><a href="#" className="hover:text-emerald-400 transition-colors">Guaranty</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 border-t border-white/10 text-center space-y-4">
        <p className="text-[10px] tracking-[0.2em] font-bold text-white/30 uppercase">
          © 2025 Cecilia's Sport Wardrobe powered by <a href="https://dataqub.com" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors underline decoration-white/20">DataQub.com</a> All Rights Reserved. 
        </p>
        <p className="text-[9px] tracking-[0.4em] font-bold text-white/20 uppercase">
          DEVELOPED BY AI LED BY HUMANS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
