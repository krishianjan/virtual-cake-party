
import React, { useState, useRef, useEffect } from 'react';
import { Camera, Users, Cake, Sparkles, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import GestureDetector from './GestureDetector';
import VirtualCake from './VirtualCake';
import PartyGuest from './PartyGuest';
import CelebrationEffects from './CelebrationEffects';

interface Guest {
  id: string;
  name: string;
  character: string;
  position: { x: number; y: number };
}

const PartyRoom = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [newGuestName, setNewGuestName] = useState('');
  const [cakeSlices, setCakeSlices] = useState(0);
  const [isGestureMode, setIsGestureMode] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const characters = ['🎂', '🎉', '🎈', '🎁', '🥳', '🎊', '🍰', '🎭', '👑', '🦄', '🌟', '💎'];

  const addGuest = () => {
    if (newGuestName.trim()) {
      const newGuest: Guest = {
        id: Date.now().toString(),
        name: newGuestName.trim(),
        character: characters[Math.floor(Math.random() * characters.length)],
        position: {
          x: Math.random() * 60 + 20,
          y: Math.random() * 40 + 30
        }
      };
      setGuests([...guests, newGuest]);
      setNewGuestName('');
    }
  };

  const handleCakeCut = () => {
    setCakeSlices(prev => prev + 1);
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-yellow-700 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-pink-500/20 to-yellow-400/20"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_var(--tw-gradient-stops))] from-transparent via-white/5 to-transparent animate-spin" style={{animationDuration: '20s'}}></div>

      {/* Celebration Effects */}
      <CelebrationEffects show={showCelebration} />

      {/* Enhanced Header */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Crown className="h-12 w-12 text-yellow-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
              Virtual Birthday Place
            </h1>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
            <Users className="h-6 w-6 text-pink-300" />
            <span className="text-xl font-bold text-white">{guests.length} VIP Guests</span>
          </div>
        </div>

        {/* Premium Add Guest Section */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
          <div className="flex gap-4">
            <Input
              placeholder="Add a VIP guest name..."
              value={newGuestName}
              onChange={(e) => setNewGuestName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addGuest()}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder-pink-300 text-lg h-12"
            />
            <Button 
              onClick={addGuest} 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold px-8 h-12 shadow-lg"
            >
              Add VIP Guest
            </Button>
          </div>
        </Card>

        {/* Premium Gesture Control */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl border-2 border-purple-300/30 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Camera className="h-8 w-8 text-purple-300 animate-pulse" />
              <span className="text-xl font-bold text-white">AI Hand Gesture Magic</span>
            </div>
            <Button
              onClick={() => setIsGestureMode(!isGestureMode)}
              variant={isGestureMode ? "default" : "outline"}
              className={`px-8 py-3 text-lg font-bold ${
                isGestureMode 
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white" 
                  : "bg-white/20 border-white/30 text-white hover:bg-white/30"
              }`}
            >
              {isGestureMode ? '🟢 Active' : '⚪ Start'} Magic
            </Button>
          </div>
        </Card>
      </div>

      {/* Enhanced Party Room */}
      <div className="relative mx-8 h-[500px] bg-gradient-to-b from-sky-300/30 via-pink-200/30 to-yellow-200/30 rounded-3xl border-4 border-yellow-400/50 overflow-hidden backdrop-blur-sm shadow-2xl">
        {/* Premium Room Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-green-300/20">
          {/* Marble floor pattern */}
          <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-amber-200/40 to-transparent"></div>
          {/* Ceiling chandelier effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-b from-yellow-300/30 to-transparent rounded-b-full"></div>
        </div>

        {/* Enhanced Guests */}
        {guests.map((guest) => (
          <PartyGuest key={guest.id} guest={guest} />
        ))}

        {/* Premium Virtual Cake */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 scale-170">
          <VirtualCake slices={cakeSlices} onCut={handleCakeCut} />
        </div>

        {/* Premium Decorations */}
        <div className="absolute top-6 left-6 text-5xl animate-bounce">🎈</div>
        <div className="absolute top-6 right-6 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🎈</div>
        <div className="absolute top-16 left-1/4 text-4xl animate-pulse">✨</div>
        <div className="absolute top-16 right-1/4 text-4xl animate-pulse" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute top-6 left-1/3 text-3xl animate-spin">🎊</div>
        <div className="absolute top-6 right-1/3 text-3xl animate-spin" style={{animationDelay: '0.7s'}}>🎊</div>
        
        {/* Floating decorations */}
        <div className="absolute top-20 left-1/6 text-2xl animate-ping">🌟</div>
        <div className="absolute top-20 right-1/6 text-2xl animate-ping" style={{animationDelay: '1.5s'}}>🌟</div>
      </div>

      {/* Enhanced Gesture Detector */}
      {isGestureMode && (
        <div className="fixed bottom-6 right-6 z-40">
          <GestureDetector onCutGesture={handleCakeCut} />
        </div>
      )}

      {/* Premium Stats */}
      <div className="p-8">
        <Card className="p-6 bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-red-400/20 backdrop-blur-xl border-2 border-yellow-400/50 shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
              <span className="text-2xl font-bold text-white">Cake Magic Counter:</span>
            </div>
            <span className="text-4xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              {cakeSlices} 🍰
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PartyRoom;
