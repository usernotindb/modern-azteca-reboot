
import { motion } from 'framer-motion';

interface IconConfig {
  src: string;
  label: string;
}

interface OrbitingIconsProps {
  icons: IconConfig[];
  mouseX: number;
}

const OrbitingIcons = ({ icons, mouseX }: OrbitingIconsProps) => {
  return (
    <>
      {icons.map((icon, index) => {
        const angle = (index * Math.PI * 2) / icons.length;
        const radius = 160; // Distance from center
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              x,
              y,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{ 
              x,
              y,
              opacity: 1,
              scale: 1,
              z: 40 + (Math.sin(mouseX * 0.01 + index) * 20),
            }}
            transition={{
              opacity: { duration: 0.5, delay },
              scale: { duration: 0.5, delay },
              z: { duration: 0.8, ease: "easeOut" }
            }}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transformStyle: "preserve-3d",
              zIndex: mouseX > x ? 20 : 10,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md p-3 flex items-center justify-center border border-white/20 shadow-lg">
              <img src={icon.src} alt={icon.label} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium whitespace-nowrap">
              {icon.label}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default OrbitingIcons;
