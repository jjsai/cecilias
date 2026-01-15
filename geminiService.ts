
import { GoogleGenAI } from "@google/genai";

export const generatePersonaRefinement = async (currentPersona: string, feedback: string) => {
  // Fix: Create a new GoogleGenAI instance right before making an API call and use process.env.API_KEY directly as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3-pro-preview";

  const prompt = `
    You are a PhD Marketing Strategist. 
    Current Persona: ${currentPersona}
    User Feedback: ${feedback}
    
    Refine the persona based on the feedback. Maintain the focus on 'Cecilia's Sport Wardrobe' in Mexico City, 
    selling Alo Yoga/Lululemon with payment plans and family-owned values.
    Provide the response in a structured text format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I encountered an error while refining the persona. Please try again.";
  }
};
