
export type Language = 'en' | 'es';

export interface ContentMap {
  [key: string]: {
    en: string;
    es: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

// Fix: Add missing BuyerPersona interface used in PersonaCard.tsx
export interface BuyerPersona {
  name: string;
  tagline: string;
  demographics: {
    age: string;
    location: string;
    profession: string;
    incomeBracket: string;
    languages: string[];
  };
  aiChallenges: {
    privacyConcerns: string;
    ipIssues: string;
  };
  psychographics: {
    motivations: string[];
    aspirations: string[];
  };
  painPoints: string[];
  valuePropAlignment: string;
  preferredChannels: string[];
  learningMethods: string[];
}
