import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';
import StickFigure from '../StickFigure';

const letterVariants = {
  initial: { y: 50, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  }),
};

const titleText = "Where I'm From";

export const HeroScene = () => {
  return (
    <Scene className="bg-gradient-to-b from-gray-900 to-indigo-900/80">
      <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Main title */}
        <motion.h1 
          className="text-6xl md:text-7xl font-bold text-white mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-wrap justify-center gap-x-4">
            {titleText.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
                className={char === ' ' ? 'mr-4' : ''}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Reading animation */}
        <motion.div 
          className="relative text-lg text-white/80 max-w-2xl text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            className="relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 2, duration: 2, ease: "easeInOut" }}
          >
            <p className="whitespace-nowrap">
              A journey through memories, dreams, and aspirations...
            </p>
          </motion.div>
        </motion.div>

        {/* Stick figure */}
        <motion.div
          className="mt-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3, duration: 0.5, type: "spring" }}
        >
          <StickFigure animate="reading" className="text-white w-16 h-16" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-white/50 mx-auto rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </Scene>
  );
};