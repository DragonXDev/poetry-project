import React from 'react';
import { motion } from 'framer-motion';

interface SceneProps {
  children: React.ReactNode;
  className?: string;
}

const Scene: React.FC<SceneProps> = ({ children, className = "" }) => {
  return (
    <motion.section 
      className={`relative min-h-screen w-full flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 py-16">
        {children}
      </div>
    </motion.section>
  );
};

export default Scene;