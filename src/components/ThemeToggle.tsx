import { motion, AnimatePresence } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';


export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/60 shadow-lg ring-1 ring-white/10 transition-all duration-200 hover:bg-slate-700/70 hover:ring-neonCyan/50 hover:shadow-glow active:scale-95"
      aria-label="Toggle theme"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Moon className="h-5 w-5 text-neonCyan" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <SunMedium className="h-5 w-5 text-amber-400" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;

