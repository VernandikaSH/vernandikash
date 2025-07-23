// src/components/Header.tsx
'use client'; // This directive makes it a Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Dark mode initialization
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
    setIsDarkMode(initialDarkMode);
    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Scroll event for fixed navbar and back-to-top
    const handleScroll = () => {
      const headerOffset = document.querySelector('header')?.offsetTop || 0;
      if (window.pageYOffset > headerOffset) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Click outside handler for hamburger menu
    const handleClickOutside = (e: MouseEvent) => {
      const hamburger = document.getElementById('hamburger');
      const navMenu = document.getElementById('nav-menu');

      if (hamburger && navMenu && !hamburger.contains(e.target as Node) && !navMenu.contains(e.target as Node)) {
        setIsHamburgerActive(false);
      }
    };
    window.addEventListener('click', handleClickOutside);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className={`bg-transparent absolute top-0 left-0 w-full flex items-center z-10 ${isNavbarFixed ? 'navbar-fixed' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href="/#home" className="font-bold text-lg text-primary block py-6">
              VernandikaSH
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className={`block absolute right-4 lg:hidden ${isHamburgerActive ? 'hamburger-active' : ''}`}
              onClick={toggleHamburger}
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav
              id="nav-menu"
              className={`${isHamburgerActive ? 'block' : 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark dark:shadow-slate-500 lg:dark:bg-transparent`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link href="/#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition-colors duration-300" onClick={() => setIsHamburgerActive(false)}>
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition-colors duration-300" onClick={() => setIsHamburgerActive(false)}>
                    About Me
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#portfolio" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition-colors duration-300" onClick={() => setIsHamburgerActive(false)}>
                    Portfolio
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#skills" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition-colors duration-300" onClick={() => setIsHamburgerActive(false)}>
                    Skills
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#sertificate" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition-colors duration-300" onClick={() => setIsHamburgerActive(false)}>
                    Sertificate
                  </Link>
                </li>
                <li className="group">
                  <Link href="/#contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary dark:text-white transition-colors duration-300" onClick={() => setIsHamburgerActive(false)}>
                    Contacts
                  </Link>
                </li>
                <li className="flex items-center pl-8 mt-3 lg:mt-0">
                  <div className="flex">
                    <span className="mr-2 text-sm text-slate-500">light</span>
                    <input
                      type="checkbox"
                      className="hidden"
                      id="dark-toggle"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                    />
                    <label htmlFor="dark-toggle">
                      <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                      </div>
                    </label>
                    <span className="ml-2 text-sm text-slate-500">dark</span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;