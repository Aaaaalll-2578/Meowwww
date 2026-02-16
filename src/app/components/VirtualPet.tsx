import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

interface VirtualPetProps {
  onNext: () => void;
}

export default function VirtualPet({ onNext }: VirtualPetProps) {
  const [loveLevel, setLoveLevel] = useState(0);
  const [petSize, setPetSize] = useState(100);
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (clicks > 0) {
      const newLevel = Math.min(100, clicks * 5);
      setLoveLevel(newLevel);
      setPetSize(100 + newLevel);
    }
  }, [clicks]);

  const handlePetClick = () => {
    setClicks(clicks + 1);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 1000);
  };

  const getMessage = () => {
    if (loveLevel < 20) return "Feed me love! 💕";
    if (loveLevel < 40) return "I'm growing! 🌱";
    if (loveLevel < 60) return "Keep going! ✨";
    if (loveLevel < 80) return "Almost there! 💖";
    if (loveLevel < 100) return "So much love! 😍";
    return "Our love is infinite! ♾️💕";
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-pink-200"
        >
          Our Love Pet 💝
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-pink-300"
        >
          Click the heart to feed it love and watch it grow!
        </motion.p>

        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePetClick}
              className="cursor-pointer"
              style={{
                width: petSize,
                height: petSize,
              }}
            >
              <img
  src="/cat.png"
  alt="Virtual Cat"
  className="w-full h-full object-contain drop-shadow-2xl"
  style={{
    filter: `drop-shadow(0 0 ${loveLevel / 5}px rgba(236, 72, 153, 0.8))`,
  }}
/>

            </motion.div>

            {/* Floating love particles */}
            {showMessage && (
              <>
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 1,
                      scale: 0,
                      x: 0,
                      y: 0,
                    }}
                    animate={{
                      opacity: 0,
                      scale: 1,
                      x: (Math.random() - 0.5) * 100,
                      y: -100 - Math.random() * 50,
                    }}
                    transition={{ duration: 1 }}
                    className="absolute top-1/2 left-1/2"
                  >
                    <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                  </motion.div>
                ))}
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 space-y-4"
          >
            <p className="text-2xl text-pink-200 font-semibold">
              {getMessage()}
            </p>

            {/* Love meter */}
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-pink-300 mb-2">
                <span>Love Level</span>
                <span>{loveLevel}%</span>
              </div>
              <div className="w-full h-8 bg-pink-900 rounded-full overflow-hidden shadow-inner">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${loveLevel}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-end pr-2"
                >
                  {loveLevel > 10 && (
                    <Heart className="w-5 h-5 text-white fill-white" />
                  )}
                </motion.div>
              </div>
            </div>

            <p className="text-lg text-pink-300 italic">
              Clicks: {clicks} times 💕
            </p>

            {loveLevel === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-pink-800/50 backdrop-blur-sm rounded-2xl p-6 space-y-4"
              >
                <Heart className="w-16 h-16 mx-auto text-pink-300 fill-pink-300 animate-pulse" />
                <p className="text-2xl text-pink-100 font-bold">
                  Our love is at maximum capacity! 💖
                </p>
                <p className="text-xl text-pink-200">
                  Just like our real love - infinite and ever-growing! ♾️
                </p>
                <button
                  onClick={onNext}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
                >
                  Continue to Game 💖
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>

        {loveLevel < 100 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-300"
          >
            Keep clicking to fill the love meter! ✨
          </motion.p>
        )}
      </div>
    </div>
  );
}