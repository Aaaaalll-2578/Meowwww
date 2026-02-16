import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import LandingPage from '@/app/components/LandingPage';
import ValentineQuestion from '@/app/components/ValentineQuestion';
import PhotoGallery from '@/app/components/PhotoGallery';
import LoveReasons from '@/app/components/LoveReasons';
import LoveTimeline from '@/app/components/LoveTimeline';
import SecretLetter from '@/app/components/SecretLetter';
import MiniQuiz from '@/app/components/MiniQuiz';
import VirtualPet from '@/app/components/VirtualPet';
import CarRaceGame from '@/app/components/CarRaceGame';
import PuzzleReveal from '@/app/components/PuzzleReveal';
import EndCredits from '@/app/components/EndCredits';
import FloatingHearts from '@/app/components/FloatingHearts';
import BackgroundMusic from '@/app/components/BackgroundMusic';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasAnsweredYes, setHasAnsweredYes] = useState(false);

  const pages = [
    'landing',
    'valentine-question',
    'photo-gallery',
    'love-reasons',
    'timeline',
    'secret-letter',
    'quiz',
    'virtual-pet',
    'car-race',
    'puzzle',
    'end-credits',
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAnswerYes = () => {
    setHasAnsweredYes(true);
    handleNext();
  };

  const renderPage = () => {
    switch (pages[currentPage]) {
      case 'landing':
        return <LandingPage onStart={handleNext} />;
      case 'valentine-question':
        return <ValentineQuestion onYes={handleAnswerYes} />;
      case 'photo-gallery':
        return <PhotoGallery onNext={handleNext} />;
      case 'love-reasons':
        return <LoveReasons onNext={handleNext} />;
      case 'timeline':
        return <LoveTimeline onNext={handleNext} />;
      case 'secret-letter':
        return <SecretLetter hasAnsweredYes={hasAnsweredYes} onNext={handleNext} />;
      case 'quiz':
        return <MiniQuiz onNext={handleNext} />;
      case 'virtual-pet':
        return <VirtualPet onNext={handleNext} />;
      case 'car-race':
        return <CarRaceGame onNext={handleNext} />;
      case 'puzzle':
        return <PuzzleReveal onNext={handleNext} />;
      case 'end-credits':
        return <EndCredits />;
      default:
        return <LandingPage onStart={handleNext} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-950 via-pink-900 to-red-900 overflow-hidden">
      <FloatingHearts />
      <BackgroundMusic />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentPage
                ? 'bg-pink-500 w-8'
                : 'bg-pink-300 opacity-50 hover:opacity-100'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
