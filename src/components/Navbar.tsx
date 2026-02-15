import { useState, useEffect } from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import GlassCard from './GlassCard';
import NotificationPanel from './NotificationPanel';

const Navbar = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    console.log('Notification panel state changed:', isNotificationOpen);
  }, [isNotificationOpen]);

  const handleNotificationClick = () => {
    console.log('Notification clicked! Current state:', isNotificationOpen);
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between px-4 md:left-72 md:px-8">
        <GlassCard className="flex h-14 w-full items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 text-neonCyan shadow-soft">
              <span className="text-lg font-black tracking-tight">CS</span>
            </div>
            <div className="hidden flex-col md:flex">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                College Societies
              </span>
              <span className="text-sm font-medium text-slate-100">Society Management Console</span>
            </div>
          </div>

          <div className="mx-4 hidden flex-1 items-center md:flex">
            <div className="flex w-full max-w-md items-center gap-2 rounded-3xl bg-slate-900/60 px-3 py-2 text-xs text-slate-300 shadow-soft ring-1 ring-white/10 focus-within:ring-neonCyan/70">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                className="h-5 w-full bg-transparent text-xs outline-none placeholder:text-slate-500"
                placeholder="Search societies, events, members…"
              />
              <span className="hidden rounded-2xl bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300 md:inline-flex">
                ⌘K
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Notification Button */}
            <button
              type="button"
              onClick={handleNotificationClick}
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/60 text-slate-300 shadow-lg ring-1 ring-white/10 transition-all duration-200 hover:bg-slate-700/70 hover:text-neonCyan hover:ring-neonCyan/50 hover:shadow-glow active:scale-95"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 inline-flex h-2 w-2 animate-pulse rounded-full bg-rose-500 shadow-lg shadow-rose-500/50" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Profile Button */}
            <button
              type="button"
              className="hidden items-center gap-2.5 rounded-2xl bg-slate-800/60 px-3 py-2 text-xs text-slate-100 shadow-lg ring-1 ring-white/10 transition-all duration-200 hover:bg-slate-700/70 hover:ring-neonCyan/50 md:flex"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-neonCyan/80 to-neonPurple/80 text-xs font-bold text-slate-950 shadow-md">
                DK
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-semibold leading-tight text-slate-100">Dean Kumar</span>
                <span className="text-[10px] text-slate-400">Society Admin</span>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>
          </div>
        </GlassCard>
      </header>

      {/* Notification Panel - Outside header for proper z-index */}
      <NotificationPanel isOpen={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
    </>
  );
};

export default Navbar;

