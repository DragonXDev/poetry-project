import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';

const CodeLine = ({ delay = 0, width = 80 }) => (
  <motion.div
    className="h-3 bg-green-400/30 rounded"
    initial={{ width: 0 }}
    animate={{ width: `${width}%` }}
    transition={{
      duration: 0.8,
      delay,
      ease: "easeOut"
    }}
  />
);

const Cursor = () => (
  <motion.div
    className="w-3 h-5 bg-green-400"
    animate={{
      opacity: [1, 0, 1]
    }}
    transition={{
      duration: 1,
      repeat: Infinity
    }}
  />
);

const Terminal = () => (
  <div className="bg-gray-900 rounded-lg p-4 w-full h-full shadow-xl">
    <div className="flex gap-2 mb-3">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-green-400">$</span>
        <motion.span
          className="text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          npm install
        </motion.span>
      </div>
      {[...Array(6)].map((_, i) => (
        <CodeLine key={i} delay={1 + i * 0.2} width={70 + Math.random() * 20} />
      ))}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-green-400">$</span>
        <Cursor />
      </div>
    </div>
  </div>
);

const Monitor = () => (
  <div className="relative">
    {/* Monitor frame */}
    <motion.div
      className="relative w-[600px] h-[400px] bg-gray-800 rounded-lg p-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Screen content */}
      <div className="w-full h-full bg-gray-900 rounded overflow-hidden">
        <Terminal />
      </div>
      
      {/* Stand */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-32 h-16">
        <div className="w-8 h-full bg-gray-700 mx-auto" />
        <div className="w-32 h-2 bg-gray-700 rounded-full" />
      </div>
    </motion.div>

    {/* Reflection effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent"
      animate={{
        opacity: [0.3, 0.5, 0.3],
        backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  </div>
);

export const TechnologyScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px] flex flex-col items-center justify-center">
        <Monitor />
        
        {/* Text */}
        <motion.div 
          className="absolute bottom-20 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-3xl font-semibold text-green-400">
            Through lines of code
          </p>
          <p className="text-2xl text-green-400/90">
            Building dreams into reality
          </p>
        </motion.div>
      </div>
    </Scene>
  );
};