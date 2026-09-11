// src/components/Loading.tsx
'use client';

import { useEffect, useState } from 'react';

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while the splash is up, so the header's scroll-triggered
    // "fixed" style and BackToTop's visibility can't flip on underneath it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const totalDuration = 2600; // ~2.6 seconds total
    const steps = 100;
    const intervalTime = totalDuration / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          document.body.style.overflow = previousOverflow;
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 100 / steps;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center gap-6 bg-dark transition-opacity duration-500 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex h-40 w-40 items-center justify-center">
        <div className="blob-morph absolute inset-0 bg-primary" />
        <span className="relative z-10 text-2xl font-bold tracking-wide text-white">VSH</span>
      </div>

      <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm font-medium tracking-widest text-white/50 uppercase">
        Loading {Math.min(Math.round(progress), 100)}%
      </p>
    </div>
  );
}
