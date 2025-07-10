// src/components/BackToTop.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > (document.querySelector('header')?.offsetTop || 0)) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      href="#home"
      id="to-top"
      className={`${isVisible ? 'flex' : 'hidden'} fixed justify-center items-center z-[9999] bottom-4 p-4 right-4 h-14 w-14 bg-primary rounded-full hover:animate-pulse`}
    >
      <span className="block w-5 h-5 border-t-2 border-l-2 rotate-45 mt-2"></span>
    </Link>
  );
};

export default BackToTop;