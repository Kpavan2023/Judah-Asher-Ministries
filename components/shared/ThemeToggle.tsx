'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const THEME_KEY = 'jcwmm-theme';
const THEME_EVENT = 'jcwmm-theme-change';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const getCurrentTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Read initial state
    getCurrentTheme();

    // Sync both navbar + mobile-menu toggles
    window.addEventListener(THEME_EVENT, getCurrentTheme);

    // Also sync between tabs/windows
    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_KEY) {
        getCurrentTheme();
      }
    };

    window.addEventListener('storage', handleStorage);

    return () => {
      window.removeEventListener(THEME_EVENT, getCurrentTheme);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const nextIsDark = !html.classList.contains('dark');

    html.classList.toggle('dark', nextIsDark);

    localStorage.setItem(
      THEME_KEY,
      nextIsDark ? 'dark' : 'light'
    );

    setIsDark(nextIsDark);

    // Tell the other ThemeToggle instance
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-yellow-400" />
      ) : (
        <Moon className="w-4 h-4 text-blue-300" />
      )}
    </button>
  );
}