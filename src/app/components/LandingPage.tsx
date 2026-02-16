import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const calculateCountdown = () => {
      const valentinesDay = new Date('2025-02-14T00:00:00');
      const now = new Date();
      const diff = valentinesDay.getTime() - now.getTime();

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setCountdown("It's Valentine's Day! ❤️");
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2,
          }}
        >
          <Heart className="w-32 h-32 mx-auto text-red-500 fill-red-500 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-300 to-pink-300 animate-gradient"
          style={{
            textShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
          }}
        >
          Hey <span className="text-pink-200">Meoww</span> 💕
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl text-pink-200"
        >
          I made something special for you...
        </motion.p>
        <motion.div
  key={countdown}   // 🔥 THIS makes it re-animate every second
  initial={{ scale: 0.95, opacity: 0.7 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.25, ease: 'easeOut' }}
  className="text-3xl md:text-4xl text-white font-mono bg-pink-800/30 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-xl"
>
  ⏳ {countdown}
</motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-lg text-pink-200"
        >
          <Sparkles className="inline-block mr-2" />
          Celebrating our <strong>2nd Love Anniversary</strong> 💖
          <Sparkles className="inline-block ml-2" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="pt-8"
        >
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
          >
            Start Your Journey ✨
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-pink-300 text-sm italic"
        >
          Made with endless love for my Gokulnathan 💝
        </motion.p>
      </div>
    </div>
  );
}
