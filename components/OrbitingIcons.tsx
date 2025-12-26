import React from 'react';
import { EcosystemItem } from '../types';
import { ORBIT_ITEMS_INNER, ORBIT_ITEMS_MIDDLE, ORBIT_ITEMS_OUTER } from '../constants';

interface OrbitRingProps {
  items: EcosystemItem[];
  radius: number;
  duration: string; // Tailwind class suffix e.g. 'slow', 'medium'
  reverse?: boolean;
}

const OrbitRing: React.FC<OrbitRingProps> = ({ items, radius, duration, reverse }) => {
  // We use inline styles for width/height to make radius manageable
  const size = radius * 2;
  const animationClass = reverse ? `animate-reverse-spin-${duration}` : `animate-orbit-${duration}`;
  const counterAnimationClass = reverse ? `animate-orbit-${duration}` : `animate-reverse-spin-${duration}`;

  return (
    <div 
      className={`absolute rounded-full border border-slate-200/40 dark:border-slate-800/40 ${animationClass}`}
      style={{ width: size, height: size }}
    >
      {items.map((item, index) => {
        // Calculate position on the circle
        const angle = (360 / items.length) * index;
        const radian = (angle * Math.PI) / 180;
        
        // CSS Trigonometry would be ideal, but for wider compatibility we can use transforms
        // Actually, simple absolute positioning with rotation on parent is easier.
        // We are already rotating the parent container. We just need to place items on the edge.
        // top: 50%, left: 50%, translate(-50%, -50%) rotate(angle) translate(radius)
        
        return (
          <div
            key={item.id}
            className="absolute top-1/2 left-1/2 -ml-5 -mt-5 w-10 h-10 flex items-center justify-center"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
             {/* The Icon Container - Counter Rotates to stay upright */}
             <div className={`${counterAnimationClass} w-10 h-10 rounded-full glass flex items-center justify-center shadow-sm hover:scale-110 transition-transform cursor-pointer group`}>
                <item.icon className={`w-5 h-5 ${item.color} opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                {/* Tooltip */}
                <div className="absolute top-full mt-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.name}
                </div>
             </div>
          </div>
        );
      })}
    </div>
  );
};

export const OrbitingSystem: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Inner Ring */}
      <OrbitRing items={ORBIT_ITEMS_INNER} radius={140} duration="fast" />
      
      {/* Middle Ring */}
      <OrbitRing items={ORBIT_ITEMS_MIDDLE} radius={240} duration="medium" reverse />
      
      {/* Outer Ring */}
      <OrbitRing items={ORBIT_ITEMS_OUTER} radius={340} duration="slow" />
    </div>
  );
};