import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SocietyCard from '../components/SocietyCard';
import { societies as initialSocieties } from '../data/mockData';

const Societies = () => {
  const [societies, setSocieties] = useState(initialSocieties);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSociety, setNewSociety] = useState({
    name: '',
    category: '',
    members: 0,
    eventsThisMonth: 0,
    accent: '#00f5ff',
    description: '',
  });

  const handleAddSociety = () => {
    if (!newSociety.name || !newSociety.category) {
      alert('Please fill in at least name and category');
      return;
    }
    const society = {
      ...newSociety,
      id: `soc-${Date.now()}`,
    };
    setSocieties([...societies, society]);
    setNewSociety({
      name: '',
      category: '',
      members: 0,
      eventsThisMonth: 0,
      accent: '#00f5ff',
      description: '',
    });
    setShowAddForm(false);
  };

  const handleDeleteSociety = (id: string) => {
    setSocieties(societies.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neonCyan">
            Societies
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">All Student Societies</h1>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
            Manage and organize all student societies.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition-all hover:scale-105 hover:shadow-xl"
        >
          <Plus className="h-4 w-4" />
          Add Society
        </button>
      </div>

      <GlassCard className="px-4 py-4 md:px-5 md:py-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {societies.map((society) => (
            <SocietyCard key={society.id} {...society} onDelete={() => handleDeleteSociety(society.id)} />
          ))}
        </div>
      </GlassCard>

      {/* Add Society Modal */}
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
            <h2 className="mb-4 text-xl font-semibold">Add New Society</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm text-slate-300">Name *</label>
                <input
                  type="text"
                  value={newSociety.name}
                  onChange={(e) => setNewSociety({ ...newSociety, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="e.g., Robotics Club"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Category *</label>
                <input
                  type="text"
                  value={newSociety.category}
                  onChange={(e) => setNewSociety({ ...newSociety, category: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="e.g., Technology"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm text-slate-300">Description</label>
                <textarea
                  value={newSociety.description}
                  onChange={(e) => setNewSociety({ ...newSociety, description: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-neonCyan focus:outline-none"
                  placeholder="Brief description"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Members</label>
                  <input
                    type="number"
                    value={newSociety.members}
                    onChange={(e) => setNewSociety({ ...newSociety, members: parseInt(e.target.value) || 0 })}
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-3 py-2 text-sm text-slate-100 focus:border-neonCyan focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-slate-300">Accent Color</label>
                  <input
                    type="color"
                    value={newSociety.accent}
                    onChange={(e) => setNewSociety({ ...newSociety, accent: e.target.value })}
                    className="h-10 w-full rounded-xl border border-white/10 bg-slate-900/50 px-1 py-1 focus:border-neonCyan focus:outline-none"
                  />
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
                  onClick={handleAddSociety}
                  className="flex-1 rounded-xl bg-gradient-to-r from-neonCyan to-neonPurple px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-105"
                >
                  Add Society
                </button>
              </div>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default Societies;

