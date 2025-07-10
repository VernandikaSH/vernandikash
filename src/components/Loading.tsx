// src/components/Loading.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const totalDuration = 3000; // 3 seconds total
    const steps = 100; // Number of progress updates
    const intervalTime = totalDuration / steps; // Calculate interval

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + (100 / steps); // Equal increments
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Get message based on progress percentage
  const getProgressMessage = () => {
    if (progress < 25) return 'Starting up...';
    if (progress < 50) return 'Loading components...';
    if (progress < 75) return 'Almost There...';
    if (progress < 95) return 'Finalizing...';
    return 'Ready to go!';
  };

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-secondary z-50 backdrop-blur-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spinner with progress indicator */}
      <div className="relative">
        <div
          className={`animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-primary transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
          style={{
            borderTopColor: isHovered ? '#ff5b22' : '#fa6937',
            borderBottomColor: isHovered ? '#ff5b22' : '#fa6937',
          }}
        />

        {/* Progress percentage with 2 decimal places */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-200 font-bold text-lg">
            {progress.toFixed(2)}%
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 bg-gray-200 rounded-full h-2.5 mt-8">
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Interactive message that changes based on progress */}
      <p className="mt-4 text-gray-200 text-sm transition-opacity duration-300">
        {getProgressMessage()}
      </p>
    </div>
  );
} 