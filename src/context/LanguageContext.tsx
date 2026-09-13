import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from '../locales/translations';

interface LanguageContextType {
  language: Language;
  isRTL: boolean;
  dir: 'ltr' | 'rtl';
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // English is strictly the default
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('rt_lang');
      if (saved === 'ar' || saved === 'en') {
        return saved;
      }
    }
    return 'en';
  });

  const isRTL = language === 'ar';
  const dir: 'ltr' | 'rtl' = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = dir;
      if (language === 'ar') {
        document.documentElement.classList.add('rtl-lang');
      } else {
        document.documentElement.classList.remove('rtl-lang');
      }
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('rt_lang', language);
    }
  }, [language, dir]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string, fallback?: string): string => {
    const item = TRANSLATIONS[key];
    if (item && item[language]) {
      return item[language];
    }
    if (fallback) {
      return fallback;
    }
    if (item && item.en) {
      return item.en;
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isRTL,
        dir,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
