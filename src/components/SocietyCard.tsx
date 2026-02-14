import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Trash2 } from 'lucide-react';
import GlassCard from './GlassCard';

interface SocietyCardProps {
  name: string;
  category: string;
  members: number;
  eventsThisMonth: number;
  accent: string;
  description: string;
  onDelete?: () => void;
}

const SocietyCard: React.FC<SocietyCardProps> = ({
  name,
  category,
  members,
  eventsThisMonth,
  accent,
  description,
  onDelete,
}) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const middleX = rect.width / 2;
    const middleY = rect.height / 2;
    const rotateAmountX = ((y - middleY) / middleY) * -8;
    const rotateAmountY = ((x - middleX) / middleX) * 8;
    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glowOpacity.set(0);
  };

  const handleClick = () => {
    console.log(`Clicked on society: ${name}`);
    // Add navigation or action logic here
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete && confirm(`Are you sure you want to delete "${name}"?`)) {
      onDelete();
    }
  };

  const glow = useMotionTemplate`radial-gradient(circle at 50% 0%, rgba(0,245,255,${glowOpacity}), transparent 60%)`;

  return (
    <div className="relative [perspective:1200px]">
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <GlassCard className="group relative h-full cursor-pointer px-4 py-4 transition-all duration-200 hover:shadow-glow md:px-5 md:py-5">
          <motion.div
            style={{ backgroundImage: glow }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
          <div className="relative flex flex-col gap-3">
            {onDelete && (
              <button
                type="button"
                onClick={handleDelete}
                className="absolute -right-2 -top-2 rounded-xl bg-rose-500/90 p-2 text-slate-100 opacity-0 shadow-lg transition-all hover:bg-rose-600 group-hover:opacity-100"
                title="Delete society"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {category}
                </p>
                <h3 className="mt-1 text-base font-semibold tracking-tight text-slate-50">
                  {name}
                </h3>
              </div>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-2xl text-xs font-semibold text-slate-950 shadow-glow"
                style={{
                  background: `linear-gradient(135deg, ${accent}, #0f172a)`,
                }}
              >
                {name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            </div>
            <p className="text-xs text-slate-300">{description}</p>
            <div className="mt-1 flex items-center justify-between gap-4 text-[11px] text-slate-300">
              <span>
                <span className="font-semibold text-slate-50">{members.toLocaleString()}</span>{' '}
                members
              </span>
              <span className="rounded-2xl bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-200">
                {eventsThisMonth} events this month
              </span>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default SocietyCard;

