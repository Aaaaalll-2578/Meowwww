import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Star, Trophy } from 'lucide-react';

interface CarRaceGameProps {
  onNext: () => void;
}

interface Obstacle {
  id: number;
  x: number;
  y: number;
  message: string;
}

const loveMessages = [
  'I Love You! 💕',
  'You\'re Amazing! ✨',
  'Forever Together! ♾️',
  'My Heart! ❤️',
  'Best Boyfriend! 🏆',
  'You\'re Mine! 💖',
  'Meoww! 🐱',
  'Tom & Jerry! 🐭',
  'Always! 💝',
  '2 Years! 🎉',
];

export default function CarRaceGame({ onNext }: CarRaceGameProps) {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [carPosition, setCarPosition] = useState(50);
  const [score, setScore] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const gameInterval = useRef<NodeJS.Timeout | null>(null);
  const obstacleCounter = useRef(0);

  useEffect(() => {
    if (gameStarted && !gameOver) {
      // Spawn obstacles
      const spawnInterval = setInterval(() => {
        const newObstacle: Obstacle = {
          id: obstacleCounter.current++,
          x: Math.random() * 80 + 10,
          y: -10,
          message: loveMessages[Math.floor(Math.random() * loveMessages.length)],
        };
        setObstacles((prev) => [...prev, newObstacle]);
      }, 1500);

      // Move obstacles and update score
      gameInterval.current = setInterval(() => {
        setObstacles((prev) => {
          const updated = prev.map((obs) => ({
            ...obs,
            y: obs.y + 2,
          }));

          // Check collision
          updated.forEach((obs) => {
            if (
              obs.y > 70 &&
              obs.y < 90 &&
              Math.abs(obs.x - carPosition) < 10
            ) {
              setGameOver(true);
            }
          });

          // Remove off-screen obstacles and increment score
          return updated.filter((obs) => {
            if (obs.y > 100) {
              setScore((s) => s + 10);
              return false;
            }
            return true;
          });
        });
      }, 50);

      return () => {
        clearInterval(spawnInterval);
        if (gameInterval.current) clearInterval(gameInterval.current);
      };
    }
  }, [gameStarted, gameOver, carPosition]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;
      
      if (e.key === 'ArrowLeft') {
        setCarPosition((pos) => Math.max(10, pos - 10));
      } else if (e.key === 'ArrowRight') {
        setCarPosition((pos) => Math.min(90, pos + 10));
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null || !gameStarted || gameOver) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchEnd - touchStart;
    
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        setCarPosition((pos) => Math.min(90, pos + 5));
      } else {
        setCarPosition((pos) => Math.max(10, pos - 5));
      }
      setTouchStart(touchEnd);
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
  };

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setObstacles([]);
    setCarPosition(50);
    obstacleCounter.current = 0;
  };

  const wonGame = score >= 200;

  if (!gameStarted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-200">
            Love Race Game 🏎️💕
          </h2>
          <p className="text-xl text-pink-300">
            Drive the car and collect love messages!
          </p>
          <div className="bg-pink-800/50 backdrop-blur-sm rounded-2xl p-6 space-y-4 text-left">
            <h3 className="text-2xl font-bold text-pink-100 text-center mb-4">
              How to Play:
            </h3>
            <p className="text-pink-200">
              🎮 <strong>Desktop:</strong> Use Arrow Keys (← →) to move
            </p>
            <p className="text-pink-200">
              📱 <strong>Mobile:</strong> Swipe left/right to move
            </p>
            <p className="text-pink-200">
              💕 Collect love messages to increase score
            </p>
            <p className="text-pink-200">
              🏆 Reach 200 points to win my heart!
            </p>
          </div>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Start Racing! 🏁
          </button>
        </motion.div>
      </div>
    );
  }

  if (gameOver) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center space-y-8"
        >
          {wonGame ? (
            <>
              <Trophy className="w-24 h-24 mx-auto text-yellow-400 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold text-pink-200">
                At Last, You Won My Heart! 💖
              </h2>
              <p className="text-2xl text-pink-300">
                Final Score: {score} 🏆
              </p>
              <p className="text-xl text-pink-200">
                Just like this race, you've won my heart completely! ❤️
              </p>
              <div className="space-y-4">
                <p className="text-lg text-pink-300 italic">
                  Best Boyfriend Ever! 🌟
                </p>
                <div className="flex justify-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
              <button
                onClick={onNext}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
              >
                Continue 💖
              </button>
            </>
          ) : (
            <>
              <Heart className="w-24 h-24 mx-auto text-pink-400 fill-pink-400" />
              <h2 className="text-4xl md:text-5xl font-bold text-pink-200">
                Almost There! 💕
              </h2>
              <p className="text-2xl text-pink-300">Score: {score}</p>
              <p className="text-xl text-pink-200">
                Try again to win my heart! You need 200 points! 💖
              </p>
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
              >
                Try Again! 🎮
              </button>
            </>
          )}
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl font-bold text-pink-200">
            Score: {score}
          </div>
          <div className="text-xl text-pink-300">
            Target: 200 🏆
          </div>
        </div>

        {/* Game Area */}
        <div className="relative w-full h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-4 border-pink-500 shadow-2xl">
          {/* Road lines */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-yellow-400 opacity-50 animate-pulse" />

          {/* Obstacles (Love Messages) */}
          <AnimatePresence>
            {obstacles.map((obstacle) => (
              <motion.div
                key={obstacle.id}
                initial={{ y: obstacle.y }}
                animate={{ y: obstacle.y }}
                className="absolute"
                style={{
                  left: `${obstacle.x}%`,
                  top: `${obstacle.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg font-bold whitespace-nowrap">
                  {obstacle.message}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Player Car */}
          <motion.div
            animate={{ left: `${carPosition}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="absolute bottom-[10%]"
            style={{
              transform: 'translateX(-50%)',
            }}
          >
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg width="60" height="100" viewBox="0 0 60 100">
                {/* Car body */}
                <rect x="10" y="20" width="40" height="60" rx="8" fill="#ec4899" />
                <rect x="15" y="10" width="30" height="20" rx="5" fill="#be185d" />
                
                {/* Windows */}
                <rect x="18" y="15" width="24" height="15" rx="3" fill="#93c5fd" opacity="0.7" />
                
                {/* Wheels */}
                <circle cx="18" cy="85" r="8" fill="#1f2937" />
                <circle cx="42" cy="85" r="8" fill="#1f2937" />
                <circle cx="18" cy="85" r="5" fill="#4b5563" />
                <circle cx="42" cy="85" r="5" fill="#4b5563" />
                
                {/* Heart on car */}
                <text x="30" y="55" textAnchor="middle" fontSize="20">
                  ❤️
                </text>
              </svg>
            </motion.div>
          </motion.div>
        </div>

        <div className="text-center mt-4 text-pink-300">
          <p className="text-lg">
            {score < 100 ? 'Keep going! 💪' : 'Almost there! You can do it! 🎯'}
          </p>
        </div>
      </div>
    </div>
  );
}
