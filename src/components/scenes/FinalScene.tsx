import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';
import StickFigure from '../StickFigure';

const Book = ({ className = "", isOpen = true }) => (
  <motion.div 
    className={`relative ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: isOpen ? 0.8 : 0.5 }}
  >
    <motion.div
      className="w-full h-full bg-amber-100 rounded-lg shadow-xl"
      animate={isOpen ? { rotateY: 180 } : {}}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 border-r border-amber-300" />
      <div className="absolute inset-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="w-full h-1 bg-amber-300/30 mt-2"
          />
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const WritingParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [-10, -20],
      x: [0, Math.random() * 20 - 10],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
);

export const FinalScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px] flex items-center justify-center">
        <div className="relative flex items-end space-x-12">
          {/* Stick figure */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StickFigure className="w-32 h-32" pose="sitting" />
          </motion.div>

          {/* Closed book */}
          <Book className="w-24 h-32" isOpen={false} />

          {/* Open book with writing effect */}
          <div className="relative">
            <Book className="w-32 h-24 -rotate-12" isOpen={true} />
            {/* Writing particles */}
            <div className="absolute -top-8 right-0">
              {[...Array(5)].map((_, i) => (
                <WritingParticle key={i} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </div>

        {/* Final text */}
        <motion.div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-3xl font-semibold text-blue-300">
            And now I write,
          </p>
          <p className="text-2xl text-blue-300/90">
            To share these stories with you
          </p>
        </motion.div>
      </div>
    </Scene>
  );
};