
import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ru";
type Translations = Record<string, string>;

interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  toggleLanguage: () => void;
  changeLanguage: (lang: Language) => void;
  t: (english: string, russian: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage as Language) || "en";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (english: string, russian: string): string => {
    return language === "en" ? english : russian;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        currentLanguage: language,
        toggleLanguage,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
