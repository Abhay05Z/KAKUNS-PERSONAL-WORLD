import React from 'react';

interface LilyPetalsProps {
  enabled: boolean;
}

export const LilyPetals: React.FC<LilyPetalsProps> = ({ enabled }) => {
  if (!enabled) return null;

  // 16 gentle lily petals with different positions, durations, delays, and petal shapes
  const petals = [
    { left: '5%', duration: '12s', delay: '0s', size: '20px', type: '🪷' },
    { left: '15%', duration: '14s', delay: '3s', size: '16px', type: '🌸' },
    { left: '25%', duration: '11s', delay: '1s', size: '22px', type: '🤍' },
    { left: '35%', duration: '15s', delay: '5s', size: '18px', type: '🪷' },
    { left: '45%', duration: '13s', delay: '2s', size: '19px', type: '✨' },
    { left: '55%', duration: '16s', delay: '4s', size: '21px', type: '🪷' },
    { left: '65%', duration: '12s', delay: '6s', size: '17px', type: '🌸' },
    { left: '75%', duration: '14s', delay: '1.5s', size: '23px', type: '🤍' },
    { left: '85%', duration: '15s', delay: '3.5s', size: '19px', type: '🪷' },
    { left: '92%', duration: '13s', delay: '5.5s', size: '18px', type: '🌸' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30" aria-hidden="true">
      {petals.map((petal, i) => (
        <span
          key={i}
          className="animate-petal select-none filter drop-shadow-xs opacity-75"
          style={{
            left: petal.left,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            fontSize: petal.size,
          }}
        >
          {petal.type}
        </span>
      ))}
    </div>
  );
};
