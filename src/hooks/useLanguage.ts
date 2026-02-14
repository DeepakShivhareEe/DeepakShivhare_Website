import { useLanguageContext } from '../context/LanguageContext';

/**
 * Custom hook to access language context  
 * @returns Language context with language, setLanguage, and t (translation function)
 */
export function useLanguage() {
  return useLanguageContext();
}
