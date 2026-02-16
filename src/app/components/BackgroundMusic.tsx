import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const lyrics = [
  { time: 0, text: "🎵 எத்தனை ஆண்கள் கடந்து வந்தேன் எவனையும் பிடிக்கவில்லை இருபது வருடம் உன்னைப்போல் எவனும் என்னையும் மயக்கவில்லை 🎵" },
  { time: 10, text: "💕 There's not a thing that I would change 💕" },
  { time: 15, text: "✨ 'Cause you're amazing... ✨" },
  { time: 20, text: "❤️ Just the way you are ❤️" },
  { time: 25, text: "🌟 And when you smile... 🌟" },
  { time: 30, text: "💖 The whole world stops and stares for a while 💖" },
  { time: 35, text: "💝 ஒரு முறை பார்த்தால் பல முறை இனிக்கிற என்ன விசித்திரமோ நண்பனே எனக்கு காதலன் ஆனால் அது தான் சரித்திரமோ 💝" },
];

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);
  const [currentLyric, setCurrentLyric] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<number | null>(null);


  useEffect(() => {
    // Create audio element with a romantic song URL (you can replace this)
    // Using a royalty-free romantic music URL
    audioRef.current = new Audio('/song.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Try to autoplay
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          startLyrics();
        })
        .catch((error) => {
          console.log('Autoplay prevented:', error);
          setIsPlaying(false);
        });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startLyrics = () => {
    let lyricIndex = 0;
    intervalRef.current = setInterval(() => {
      if (lyricIndex < lyrics.length) {
        setCurrentLyric(lyricIndex);
        lyricIndex++;
      } else {
        lyricIndex = 0;
      }
    }, 5000); // Change lyric every 5 seconds
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        startLyrics();
      }
    }
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Toggle music"
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>

      <button
        onClick={() => setShowLyrics(!showLyrics)}
        className="fixed top-4 right-20 z-50 bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Toggle lyrics"
      >
        <Music size={24} />
      </button>

      {/* Lyrics Display */}
<AnimatePresence>
  {showLyrics && isPlaying && (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="
        fixed md:static
        bottom-4 md:bottom-auto
        left-4 md:left-auto
        right-4 md:right-0
        z-40
        md:w-80
        w-auto
        bg-pink-900/80
        backdrop-blur-md
        rounded-2xl
        p-4 md:p-6
        shadow-2xl
        mx-auto
      "
    >
      <motion.p
        key={currentLyric}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="text-lg md:text-xl text-pink-100 font-semibold break-words leading-relaxed text-center md:text-left"
      >
        {lyrics[currentLyric].text}
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>

    </>
  );
}