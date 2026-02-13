import { LayoutDashboard, MessageCircleMore, Sparkles, Users, Settings, Moon, SunMedium } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';

const navItems = ['dashboard', 'societies', 'events', 'ai'] as const;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 288 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="fixed left-0 top-0 z-40 hidden h-screen flex-col border-r border-white/10 bg-slate-950/80 px-4 pt-4 text-slate-200 shadow-soft backdrop-blur-2xl md:flex"
    >
      <div className="mb-6 flex items-center justify-between px-1">
        <div className={clsx('flex items-center gap-2', collapsed && 'justify-center')}>
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-neonCyan to-neonPurple text-xs font-black text-slate-950 shadow-glow">
            CS
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Console
              </span>
              <span className="text-xs font-medium text-slate-100">Society Ops</span>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => setCollapsed((v) => !v)}
          className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/80 text-[10px] text-slate-300 ring-1 ring-white/10 transition hover:text-neonCyan hover:ring-neonCyan/70"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>

      <nav className="mt-2 space-y-1">
        {navItems.map((key) => {
          const to =
            key === 'dashboard' ? '/' : key === 'societies' ? '/societies' : key === 'events' ? '/events' : '/ai';
          const Icon =
            key === 'dashboard'
              ? LayoutDashboard
              : key === 'societies'
                ? Users
                : key === 'events'
                  ? Sparkles
                  : MessageCircleMore;
          const labelKey =
            key === 'dashboard'
              ? 'nav.dashboard'
              : key === 'societies'
                ? 'nav.societies'
                : key === 'events'
                  ? 'nav.events'
                  : 'nav.ai';
          const label = t(labelKey);

          return (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              clsx(
                'group flex items-center gap-3 rounded-3xl px-3 py-2 text-xs font-medium text-slate-300 transition-all duration-200',
                'hover:bg-slate-900/70 hover:text-neonCyan',
                isActive && 'bg-slate-900/90 text-neonCyan shadow-soft',
                collapsed && 'justify-center',
              )
            }
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900/80 text-slate-300 group-hover:text-neonCyan">
              <Icon className="h-4 w-4" />
            </span>
            {!collapsed && <span>{label}</span>}
          </NavLink>
          );
        })}
      </nav>

      <div className="mt-auto mb-6 space-y-3 text-[11px]">
        {/* Settings panel */}
        <div className="rounded-3xl bg-slate-900/80 px-3 py-3 ring-1 ring-white/10">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-2xl bg-slate-800/80">
                <Settings className="h-3.5 w-3.5 text-slate-200" />
              </span>
              {!collapsed && (
                <div className="flex flex-col">
                  <span className="text-[11px] font-medium text-slate-100">{t('sidebar.settings')}</span>
                  <span className="text-[10px] text-slate-400">{t('sidebar.settingsSubtitle')}</span>
                </div>
              )}
            </div>
          </div>

          {!collapsed && (
            <div className="space-y-3">
              {/* Language selector */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] text-slate-300">{t('sidebar.language')}</span>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
                  className="h-7 rounded-2xl bg-slate-950/80 px-2 text-[10px] text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-1 focus:ring-neonCyan/70"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>

              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="flex w-full items-center justify-between rounded-2xl bg-slate-950/80 px-2 py-1.5 text-[10px] text-slate-100 ring-1 ring-white/10 transition hover:ring-neonCyan/70"
              >
                <span>Theme</span>
                <span className="flex items-center gap-1.5 text-[10px]">
                  {isDark ? (
                    <>
                      <Moon className="h-3.5 w-3.5 text-neonCyan" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <SunMedium className="h-3.5 w-3.5 text-amber-300" />
                      <span>Light</span>
                    </>
                  )}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;

