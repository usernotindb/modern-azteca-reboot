
import { motion } from 'framer-motion';

interface CardBackgroundProps {
  mouseX: number;
  mouseY: number;
}

const CardBackground = ({ mouseX, mouseY }: CardBackgroundProps) => {
  return (
    <div 
      className="absolute inset-0 rounded-2xl overflow-hidden bg-blue-600/20 backdrop-blur-[12px] border border-blue-300/30 shadow-xl"
      style={{
        transform: "translateZ(-10px)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Depth effects and highlights */}
      <div 
        className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-400/60 via-transparent to-blue-900/60"
        style={{
          transform: `translateX(${mouseX * 0.02}px) translateY(${mouseY * 0.02}px)`,
        }}
      />
      
      {/* Additional lighting effect based on mouse position */}
      <div 
        className="absolute inset-0 bg-gradient-radial from-blue-400/30 to-transparent opacity-70"
        style={{
          transformStyle: "preserve-3d",
          transform: `translateX(${mouseX * 0.03}px) translateY(${mouseY * 0.03}px) translateZ(20px)`,
          backgroundPosition: `${50 + mouseX * 0.05}% ${50 + mouseY * 0.05}%`,
        }}
      />
      
      {/* Glossy highlight */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-40"
        style={{
          transform: `translateX(${mouseX * -0.01}px) translateY(${mouseY * -0.01}px)`,
        }}
      />
    </div>
  );
};

export default CardBackground;
