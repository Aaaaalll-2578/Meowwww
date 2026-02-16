# 💕 Valentine's Day Website for Gokulnathan

A romantic, interactive Valentine's Day website created with love! 

## ✨ Features

- 🎵 **Background Music** with Lyrics Display
- 💕 **Floating Hearts** Animation
- ⏰ **Countdown Timer** to Valentine's Day 2025
- 💖 **Will You Be My Valentine** - Interactive question with funny "no" responses
- 📸 **Photo Gallery** with popup messages
- 🎁 **Love Reasons Jar** - 25+ reasons why I love you
- 📅 **Love Timeline** - Our journey from 2016 to forever
- 💌 **Secret Letter** - Heartfelt letter unlocked after saying YES
- 🎮 **Mini Quiz** - How well do you know us?
- 🐱 **Virtual Pet** - Feed it love and watch it grow
- 🏎️ **Car Racing Game** - Collect love messages and win my heart!
- 🧩 **Puzzle Reveal** - Complete the puzzle to see our message
- 🎬 **End Credits** - Movie-style ending
- 📱 **Fully Responsive** - Works on desktop and mobile
- 🎨 **Red & Pink Theme** - Romantic Valentine's color scheme

## 🎵 Customizing Music

To add your own romantic song:

1. Upload your song file to a hosting service (like Dropbox, Google Drive with public link, or any audio hosting)
2. In `/src/app/components/BackgroundMusic.tsx`, replace the URL on line 27:
   ```typescript
   audioRef.current = new Audio('YOUR_SONG_URL_HERE.mp3');
   ```
3. Update the lyrics array (lines 5-13) with your song's lyrics

## 📸 Customizing Photos

To add your own photos:

1. In `/src/app/components/PhotoGallery.tsx`, replace the Unsplash URLs with your own photos
2. Update the messages for each photo
3. You can add more photos by adding more objects to the `photos` array

Example:
```typescript
const photos = [
  {
    url: 'YOUR_PHOTO_URL_HERE',
    message: 'Your custom message here 💕',
  },
  // Add more photos...
];
```

## 🎮 Game Controls

**Car Racing Game:**
- Desktop: Use Arrow Keys (← →) to move
- Mobile: Swipe left/right to move
- Goal: Reach 200 points to "win my heart"!

## 💝 Story Customization

The story is currently set for Gokulnathan. To customize for someone else:

1. Update names in `/src/app/components/LandingPage.tsx`
2. Update the timeline in `/src/app/components/LoveTimeline.tsx`
3. Update the letter in `/src/app/components/SecretLetter.tsx`
4. Update the quiz questions in `/src/app/components/MiniQuiz.tsx`
5. Update love reasons in `/src/app/components/LoveReasons.tsx`

## 🚀 Running the Website

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 📝 Note

**Music Note:** The current music URL is a placeholder. Please replace it with your own romantic song for the best experience!

**Photos Note:** The current photos are placeholder images from Unsplash. Replace them with your real couple photos for a more personal touch!

## 💖 Made With Love

Created with:
- React 18
- Motion (Framer Motion) for animations
- Tailwind CSS v4 for styling
- Lucide React for icons
- Canvas Confetti & React Confetti for celebrations

---

**Happy Valentine's Day, Meoww! 💕**

*From your Tom (or Jerry? 😄)*
