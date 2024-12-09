import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export const Stickman = () => {
  const stickmanRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!stickmanRef.current) return;

    // Create walking animation
    gsap.to(stickmanRef.current, {
      keyframes: [
        { rotate: 5, y: -10 },
        { rotate: -5, y: 0 },
      ],
      duration: 1,
      repeat: -1,
      ease: "power1.inOut",
      transformOrigin: "center",
    });
  }, []);

  return (
    <motion.div
      className="fixed right-10 bottom-10 z-50 w-40 h-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <svg
        ref={stickmanRef}
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        {/* Head */}
        <circle cx="50" cy="25" r="10" stroke="white" strokeWidth="3" fill="none" />
        
        {/* Body */}
        <line x1="50" y1="35" x2="50" y2="65" stroke="white" strokeWidth="3" />
        
        {/* Arms */}
        <line x1="50" y1="45" x2="30" y2="55" stroke="white" strokeWidth="3" />
        <line x1="50" y1="45" x2="70" y2="55" stroke="white" strokeWidth="3" />
        
        {/* Legs */}
        <line x1="50" y1="65" x2="35" y2="85" stroke="white" strokeWidth="3" />
        <line x1="50" y1="65" x2="65" y2="85" stroke="white" strokeWidth="3" />
      </svg>
    </motion.div>
  );
};

export default Stickman;
