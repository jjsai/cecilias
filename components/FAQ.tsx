
import React, { useState } from 'react';
import { Language } from '../types';

const FAQ: React.FC<{ lang: Language }> = ({ lang }) => {
  const faqs = [
    {
      q: lang === 'en' ? "How do interest-free payments work?" : "¿Cómo funcionan los meses sin intereses?",
      a: lang === 'en' 
        ? "We use local payment processors to offer 3, 6, or 9 months interest-free with participating Mexican credit cards."
        : "Utilizamos procesadores de pago locales para ofrecer 3, 6 o 9 meses sin intereses con tarjetas de crédito mexicanas participantes."
    },
    {
      q: lang === 'en' ? "Are the products original?" : "¿Los productos son originales?",
      a: lang === 'en'
        ? "Absolutely. We only source from authorized Alo Yoga and Lululemon flagship stores in the US and Canada."
        : "Absolutamente. Solo nos abastecemos de tiendas insignia autorizadas de Alo Yoga y Lululemon en EE. UU. y Canadá."
    },
    {
      q: lang === 'en' ? "Can you find specific colors or sizes?" : "¿Pueden encontrar colores o tallas específicas?",
      a: lang === 'en'
        ? "Yes! That is our specialty. If it exists in the brand inventory, we can bring it to CDMX for you."
        : "¡Sí! Esa es nuestra especialidad. Si existe en el inventario de la marca, podemos traértelo a la CDMX."
    }
  ];

  return (
    <section id="faq" className="py-24 border-t border-black/5">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="font-serif text-4xl text-center">{lang === 'en' ? 'Common Questions' : 'Preguntas Frecuentes'}</h2>
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="group border-b border-black/5 pb-6">
              <h4 className="font-bold mb-2 group-hover:text-emerald-600 transition-colors">{f.q}</h4>
              <p className="text-sm text-black/50 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
