import { motion, AnimatePresence } from 'framer-motion';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import clsx from 'clsx';

const TRANSITION_MS = 500;

export const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        'relative inline-flex h-10 w-18 items-center justify-center overflow-hidden rounded-3xl border border-white/20',
        'bg-slate-900/60 dark:bg-slate-100/10 backdrop-blur-xl shadow-soft',
        'transition-colors duration-300 hover:border-neonCyan/70 hover:shadow-glow',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonCyan/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        layout
        className="absolute inset-0 bg-gradient-to-r from-neonCyan/20 via-transparent to-neonPurple/25"
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
      />

      <div className="relative flex w-full items-center justify-between px-3">
        <AnimatePresence initial={false} mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, y: 8, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -8, rotate: 10 }}
              transition={{ duration: TRANSITION_MS / 1000 }}
              className="flex items-center gap-1.5"
            >
              <Moon className="h-5 w-5 text-neonCyan" />
              <span className="text-xs font-medium text-slate-100">Dark</span>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, y: -8, rotate: -120 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: 8, rotate: 120 }}
              transition={{ duration: TRANSITION_MS / 1000 }}
              className="flex items-center gap-1.5"
            >
              <motion.div
                initial={false}
                animate={{ rotate: 360 }}
                transition={{ duration: TRANSITION_MS / 1000, ease: 'easeInOut' }}
              >
                <SunMedium className="h-5 w-5 text-amber-300" />
              </motion.div>
              <span className="text-xs font-medium text-slate-100">Light</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
};

export default ThemeToggle;

