import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Puzzle } from 'lucide-react';
import picture from "../../assets/Pic.png";





interface PuzzleRevealProps {
  onNext: () => void;
}

export default function PuzzleReveal({ onNext }: PuzzleRevealProps) {
  const [pieces, setPieces] = useState<number[]>([]);
  const [selectedPieces, setSelectedPieces] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const totalPieces = 9;

  useEffect(() => {
    // Shuffle puzzle pieces
    const shuffled = Array.from({ length: totalPieces }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );
    setPieces(shuffled);
  }, []);

  const handlePieceClick = (index: number) => {
    if (selectedPieces.includes(index)) {
      setSelectedPieces(selectedPieces.filter((i) => i !== index));
    } else {
      const newSelected = [...selectedPieces, index];
      setSelectedPieces(newSelected);

      if (newSelected.length === totalPieces) {
        setIsComplete(true);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-pink-200 mb-8"
        >
          Complete Our Love Puzzle 🧩
        </motion.h2>

        {!isComplete ? (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center text-pink-300 text-xl mb-8"
            >
              Click the pieces in order to reveal our special message! 💕
            </motion.p>

            <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-2xl mx-auto mb-8">
              {pieces.map((piece, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: selectedPieces.includes(index) ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePieceClick(index)}
                  className={`aspect-square cursor-pointer rounded-xl overflow-hidden border-4 transition-all ${
                    selectedPieces.includes(index)
                      ? 'border-pink-500 opacity-100'
                      : 'border-pink-800 opacity-40 hover:opacity-70'
                  }`}
                >
                  <div
                    className="w-full h-full flex items-center justify-center text-white font-bold text-4xl"
                    style={{
                      background: `linear-gradient(135deg, #ec4899 ${
                        piece * 11
                      }%, #be185d ${piece * 11 + 50}%)`,
                    }}
                  >
                    {selectedPieces.includes(index) ? (
                      <Heart className="w-12 h-12 text-white fill-white animate-pulse" />
                    ) : (
                      <Puzzle className="w-12 h-12 text-white opacity-50" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center text-pink-300 text-lg">
              <p>
                Pieces selected: {selectedPieces.length} / {totalPieces}
              </p>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <div className="relative max-w-2xl mx-auto">
              <img
                src={picture}
                alt="Our Memory"
                className="w-full h-[600px] object-contain rounded-2xl shadow-2xl bg-black/20"
              />


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-2xl flex items-end justify-center p-8"
              >
                <div className="text-center space-y-4">
                  <Heart className="w-16 h-16 mx-auto text-pink-400 fill-pink-400 animate-pulse" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    We Complete Each Other! 💕
                  </h3>
                  <p className="text-xl text-pink-200">
                    Like pieces of a puzzle, we fit perfectly together
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-pink-800/50 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto"
            >
              <p className="text-2xl text-pink-100 font-semibold mb-4">
                "Every piece of you completes me" ✨
              </p>
              <p className="text-xl text-pink-200">
                From strangers to friends, from friends to lovers, and now...
                forever together! 💖
              </p>
            </motion.div>

            <button
              onClick={onNext}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
            >
              Continue 💖
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
