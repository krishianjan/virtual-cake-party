
import React from 'react';

interface Guest {
  id: string;
  name: string;
  character: string;
  position: { x: number; y: number };
}

interface PartyGuestProps {
  guest: Guest;
}

const PartyGuest: React.FC<PartyGuestProps> = ({ guest }) => {
  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-bounce cursor-pointer"
      style={{
        left: `${guest.position.x}%`,
        top: `${guest.position.y}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: '3s'
      }}
    >
      <div className="text-center relative group">
        {/*  with premium glow effect */}
        <div className="text-7xl mb-3 hover:scale-125 transition-all duration-300 cursor-pointer relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/50 to-purple-500/50 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <span className="relative z-10 drop-shadow-2xl">{guest.character}</span>
        </div>
        
        {/* Premium name tag */}
        <div className="bg-gradient-to-r from-white/80 via-pink-100/80 to-white/80 backdrop-blur-md px-4 py-2 rounded-full border-2 border-pink-400/50 shadow-2xl group-hover:scale-110 transition-all duration-300">
          <span className="text-sm font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
            {guest.name}
          </span>
        </div>
        
        {/* Sparkle effects around guest */}
        <div className="absolute -top-2 -left-2 text-yellow-400 text-lg animate-ping opacity-70">✨</div>
        <div className="absolute -top-2 -right-2 text-pink-400 text-lg animate-ping opacity-70" style={{animationDelay: '0.5s'}}>💫</div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-purple-400 text-lg animate-pulse opacity-70" style={{animationDelay: '1s'}}>⭐</div>
      </div>
    </div>
  );
};

export default PartyGuest;
