import GlassCard from '../components/GlassCard';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const Ai = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neonCyan">AI</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">{t('ai.title')}</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{t('ai.subtitle')}</p>
        </div>
      </div>

      <GlassCard className="relative overflow-hidden px-6 py-6 md:px-8 md:py-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,245,255,0.08),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(168,85,247,0.18),_transparent_55%)]" />

        <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-2xl bg-slate-900/80 px-3 py-1 text-[11px] text-slate-200 ring-1 ring-neonCyan/40">
              <Sparkles className="h-3 w-3 text-neonCyan" />
              Real-time AI suggestions for societies & events
            </div>
            <h2 className="text-xl font-semibold tracking-tight text-slate-50">
              AI Recommendation Canvas
            </h2>
            <p className="text-sm text-slate-300">
              This space surfaces tailored recommendations for event timings, collabs between
              societies, and member re-engagement campaigns based on live activity signals.
            </p>

            <div className="mt-4 space-y-3 text-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                Live AI Suggestions
              </p>
              <ul className="space-y-2">
                <li
                  onClick={() => console.log('Clicked on AI suggestion: Boost Robotics Society engagement')}
                  className="cursor-pointer rounded-2xl bg-slate-900/70 px-3 py-2 text-slate-200 ring-1 ring-white/10 transition-all duration-200 hover:bg-slate-900/90 hover:ring-neonCyan/50"
                >
                  Boost Robotics Society engagement by suggesting a joint hackathon with Design
                  Collective next week.
                </li>
                <li
                  onClick={() => console.log('Clicked on AI suggestion: Promote Open Mic Night')}
                  className="cursor-pointer rounded-2xl bg-slate-900/70 px-3 py-2 text-slate-200 ring-1 ring-white/10 transition-all duration-200 hover:bg-slate-900/90 hover:ring-neonCyan/50"
                >
                  Promote Open Mic Night to Finance Club members who attended the last cultural
                  event.
                </li>
                <li
                  onClick={() => console.log('Clicked on AI suggestion: Recommend earlier match start')}
                  className="cursor-pointer rounded-2xl bg-slate-900/70 px-3 py-2 text-slate-200 ring-1 ring-white/10 transition-all duration-200 hover:bg-slate-900/90 hover:ring-neonCyan/50"
                >
                  Recommend earlier match start for football finals based on historical attendance
                  drop after 6 PM.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative h-48 w-full max-w-sm rounded-3xl bg-slate-950/80 p-4 text-xs text-slate-200 ring-1 ring-white/10"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-2xl bg-slate-900/80 px-2 py-0.5 text-[11px] text-neonCyan">
                  AI Conversation
                </span>
                <span className="text-[10px] text-slate-500">Adaptive · Context-aware</span>
              </div>
              <div className="space-y-2">
                <div
                  onClick={() => console.log('Clicked on AI message')}
                  className="flex cursor-pointer items-start gap-2 transition-opacity duration-200 hover:opacity-80"
                >
                  <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-to-br from-neonCyan to-neonPurple text-[10px] font-semibold text-slate-950 flex items-center justify-center">
                    AI
                  </span>
                  <p className="rounded-2xl bg-slate-900/80 px-3 py-2">
                    I&apos;ve analysed the last 4 weeks of attendance. Would you like me to propose
                    an ideal timetable for your top 5 societies?
                  </p>
                </div>
                <div
                  onClick={() => console.log('Clicked on user message')}
                  className="flex cursor-pointer items-start justify-end gap-2 transition-opacity duration-200 hover:opacity-80"
                >
                  <p className="rounded-2xl bg-slate-800/80 px-3 py-2">
                    Yes, and prioritise time slots that keep sports events from overlapping with
                    tech events.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default Ai;

