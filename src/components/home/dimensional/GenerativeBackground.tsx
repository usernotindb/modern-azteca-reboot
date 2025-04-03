
import React, { useRef, useEffect } from 'react';
import { motion, MotionValue } from 'framer-motion';

interface GenerativeBackgroundProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  activeIndex: number;
}

const GenerativeBackground = ({ mouseX, mouseY, activeIndex }: GenerativeBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Generate dynamic background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Make canvas responsive to high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    let hue = (activeIndex * 40) % 360; // Different hue for each slide
    
    // Particle class for fluid motion
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width / dpr;
        this.y = Math.random() * canvas.height / dpr;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsla(${hue}, 100%, 50%, ${Math.random() * 0.3 + 0.1})`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.size > 0.2) this.size -= 0.01;
        
        // Boundary check
        if (this.x < 0 || this.x > canvas.width / dpr) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height / dpr) this.speedY *= -1;
      }
      
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Initialize particles
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    };
    createParticles();
    
    // Animation loop
    const animate = () => {
      // Apply a soft fade effect
      ctx.fillStyle = 'rgba(8, 8, 32, 0.05)';
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width / dpr, canvas.height / dpr);
      gradient.addColorStop(0, `hsla(${hue}, 70%, 10%, 0.5)`);
      gradient.addColorStop(1, `hsla(${hue + 60}, 70%, 15%, 0.5)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Slowly shift hue for dynamic color effect
      hue = (hue + 0.1) % 360;
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeIndex]);
  
  return (
    <motion.div
      className="absolute inset-0 overflow-hidden rounded-xl z-0"
      animate={{
        backgroundColor: [
          `rgba(30, 30, 60, 0.4)`,
          `rgba(40, 40, 80, 0.4)`,
          `rgba(30, 30, 60, 0.4)`,
        ],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl" />
      
      {/* Canvas for generative art */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Glass overlay */}
      <div className="absolute inset-0 bg-white/5" />
      
      {/* Dynamic spotlight effect */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </motion.div>
  );
};

export default GenerativeBackground;
