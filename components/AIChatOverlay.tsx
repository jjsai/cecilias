
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Language } from '../types';

interface AIChatOverlayProps {
  onClose: () => void;
  lang: Language;
}

const AIChatOverlay: React.FC<AIChatOverlayProps> = ({ onClose, lang }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: lang === 'en' 
        ? "Welcome to Cecilia's. I am your personal wardrobe concierge. I can help you find exclusive items, navigate our interest-free payment plans, or coordinate a delivery to your door in CDMX. How may I assist your style journey today?" 
        : "Bienvenida a Cecilia's. Soy tu concierge personal de guardarropa. Puedo ayudarte a encontrar artículos exclusivos, navegar nuestros planes de meses sin intereses, o coordinar una entrega a tu puerta en la CDMX. ¿Cómo puedo asistir tu estilo hoy?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickReplies = lang === 'en' 
    ? ["Alo Yoga Sizing", "Payment Plans (MSI)", "Lululemon In Stock", "Special Orders"]
    : ["Tallas Alo Yoga", "Planes de Pago (MSI)", "Lululemon Disponible", "Pedidos Especiales"];

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = "gemini-3-flash-preview";

    const prompt = `
      You are Cecilia's Senior Wardrobe Concierge. 
      Context: High-end sports boutique in Mexico City (Polanco, Lomas, Santa Fe).
      Specialties: 
      1. Special Orders: If Alo or Lululemon has it in the US/Canada, Cecilia can get it.
      2. Payments: 3, 6, 9 Meses Sin Intereses (MSI) with Mexican cards.
      3. Delivery: Personal, white-glove delivery in premium CDMX areas.
      
      Personality: Sophisticated, concise, fashion-forward, and extremely helpful. You sound like a personal shopper at a luxury department store.
      
      Language: Respond ONLY in ${lang === 'en' ? 'English' : 'Spanish'}.
      
      Current User Inquiry: ${textToSend}
    `;

    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
      });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "" }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: lang === 'en' ? "I apologize, I'm having trouble connecting to the boutique. Please try again." : "Lo siento, tengo problemas para conectar con la boutique. Por favor intenta de nuevo." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-xl h-[80vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300 border border-black/5">
        {/* Header */}
        <div className="p-8 border-b flex justify-between items-center bg-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <span className="text-white font-serif text-lg font-bold italic">C</span>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-black tracking-tight">Concierge AI</h3>
              <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1">
                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                {lang === 'en' ? 'Live Style Assistant' : 'Asistente de Estilo en Vivo'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 hover:bg-stone-100 rounded-full transition-all group">
            <svg className="w-6 h-6 text-stone-400 group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        {/* Message Container */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] p-5 rounded-3xl text-sm leading-relaxed ${
                m.role === 'user' 
                ? 'bg-black text-white rounded-tr-none shadow-xl font-medium' 
                : 'bg-stone-100 text-stone-800 rounded-tl-none border border-stone-200'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-stone-100 p-5 rounded-3xl rounded-tl-none border border-stone-200 flex gap-1.5 items-center">
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Replies & Input */}
        <div className="p-6 bg-white border-t border-stone-100">
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => handleSend(reply)}
                className="whitespace-nowrap px-4 py-2 rounded-full border border-black/10 text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all active:scale-95"
              >
                {reply}
              </button>
            ))}
          </div>

          <div className="flex gap-3 p-3 bg-stone-50 rounded-2xl items-center border border-stone-200 focus-within:border-black transition-colors">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder={lang === 'en' ? "Describe your ideal fit..." : "Describe tu ajuste ideal..."}
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-2 text-black placeholder:text-stone-400"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-3 bg-black text-white rounded-xl hover:opacity-80 transition-all disabled:opacity-20"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </div>
          <p className="text-[9px] text-center text-stone-400 mt-4 uppercase tracking-[0.2em] font-medium">
            Personal Concierge Available 24/7
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatOverlay;
