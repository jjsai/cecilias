
import React from 'react';
import { Language } from '../types';

const SocialProof: React.FC<{ lang: Language }> = ({ lang }) => {
  return (
    <section className="py-24">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-xl transition-shadow">
          <div className="flex gap-1 text-black">★★★★★</div>
          <p className="text-sm italic">"Ordered 3 sets of Aligns. Cecilia delivered them to my office in Polanco by 4 PM. Unbeatable service."</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">— Marketing Director, Lomas</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-xl transition-shadow">
          <div className="flex gap-1 text-black">★★★★★</div>
          <p className="text-sm italic">"The interest-free payments allowed me to refresh my entire wardrobe without stress. Genuine quality."</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">— Tech Consultant, Santa Fe</p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm space-y-4 hover:shadow-xl transition-shadow">
          <div className="flex gap-1 text-black">★★★★★</div>
          <p className="text-sm italic">"Found a color that was sold out everywhere else. She really has the best connections."</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-black/40">— Pilates Instructor, CDMX</p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
