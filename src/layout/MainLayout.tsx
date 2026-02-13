import { LayoutDashboard, MessageCircleMore, Sparkles, Users } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ChatbotButton from '../components/ChatbotButton';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const MainLayout = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-black dark:text-slate-50 transition-colors duration-500">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col pl-0 md:pl-72 transition-[padding] duration-300">
        <main className="relative flex-1 px-4 pb-24 pt-4 md:px-8 md:pb-10 md:pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        <ChatbotButton />

        {/* Bottom nav for mobile */}
        <nav className="fixed inset-x-4 bottom-4 z-30 flex items-center justify-between rounded-3xl border border-white/20 bg-slate-900/80 px-4 py-2 text-xs text-slate-200 shadow-soft backdrop-blur-xl md:hidden">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[11px] ${
                isActive ? 'bg-slate-800/80 text-neonCyan' : 'text-slate-200'
              }`
            }
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/societies"
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[11px] ${
                isActive ? 'bg-slate-800/80 text-neonCyan' : 'text-slate-200'
              }`
            }
          >
            <Users className="h-4 w-4" />
            <span>Societies</span>
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[11px] ${
                isActive ? 'bg-slate-800/80 text-neonCyan' : 'text-slate-200'
              }`
            }
          >
            <Sparkles className="h-4 w-4" />
            <span>Events</span>
          </NavLink>
          <NavLink
            to="/ai"
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-1 text-[11px] ${
                isActive ? 'bg-slate-800/80 text-neonCyan' : 'text-slate-200'
              }`
            }
          >
            <MessageCircleMore className="h-4 w-4" />
            <span>AI</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MainLayout;

