'use client';

import { useEffect, useState } from 'react';

interface Dot {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

export default function DotsBackground() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    const generateDots = () => {
      const newDots: Dot[] = [];
      for (let i = 0; i < 75; i++) {
        newDots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 3 + Math.random() * 3,
          color: Math.random() > 0.5 ? 'bg-gray-500' : 'bg-gray-700',
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className={`absolute ${dot.color} rounded-full opacity-40`}
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              animation: `float 20s ease-in-out infinite ${Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
