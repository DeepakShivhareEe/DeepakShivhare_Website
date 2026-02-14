import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import EventCard from '../components/EventCard';
import { events as initialEvents } from '../data/mockData';

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    society: '',
    when: '',
    location: '',
    capacityUsed: 0,
    status: 'Upcoming' as 'Live' | 'Upcoming' | 'Waitlist',
  });

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.society || !newEvent.location) {
      alert('Please fill in title, society, and location');
      return;
    }
    const event = {
      ...newEvent,
      id: `evt-${Date.now()}`,
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      society: '',
      when: '',
      location: '',
      capacityUsed: 0,
      status: 'Upcoming',
    });
    setShowAddForm(false);
  };

  const handleDeleteEvent = (id: string) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neonCyan">Events</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">Upcoming & Live Events</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
            Manage all society events and activities.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition-all hover:scale-105 hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          Add Event
        </button>
      </div>

      <GlassCard className="px-4 py-4 md:px-5 md:py-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} {...event} onDelete={() => handleDeleteEvent(event.id)} />
          ))}
        </div>
      </GlassCard>

      {/* Add Event Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <GlassCard className="relative mx-4 w-full max-w-md px-6 py-6">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="absolute right-4 top-4 rounded-xl p-2 text-slate-400 transition hover:bg-slate-800/50 hover:text-slate-100"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="mb-4 text-xl font-semibold">Add New Event</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Event Title *</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="e.g., Tech Fest 2026"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Society *</label>
                <input
                  type="text"
                  value={newEvent.society}
                  onChange={(e) => setNewEvent({ ...newEvent, society: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="e.g., Developer Student Club"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">When</label>
                  <input
                    type="text"
                    value={newEvent.when}
                    onChange={(e) => setNewEvent({ ...newEvent, when: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                    placeholder="e.g., Today · 5:00 PM"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Location *</label>
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                    placeholder="e.g., Main Hall"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Capacity %</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={newEvent.capacityUsed}
                    onChange={(e) => setNewEvent({ ...newEvent, capacityUsed: parseInt(e.target.value) || 0 })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 focus:border-neonCyan focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Status</label>
                  <select
                    value={newEvent.status}
                    onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value as any })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 focus:border-neonCyan focus:outline-none"
                  >
                    <option value="Upcoming">Upcoming</option>
                    <option value="Live">Live</option>
                    <option value="Waitlist">Waitlist</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddEvent}
                  className="flex-1 rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-105"
                >
                  Add Event
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default Events;

