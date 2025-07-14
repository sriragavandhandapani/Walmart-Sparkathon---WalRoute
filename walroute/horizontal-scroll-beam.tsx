
"use client";

import { useState, useEffect, type RefObject } from 'react';

interface HorizontalScrollBeamProps {
  scrollRef: RefObject<HTMLElement>;
  className?: string;
}

export function HorizontalScrollBeam({ scrollRef, className }: HorizontalScrollBeamProps) {
  const [width, setWidth] = useState('0%');
  const [left, setLeft] = useState('0%');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollWidth = scrollElement.scrollWidth - scrollElement.clientWidth;
      if (scrollWidth <= 0) {
        setOpacity(0);
        return;
      }
      
      const progress = (scrollElement.scrollLeft / scrollWidth) * 100;
      const viewportRatio = (scrollElement.clientWidth / scrollElement.scrollWidth) * 100;
      
      setWidth(`${viewportRatio}%`);
      setLeft(`${progress}%`);
      setOpacity(1);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setOpacity(0);
      }, 1500);
    };
    
    // Initial check in case content is not scrollable from the start
    handleScroll();
    // Hide immediately if not scrollable
    if(scrollElement.scrollWidth <= scrollElement.clientWidth) {
      setOpacity(0);
    } else {
      setOpacity(1);
      timeoutId = setTimeout(() => {
        setOpacity(0);
      }, 1500);
    }


    scrollElement.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also handle window resize
    window.addEventListener('resize', handleScroll);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [scrollRef]);

  const gradient = `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary-end)))`;
  const glow = `0 0 8px hsl(var(--primary-end) / 0.8)`;

  return (
    <div className="absolute bottom-0 left-0 w-full h-[3px] z-10 pointer-events-none">
      <div
        className="h-full transition-all duration-300 ease-out"
        style={{
          width: width,
          left: left,
          backgroundImage: gradient,
          boxShadow: glow,
          opacity: opacity,
        }}
      />
    </div>
  );
}
