import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function FloatingHearts() {
  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
        >
          <Heart
            className="text-pink-500 fill-pink-500"
            size={Math.random() * 30 + 20}
          />
        </motion.div>
      ))}
    </div>
  );
}
