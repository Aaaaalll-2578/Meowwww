import { motion } from 'motion/react';
import { Heart, Sparkles, Camera, Music, Gamepad2, Trophy } from 'lucide-react';
import Confetti from 'react-confetti';
import { useState } from 'react';
import confetti from 'canvas-confetti';

export default function EndCredits() {
  const [showProposal, setShowProposal] = useState(false);
  const [proposalAnswer, setProposalAnswer] = useState(false);

  const credits = [
    { role: 'Director of Love', name: 'You ❤️', icon: Heart },
    { role: 'Lead Actor', name: 'Gokul (Meoww) 💕', icon: Sparkles },
    { role: 'Best Supporting Role', name: 'Our Late Night Calls 🌙', icon: Music },
    { role: 'Cinematography', name: 'All Our Beautiful Memories 📸', icon: Camera },
    { role: 'Special Effects', name: 'Your Smile & Eyes ✨', icon: Sparkles },
    { role: 'Stunt Coordinator', name: 'Tom & Jerry Fights 🐱🐭', icon: Gamepad2 },
    { role: 'Best Scene', name: 'The Scooty Incident 🛵 and every moment with youu', icon: Trophy },
    { role: 'Location', name: 'SBOA & Velammal College 🏫', icon: Sparkles },
    { role: 'Timeline', name: '2016 - Forever ♾️', icon: Heart },
    { role: 'Genre', name: 'Fights, Romance, Comedy, Drama 💝', icon: Heart },
    { role: 'Love Story', name: 'Forever & Always', icon: Heart },
    { role: 'Special Thanks', name: 'To Fate for bringing us together 🌟', icon: Sparkles },
  ];

  const handleProposalClick = () => {
    setShowProposal(true);
  };

  const handleProposalYes = () => {
    setProposalAnswer(true);
    
    // Massive confetti explosion!
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 100 * (timeLeft / duration);
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

  return (
    <div className="min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <Confetti
        recycle={true}
        numberOfPieces={100}
        gravity={0.05}
      />
      
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-12"
        >
          {/* Main Title */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="space-y-4"
          >
            <Heart className="w-24 h-24 mx-auto text-pink-400 fill-pink-400 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-red-300 to-pink-300">
              The End Credits
            </h1>
            <p className="text-2xl md:text-3xl text-pink-200">
              Of Our Beautiful Love Story 💕
            </p>
          </motion.div>

          {/* Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar"
          >
            {credits.map((credit, index) => {
              const Icon = credit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                  className="bg-pink-800/30 backdrop-blur-sm rounded-xl p-6 hover:bg-pink-800/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-pink-400" />
                    <div className="text-left flex-1">
                      <p className="text-pink-300 text-sm uppercase tracking-wide">
                        {credit.role}
                      </p>
                      <p className="text-pink-100 text-xl md:text-2xl font-bold">
                        {credit.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Final Messages */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3 }}
            className="space-y-6 bg-gradient-to-br from-pink-800/50 to-red-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12"
          >
            <Sparkles className="w-16 h-16 mx-auto text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
            
            <h2 className="text-3xl md:text-4xl font-bold text-pink-100">
              A Love Story That Never Ends
            </h2>
            
            <div className="space-y-4 text-xl text-pink-200">
              <p>
                From 6th standard classmates to college friends,
              </p>
              <p>
                From best friends to soulmates,
              </p>
              <p>
                From "Will you be my Valentine?" to "Forever mine"
              </p>
            </div>

            <div className="my-8 space-y-2">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-red-300">
                Celebrating 2 Years of Love 🎉
              </p>
              <p className="text-xl text-pink-300">
                February 17, 2024 - Forever ♾️
              </p>
            </div>

            <div className="border-t-2 border-pink-600 pt-6 space-y-4">
              <p className="text-2xl font-bold text-pink-100">
                "No matter what happens, I choose you."
              </p>
              <p className="text-xl text-pink-200 italic">
                You are my home, Meoww 🏡💕
              </p>
            </div>

            <div className="flex justify-center gap-2 pt-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="pt-8"
            >
              <p className="text-3xl md:text-4xl font-bold text-yellow-400 animate-pulse">
                🎬 THE END... OR JUST THE BEGINNING? 💖
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5 }}
              className="text-sm text-pink-300 italic pt-4"
            >
              <p>
                Made with infinite love and endless cups of coffee ☕
              </p>
              <p>
                For the most amazing boyfriend in the universe 🌟
              </p>
              <p className="mt-2 text-pink-400 font-semibold">
                Happy Valentine's Day 2026, My Man! 💝
              </p>
            </motion.div>
          </motion.div>

          {/* Anniversary Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
            className="bg-pink-700/30 backdrop-blur-sm rounded-xl p-6"
          >
            <p className="text-pink-300 text-lg mb-2">We've been together for</p>
            <p className="text-4xl md:text-5xl font-bold text-pink-100">
              {Math.floor((new Date().getTime() - new Date('2024-02-19').getTime()) / (1000 * 60 * 60 * 24))} Days
            </p>
            <p className="text-pink-300 text-lg mt-2">And counting... ♾️💕</p>
          </motion.div>

          {/* Proposal Mode (Optional) */}
          {!showProposal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 5.5 }}
              className="pt-8"
            >
              <button
                onClick={handleProposalClick}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all animate-pulse"
              >
                💍 One Last Question... 💍
              </button>
            </motion.div>
          )}

          {showProposal && !proposalAnswer && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="bg-gradient-to-br from-pink-800 to-red-800 rounded-3xl p-8 md:p-12 max-w-2xl text-center space-y-8 shadow-2xl border-4 border-pink-500"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="text-8xl">💍</div>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-pink-100">
                  Will You Be Mine Forever?
                </h2>

                <p className="text-2xl text-pink-200">
                  Through every Tom & Jerry fight, every late-night call, every moment...
                  I choose you. Always. 💕
                </p>

                <button
                  onClick={handleProposalYes}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-3xl px-16 py-6 rounded-full shadow-2xl transform hover:scale-110 transition-all"
                >
                  YES, FOREVER! 💖
                </button>
              </motion.div>
            </motion.div>
          )}

          {proposalAnswer && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            >
              <Confetti
                recycle={false}
                numberOfPieces={1000}
                gravity={0.2}
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 1 }}
                className="bg-gradient-to-br from-pink-800 to-red-800 rounded-3xl p-8 md:p-12 max-w-2xl text-center space-y-8 shadow-2xl border-4 border-yellow-400"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  <div className="text-9xl">🎉💖🎉</div>
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-bold text-yellow-300">
                  YOU SAID YES!
                </h2>

                <p className="text-3xl text-pink-100 font-bold">
                  Forever starts now, Meoww! 💍✨
                </p>

                <div className="space-y-4">
                  <p className="text-2xl text-pink-200">
                    You + Me = ♾️
                  </p>
                  <p className="text-xl text-pink-300 italic">
                    "No matter what happens, I choose you. You are my home."
                  </p>
                </div>

                <div className="text-6xl">💕 👫 💕</div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(190, 24, 93, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(236, 72, 153, 0.6);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(236, 72, 153, 0.8);
        }
      `}</style>
    </div>
  );
}