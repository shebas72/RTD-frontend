import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'pill' | 'compact' | 'drawer';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'pill',
  className = '',
}) => {
  const { language, setLanguage, isRTL } = useLanguage();

  if (variant === 'compact') {
    return (
      <button
        onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-mono-tech text-slate-200 hover:text-white transition-all cursor-pointer ${className}`}
        aria-label="Toggle language"
        title={language === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
      >
        <Globe className="w-3.5 h-3.5 text-orange-400 shrink-0" />
        <span className="font-bold">{language === 'en' ? 'العربية' : 'EN'}</span>
      </button>
    );
  }

  if (variant === 'drawer') {
    return (
      <div className={`flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 ${className}`}>
        <div className="flex items-center gap-2.5">
          <Globe className="w-4 h-4 text-orange-400" />
          <div>
            <span className="text-xs font-bold text-white block">
              {language === 'en' ? 'Interface Language' : 'لغة الواجهة'}
            </span>
            <span className="text-[10px] text-slate-400">
              {language === 'en' ? 'English (Default) / العربية' : 'العربية / English'}
            </span>
          </div>
        </div>

        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-orange-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              language === 'ar'
                ? 'bg-orange-600 text-white shadow-sm font-sans'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            العربية
          </button>
        </div>
      </div>
    );
  }

  // Default segmented pill
  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-900/95 border border-slate-700/80 shadow-inner ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
          language === 'en'
            ? 'bg-orange-600 text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('ar')}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
          language === 'ar'
            ? 'bg-orange-600 text-white shadow-sm'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span className="text-[11px] font-sans">عربي</span>
      </button>
    </div>
  );
};
