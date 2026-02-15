import { X, Check, Trash2, Bell, Clock, Users, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'event';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  icon?: 'bell' | 'users' | 'sparkles';
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sample notifications data - replace with your actual data source
const SAMPLE_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    type: 'event',
    title: 'New Event Created',
    message: 'Tech Symposium 2026 has been scheduled for March 15th',
    timestamp: '2 min ago',
    read: false,
    icon: 'sparkles',
  },
  {
    id: '2',
    type: 'success',
    title: 'Member Approved',
    message: 'John Doe has been approved to join the Drama Society',
    timestamp: '15 min ago',
    read: false,
    icon: 'users',
  },
  {
    id: '3',
    type: 'info',
    title: 'System Update',
    message: 'New features have been added to the dashboard',
    timestamp: '1 hour ago',
    read: true,
    icon: 'bell',
  },
  {
    id: '4',
    type: 'warning',
    title: 'Pending Approval',
    message: '5 new society applications awaiting your review',
    timestamp: '3 hours ago',
    read: true,
    icon: 'bell',
  },
];

const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
  const getIconComponent = (icon?: string) => {
    switch (icon) {
      case 'users':
        return Users;
      case 'sparkles':
        return Sparkles;
      default:
        return Bell;
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'from-emerald-500/20 to-green-500/20 border-emerald-500/30';
      case 'warning':
        return 'from-amber-500/20 to-yellow-500/20 border-amber-500/30';
      case 'event':
        return 'from-neonCyan/20 to-blue-500/20 border-neonCyan/30';
      default:
        return 'from-slate-500/20 to-slate-600/20 border-slate-500/30';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Notification Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed right-4 top-20 z-50 w-full max-w-md md:right-8"
          >
            <GlassCard className="flex max-h-[calc(100vh-6rem)] flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-neonCyan/30 to-neonPurple/30 ring-1 ring-neonCyan/50">
                    <Bell className="h-5 w-5 text-neonCyan" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-100">
                      Notifications
                    </h2>
                    <p className="text-xs text-slate-400">
                      {SAMPLE_NOTIFICATIONS.filter((n) => !n.read).length}{' '}
                      unread
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/60 text-slate-400 transition hover:bg-slate-800/80 hover:text-slate-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 border-b border-white/10 px-6 py-3">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-slate-800/80 hover:text-neonCyan">
                  <Check className="h-3.5 w-3.5" />
                  Mark All Read
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl bg-slate-900/60 px-3 py-2 text-xs font-medium text-slate-300 transition hover:bg-red-900/30 hover:text-red-400">
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear All
                </button>
              </div>

              {/* Notifications List */}
              <div className="flex-1 overflow-y-auto px-4 py-2">
                {SAMPLE_NOTIFICATIONS.length > 0 ? (
                  <div className="space-y-2">
                    {SAMPLE_NOTIFICATIONS.map((notification) => {
                      const IconComponent = getIconComponent(notification.icon);
                      return (
                        <motion.div
                          key={notification.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-r p-4 transition-all hover:scale-[1.02] ${getNotificationColor(
                            notification.type,
                          )} ${!notification.read ? 'ring-1 ring-neonCyan/30' : ''}`}
                        >
                          {/* Unread indicator */}
                          {!notification.read && (
                            <div className="absolute right-3 top-3 h-2 w-2 animate-pulse rounded-full bg-neonCyan shadow-glow" />
                          )}

                          <div className="flex gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900/60 text-neonCyan">
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div className="flex-1 space-y-1">
                              <h3 className="text-sm font-semibold text-slate-100">
                                {notification.title}
                              </h3>
                              <p className="text-xs leading-relaxed text-slate-300">
                                {notification.message}
                              </p>
                              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                                <Clock className="h-3 w-3" />
                                <span>{notification.timestamp}</span>
                              </div>
                            </div>
                          </div>

                          {/* Hover Actions */}
                          <div className="mt-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                            <button className="flex flex-1 items-center justify-center gap-1 rounded-lg bg-slate-900/60 px-2 py-1.5 text-[10px] font-medium text-slate-300 transition hover:bg-slate-800/80 hover:text-neonCyan">
                              <Check className="h-3 w-3" />
                              Mark Read
                            </button>
                            <button className="flex items-center justify-center gap-1 rounded-lg bg-slate-900/60 px-2 py-1.5 text-[10px] font-medium text-slate-300 transition hover:bg-red-900/30 hover:text-red-400">
                              <Trash2 className="h-3 w-3" />
                              Delete
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex h-64 flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900/60">
                      <Bell className="h-8 w-8 text-slate-500" />
                    </div>
                    <h3 className="mb-1 text-sm font-semibold text-slate-300">
                      No notifications
                    </h3>
                    <p className="text-xs text-slate-500">
                      You're all caught up!
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 px-6 py-3">
                <button className="w-full rounded-xl bg-gradient-to-r from-neonCyan/20 to-neonPurple/20 px-4 py-2.5 text-xs font-semibold text-neonCyan transition hover:from-neonCyan/30 hover:to-neonPurple/30">
                  View All Notifications
                </button>
              </div>
            </GlassCard>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel;
