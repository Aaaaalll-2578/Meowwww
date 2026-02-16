import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface LoveReasonsProps {
  onNext: () => void;
}

const reasons = [
  "Your smile lights up my entire world 😊",
  "The way you care for everyone around you 💕",
  "How safe and loved I feel with you 🏡",
  "Your beautiful eyes that I get lost in 👀",
  "The way you fix our fights with patience ❤️",
  "Your presence - just being near you makes everything better ✨",
  "Our late-night calls that go till 3 AM 🌙",
  "How you came to meet me when I was sad 🛵",
  "Your touch that sends butterflies through me 🦋",
  "The romance in the little things you do 💝",
  "How we're like Tom and Jerry - fighting but loving 🐱🐭",
  "The way you laugh at my silly jokes 😄",
  "Your caring nature that makes me feel special 🌟",
  "How you understand me without words 💬",
  "Our dreams of traveling together at night 🌃",
  "The way you support me in everything 🤝",
  "Your hugs that make everything okay 🤗",
  "How you remember the little details 📝",
  "Your patience with my mood swings 😅",
  "The way you make ordinary moments extraordinary ✨",
  "How you choose me every single day 💕",
  "Your voice that calms my storms 🌊",
  "The future we're building together 🏰",
  "How you're my best friend and my love ❤️",
  "last but not the least...you are a rare Gem in this generation",
  "And a million more reasons... ♾️💖",
];

export default function LoveReasons({ onNext }: LoveReasonsProps) {
  const [currentReason, setCurrentReason] = useState(0);
  const [jarOpen, setJarOpen] = useState(false);

  const handleJarClick = () => {
    if (!jarOpen) {
      setJarOpen(true);
    } else if (currentReason < reasons.length - 1) {
      setCurrentReason(currentReason + 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-pink-200 mb-8"
        >
          Reasons Why I Love You 💕
        </motion.h2>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="relative"
        >
          {/* Jar Container */}
          <motion.div
            animate={{
              rotate: jarOpen ? [0, -5, 5, -5, 5, 0] : 0,
            }}
            transition={{ duration: 0.5 }}
            onClick={handleJarClick}
            className="cursor-pointer"
          >
            <svg
              width="300"
              height="400"
              viewBox="0 0 300 400"
              className="mx-auto"
            >
              {/* Jar body */}
              <rect
                x="50"
                y="100"
                width="200"
                height="250"
                rx="20"
                fill="rgba(219, 39, 119, 0.3)"
                stroke="#ec4899"
                strokeWidth="4"
              />
              
              {/* Jar lid */}
              <motion.rect
                x="40"
                y={jarOpen ? "50" : "80"}
                width="220"
                height="30"
                rx="5"
                fill="#be185d"
                stroke="#ec4899"
                strokeWidth="4"
                animate={{
                  y: jarOpen ? 50 : 80,
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Jar label */}
              <text
                x="150"
                y="230"
                textAnchor="middle"
                fill="#fce7f3"
                fontSize="24"
                fontFamily="cursive"
              >
                Love Jar
              </text>
              
              <text
                x="150"
                y="260"
                textAnchor="middle"
                fill="#fbcfe8"
                fontSize="18"
              >
                💕
              </text>
            </svg>
          </motion.div>

          {jarOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 bg-pink-800/50 backdrop-blur-sm rounded-2xl p-8 min-h-[200px] flex items-center justify-center"
            >
              <div className="space-y-4">
                <Heart className="w-12 h-12 mx-auto text-pink-300 fill-pink-300 animate-pulse" />
                <motion.p
                  key={currentReason}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-2xl md:text-3xl text-pink-100 font-semibold"
                >
                  {reasons[currentReason]}
                </motion.p>
                <p className="text-pink-300 text-lg">
                  Reason {currentReason + 1} of {reasons.length}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {!jarOpen && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-300 text-xl"
          >
            Click the jar to open and discover why I love you! 💝
          </motion.p>
        )}

        {jarOpen && currentReason === reasons.length - 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all mt-8"
            >
              Continue to Our Journey 💖
            </button>
          </motion.div>
        )}

        {jarOpen && currentReason < reasons.length - 1 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-300 text-lg italic"
          >
            Click the jar again for the next reason! ✨
          </motion.p>
        )}
      </div>
    </div>
  );
}
