import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';

const Cloud = ({ delay = 0 }) => (
  <motion.div
    className="absolute"
    style={{
      top: `${Math.random() * 50}%`,
    }}
    initial={{ right: -100 }}
    animate={{ right: '100%' }}
    transition={{
      duration: 20,
      delay,
      repeat: Infinity,
      repeatType: "loop"
    }}
  >
    <div className="relative w-32 h-16">
      <div className="absolute w-20 h-16 bg-white/20 rounded-full" />
      <div className="absolute left-8 w-24 h-20 bg-white/20 rounded-full" />
      <div className="absolute left-16 w-16 h-14 bg-white/20 rounded-full" />
    </div>
  </motion.div>
);

const Star = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{
      top: `${Math.random() * 60}%`,
      left: `${Math.random() * 100}%`,
    }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
    }}
  />
);

const Train = () => (
  <motion.div
    className="relative flex items-end space-x-6"
    initial={{ x: -800 }}
    animate={{ x: 0 }}
    transition={{ duration: 2, type: "spring" }}
  >
    {/* Engine */}
    <motion.div 
      className="relative w-48 h-32 bg-blue-600 rounded-lg"
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 0.5, repeat: Infinity }}
    >
      {/* Front window */}
      <div className="absolute top-4 right-4 w-16 h-16 bg-blue-300/50 rounded-lg">
        <div className="absolute inset-2 border-2 border-blue-200/30 rounded" />
      </div>
      
      {/* Chimney */}
      <div className="absolute -top-8 left-8 w-8 h-12 bg-blue-800">
        <div className="absolute -top-2 -left-2 w-12 h-4 bg-blue-700" />
        {/* Smoke */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -top-8 left-1/2 w-6 h-6 bg-gray-300/20 rounded-full"
            animate={{
              y: [-10, -40],
              x: [0, (i % 2 === 0 ? 20 : -20)],
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
      
      {/* Wheels */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-16 h-16 bg-blue-800 rounded-full"
          style={{ left: i * 80 + 16 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-4 border-4 border-blue-700 rounded-full" />
          <div className="absolute inset-0 border-t-4 border-blue-500" />
        </motion.div>
      ))}
    </motion.div>

    {/* Cars */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="relative w-40 h-28 bg-blue-500 rounded-lg"
        animate={{ y: [-1, 1, -1] }}
        transition={{
          duration: 0.5,
          delay: i * 0.1,
          repeat: Infinity
        }}
      >
        {/* Windows */}
        <div className="absolute top-4 left-4 right-4 h-12 flex gap-2">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex-1 bg-blue-300/50 rounded-lg">
              <div className="absolute inset-2 border-2 border-blue-200/30 rounded" />
            </div>
          ))}
        </div>
        
        {/* Wheels */}
        {[...Array(2)].map((_, j) => (
          <motion.div
            key={j}
            className="absolute bottom-0 w-12 h-12 bg-blue-700 rounded-full"
            style={{ left: j * 64 + 12 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-3 border-4 border-blue-600 rounded-full" />
            <div className="absolute inset-0 border-t-4 border-blue-400" />
          </motion.div>
        ))}
      </motion.div>
    ))}
  </motion.div>
);


const Track = () => (
  <div className="absolute bottom-0 left-0 right-0 h-4">
    <div className="absolute inset-x-0 bottom-0 h-2 bg-gray-700" />
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute bottom-1 w-8 h-1 bg-gray-600"
        style={{ left: `${i * 5}%` }}
      />
    ))}
  </div>
);

export const TravelScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px]">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <Star key={i} delay={i * 0.1} />
        ))}
        
        {/* Clouds */}
        {[...Array(5)].map((_, i) => (
          <Cloud key={i} delay={i * 4} />
        ))}
        
        {/* Scene content */}
        <div className="absolute inset-x-0 bottom-32 h-64">
          <Track />
          <div className="absolute bottom-4 w-full">
            <Train />
          </div>
        </div>

        {/* Text */}
        <motion.div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-3xl font-semibold text-blue-300">
            Through journeys far and wide
          </p>
          <p className="text-2xl text-blue-300/90">
            Each mile a story to tell
          </p>
        </motion.div>
      </div>
    </Scene>
  );
};