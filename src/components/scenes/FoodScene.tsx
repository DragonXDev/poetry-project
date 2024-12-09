import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';

const SteamParticle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-white/20 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0.5, 1.5, 0.5],
      y: -20,
      x: Math.random() * 20 - 10,
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random()
    }}
  />
);

const BenedictEggs = () => (
  <motion.div
    className="relative w-64 h-64 flex items-center justify-center"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Plate */}
    <div className="absolute inset-0 bg-white rounded-full shadow-xl" />

    {/* English Muffin */}
    <motion.div 
      className="absolute w-40 h-16 bg-amber-200 rounded-lg"
      animate={{ rotate: [0, 2, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    />

    {/* Salmon */}
    <motion.div
      className="absolute w-36 h-12 bg-salmon-pink rounded-lg transform -rotate-3"
      style={{ backgroundColor: '#FF8C69' }}
      animate={{ rotate: [-3, 0, -3] }}
      transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
    />

    {/* Eggs */}
    <motion.div
      className="absolute w-28 h-28 bg-yellow-100 rounded-full"
      animate={{ y: [-2, 2, -2] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <motion.div
        className="absolute inset-4 bg-yellow-300 rounded-full"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>

    {/* Hollandaise */}
    <motion.div
      className="absolute w-32 h-32"
      animate={{ rotate: [0, 5, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-yellow-200 to-transparent rounded-full transform -rotate-45" />
    </motion.div>

    {/* Steam */}
    <div className="absolute -top-8">
      {[...Array(6)].map((_, i) => (
        <SteamParticle key={i} delay={i * 0.2} />
      ))}
    </div>
  </motion.div>
);

const ShrimpTaco = () => (
  <motion.div
    className="relative"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    {/* Plate */}
    <div className="relative w-64 h-64">
      <div className="absolute inset-0 bg-white rounded-full shadow-xl" />
      
      {/* Tortilla */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-28"
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="w-full h-full bg-amber-100 rounded-t-full origin-bottom"
          style={{ transform: 'rotateX(60deg)' }}
          animate={{ rotateX: [60, 65, 60] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Filling container */}
        <div className="absolute bottom-0 left-0 right-0 h-20">
          {/* Lettuce */}
          <motion.div
            className="absolute bottom-2 left-4 right-4 h-12 flex space-x-1"
            animate={{ y: [-1, 1, -1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="flex-1 h-full bg-green-400 rounded-t-lg"
                style={{ transform: `rotate(${(i % 2 === 0 ? 5 : -5)}deg)` }}
              />
            ))}
          </motion.div>
          
          {/* Shrimp */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-around">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-10 h-6 bg-pink-300 rounded-full"
                animate={{ y: [-2, 0, -2], rotate: [0, 5, 0] }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                <div className="absolute right-0 w-4 h-4 bg-pink-200 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Steam */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        {[...Array(6)].map((_, i) => (
          <SteamParticle key={i} delay={i * 0.2} />
        ))}
      </div>
    </div>
  </motion.div>
);

export const FoodScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px] flex flex-col items-center justify-center">
        <div className="flex gap-20">
          <div className="relative">
            <BenedictEggs />
          </div>
          <div className="relative">
            <ShrimpTaco />
          </div>
        </div>
        
        {/* Text */}
        <motion.div 
          className="absolute bottom-20 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-3xl font-semibold text-amber-300">
            Through flavors that dance
          </p>
          <p className="text-2xl text-amber-300/90">
            Each bite a new adventure
          </p>
        </motion.div>
      </div>
    </Scene>
  );
};