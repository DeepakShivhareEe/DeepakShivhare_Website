import GlassCard from '../components/GlassCard';
import SocietyCard from '../components/SocietyCard';

const Societies = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neonCyan">
            Societies
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">All Student Societies</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
            In the next step this page will show a 3D-tilting grid of society cards.
          </p>
        </div>
      </div>

      <GlassCard className="px-4 py-4 md:px-5 md:py-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {societies.map((society) => (
            <SocietyCard key={society.name} {...society} />
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const societies = [
  {
    name: 'Developer Student Club',
    category: 'Technology',
    members: 420,
    eventsThisMonth: 5,
    accent: '#00f5ff',
    description: 'Hackathons, coding nights and workshops focused on real-world engineering.',
  },
  {
    name: 'Cultural Society',
    category: 'Culture & Arts',
    members: 310,
    eventsThisMonth: 4,
    accent: '#a855f7',
    description: 'Theatre, music and festivals that bring the campus together.',
  },
  {
    name: 'Finance Club',
    category: 'Business',
    members: 185,
    eventsThisMonth: 2,
    accent: '#22c55e',
    description: 'Market simulations, case competitions and career mentorship.',
  },
  {
    name: 'Sports Council',
    category: 'Sports & Fitness',
    members: 520,
    eventsThisMonth: 6,
    accent: '#f97316',
    description: 'Inter-college tournaments, fitness challenges and training camps.',
  },
  {
    name: 'Social Impact Forum',
    category: 'Social Impact',
    members: 240,
    eventsThisMonth: 3,
    accent: '#e11d48',
    description: 'Community outreach, sustainability initiatives and volunteering.',
  },
  {
    name: 'Design Collective',
    category: 'Design',
    members: 160,
    eventsThisMonth: 2,
    accent: '#38bdf8',
    description: 'Product, visual and UX design sprints across disciplines.',
  },
];

export default Societies;

