
import React from 'react';
import { Language } from '../types';

const Positioning: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-black text-white p-12 rounded-[2.5rem] space-y-8">
          <h3 className="font-serif text-3xl">{lang === 'en' ? 'Is this for you?' : '¿Esto es para ti?'}</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">✓</span>
              <span>{lang === 'en' ? 'You prioritize authenticity and quality above all.' : 'Priorizas la autenticidad y la calidad ante todo.'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">✓</span>
              <span>{lang === 'en' ? 'You value a personalized, human shopping experience.' : 'Valoras una experiencia de compra humana y personalizada.'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400">✓</span>
              <span>{lang === 'en' ? 'You reside or work in major CDMX hubs (Polanco, Santa Fe).' : 'Resides o trabajas en los centros principales de CDMX.'}</span>
            </li>
          </ul>
        </div>
        <div className="bg-stone-50 p-12 rounded-[2.5rem] space-y-8">
          <h3 className="font-serif text-3xl text-black/30">{lang === 'en' ? 'Not for you if...' : 'No es para ti si...'}</h3>
          <ul className="space-y-4 text-sm font-medium text-black/40">
            <li className="flex items-start gap-3">
              <span>✕</span>
              <span>{lang === 'en' ? 'You are looking for cheap "look-alike" clones.' : 'Buscas imitaciones o clones baratos.'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span>✕</span>
              <span>{lang === 'en' ? 'You prefer impersonal mall retailers.' : 'Prefieres minoristas impersonales de centro comercial.'}</span>
            </li>
            <li className="flex items-start gap-3">
              <span>✕</span>
              <span>{lang === 'en' ? 'You are not based in Mexico City.' : 'No te encuentras en la Ciudad de México.'}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
