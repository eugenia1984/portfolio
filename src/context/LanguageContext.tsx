import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Language } from '../utils/types'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Custom hook to access the context
export const useLanguageContext = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguageContext must be use inside LanguageProvider')
  }
  return context
}

// Context Provider
interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
