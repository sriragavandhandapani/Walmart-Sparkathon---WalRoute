"use client";

import { useState, useEffect, useRef } from 'react';

export function ScrollProgressBeam() {
  // Use a string for height to support both '%' and 'rem'
  const [height, setHeight] = useState('2rem');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      
      // Set height based on scroll progress
      setHeight(`${progress}%`);

      // Clear the previous timeout if it exists
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set a new timeout to shrink the beam after scrolling stops
      timeoutRef.current = setTimeout(() => {
        setHeight('2rem'); // Shrink to a small fixed height (approx. a few cm)
      }, 1500); // 1.5 seconds delay
    };

    // Initially set the beam to its shrunken state
    setHeight('2rem');

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const gradient = `linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary-end)))`;
  const glow = `0 0 8px hsl(var(--primary-end) / 0.8)`;

  return (
    <div className="fixed top-0 left-0 h-full w-[3px] z-50 bg-transparent pointer-events-none">
      <div
        className="w-full transition-all duration-300 ease-out"
        style={{
          height: height,
          backgroundImage: gradient,
          boxShadow: glow,
        }}
      />
    </div>
  );
}
