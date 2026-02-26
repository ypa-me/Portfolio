interface DiamondCrossProps {
  className?: string;
  sizeW?: number;
  sizeH?: number;
}

const DiamondCross: React.FC<DiamondCrossProps> = ({ 
  className = "", 
  sizeW = 130, 
  sizeH = 160 
}) => {
  // Stars: Miaplacidus (Top), Upsilon (Bottom), Theta (Left), Omega (Right)
  // All are A- or B-type (White/Blue-white)
  const stars = [
    { name: 'Miaplacidus', t: '5%', l: '50%', w: 39, h: 45, d: '0s', c: '#ffffff' },
    { name: 'Upsilon', b: '5%', l: '50%', w: 37, h: 42, d: '1.0s', c: '#eef2ff' },
    { name: 'Theta', t: '48%', l: '5%', w: 37, h: 42, d: '2.0s', c: '#f0f4ff' },
    { name: 'Omega', t: '48%', r: '5%', w: 32, h: 40, d: '3.0s', c: '#ffffff' },
  ];

  return (
    <div className={`relative ${className}`} style={{ width: sizeW, height: sizeH }}>
      <style jsx>{`
        .star-container {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          
          transform: translateX(-50%);
        }
        .star-shape {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 58% 42%, 100% 50%, 58% 58%, 50% 100%, 42% 58%, 0% 50%, 42% 42%);
        }
        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1) translateX(-50%); }
          50% { opacity: 0.4; transform: scale(0.7) translateX(-50%); }
        }
      `}</style>
      {stars.map((s, i) => (
        <div key={i} className="star-container"
          style={{ 
            top: s.t, bottom: s.b, left: s.l, right: s.r, 
            width: s.w, height: s.h, animationDelay: s.d,
            filter: `drop-shadow(0 0 5px ${s.c})` 
          }}>
          <div className="star-shape" style={{ backgroundColor: s.c }} />
        </div>
      ))}
    </div>
  );
};
export default DiamondCross;