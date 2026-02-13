import { Bell, ChevronDown, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import GlassCard from './GlassCard';

const Navbar = () => {
  return (
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

        <div className="flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-3xl bg-slate-900/70 text-slate-100 shadow-soft ring-1 ring-white/10 transition hover:text-neonCyan hover:ring-neonCyan/70"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-1 top-1 inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
          </button>

          <ThemeToggle />

          <button
            type="button"
            className="hidden items-center gap-2 rounded-3xl bg-slate-900/70 px-2 py-1 text-xs text-slate-100 shadow-soft ring-1 ring-white/10 transition hover:ring-neonCyan/70 md:flex"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-2xl bg-gradient-to-br from-neonCyan/70 to-neonPurple/70 text-[11px] font-semibold text-slate-950">
              DK
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[11px] font-medium leading-tight">Dean Kumar</span>
              <span className="text-[10px] text-slate-400">Society Admin</span>
            </div>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </button>
        </div>
      </GlassCard>
    </header>
  );
};

export default Navbar;

