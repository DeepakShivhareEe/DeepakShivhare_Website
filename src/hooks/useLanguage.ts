import { useLanguageContext } from '../context/LanguageContext';

export const useLanguage = () => {
  const { language, setLanguage, t } = useLanguageContext();
  return { language, setLanguage, t };
};

