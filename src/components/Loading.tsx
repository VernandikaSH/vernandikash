// src/components/Loading.tsx
'use client';

import { useLayoutEffect, useState } from 'react';

const SPLASH_DURATION = 1000; // keep it short — the real page is right behind it
const FADE_DURATION = 300;
const SPLASH_SESSION_KEY = 'vsh:splash-shown';

export default function Loading() {
  const [isExiting, setIsExiting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // useLayoutEffect (not useEffect) so an already-seen-this-session bailout
  // happens before the browser paints — no one-frame flash of the skeleton.
  useLayoutEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SPLASH_SESSION_KEY) === '1';
    } catch {
      // sessionStorage can throw in some privacy modes — fail open and show the splash once.
    }

    if (alreadyShown) {
      // Already played this session (e.g. navigating back to "/" from a project
      // or certificate page via a #section link). Skip it entirely instead of
      // replaying the home-page skeleton over whatever section you're headed to.
      setIsLoading(false);
      return;
    }

    try {
      sessionStorage.setItem(SPLASH_SESSION_KEY, '1');
    } catch {
      // ignore — worst case the splash plays again next time
    }

    // Lock scrolling while the skeleton is up, so the header's scroll-triggered
    // "fixed" style and BackToTop's visibility can't flip on underneath it.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = previousOverflow;
    }, SPLASH_DURATION);

    const unmountTimer = setTimeout(
      () => setIsLoading(false),
      SPLASH_DURATION + FADE_DURATION
    );

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] overflow-hidden bg-white transition-opacity duration-300 dark:bg-dark ${
        isExiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      {/* Header placeholder — mirrors Header's logo / nav / toggle row */}
      <div className="container">
        <div className="flex items-center justify-between py-6">
          <div className="px-4">
            <div className="skeleton h-5 w-32 rounded-md" />
          </div>
          <div className="hidden items-center gap-8 px-4 lg:flex">
            {['home', 'about', 'portfolio', 'skills', 'contact'].map((item) => (
              <div key={item} className="skeleton h-3 w-16 rounded-md" />
            ))}
            <div className="skeleton h-6 w-12 rounded-full" />
          </div>
          <div className="px-4 lg:hidden">
            <div className="skeleton h-8 w-8 rounded-md" />
          </div>
        </div>
      </div>

      {/* Hero placeholder — mirrors HeroSection's text column + portrait */}
      <div className="container pt-16 md:pt-24">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <div className="skeleton h-4 w-36 rounded-md" />
            <div className="skeleton mt-4 h-9 w-full max-w-md rounded-md lg:h-12" />
            <div className="skeleton mt-5 h-5 w-full max-w-sm rounded-md" />
            <div className="skeleton mt-3 h-5 w-3/4 max-w-xs rounded-md" />
            <div className="skeleton mt-8 h-4 w-40 rounded-md" />
            <div className="skeleton mt-10 h-12 w-32 rounded-full" />
          </div>
          <div className="hidden w-full self-end px-4 lg:block lg:w-1/2">
            <div className="skeleton mx-auto aspect-square w-full max-w-[400px] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
