import { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Unlock, Heart } from 'lucide-react';

interface SecretLetterProps {
  hasAnsweredYes: boolean;
  onNext: () => void;
}

export default function SecretLetter({ hasAnsweredYes, onNext }: SecretLetterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    if (hasAnsweredYes) {
      setIsOpen(true);
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
          A Secret Letter 💌
        </motion.h2>

        {!hasAnsweredYes ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-6"
          >
            <Lock className="w-24 h-24 mx-auto text-pink-400 animate-pulse" />
            <p className="text-2xl text-pink-300">
              This letter is locked. Complete your journey to unlock it! 🔒
            </p>
          </motion.div>
        ) : (
          <div className="space-y-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto w-full max-w-2xl cursor-pointer"
              onClick={handleOpenLetter}
              style={{ perspective: '1000px' }}
            >
              {!isOpen ? (
                <div className="bg-gradient-to-br from-pink-700 to-red-700 rounded-2xl p-8 shadow-2xl text-center">
                  <Unlock className="w-16 h-16 mx-auto mb-4 text-pink-200 animate-bounce" />
                  <p className="text-2xl text-pink-100 font-semibold">
                    Click to open the envelope 💕
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-pink-100 rounded-2xl p-8 md:p-12 shadow-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="space-y-6 text-gray-800">
                    <div className="text-center mb-6">
                      <Heart className="w-12 h-12 mx-auto text-red-600 fill-red-600 mb-4" />
                      <h3 className="text-3xl font-bold text-red-800 mb-2">
                        To My Dearest Meoww 💕
                      </h3>
                      <p className="text-lg text-gray-600 italic">
                        My Gokulnathan, My Everything
                      </p>
                    </div>

                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        From the moment we met in 6th standard at SBOA, I never imagined
                        that years later, you would become the most important person in my life.
                      </p>

                      <p>
                        When we met again at Velammal Engineering College on December 15, 2022,
                        something magical happened. Those late-night calls till 3 AM, those endless
                        conversations - they weren't just friendly chats. My heart was slowly but
                        surely falling for you.
                      </p>

                      <p> மூன்று மணி வரை பேசின அந்த இரவுகள்,  
                          இன்று என் இதயத்தில் நிலவுகள்.  
                          தூக்கம் வராத நேரங்களில் கூட,  
                          உன் நினைவு மட்டும் தூங்கவில்லை.
                      </p>
                      
                      <p>
                        February 17, 2024 - the day you proposed. My heart raced, my mind spun,
                        but deep down, I already knew. Two days later, on February 19, 2024,
                        I said YES, and it was the best decision of my life.
                      </p>

                      <p>
                        I love your smile - the way it lights up my darkest days. I love your
                        eyes - how I can get lost in them forever. I love your caring nature -
                        the way you make everyone feel special, especially me.
                      </p>

                      <p>
                        Remember the scooty fight? We were both so upset, but you came to meet me
                        when I needed you most. That's when I realized you're not just my boyfriend,
                        you're my home.
                      </p>
                      

                      <p>
                        We're like Tom and Jerry - always fighting, always teasing, but always
                        loving. You fix our fights with patience and understanding. Your presence,
                        your touch, your romance - everything about you makes my life complete.
                      </p>

                      <p>
                        Those small moments mean everything to me: the late-night texts, the way
                        you look at me, the way you care. Each moment with you is a treasure.
                      </p>

                      <p>
                        My dream is simple yet beautiful - to travel with you at night, to grow
                        old together, to live a life filled with endless love and laughter.
                        I want to explore the world with you, create countless memories, and
                        build our forever.
                      </p>
                      <p> </p>

                      <p className="font-bold text-xl text-red-700">
                        No matter what happens, no matter what challenges we face, I choose you.
                        Today, tomorrow, and always. You are my home, my safe place, my everything.
                      </p>

                      <p className="text-center text-2xl font-bold text-red-800 mt-8">
                        Happy 2nd Love Anniversary, Meoww! 💖
                      </p>

                      <p className="text-center italic text-gray-600">
                        Forever yours,<br />
                        Your Pei 👻.. Tom (or Jerry? 😄)
                      </p>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                      <Heart className="text-red-600 fill-red-600 animate-pulse" />
                      <Heart className="text-pink-600 fill-pink-600 animate-pulse" />
                      <Heart className="text-red-600 fill-red-600 animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <button
                  onClick={onNext}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
                >
                  Continue 💖
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
