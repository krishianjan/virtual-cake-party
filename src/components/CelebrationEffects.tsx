
import React from 'react';

interface CelebrationEffectsProps {
  show: boolean;
}

const CelebrationEffects: React.FC<CelebrationEffectsProps> = ({ show }) => {
  if (!show) return null;

  const symbols = ['🎉', '🎊', '🎈', '🎁', '🎂', '🍰', '🥳', '⭐', '✨', '🌟', '💫', '🎀', '🎭', '🎪'];
  const happyBirthdayText = 'HAPPY BIRTHDAY !';

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Happy Birthday Text Explosion */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
          {happyBirthdayText}
        </div>
        <div className="text-2xl md:text-4xl text-center mt-4 font-bold text-yellow-500 animate-bounce">
          🎂 Make a wish! 🎂
        </div>
      </div>

      {/* Symbol Shower */}
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            fontSize: `${20 + Math.random() * 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        >
          {symbols[Math.floor(Math.random() * symbols.length)]}
        </div>
      ))}

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-red-500 animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            fontSize: '30px'
          }}
        >
          💖
        </div>
      ))}

      {/* Shooting Stars */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute text-yellow-400 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            fontSize: '40px'
          }}
        >
          ⭐
        </div>
      ))}

      {/* Fireworks Effect */}
      <div className="absolute top-10 left-10 text-6xl animate-spin">🎆</div>
      <div className="absolute top-10 right-10 text-6xl animate-spin" style={{animationDelay: '0.5s'}}>🎆</div>
      <div className="absolute bottom-10 left-10 text-6xl animate-spin" style={{animationDelay: '1s'}}>🎆</div>
      <div className="absolute bottom-10 right-10 text-6xl animate-spin" style={{animationDelay: '1.5s'}}>🎆</div>
    </div>
  );
};

export default CelebrationEffects;
