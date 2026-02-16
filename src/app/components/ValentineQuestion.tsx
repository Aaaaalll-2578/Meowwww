import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, HeartCrack } from 'lucide-react';
import Confetti from 'react-confetti';
import confetti from 'canvas-confetti';

interface ValentineQuestionProps {
  onYes: () => void;
}

export default function ValentineQuestion({ onYes }: ValentineQuestionProps) {
  const [noCount, setNoCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showConfetti, setShowConfetti] = useState(false);

  const funnyNoResponses = [
    "Are you sure? 🥺",
    "But... but... I made this whole website! 💔",
    "Meoww, please reconsider! 😿",
    "My heart is breaking... 💔",
    "Come on, you know you want to say yes! 😊",
    "I'll keep asking until you say yes! 🙈",
    "Is that your final answer? 🤔",
    "Think about all our late-night calls! 🌙",
    "Remember the scooty incident? I came for you! 🛵",
    "I choose you! Now choose me! 💕",
    "Tom needs his Jerry! 🐱🐭",
    "Our future awaits us! ✨",
    "Just click YES already! 😄",
    "You're making me sad, Meoww! 😢",
    "I won't give up on us! ❤️",
  ];

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newCount = noCount + 1;
    setNoCount(newCount);

    // Move the NO button to a random position
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 100;
    setNoPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY,
    });
  };

  const handleYesClick = () => {
    setShowConfetti(true);
    
    // Trigger confetti explosion
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          onYes();
        }, 500);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const yesButtonScale = 1 + noCount * 0.15;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      
      <div className="max-w-3xl w-full text-center space-y-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <Heart className="w-24 h-24 mx-auto text-red-500 fill-red-500 animate-pulse" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-pink-200"
        >
          Will You Be My Valentine?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl text-pink-300"
        >
          My dearest <span className="text-pink-100 font-bold">Meoww</span> 💝
        </motion.p>

        {noCount > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-pink-800/50 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-md"
          >
            <HeartCrack className="w-12 h-12 mx-auto mb-4 text-pink-300" />
            <p className="text-xl text-pink-200">
              {funnyNoResponses[Math.min(noCount - 1, funnyNoResponses.length - 1)]}
            </p>
          </motion.div>
        )}

        <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-8 relative">
          <motion.button
            animate={{ scale: yesButtonScale }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleYesClick}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-2xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all z-10"
            style={{
              fontSize: `${1 + noCount * 0.1}rem`,
            }}
          >
            YES! 💕
          </motion.button>

          <motion.button
            animate={{
              x: noPosition.x,
              y: noPosition.y,
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleNoClick}
            onMouseEnter={handleNoClick}
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold text-xl px-8 py-4 rounded-full shadow-xl absolute md:relative"
            style={
              noCount > 0
                ? {
                    position: 'fixed',
                    left: noPosition.x,
                    top: noPosition.y,
                  }
                : {}
            }
          >
            No 💔
          </motion.button>
        </div>

        {noCount > 5 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-300 text-lg italic"
          >
            Hint: There's only one correct answer, Meoww! 😉
          </motion.p>
        )}
      </div>
    </div>
  );
}
