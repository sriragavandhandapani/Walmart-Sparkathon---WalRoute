
"use client";

import { useState, useEffect, type RefObject } from 'react';

interface VerticalScrollBeamProps {
  scrollRef: RefObject<HTMLElement>;
  className?: string;
}

export function VerticalScrollBeam({ scrollRef, className }: VerticalScrollBeamProps) {
  const [height, setHeight] = useState('0%');
  const [top, setTop] = useState('0%');
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollHeight = scrollElement.scrollHeight - scrollElement.clientHeight;
      if (scrollHeight <= 0) {
        setOpacity(0);
        return;
      }
      
      const progress = (scrollElement.scrollTop / scrollHeight) * 100;
      const viewportRatio = (scrollElement.clientHeight / scrollElement.scrollHeight) * 100;
      
      setHeight(`${viewportRatio}%`);
      setTop(`${progress}%`);
      setOpacity(1);

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setOpacity(0);
      }, 1500);
    };
    
    // Initial check in case content is not scrollable from the start
    handleScroll();
    if(scrollElement.scrollHeight <= scrollElement.clientHeight) {
      setOpacity(0);
    } else {
      setOpacity(1);
      timeoutId = setTimeout(() => {
        setOpacity(0);
      }, 1500);
    }

    const viewport = scrollElement.querySelector('div[data-radix-scroll-area-viewport]');
    const target = viewport || scrollElement;

    target.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also handle window resize
    window.addEventListener('resize', handleScroll);

    return () => {
      target.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [scrollRef]);

  const gradient = `linear-gradient(to bottom, hsl(var(--primary)), hsl(var(--primary-end)))`;
  const glow = `0 0 8px hsl(var(--primary-end) / 0.8)`;

  return (
    <div className="absolute top-0 right-0 h-full w-[3px] z-10 pointer-events-none">
      <div
        className="w-full transition-all duration-300 ease-out"
        style={{
          height: height,
          top: top,
          backgroundImage: gradient,
          boxShadow: glow,
          opacity: opacity,
        }}
      />
    </div>
  );
}
