
import React from 'react';
import { Language } from '../types';

const PricingAndRisk: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section id="pricing" className="py-24 text-center space-y-12">
      <div className="space-y-4 max-w-2xl mx-auto">
        <h2 className="font-serif text-5xl tracking-tight">{lang === 'en' ? 'Luxury, accessible.' : 'Lujo, accesible.'}</h2>
        <p className="text-black/50">
          {lang === 'en' 
            ? 'We offer Meses Sin Intereses (Interest-free payments) on all major credit cards. Optimize your cash flow while staying in style.'
            : 'Ofrecemos Meses Sin Intereses en todas las tarjetas de crédito principales. Optimiza tu flujo de efectivo con estilo.'}
        </p>
      </div>

      <div className="bg-white border-4 border-black p-12 rounded-[3rem] inline-block text-left max-w-xl mx-auto shadow-2xl relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
          {lang === 'en' ? 'Cecilia\'s Promise' : 'La Promesa de Cecilia'}
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">{lang === 'en' ? 'Authenticated & Delivered' : 'Autenticado y Entregado'}</span>
            <span className="text-emerald-600 font-bold">100% Guaranteed</span>
          </div>
          <p className="text-sm text-black/60 leading-relaxed">
            {lang === 'en'
              ? 'If your special order does not meet your specific size or quality expectations upon delivery, we will exchange or refund within 7 days. Your trust is our family business foundation.'
              : 'Si tu pedido especial no cumple con tus expectativas de talla o calidad al momento de la entrega, lo cambiaremos o reembolsaremos en 7 días. Tu confianza es la base de nuestro negocio familiar.'}
          </p>
          <div className="pt-6 flex flex-col gap-3">
            <a
              href="https://wa.me/525513600006"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white py-4 rounded-xl font-bold tracking-tight hover:scale-105 transition-transform text-center"
            >
              {lang === 'en' ? 'Order via WhatsApp' : 'Pedir por WhatsApp'}
            </a>
            <p className="text-[10px] text-center text-black/30 font-bold uppercase tracking-widest">
              {lang === 'en' ? 'Zero Risk Decision' : 'Decisión con Riesgo Cero'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAndRisk;
