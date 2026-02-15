import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import AppRouter from './routes/AppRouter';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <AnimatePresence mode="wait">
          {showSplash ? (
            <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
          ) : (
            <motion.div
              key="app"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <AppRouter />
            </motion.div>
          )}
        </AnimatePresence>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
