import clsx from 'clsx';
import React from 'react';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={clsx(
        'glass-card relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 dark:bg-slate-900/40',
        'shadow-soft transition-all duration-300 hover:shadow-glow hover:border-neonCyan/60',
        className,
      )}
      {...rest}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.16),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.16),_transparent_55%)]" />
      <div className="relative">{children}</div>
    </div>
  );
};

export default GlassCard;

