import React, { createContext, useContext, useMemo, useState } from 'react';

export type SupportedLanguage = 'en' | 'hi';

type TranslationKey =
  | 'nav.dashboard'
  | 'nav.societies'
  | 'nav.events'
  | 'nav.ai'
  | 'sidebar.settings'
  | 'sidebar.settingsSubtitle'
  | 'sidebar.language'
  | 'sidebar.theme'
  | 'dashboard.overview'
  | 'dashboard.title'
  | 'dashboard.subtitle'
  | 'dashboard.activeMembers'
  | 'dashboard.liveEvents'
  | 'dashboard.engagementScore'
  | 'ai.title'
  | 'ai.subtitle';

type TranslationTable = Record<SupportedLanguage, Record<TranslationKey, string>>;

const translations: TranslationTable = {
  en: {
    'nav.dashboard': 'Dashboard',
    'nav.societies': 'Societies',
    'nav.events': 'Events',
    'nav.ai': 'AI Assistant',
    'sidebar.settings': 'Settings',
    'sidebar.settingsSubtitle': 'Personalise your console',
    'sidebar.language': 'Language',
    'sidebar.theme': 'Theme',
    'dashboard.overview': 'Overview',
    'dashboard.title': 'College Society Dashboard',
    'dashboard.subtitle':
      "High-level snapshot of today's activity across all societies, events and members.",
    'dashboard.activeMembers': 'Active Members',
    'dashboard.liveEvents': 'Live Events',
    'dashboard.engagementScore': 'Engagement Score',
    'ai.title': 'AI Recommendations Studio',
    'ai.subtitle':
      'Smart suggestions and insights powered by your society data.',
  },
  hi: {
    'nav.dashboard': 'डैशबोर्ड',
    'nav.societies': 'सोसाइटीज़',
    'nav.events': 'इवेंट्स',
    'nav.ai': 'एआई असिस्टेंट',
    'sidebar.settings': 'सेटिंग्स',
    'sidebar.settingsSubtitle': 'अपना कंसोल पर्सनलाइज़ करें',
    'sidebar.language': 'भाषा',
    'sidebar.theme': 'थीम',
    'dashboard.overview': 'ओवरव्यू',
    'dashboard.title': 'कॉलेज सोसाइटी डैशबोर्ड',
    'dashboard.subtitle':
      'आज की सभी सोसाइटीज़, इवेंट्स और मेंबर्स की गतिविधि का हाई‑लेवल स्नैपशॉट।',
    'dashboard.activeMembers': 'सक्रिय मेंबर्स',
    'dashboard.liveEvents': 'लाइव इवेंट्स',
    'dashboard.engagementScore': 'एंगेजमेंट स्कोर',
    'ai.title': 'एआई रिकमेंडेशन स्टूडियो',
    'ai.subtitle':
      'आपके सोसाइटी डेटा से संचालित स्मार्ट सुझाव और इनसाइट्स।',
  },
};

interface LanguageContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<SupportedLanguage>('en');

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => translations[language][key] ?? key,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguageContext = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return ctx;
};

