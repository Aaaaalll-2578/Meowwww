import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Check, X } from 'lucide-react';

interface MiniQuizProps {
  onNext: () => void;
}

const questions = [
  {
    question: 'Where did we first meet?',
    options: ['Coffee Shop', 'SBOA School', 'College Library', 'Park'],
    correct: 1,
    funnyWrong: "Nice try, but we've known each other since 6th standard! 😄",
  },
  {
    question: 'When did we meet again at college?',
    options: [
      'October 10, 2022',
      'December 15, 2022',
      'November 15, 2023',
      'November 15, 2022',
    ],
    correct: 3,
    funnyWrong: 'Aww, Meoww! It was November 15, 2022! 📅',
  },
  {
    question: 'My Favorite color?',
    options: [
      'Yellow',
      'Red',
      'Green',
      'Purple',
    ],
    correct: 3,
    funnyWrong: 'Aww, Meoww! It is Purple',
  },
  {
    question: 'First time car ride date?',
    options: [
      '12 April',
      '12 March',
      '22 Februray',
      '23 April',
    ],
    correct: 0,
    funnyWrong: 'Aww, Meoww! It is 12th april...You owe me a kiss',
  },
  {
    question: 'When did you propose?',
    options: [
      'February 14, 2024',
      'February 17, 2024',
      'February 19, 2024',
      'March 1, 2024',
    ],
    correct: 1,
    funnyWrong: 'February 17, 2024 - how could you forget! 😜',
  },
  {
    question: 'Worst day - Rain moment eppo?',
    options: [
      '5 June',
      '10 June',
      '10 May',
      '5 April',
    ],
    correct: 1,
    funnyWrong: 'Aww, Meoww! It is 10 June...How could you forget the worst day in your life..',
  },
  {
    question: "What's our relationship dynamic?",
    options: [
      'Romeo & Juliet',
      'Tom & Jerry',
      'Mickey & Minnie',
      'Bonnie & Clyde',
    ],
    correct: 1,
    funnyWrong: 'We fight and love like Tom & Jerry! 🐱🐭',
  },
  {
    question: 'How late do our calls go?',
    options: ['12 AM', '1 AM', '2 AM', '3 AM'],
    correct: 3,
    funnyWrong: 'Till 3 in the morning, Meoww! Those were the best! 🌙',
  },
];

export default function MiniQuiz({ onNext }: MiniQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowResult(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizComplete(true);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-pink-200 mb-8"
        >
          How Well Do You Know Us? 💕
        </motion.h2>

        {!quizComplete ? (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-pink-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <div className="mb-6 text-center">
              <p className="text-pink-300 text-lg mb-2">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <div className="flex justify-center gap-2">
                {Array.from({ length: questions.length }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-12 h-2 rounded-full ${
                      index <= currentQuestion ? 'bg-pink-500' : 'bg-pink-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl text-pink-100 font-bold mb-8 text-center">
              {questions[currentQuestion].question}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: selectedAnswer === null ? 1.05 : 1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => selectedAnswer === null && handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`p-4 rounded-xl text-lg font-semibold transition-all ${
                    selectedAnswer === null
                      ? 'bg-pink-700 hover:bg-pink-600 text-white'
                      : selectedAnswer === index
                      ? index === questions[currentQuestion].correct
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                      : 'bg-pink-900/50 text-pink-300'
                  } ${selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && selectedAnswer === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        {index === questions[currentQuestion].correct ? (
                          <Check className="w-6 h-6" />
                        ) : (
                          <X className="w-6 h-6" />
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              ))}
            </div>

            <AnimatePresence>
              {showResult && selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-center"
                >
                  {selectedAnswer === questions[currentQuestion].correct ? (
                    <div className="bg-green-600/30 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-green-200 text-xl font-semibold">
                        Correct! You know us so well! 💕
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-600/30 backdrop-blur-sm rounded-xl p-4">
                      <p className="text-red-200 text-xl font-semibold">
                        {questions[currentQuestion].funnyWrong}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-pink-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl text-center space-y-6"
          >
            <Heart className="w-20 h-20 mx-auto text-pink-300 fill-pink-300 animate-pulse" />
            <h3 className="text-3xl md:text-4xl font-bold text-pink-100">
              Quiz Complete! 🎉
            </h3>
            <p className="text-2xl text-pink-200">
              Your Score: {score} / {questions.length}
            </p>
            <p className="text-xl text-pink-300">
              {score === questions.length
                ? "Perfect! You know us inside out! You're the best! 💖"
                : score >= questions.length / 2
                ? 'Not bad, Meoww! But you could know us better! 😊'
                : 'Aww, we need to make more memories together! 💕'}
            </p>
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
