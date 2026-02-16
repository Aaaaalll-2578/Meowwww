import { motion } from 'motion/react';
import { Calendar, Heart, MessageCircle, Sparkles } from 'lucide-react';

interface LoveTimelineProps {
  onNext: () => void;
}

const timelineEvents = [
  {
    date: '2016',
    title: 'Where It All Began 📚',
    description: 'We met in 6th standard at SBOA School and Junior College. Little did we know...',
    icon: '🏫',
  },
  {
    date: 'December 15, 2022',
    title: 'College💫',
    description: 'We met again at Velammal Engineering College in different departments. Fate brought us together!',
    icon: '🎓',
  },
  {
    date: 'Late 2022 - Early 2023',
    title: 'Best Friends Era 👫',
    description: 'Late-night calls till 3 AM, endless texts, growing feelings... I wasn\'t sure yet, but my heart knew.',
    icon: '🌙',
  },
  {
    date: 'February 17, 2024',
    title: 'The Big Question 💕',
    description: 'You proposed! My heart skipped a beat. I needed time to process this beautiful moment.',
    icon: '💖',
  },
  {
    date: 'February 19, 2024',
    title: 'I Said YES! 🎉',
    description: 'The day I officially became yours and you became mine forever.... Best decision ever!',
    icon: '✨',
  },
  {
    date: 'The Scooty Incident 🛵',
    title: 'When You Showed Up 😭',
    description: 'We had a huge fight about a scooty. I was so sad, and you came to meet me. That\'s when I knew you truly cared.',
    icon: '❤️',
  },
  {
    date: '2024',
    title: 'Tom & Jerry Love 🐱🐭',
    description: 'Fighting, laughing, loving. We\'re a perfect mix of chaos and love. You fix every fight with patience.',
    icon: '💕',
  },
  {
    date: 'Today - February 14, 2026',
    title: 'Still Going Strong 💪',
    description: 'Celebrating our 2nd love anniversary! Every day with you is a new adventure. You are my home.',
    icon: '🏡',
  },
  {
    date: 'Forever ♾️',
    title: 'Our Future 🌟',
    description: 'Traveling at night, growing together, living a life filled with endless love. No matter what happens, I choose you.',
    icon: '✨',
  },
];

export default function LoveTimeline({ onNext }: LoveTimelineProps) {
  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-pink-200 mb-4"
        >
          Our Love Journey 💕
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-pink-300 text-xl mb-12"
        >
          From friends to soulmates, here's our beautiful story...
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-red-500 to-pink-500 transform md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="flex items-center gap-4 md:gap-0">
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className={`absolute left-4 md:left-1/2 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-3xl shadow-2xl border-4 border-pink-900 transform md:-translate-x-1/2 z-10`}
                >
                  {event.icon}
                </motion.div>

                {/* Content */}
                <div
                  className={`ml-24 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  } bg-pink-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-5 h-5 text-pink-300" />
                    <p className="text-pink-300 font-semibold">{event.date}</p>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-100 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-pink-200 text-lg">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400 fill-pink-400 animate-pulse" />
          <p className="text-2xl text-pink-200 italic mb-8">
            "No matter what happens, I choose you. You are my home." 💕
          </p>
          <button
            onClick={onNext}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold text-xl px-10 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all"
          >
            Continue 💖
          </button>
        </motion.div>
      </div>
    </div>
  );
}
