
import React from 'react';
import { Language } from '../types';

const Hero: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/40">
              {lang === 'en' ? 'Elite Performance • CDMX Base' : 'Rendimiento Elite • CDMX Base'}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.1] tracking-tight">
              {lang === 'en' 
                ? 'Your one stop for Alo Yoga and Lululemon sport clothes' 
                : 'Tu destino exclusivo para Alo Yoga y Lululemon'}
            </h2>
            <p className="text-xl text-black/60 max-w-md leading-relaxed">
              {lang === 'en'
                ? 'Authentic high-end performance wear delivered to your door in Mexico City. Shop with interest-free payment plans.'
                : 'Ropa deportiva de alta gama entregada en la puerta de tu casa en la CDMX. Compra con planes de pagos sin intereses.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#inventory" className="bg-black text-white px-8 py-5 rounded-full text-sm font-bold tracking-tight text-center hover:scale-[1.02] transition-transform active:scale-95">
              {lang === 'en' ? 'Shop the Collection' : 'Comprar Colección'}
            </a>
            <a href="#pricing" className="bg-white border-2 border-black text-black px-8 py-5 rounded-full text-sm font-bold tracking-tight text-center hover:bg-black hover:text-white transition-all">
              {lang === 'en' ? 'Easy payments and delivery' : 'Pagos fáciles y entrega'}
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-black/5">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-black/40 tracking-wider uppercase">
              {lang === 'en' ? 'Trusted by 500+ CDMX athletes' : 'Preferido por 500+ atletas en CDMX'}
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
            alt="Sport Wardrobe" 
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
            <p className="text-white text-sm font-medium italic">
              "Cecilia knows exactly what the CDMX community needs—quality, speed, and trust."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
