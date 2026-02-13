import GlassCard from '../components/GlassCard';
import EventCard from '../components/EventCard';

const Events = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neonCyan">Events</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Upcoming & Live Events</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
            This page will soon display animated event cards with capacity bars and status pulses.
          </p>
        </div>
      </div>

      <GlassCard className="px-4 py-4 md:px-5 md:py-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

const events = [
  {
    title: 'Midnight Hackathon 2.0',
    society: 'Developer Student Club',
    when: 'Tomorrow · 9:00 PM',
    location: 'Innovation Lab',
    capacityUsed: 86,
    status: 'Live' as const,
  },
  {
    title: 'Product Design Sprint',
    society: 'Design Collective',
    when: 'Today · 5:30 PM',
    location: 'Studio 3',
    capacityUsed: 74,
    status: 'Live' as const,
  },
  {
    title: 'Market Madness Simulation',
    society: 'Finance Club',
    when: 'Thu · 6:00 PM',
    location: 'Room B204',
    capacityUsed: 63,
    status: 'Upcoming' as const,
  },
  {
    title: 'Campus Clean-up Drive',
    society: 'Social Impact Forum',
    when: 'Sat · 9:00 AM',
    location: 'Main Gate',
    capacityUsed: 48,
    status: 'Upcoming' as const,
  },
  {
    title: 'Inter-College Football Finals',
    society: 'Sports Council',
    when: 'Sun · 4:30 PM',
    location: 'North Ground',
    capacityUsed: 97,
    status: 'Waitlist' as const,
  },
  {
    title: 'Acoustic Open Mic Night',
    society: 'Cultural Society',
    when: 'Fri · 7:30 PM',
    location: 'Amphitheatre',
    capacityUsed: 69,
    status: 'Upcoming' as const,
  },
];

export default Events;

