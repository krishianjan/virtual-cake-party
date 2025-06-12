
import React from 'react';

interface VirtualCakeProps {
  slices: number;
  onCut: () => void;
}

const VirtualCake: React.FC<VirtualCakeProps> = ({ slices, onCut }) => {
  const maxSlices = 8;
  const remainingSlices = Math.max(0, maxSlices - slices);

  return (
    <div className="relative">
      {/* Enhanced Cake Base */}
      <div className="relative w-48 h-36 bg-gradient-to-t from-amber-700 via-yellow-500 to-yellow-300 rounded-2xl shadow-2xl border-4 border-yellow-600 transform hover:scale-105 transition-all duration-300">
        {/* Premium Frosting Layers */}
        <div className="absolute -top-3 left-3 right-3 h-8 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-400 rounded-full border-3 border-pink-600 shadow-lg"></div>
        <div className="absolute -top-5 left-5 right-5 h-6 bg-gradient-to-r from-white via-pink-100 to-white rounded-full border-2 border-pink-300"></div>
        
        {/* Decorative Roses */}
        <div className="absolute top-2 left-6 text-pink-500 text-xl">🌹</div>
        <div className="absolute top-2 right-6 text-pink-500 text-xl">🌹</div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-pink-500 text-xl">🌹</div>
        
        {/* Enhanced Candles */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex gap-3">
          {[1, 2, 3, 4, 5].map((candle) => (
            <div key={candle} className="relative">
              <div className="w-2 h-8 bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm shadow-md border border-blue-700"></div>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-t from-orange-600 to-yellow-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Premium Slice indicators */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(maxSlices)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-700 ${
                  i < slices 
                    ? 'bg-transparent border-3 border-dashed border-yellow-800 animate-pulse' 
                    : 'bg-gradient-to-t from-yellow-700 to-yellow-500 shadow-inner'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Interactive Area */}
        <div 
          className="absolute inset-0 cursor-pointer hover:scale-110 transition-transform duration-200 rounded-2xl"
          onClick={onCut}
        />
        
        {/* Sparkle Effects */}
        <div className="absolute -top-2 -left-2 text-yellow-400 text-lg animate-spin">✨</div>
        <div className="absolute -top-2 -right-2 text-yellow-400 text-lg animate-spin" style={{animationDelay: '0.5s'}}>✨</div>
        <div className="absolute -bottom-2 -left-2 text-yellow-400 text-lg animate-spin" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute -bottom-2 -right-2 text-yellow-400 text-lg animate-spin" style={{animationDelay: '1.5s'}}>✨</div>
      </div>

      {/* Enhanced Cutting Animation */}
      {slices > 0 && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
          🔪
        </div>
      )}

      {/* Premium Slice Counter */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white via-yellow-50 to-white backdrop-blur-sm px-6 py-3 rounded-full border-3 border-yellow-500 shadow-2xl">
        <span className="text-lg font-bold bg-gradient-to-r from-yellow-700 to-orange-600 bg-clip-text text-transparent">
          {remainingSlices > 0 ? `${remainingSlices} slices left` : 'Happy Birthday! 🎂'}
        </span>
      </div>
    </div>
  );
};

export default VirtualCake;
