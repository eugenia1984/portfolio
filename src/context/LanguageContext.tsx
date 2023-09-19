import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
}

// Context creation
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

  const storedLanguage = localStorage.getItem('language')
  const [language, setLanguageState] = useState(storedLanguage || 'en')

  const setLanguage = (lang: string) => {
    localStorage.setItem('language', lang)// Guardar en localStorage
    setLanguageState(lang)
  }

  useEffect(() => {
    if (!storedLanguage) {
      localStorage.setItem('language', 'en') // Valor predeterminado: inglés
    }
  }, [])

  return (
    <LanguageContext.Provider
      value={ { language, setLanguage } }
    >
      { children }
    </LanguageContext.Provider>
  );
};
