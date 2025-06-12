
import React, { useRef, useEffect, useState } from 'react';
import { Camera, Hand } from 'lucide-react';

interface GestureDetectorProps {
  onCutGesture: () => void;
}

const GestureDetector: React.FC<GestureDetectorProps> = ({ onCutGesture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gestureDetected, setGestureDetected] = useState(false);

  useEffect(() => {
    let stream: MediaStream | null = null;

    const initCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 320, height: 240 }
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsLoaded(true);
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    // Simple gesture detection simulation
    const detectGestures = () => {
      // This is a simplified version - in a real implementation,
      // you would use MediaPipe hands here
      const canvas = canvasRef.current;
      const video = videoRef.current;
      
      if (canvas && video && video.videoWidth > 0) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          
          // Simulate gesture detection
          // In real implementation, this would analyze hand landmarks
          if (Math.random() < 0.02) { // 2% chance per frame to simulate cutting gesture
            setGestureDetected(true);
            onCutGesture();
            setTimeout(() => setGestureDetected(false), 1000);
          }
        }
      }
    };

    initCamera();

    const intervalId = setInterval(detectGestures, 100);

    return () => {
      clearInterval(intervalId);
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onCutGesture]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border-2 border-purple-300">
      <div className="flex items-center gap-2 mb-3">
        <Hand className={`h-5 w-5 ${gestureDetected ? 'text-green-500' : 'text-purple-500'}`} />
        <span className="text-sm font-medium">
          {gestureDetected ? 'Cutting Detected!' : 'Show cutting gesture'}
        </span>
      </div>
      
      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-48 h-36 rounded-lg border-2 border-gray-300 object-cover"
        />
        <canvas
          ref={canvasRef}
          width={320}
          height={240}
          className="hidden"
        />
        
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Loading camera...</p>
            </div>
          </div>
        )}
        
        {gestureDetected && (
          <div className="absolute inset-0 border-4 border-green-400 rounded-lg animate-pulse"></div>
        )}
      </div>
      
      <p className="text-xs text-gray-600 mt-2 text-center">
        Make a cutting motion with your hand
      </p>
    </div>
  );
};

export default GestureDetector;
