import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ChatModal from './ChatModal';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-24 right-6 z-40 md:bottom-10">
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full border border-neonCyan/40"
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-neonCyan to-neonPurple text-slate-950 shadow-soft shadow-neonCyan/50 transition hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neonCyan/80"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Open AI assistant"
        >
          <MessageCircle className="h-5 w-5" />
        </motion.button>
      </div>

      <ChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default ChatbotButton;

