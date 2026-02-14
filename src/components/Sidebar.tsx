import { LayoutDashboard, MessageCircleMore, Sparkles, Users, Settings, Moon, SunMedium, LogIn, UserPlus, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import GlassCard from './GlassCard';

const navItems = ['dashboard', 'societies', 'events', 'ai'] as const;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
    alert('Login functionality - Connected!');
    setShowLogin(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Signup attempt:', signupData);
    alert('Signup functionality - Account created!');
    setShowSignup(false);
  };

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
        {/* Login/Signup Buttons */}
        {!collapsed ? (
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-neonCyan/20 to-neonPurple/20 px-3 py-2 text-xs font-semibold text-neonCyan ring-1 ring-neonCyan/30 transition-all hover:from-neonCyan/30 hover:to-neonPurple/30 hover:shadow-glow"
            >
              <LogIn className="h-3.5 w-3.5" />
              Login
            </button>
            <button
              type="button"
              onClick={() => setShowSignup(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-neonCyan to-neonPurple px-3 py-2 text-xs font-semibold text-slate-950 shadow-glow transition-all hover:scale-105"
            >
              <UserPlus className="h-3.5 w-3.5" />
              Sign Up
            </button>
          </div>
        ) : (
          <div className="space-y-2 flex flex-col items-center">
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-neonCyan/20 to-neonPurple/20 text-neonCyan ring-1 ring-neonCyan/30 transition-all hover:from-neonCyan/30 hover:to-neonPurple/30 hover:shadow-glow"
              title="Login"
            >
              <LogIn className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setShowSignup(true)}
              className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-r from-neonCyan to-neonPurple text-slate-950 shadow-glow transition-all hover:scale-105"
              title="Sign Up"
            >
              <UserPlus className="h-4 w-4" />
            </button>
          </div>
        )}
        
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

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <GlassCard className="relative mx-4 w-full max-w-md px-6 py-6">
            <button
              type="button"
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 transition hover:bg-slate-800/50 hover:text-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="mb-6 text-2xl font-semibold text-slate-100">Welcome Back</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-400">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <button type="button" className="text-neonCyan hover:underline">
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-105"
              >
                Sign In
              </button>
              <p className="text-center text-xs text-slate-400">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                  className="text-neonCyan hover:underline"
                >
                  Sign up
                </button>
              </p>
            </form>
          </GlassCard>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <GlassCard className="relative mx-4 w-full max-w-md px-6 py-6">
            <button
              type="button"
              onClick={() => setShowSignup(false)}
              className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 transition hover:bg-slate-800/50 hover:text-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="mb-6 text-2xl font-semibold text-slate-100">Create Account</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                <input
                  type="text"
                  required
                  value={signupData.name}
                  onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  required
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <input
                  type="password"
                  required
                  value={signupData.password}
                  onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Confirm Password</label>
                <input
                  type="password"
                  required
                  value={signupData.confirmPassword}
                  onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-105"
              >
                Create Account
              </button>
              <p className="text-center text-xs text-slate-400">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setShowSignup(false);
                    setShowLogin(true);
                  }}
                  className="text-neonCyan hover:underline"
                >
                  Sign in
                </button>
              </p>
            </form>
          </GlassCard>
        </div>
      )}
    </motion.aside>
  );
};

export default Sidebar;

