
import React from 'react';
import { BuyerPersona } from '../types';

interface PersonaCardProps {
  persona: BuyerPersona;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona }) => {
  return (
    <div className="space-y-12">
      {/* Intro Hero */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/3">
          <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-stone-200 shadow-lg relative group">
            <img 
              src="https://picsum.photos/seed/executive_yoga/600/800" 
              alt="Persona Portrait" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-white font-serif text-3xl leading-tight">{persona.name}</h2>
              <p className="text-emerald-300 text-sm font-medium mt-2 italic">"{persona.tagline}"</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Demographics</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span className="text-stone-500">Age:</span> <span className="font-semibold text-stone-800">{persona.demographics.age}</span></li>
              <li className="flex justify-between"><span className="text-stone-500">Location:</span> <span className="font-semibold text-stone-800">{persona.demographics.location}</span></li>
              <li className="flex justify-between"><span className="text-stone-500">Profession:</span> <span className="font-semibold text-stone-800 text-right">{persona.demographics.profession}</span></li>
              <li className="flex justify-between"><span className="text-stone-500">Income:</span> <span className="font-semibold text-stone-800">{persona.demographics.incomeBracket}</span></li>
              <li className="flex flex-col gap-1 mt-2">
                <span className="text-stone-500">Languages:</span> 
                <div className="flex gap-2">
                  {persona.demographics.languages.map(l => (
                    <span key={l} className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-xs font-bold">{l}</span>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">AI & Tech Challenges</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-stone-600 mb-1">Privacy & Data</p>
                <p className="text-sm text-stone-700 leading-relaxed">{persona.aiChallenges.privacyConcerns}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-stone-600 mb-1">IP Safety</p>
                <p className="text-sm text-stone-700 leading-relaxed">{persona.aiChallenges.ipIssues}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Psychological Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-stone-50 p-8 rounded-3xl">
          <h3 className="font-serif text-2xl mb-6 text-stone-800">Motivations</h3>
          <ul className="space-y-4">
            {persona.psychographics.motivations.map((m, i) => (
              <li key={i} className="flex gap-3 text-stone-700">
                <span className="text-emerald-500 font-bold">•</span>
                <span className="text-sm leading-relaxed">{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-stone-50 p-8 rounded-3xl">
          <h3 className="font-serif text-2xl mb-6 text-stone-800">Pain Points</h3>
          <ul className="space-y-4">
            {persona.painPoints.map((p, i) => (
              <li key={i} className="flex gap-3 text-stone-700">
                <span className="text-red-400 font-bold">•</span>
                <span className="text-sm leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-stone-50 p-8 rounded-3xl">
          <h3 className="font-serif text-2xl mb-6 text-stone-800">Aspirations</h3>
          <ul className="space-y-4">
            {persona.psychographics.aspirations.map((a, i) => (
              <li key={i} className="flex gap-3 text-stone-700">
                <span className="text-emerald-500 font-bold">•</span>
                <span className="text-sm leading-relaxed">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategic Footer */}
      <div className="bg-white border-2 border-stone-100 p-10 rounded-3xl shadow-xl">
        <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-6">Strategic Alignment (Value Prop)</h3>
        <p className="text-xl text-stone-800 font-medium leading-relaxed mb-8">
          {persona.valuePropAlignment}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-sm font-bold text-stone-500 uppercase mb-4">Discovery Channels</h4>
            <div className="flex flex-wrap gap-2">
              {persona.preferredChannels.map(c => (
                <span key={c} className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full text-xs font-semibold">{c}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-stone-500 uppercase mb-4">Learning Preferences</h4>
            <div className="flex flex-wrap gap-2">
              {persona.learningMethods.map(l => (
                <span key={l} className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold">{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
