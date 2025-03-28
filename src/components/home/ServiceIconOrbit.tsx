
import { motion } from 'framer-motion';

const ServiceIconOrbit = () => {
  const icons = [
    { src: "/lovable-uploads/74da57e4-5aa3-4a37-aa85-c1c28943253c.png", label: "Cloud" },
    { src: "/lovable-uploads/881ea460-231f-4a79-9b8a-a49b932665d7.png", label: "Hardware" },
    { src: "/lovable-uploads/8d93ccd6-f135-4472-ad9a-677825e40020.png", label: "Security" },
    { src: "/lovable-uploads/9f23050e-b4e0-417a-bc5f-cf88dd8c3e82.png", label: "Support" },
  ];

  return (
    <>
      {icons.map((icon, index) => {
        const angle = (index * Math.PI * 2) / icons.length;
        const delay = index * 0.2;
        
        return (
          <motion.div
            key={index}
            initial={{ 
              x: Math.cos(angle) * 120 + 'px',
              y: Math.sin(angle) * 120 + 'px',
              opacity: 0 
            }}
            animate={{ 
              x: Math.cos(angle) * 120 + 'px',
              y: Math.sin(angle) * 120 + 'px',
              opacity: 1,
              rotate: [0, 360]
            }}
            transition={{
              opacity: { duration: 0.5, delay },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            className="absolute w-16 h-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md p-3 flex items-center justify-center">
              <img src={icon.src} alt={icon.label} className="w-full h-full object-contain" />
            </div>
            <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium">
              {icon.label}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default ServiceIconOrbit;
