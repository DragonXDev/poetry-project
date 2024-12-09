import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';
import StickFigure from '../StickFigure';

const TreeLeafCluster = ({ x, y, scale = 1 }) => (
  <motion.div
    className="absolute"
    style={{ left: x, top: y }}
    initial={{ scale: 0 }}
    animate={{ scale }}
    transition={{ duration: 1 }}
  >
    <motion.div
      className="w-48 h-48 bg-green-700/90 rounded-full shadow-lg"
      animate={{
        scale: [1, 1.05, 1],
        rotate: [-1, 1, -1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <motion.div
      className="absolute -left-12 -top-12 w-40 h-40 bg-green-600/85 rounded-full shadow-lg"
      animate={{
        scale: [1, 1.03, 1],
        rotate: [1, -1, 1],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.2,
      }}
    />
    <motion.div
      className="absolute left-6 -top-16 w-44 h-44 bg-green-800/95 rounded-full shadow-lg"
      animate={{
        scale: [1, 1.04, 1],
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.4,
      }}
    />
  </motion.div>
);

const House = () => (
  <div className="relative w-96 h-96">
    {/* Roof */}
    <div className="absolute bottom-64 left-0 right-0">
      <div className="relative h-32">
        <div 
          className="absolute inset-0 bg-amber-900 transform skew-x-12"
          style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
        />
        <div 
          className="absolute inset-0 bg-amber-800 transform -skew-x-12"
          style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
        />
      </div>
    </div>
    
    {/* Main structure */}
    <div className="absolute bottom-0 w-full h-64 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-xl">
      {/* Door */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-32 bg-amber-800 rounded-t-lg shadow-md">
        <div className="absolute right-2 top-1/2 w-3 h-3 rounded-full bg-amber-400" />
      </div>
      
      {/* Windows */}
      <div className="absolute top-8 right-8 w-24 h-24">
        <div className="w-full h-full bg-sky-200 rounded-lg p-1.5 grid grid-cols-2 gap-1.5 shadow-inner">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-sky-100/80 rounded shadow-inner" />
          ))}
        </div>
      </div>
      <div className="absolute top-8 left-8 w-24 h-24">
        <div className="w-full h-full bg-sky-200 rounded-lg p-1.5 grid grid-cols-2 gap-1.5 shadow-inner">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-sky-100/80 rounded shadow-inner" />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const NatureScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px] flex justify-between items-center px-20">
        {/* Left side - Tree */}
        <div className="relative w-[500px] h-[600px]">
          {/* Tree trunk */}
          <motion.div 
            className="absolute left-1/2 bottom-0 w-16 h-[400px] bg-gradient-to-b from-amber-800 to-amber-900 rounded-lg shadow-xl"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Tree leaves */}
          <div className="absolute top-0 left-0 w-full h-[500px]">
            <TreeLeafCluster x="25%" y="5%" scale={1.2} />
            <TreeLeafCluster x="15%" y="15%" scale={1.1} />
            <TreeLeafCluster x="35%" y="12%" scale={1.3} />
            <TreeLeafCluster x="20%" y="25%" scale={1} />
            <TreeLeafCluster x="30%" y="20%" scale={0.9} />
          </div>
          
          {/* Apricots */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${10 + Math.random() * 40}%`,
              }}
            >
              <motion.div 
                className="w-full h-full bg-gradient-to-br from-orange-300 to-orange-400 rounded-full shadow-lg"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  y: [0, 500],
                  x: [0, Math.random() * 100 - 50],
                  rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: 1 + Math.random() * 3,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Right side - House */}
        <div className="relative">
          <House />
        </div>
      </div>

      {/* Poetry text */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-3xl font-semibold text-orange-300">
          I am from orange apricot trees,
        </p>
        <p className="text-2xl text-orange-300/90">
          Whose fruit handfed my soul
        </p>
        <p className="text-xl text-orange-300/80">
          From the comfort of home,<br/>
          Where warmth and memories grow
        </p>
      </motion.div>
    </Scene>
  );
};