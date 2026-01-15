
import React from 'react';
import { Language } from '../types';

const HowItWorks: React.FC<{ lang: Language }> = ({ lang }) => {
  const steps = [
    {
      title: lang === 'en' ? 'Consultation' : 'Consulta',
      desc: lang === 'en' ? 'Chat via WhatsApp or AI to find your perfect fit and style.' : 'Habla por WhatsApp o nuestra IA para encontrar tu ajuste y estilo ideal.'
    },
    {
      title: lang === 'en' ? 'Special Order' : 'Pedido Especial',
      desc: lang === 'en' ? 'We source the exact color and size directly from authorized channels.' : 'Conseguimos el color y talla exacta directamente de canales autorizados.'
    },
    {
      title: lang === 'en' ? 'Direct Delivery' : 'Entrega Directa',
      desc: lang === 'en' ? 'Same-day or scheduled delivery across Polanco, Lomas, and Santa Fe.' : 'Entrega el mismo día o programada en Polanco, Lomas y Santa Fe.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24">
      <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-black/40 text-center mb-16">
        {lang === 'en' ? 'The Seamless Process' : 'El Proceso Sin Esfuerzo'}
      </h2>
      <div className="grid md:grid-cols-3 gap-16">
        {steps.map((step, i) => (
          <div key={i} className="text-center space-y-4">
            <span className="text-5xl font-serif text-black/5">0{i + 1}</span>
            <h4 className="text-xl font-bold tracking-tight">{step.title}</h4>
            <p className="text-black/50 text-sm leading-relaxed max-w-[250px] mx-auto">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
