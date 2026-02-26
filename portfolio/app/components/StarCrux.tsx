interface StarCruxProps {
  className?: string;
  sizeW?: number;
  sizeH?: number;
}

const StarCrux: React.FC<StarCruxProps> = ({ 
  className = "", 
  sizeW = 150, 
  sizeH = 100, 
}) => {
  return (
    <div 
      className={`relative ${className}`}
      style={{ width: sizeW, height: sizeH }} 
    >
      <style jsx>{`
        .star-container {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          
          
          filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));
        }

        .star-shape {
          width: 100%;
          height: 100%;
          background: white;
          /* Skinnier 4-pointed star: inner corners moved to 46% and 54% */
          clip-path: polygon(
                50% 0%,   /* Top Tip */
                58% 42%,  /* Inner Top-Right */
                100% 50%, /* Right Tip */
                58% 58%,  /* Inner Bottom-Right */
                50% 100%, /* Bottom Tip */
                42% 58%,  /* Inner Bottom-Left */
                0% 50%,   /* Left Tip */
                42% 42%   /* Inner Top-Left */
);
        }

        /* Gacrux (Top) - Orange-ish tint in real life */
            .s1 { top: 10%; left: 50%; width: 37px; height: 37px; transform: translateX(-50%); }

            /* Acrux (Bottom) - The brightest */
            .s2 { top: 90%; left: 53%; width: 39px; height: 39px; transform: translateX(-50%); }

            /* Mimosa (Left) - Very bright blue-white */
            .s3 { top: 42%; left: 15%; width: 38px; height: 38px; }

            /* Delta Crucis (Right) - Dimmest of the main 4, and higher up! */
            .s4 { top: 35%; right: 15%; width: 36px; height: 36px; }

            /* Epsilon Crucis (The "Extra" one) - Tucked into the lower right quadrant */
            .s5 { top: 55%; right: 30%; width: 15px; height: 15px; }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
      `}</style>
      
      <div className="star-container s1"><div className="star-shape" /></div>
      <div className="star-container s2"><div className="star-shape" /></div>
      <div className="star-container s3"><div className="star-shape" /></div>
      <div className="star-container s4"><div className="star-shape" /></div>
      <div className="star-container s5"><div className="star-shape" /></div>
    </div>
  );
};

export default StarCrux;