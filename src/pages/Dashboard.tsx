import { Activity, CalendarRange, Users, Bell, Moon, SunMedium } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import StatCard from '../components/StatCard';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neonCyan">
            {t('dashboard.overview')}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">{t('dashboard.title')}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{t('dashboard.subtitle')}</p>
        </div>

        {/* Navigation Box - Right Upper Side */}
        <GlassCard className="flex h-20 w-20 shrink-0 items-center justify-center p-2 md:h-24 md:w-24 md:p-3">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1.5">
            {/* Notification Bell - Top Left */}
            <button
              type="button"
              className="relative flex items-center justify-center rounded-xl bg-slate-900/70 text-slate-100 shadow-soft ring-1 ring-white/10 transition hover:text-neonCyan hover:ring-neonCyan/70"
            >
              <Bell className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="absolute right-0.5 top-0.5 inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-rose-400" />
            </button>

            {/* Theme Toggle - Top Right */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center rounded-xl bg-slate-900/70 text-slate-100 shadow-soft ring-1 ring-white/10 transition hover:text-neonCyan hover:ring-neonCyan/70"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Moon className="h-3.5 w-3.5 md:h-4 md:w-4 text-neonCyan" />
              ) : (
                <SunMedium className="h-3.5 w-3.5 md:h-4 md:w-4 text-amber-300" />
              )}
            </button>

            {/* User Avatar - Bottom */}
            <button
              type="button"
              className="col-span-2 flex items-center justify-center rounded-xl bg-gradient-to-br from-neonCyan/70 to-neonPurple/70 text-xs font-semibold text-slate-950 shadow-soft transition hover:shadow-glow"
            >
              <span className="text-[10px] md:text-xs">DK</span>
            </button>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          label={t('dashboard.activeMembers')}
          value={1284}
          delta={4.3}
          icon={<Users className="h-4 w-4" />}
          accent="cyan"
        />
        <StatCard
          label={t('dashboard.liveEvents')}
          value={12}
          delta={1.2}
          suffix="this week"
          icon={<CalendarRange className="h-4 w-4" />}
          accent="purple"
        />
        <StatCard
          label={t('dashboard.engagementScore')}
          value={92}
          suffix="/100"
          delta={-0.8}
          icon={<Activity className="h-4 w-4" />}
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="col-span-2 px-5 py-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Attendance Trend
              </p>
              <p className="mt-1 text-sm text-slate-300">Weekly check-ins across all societies</p>
            </div>
          </div>
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData}>
                <defs>
                  <linearGradient id="attendanceLine" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#00f5ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
                <XAxis dataKey="label" stroke="#64748b" tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15,23,42,0.98)',
                    borderRadius: 16,
                    border: '1px solid rgba(148,163,184,0.5)',
                    fontSize: 12,
                  }}
                  labelStyle={{ color: '#cbd5f5', marginBottom: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#attendanceLine)"
                  strokeWidth={2.4}
                  dot={false}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="px-5 py-4">
          <div className="mb-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Membership Mix
            </p>
            <p className="mt-1 text-sm text-slate-300">Distribution by society category</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-40 w-40">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={membershipData}
                    dataKey="value"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={3}
                  >
                    {membershipData.map((entry, index) => (
                      <Cell
                        // eslint-disable-next-line react/no-array-index-key
                        key={`slice-${index}`}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-1 flex-col gap-2 text-xs">
              {membershipData.map((entry) => (
                <div
                  key={entry.label}
                  onClick={() => console.log(`Clicked on category: ${entry.label}`)}
                  className="flex cursor-pointer items-center justify-between gap-2 rounded-xl px-2 py-1.5 transition-all duration-200 hover:bg-slate-900/50 hover:ring-1 hover:ring-neonCyan/30"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-slate-200">{entry.label}</span>
                  </div>
                  <span className="text-slate-400">{entry.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="space-y-3 px-5 py-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
              Recent Activity
            </p>
          </div>
          <ul className="space-y-2 text-sm">
            {recentActivity.map((item) => (
              <li
                key={item.id}
                onClick={() => console.log(`Clicked on activity: ${item.title}`)}
                className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-2 py-2 transition-all duration-200 hover:bg-slate-900/50 hover:ring-1 hover:ring-neonCyan/30"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-neonCyan" />
                  <div>
                    <p className="text-slate-100">{item.title}</p>
                    <p className="text-[11px] text-slate-400">{item.meta}</p>
                  </div>
                </div>
                <span className="text-[11px] text-slate-500">{item.time}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard className="space-y-3 px-5 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Upcoming Events
          </p>
          <ul className="space-y-2 text-sm">
            {upcomingEvents.map((event) => (
              <li
                key={event.id}
                onClick={() => console.log(`Clicked on event: ${event.title}`)}
                className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl px-2 py-2 transition-all duration-200 hover:bg-slate-900/50 hover:ring-1 hover:ring-neonCyan/30"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-slate-100">{event.title}</span>
                  <span className="text-[11px] text-slate-400">{event.society}</span>
                </div>
                <span className="rounded-2xl bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-200">
                  {event.when}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  );
};

const attendanceData = [
  { label: 'Mon', value: 220 },
  { label: 'Tue', value: 260 },
  { label: 'Wed', value: 340 },
  { label: 'Thu', value: 310 },
  { label: 'Fri', value: 420 },
  { label: 'Sat', value: 390 },
  { label: 'Sun', value: 280 },
];

const membershipData = [
  { label: 'Tech & Coding', value: 32, color: '#00f5ff' },
  { label: 'Arts & Culture', value: 24, color: '#a855f7' },
  { label: 'Sports & Fitness', value: 18, color: '#22c55e' },
  { label: 'Social Impact', value: 14, color: '#f97316' },
  { label: 'Other', value: 12, color: '#e5e7eb' },
];

const recentActivity = [
  {
    id: 1,
    title: 'New member joined Robotics Society',
    meta: 'Priya Sharma • Engineering • Robotics Society',
    time: '2 min ago',
  },
  {
    id: 2,
    title: 'Tickets opened for Tech Fest 2026',
    meta: 'Developer Student Club • Main auditorium',
    time: '18 min ago',
  },
  {
    id: 3,
    title: 'Finance Club published monthly report',
    meta: 'Finance Club • 86% budget utilization',
    time: '1 hr ago',
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Product Design Sprint',
    society: 'Design Collective',
    when: 'Today · 5:30 PM',
  },
  {
    id: 2,
    title: 'Midnight Hackathon',
    society: 'Code Cell',
    when: 'Tomorrow · 9:00 PM',
  },
  {
    id: 3,
    title: 'Open Mic Night',
    society: 'Cultural Society',
    when: 'Fri · 7:30 PM',
  },
];

export default Dashboard;

