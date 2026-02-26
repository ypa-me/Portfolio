interface FalseCrossProps {
  className?: string;
  sizeW?: number;
  sizeH?: number;
}

const FalseCross: React.FC<FalseCrossProps> = ({ 
  className = "", 
  sizeW = 120, 
  sizeH = 180 
}) => {
  // Stars of the False Cross: [Top, Bottom, Left, Right]
  // Colors: Alsephina/Aspidiske/Markeb (White/Blue-white), Avior (Orange-red)
  const stars = [
    { name: 'Alsephina', t: '5%', l: '50%', w: 37, h: 42, d: '0s', c: '#ffffff' },
    { name: 'Avior', b: '5%', l: '48%', w: 39, h: 45, d: '0.8s', c: '#ffccaa' },
    { name: 'Aspidiske', t: '48%', l: '8%', w: 38, h: 43, d: '1.6s', c: '#ffffff' },
    { name: 'Markeb', t: '42%', r: '8%', w: 36, h: 40, d: '2.4s', c: '#e0f2ff' },
  ];

  return (
    <div className={`relative ${className}`} style={{ width: sizeW, height: sizeH }}>
      <style jsx>{`
        .star-container {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: twinkle 4s ease-in-out infinite;
          transform: translateX(-50%);
        }
        .star-shape {
          width: 100%;
          height: 100%;
          /* Punchy 42%/58% ratio */
          clip-path: polygon(50% 0%, 58% 42%, 100% 50%, 58% 58%, 50% 100%, 42% 58%, 0% 50%, 42% 42%);
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1) translateX(-50%); }
          50% { opacity: 0.5; transform: scale(0.8) translateX(-50%); }
        }
      `}</style>
      {stars.map((s, i) => (
        <div key={i} className="star-container"
          style={{ 
            top: s.t, bottom: s.b, left: s.l, right: s.r, 
            width: s.w, height: s.h, animationDelay: s.d,
            filter: `drop-shadow(0 0 4px ${s.c})` 
          }}>
          <div className="star-shape" style={{ backgroundColor: s.c }} />
        </div>
      ))}
    </div>
  );
};
export default FalseCross;