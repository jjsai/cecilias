
import React from 'react';
import { Language } from '../types';

const PASSection: React.FC<{ lang: Language }> = ({ lang }) => {
  const content = {
    problem: lang === 'en' ? "Tired of mall hunting?" : "¿Cansada de buscar en centros comerciales?",
    agitate: lang === 'en' 
      ? "Endless lines, out-of-stock sizes, and hidden import duties when ordering from abroad. You deserve better."
      : "Filas interminables, tallas agotadas y cargos de importación ocultos al pedir del extranjero. Te mereces algo mejor.",
    solution: lang === 'en'
      ? "Cecilia brings the boutique to you. Authentic brands, localized payments, and concierge delivery."
      : "Cecilia te trae la boutique. Marcas auténticas, pagos locales y entrega tipo concierge."
  };

  return (
    <section className="py-24 border-y border-black/5">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">1</div>
          <h3 className="text-2xl font-serif font-bold">{content.problem}</h3>
          <p className="text-black/50 text-sm leading-relaxed">{content.agitate}</p>
        </div>
        <div className="space-y-4 md:pt-12">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold">2</div>
          <h3 className="text-2xl font-serif font-bold">{lang === 'en' ? 'The CDMX Struggle' : 'El Desafío en CDMX'}</h3>
          <p className="text-black/50 text-sm leading-relaxed">
            {lang === 'en' 
              ? "International shipping to Mexico is notoriously unreliable. Why risk your investment?"
              : "Los envíos internacionales a México suelen ser poco confiables. ¿Por qué arriesgar tu inversión?"}
          </p>
        </div>
        <div className="space-y-4 md:pt-24">
          <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">3</div>
          <h3 className="text-2xl font-serif font-bold">{content.solution}</h3>
          <ul className="space-y-2 text-sm font-bold text-black/80">
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              {lang === 'en' ? 'Verified Authenticity' : 'Autenticidad Verificada'}
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              {lang === 'en' ? 'No Import Surprises' : 'Sin Sorpresas de Aduana'}
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
              {lang === 'en' ? 'Personalized Sizing' : 'Tallaje Personalizado'}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PASSection;
