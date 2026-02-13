import { motion } from 'framer-motion';
import clsx from 'clsx';

interface EventCardProps {
  title: string;
  society: string;
  when: string;
  location: string;
  capacityUsed: number;
  status: 'Live' | 'Upcoming' | 'Waitlist';
}

const statusColors: Record<EventCardProps['status'], string> = {
  Live: 'from-emerald-400 to-emerald-500',
  Upcoming: 'from-sky-400 to-sky-500',
  Waitlist: 'from-amber-400 to-amber-500',
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  society,
  when,
  location,
  capacityUsed,
  status,
}) => {
  const handleClick = () => {
    console.log(`Clicked on event: ${title}`);
    // Add navigation or action logic here
  };

  return (
    <motion.article
      onClick={handleClick}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative cursor-pointer overflow-hidden rounded-3xl border border-white/15 bg-slate-950/70 p-4 text-sm text-slate-100 shadow-soft ring-1 ring-white/10 transition-all duration-200 hover:shadow-glow"
    >
      <div
        className={clsx(
          'pointer-events-none absolute inset-0 rounded-3xl border border-transparent opacity-0 transition-all duration-300',
          'group-hover:opacity-100',
          'bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.35),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.35),_transparent_55%)]',
        )}
      />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
              {society}
            </p>
            <h3 className="mt-1 text-[15px] font-semibold tracking-tight">{title}</h3>
            <p className="mt-1 text-[11px] text-slate-400">
              {when} · {location}
            </p>
          </div>
          <span className="relative inline-flex items-center gap-1 rounded-2xl bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-100">
            <span
              className={clsx(
                'h-1.5 w-1.5 rounded-full bg-gradient-to-r',
                statusColors[status],
                'animate-pulse',
              )}
            />
            {status}
          </span>
        </div>

        <div className="mt-1 space-y-1.5 text-[11px] text-slate-300">
          <div className="flex items-center justify-between">
            <span>Capacity</span>
            <span>{capacityUsed}% filled</span>
          </div>
          <div className="relative h-1.5 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${capacityUsed}%` }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-neonCyan to-neonPurple"
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default EventCard;

