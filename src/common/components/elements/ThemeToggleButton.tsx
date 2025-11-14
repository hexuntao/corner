'use client';

import { useTheme } from 'next-themes';
import { useEffect } from 'react';

const ThemeToggleButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  // Add CSS animations for stars using useEffect to ensure client-side execution
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if style already exists to avoid duplication
      if (!document.getElementById('theme-toggle-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'theme-toggle-styles';
        styleSheet.textContent = `
          @keyframes star {
            50% {
              opacity: 0.25;
            }
          }
          .animate-star-1 {
            animation: star 2s infinite;
            animation-delay: 0s;
          }
          .animate-star-2 {
            animation: star 2s infinite;
            animation-delay: 0.5s;
          }
          .animate-star-3 {
            animation: star 2s infinite;
            animation-delay: 1s;
          }
        `;
        document.head.appendChild(styleSheet);
      }
    }
  }, []);

  return (
    <div className='flex'>
      <input
        checked={isDark}
        type='checkbox'
        className='mode-toggle sr-only'
        onChange={toggleTheme}
        id='switch-theme'
        data-umami-event={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
      />
      <label
        htmlFor='switch-theme'
        className='relative inline-block cursor-pointer rounded-full transition-all duration-150'
        style={{
          boxShadow: isDark ? 'none' : 'inset 0 0 2px rgba(0, 0, 0, 0.25)',
        }}
      >
        <svg
          width='45'
          height='25'
          viewBox='0 0 300 170'
          xmlns='http://www.w3.org/2000/svg'
          className='align-middle'
        >
          <defs>
            <linearGradient id='bg-night'>
              <stop
                offset='0%'
                stopColor={isDark ? '#173754' : '#93d4cc'}
                className='transition-all duration-150'
              />
              <stop
                offset='100%'
                stopColor={isDark ? '#388296' : '#c7dfc3'}
                className='transition-all duration-150'
              />
            </linearGradient>
            <filter id='glow'>
              <feDropShadow
                dx='0'
                dy='0'
                stdDeviation='8'
                floodColor='#ffffff'
                floodOpacity='0.75'
              />
            </filter>
            <filter id='glow-mini'>
              <feDropShadow
                dx='0'
                dy='0'
                stdDeviation='0.5'
                floodColor='#ffffff'
                floodOpacity='0.5'
              />
            </filter>
          </defs>
          <rect
            width='300'
            height='170'
            rx='90'
            ry='90'
            fill='url(#bg-night)'
          />
          <circle
            cx='0'
            cy='0'
            r='70'
            fill={isDark ? '#ffffff' : '#f7f7e7'}
            style={{
              filter: 'url(#glow)',
              transform: `translate(${isDark ? '30%' : '70%'}, 50%)`,
            }}
            className='duration-250 transition-all'
          />
          <g
            className='duration-50 transition-all'
            style={{ transform: isDark ? 'translateX(0)' : 'translateX(100%)' }}
          >
            <circle
              cx='190'
              cy='50'
              r='4'
              fill='#ffffff'
              style={{ filter: 'url(#glow-mini)' }}
              className={isDark ? 'animate-star-1' : ''}
            />
            <circle
              cx='250'
              cy='70'
              r='4'
              fill='#ffffff'
              style={{ filter: 'url(#glow-mini)' }}
              className={isDark ? 'animate-star-2' : ''}
            />
            <circle
              cx='220'
              cy='130'
              r='6'
              fill='#ffffff'
              style={{ filter: 'url(#glow-mini)' }}
              className={isDark ? 'animate-star-3' : ''}
            />
          </g>
        </svg>
      </label>
    </div>
  );
};

export default ThemeToggleButton;
