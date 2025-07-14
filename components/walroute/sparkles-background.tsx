"use client";

import React, { useState, useEffect } from 'react';

const SparklesBackground = ({ children }: { children: React.ReactNode }) => {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const SPARKLE_COUNT = 50;
    const newSparkles = Array.from({ length: SPARKLE_COUNT }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${2 + Math.random() * 3}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      return <div key={i} className="sparkle" style={style} />;
    });
    
    setSparkles(newSparkles);
  }, []); // Empty dependency array ensures this runs only once on the client after hydration

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
        {sparkles}
      </div>
      {children}
    </div>
  );
};

export default SparklesBackground;
