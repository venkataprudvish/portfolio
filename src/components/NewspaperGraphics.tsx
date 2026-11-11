import React from 'react';

// Vintage Wireframe Globe Graphic
export const NewspaperGlobe: React.FC<{ className?: string; stroke?: string }> = ({
  className = 'w-10 h-10',
  stroke = '#111111',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="46" stroke={stroke} strokeWidth="2.5" />
    <ellipse cx="50" cy="50" rx="46" ry="20" stroke={stroke} strokeWidth="2" />
    <ellipse cx="50" cy="50" rx="20" ry="46" stroke={stroke} strokeWidth="2" />
    <line x1="4" y1="50" x2="96" y2="50" stroke={stroke} strokeWidth="2" />
    <line x1="50" y1="4" x2="50" y2="96" stroke={stroke} strokeWidth="2" />
    <path d="M 12 28 Q 50 42 88 28" stroke={stroke} strokeWidth="1.5" />
    <path d="M 12 72 Q 50 58 88 72" stroke={stroke} strokeWidth="1.5" />
  </svg>
);

// Rust-Red 8-Point Editorial Starburst (Exact replica of reference logo mark)
export const StarburstMark: React.FC<{ className?: string }> = ({
  className = 'w-20 h-20 text-[#B52A1C]',
}) => (
  <svg className={className} viewBox="0 0 120 120" fill="currentColor">
    {/* 8-pointed multifaceted starburst */}
    <polygon points="60,0 72,42 114,30 84,60 120,78 78,84 90,120 60,92 30,120 42,84 0,78 36,60 6,30 48,42" />
  </svg>
);

// Biohazard / Tech Cybernetic Glyph
export const BiohazardGlyph: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8 text-[#B52A1C]',
}) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
    <circle cx="50" cy="40" r="18" />
    <circle cx="36" cy="62" r="18" />
    <circle cx="64" cy="62" r="18" />
    <circle cx="50" cy="54" r="7" fill="currentColor" />
    <path d="M 50 14 L 50 32" strokeWidth="5" />
    <path d="M 22 74 L 38 60" strokeWidth="5" />
    <path d="M 78 74 L 62 60" strokeWidth="5" />
  </svg>
);

// Newspaper Barcode with issue number
export const BarcodeBox: React.FC<{ code?: string; className?: string }> = ({
  code = '2000-07',
  className = '',
}) => (
  <div className={`flex flex-col items-center justify-center p-1 bg-[#D6C4A5] border border-[#111111] ${className}`}>
    <div className="flex items-end justify-center gap-[2px] h-6 px-1">
      {[
        3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 1, 2, 3, 1, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 4,
      ].map((width, i) => (
        <span
          key={i}
          className="bg-[#111111] inline-block"
          style={{
            width: `${width}px`,
            height: i % 5 === 0 ? '100%' : '82%',
          }}
        />
      ))}
    </div>
    <span className="font-mono text-[9px] tracking-[0.2em] text-[#111111] font-bold mt-0.5">
      {code}
    </span>
  </div>
);

// Industrial Factory Cooling Towers Silhouette (Right Top Reference Header)
export const IndustrialGraphic: React.FC<{ className?: string }> = ({
  className = 'w-full h-16',
}) => (
  <svg className={className} viewBox="0 0 180 80" fill="none" preserveAspectRatio="none">
    {/* Billowing Smoke Stacks */}
    <path
      d="M 50 40 Q 60 20 80 15 Q 110 8 135 12 Q 160 5 175 0 L 180 80 L 0 80 L 0 50 Z"
      fill="#111111"
      opacity="0.18"
    />
    <path
      d="M 65 30 Q 75 12 110 8 Q 140 4 175 0"
      stroke="#111111"
      strokeWidth="2.5"
      strokeDasharray="4 3"
    />
    {/* Towers */}
    <polygon points="50,80 56,42 74,42 80,80" fill="#111111" />
    <polygon points="90,80 95,34 115,34 120,80" fill="#111111" />
    <polygon points="130,80 134,48 150,48 154,80" fill="#111111" />
    {/* Pipe Scaffold */}
    <rect x="25" y="48" width="8" height="32" fill="#111111" />
    <line x1="10" y1="62" x2="45" y2="62" stroke="#111111" strokeWidth="2" />
    <line x1="10" y1="72" x2="45" y2="72" stroke="#111111" strokeWidth="2" />
    <line x1="20" y1="80" x2="35" y2="48" stroke="#111111" strokeWidth="1.5" />
  </svg>
);
