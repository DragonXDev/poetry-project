import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import StickFigure from './StickFigure';

interface PinnedStickmanProps {
  className?: string;
}

export const PinnedStickman: React.FC<PinnedStickmanProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress into different animation states
  const currentAnimation = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["walking", "reading", "building", "praying", "eating", "flying"]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.1, 1]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    // Create floating particles around the stickman
    const particles = Array.from({ length: 6 }).map((_, i) => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 rounded-full bg-white/30';
      containerRef.current?.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * 60 - 30,
        y: Math.random() * 120 - 60
      });

      gsap.to(particle, {
        x: 'random(-30, 30)',
        y: 'random(-60, 60)',
        // opacity: 'random(0.2, 0.6)',
        duration: 'random(2, 3)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      return particle;
    });

    return () => particles.forEach(particle => particle.remove());
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative flex items-center justify-center h-full ${className}`}
      style={{ scale }}
    >
      <motion.div className="relative">
        <StickFigure
          className="w-32 h-32 text-white" 
          animate={currentAnimation}
        />
        
        {/* Subtle glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent rounded-full filter blur-md"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default PinnedStickman;
