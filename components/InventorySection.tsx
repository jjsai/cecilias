
import React from 'react';
import { Language } from '../types';

const InventorySection: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section id="inventory" className="py-24 bg-stone-50 rounded-[3rem] px-8 md:px-16 overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight">
            {lang === 'en' ? 'Curated for the CDMX Lifestyle' : 'Curado para el Estilo de Vida CDMX'}
          </h2>
          <p className="text-black/60 leading-relaxed">
            {lang === 'en' 
              ? 'From sun-drenched morning yoga in Chapultepec to high-intensity training in Santa Fe, we provide the specific fabrics and cuts that define the modern athletic wardrobe.'
              : 'Desde el yoga matutino en Chapultepec hasta el entrenamiento de alta intensidad en Santa Fe, ofrecemos las telas y cortes que definen el guardarropa atlético moderno.'}
          </p>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4 border-b border-black/10">
              <span className="font-bold tracking-widest uppercase text-xs">Alo Yoga</span>
              <span className="text-xs text-black/40">Airbrush • Airlift • Alosoft</span>
            </div>
            <div className="flex justify-between items-center py-4 border-b border-black/10">
              <span className="font-bold tracking-widest uppercase text-xs">Lululemon</span>
              <span className="text-xs text-black/40">Align™ • Wunder Train • Swiftly</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-[3/4] rounded-2xl bg-stone-200 overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop" alt="Yoga" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[3/4] rounded-2xl bg-stone-200 overflow-hidden shadow-lg translate-y-8">
            <img src="https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2070&auto=format&fit=crop" alt="Running" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
