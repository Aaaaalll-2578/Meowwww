import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';
//import { Dialog, DialogContent } from '@/app/components/ui/dialog';

interface PhotoGalleryProps {
  onNext: () => void;
}

const photos = [
  {
    url: 'photos/1.jpg',
    message: 'Remember when we first met? Your smile lit up my world 💕',
  },
  {
    url: 'photos/2.jpg',
    message: 'Holding your hand feels like home 🏡❤️',
  },
  {
    url: 'photos/3.jpg',
    message: 'Your laugh is my favorite sound 😄💖',
  },
  {
    url: 'photos/4.jpg',
    message: 'In your arms, I found my safe place 🤗💕',
  },
  {
    url: 'photos/5.jpg',
    message: 'Every moment with you is a celebration 🎈❤️',
  },
  {
    url: 'photos/6.jpg',
    message: 'Late night dates and endless talks... perfect! 🌙✨',
  },
];

export default function PhotoGallery({ onNext }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-pink-200 mb-8"
        >
          Our Beautiful Memories 📸
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-pink-300 text-xl mb-12"
        >
          Click on any photo to see a special message 💕
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative cursor-pointer group"
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={photo.url}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <Heart className="text-white fill-white w-8 h-8 animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Continue 💖
          </button>
        </motion.div>

        {/* Photo Dialog */}
        <AnimatePresence>
  {selectedPhoto !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      onClick={() => setSelectedPhoto(null)}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-pink-900 to-red-900 rounded-2xl max-w-2xl w-full p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[selectedPhoto].url}
          alt="Selected memory"
          className="w-full max-h-[70vh] object-contain rounded-xl mb-4"
        />

        <div className="bg-pink-800/50 rounded-xl p-4 text-center">
          <Heart className="w-10 h-10 mx-auto mb-2 text-pink-300 fill-pink-300 animate-pulse" />
          <p className="text-xl text-pink-100 font-semibold">
            {photos[selectedPhoto].message}
          </p>
        </div>

        <button
          onClick={() => setSelectedPhoto(null)}
          className="absolute top-4 right-4 text-white hover:text-pink-300"
        >
          <X size={28} />
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </div>
  );
}
