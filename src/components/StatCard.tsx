import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import GlassCard from './GlassCard';
import clsx from 'clsx';

interface StatCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  delta?: number;
  icon?: React.ReactNode;
  accent?: 'cyan' | 'purple';
}

const StatCard: React.FC<StatCardProps> = ({ label, value, prefix, suffix, delta, icon, accent }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 1.2,
      ease: 'easeOut',
    });
    return controls.stop;
  }, [count, value]);

  const deltaPositive = typeof delta === 'number' && delta >= 0;

  const handleClick = () => {
    console.log(`Clicked on ${label}: ${value}`);
    // Add navigation or action logic here
  };

  return (
    <GlassCard
      className="group flex cursor-pointer flex-col gap-3 px-4 py-4 transition-all duration-200 hover:scale-105 hover:shadow-glow md:px-5 md:py-5"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
            {label}
          </span>
          <motion.div
            className="mt-2 flex items-baseline gap-1 text-2xl font-semibold tracking-tight"
            layout
          >
            {prefix && <span className="text-sm text-slate-400">{prefix}</span>}
            <motion.span>{rounded}</motion.span>
            {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
          </motion.div>
        </div>
        {icon && (
          <div
            className={clsx(
              'flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/70 text-neonCyan shadow-soft',
              accent === 'purple' && 'text-neonPurple',
            )}
          >
            {icon}
          </div>
        )}
      </div>

      {typeof delta === 'number' && (
        <div className="mt-1 flex items-center gap-2 text-[11px]">
          <span
            className={clsx(
              'inline-flex items-center gap-1 rounded-2xl px-2 py-0.5',
              deltaPositive
                ? 'bg-emerald-500/15 text-emerald-300'
                : 'bg-rose-500/10 text-rose-300',
            )}
          >
            <span>{deltaPositive ? '▲' : '▼'}</span>
            <span>{Math.abs(delta).toFixed(1)}%</span>
          </span>
          <span className="text-slate-400">vs. last week</span>
        </div>
      )}
    </GlassCard>
  );
};

export default StatCard;

