import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  // Auto-hide after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-neonCyan/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-neonCyan/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-neonPurple/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 15,
            duration: 1,
          }}
          className="relative"
        >
          <motion.div
            className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-neonCyan/20 to-neonPurple/20 shadow-2xl ring-2 ring-neonCyan/50 backdrop-blur-xl"
            animate={{
              boxShadow: [
                '0 0 20px rgba(0, 245, 255, 0.3)',
                '0 0 40px rgba(0, 245, 255, 0.6)',
                '0 0 20px rgba(0, 245, 255, 0.3)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles className="h-12 w-12 text-neonCyan" />
            </motion.div>
          </motion.div>

          {/* Orbiting particles */}
          {[0, 120, 240].map((angle, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-neonCyan shadow-glow"
              style={{
                originX: 0.5,
                originY: 0.5,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
                delay: i * 0.3,
              }}
            >
              <div
                className="absolute h-2 w-2 rounded-full bg-neonCyan"
                style={{
                  transform: `translate(-50%, -50%) translateY(-50px) rotate(${angle}deg)`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Welcome text */}
        <div className="flex flex-col items-center gap-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center text-5xl font-black tracking-tight text-slate-100 md:text-6xl"
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-neonCyan via-blue-400 to-neonPurple bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Welcome to
            </motion.span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8, type: 'spring' }}
            className="text-center text-6xl font-black tracking-tighter text-slate-100 md:text-7xl"
          >
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-neonCyan to-neonPurple bg-clip-text text-transparent">
                Society Ops
              </span>
              <motion.span
                className="absolute inset-0 z-0 bg-gradient-to-r from-neonCyan to-neonPurple opacity-50 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                Society Ops
              </motion.span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center text-sm font-medium uppercase tracking-widest text-slate-400"
          >
            Society Management Console
          </motion.p>
        </div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-neonCyan"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xs text-slate-500"
          >
            Loading your experience...
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neonCyan to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      />
    </motion.div>
  );
};

export default SplashScreen;
