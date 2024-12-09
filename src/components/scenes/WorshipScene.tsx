import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';

const LightBeam = ({ delay = 0 }) => (
  <motion.div
    className="absolute top-0 w-1 bg-white/10"
    style={{
      height: '100%',
      left: `${Math.random() * 100}%`,
    }}
    initial={{ opacity: 0, scaleY: 0 }}
    animate={{
      opacity: [0, 0.3, 0],
      scaleY: [0, 1, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }}
  />
);

const PrayerMat = () => (
  <motion.div
    className="relative w-64 h-96"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute inset-0 bg-emerald-800 rounded-lg opacity-80" />
    <div className="absolute inset-4 border-2 border-gold-500/30 rounded" />
    <div className="absolute inset-x-0 top-8 h-16 bg-emerald-700/50" />
    <div className="absolute inset-x-0 bottom-8 h-16 bg-emerald-700/50" />
  </motion.div>
);

const WorshipFigure = () => {
  const sequence = {
    standing: {
      rotate: 0,
      y: 0,
      transition: { duration: 1 }
    },
    bowing: {
      rotate: 45,
      y: 20,
      transition: { duration: 1 }
    },
    prostrating: {
      rotate: 90,
      y: 40,
      transition: { duration: 1 }
    }
  };

  return (
    <motion.div
      className="relative"
      initial="standing"
      animate={[
        "standing",
        "bowing",
        "prostrating",
        "bowing",
        "standing"
      ]}
      variants={sequence}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
      {/* Body */}
      <motion.div className="relative w-8 h-32 bg-white/90 rounded-full origin-bottom" />
      
      {/* Head */}
      <motion.div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/90 rounded-full" />
    </motion.div>
  );
};

export const WorshipScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px]">
        {/* Light beams */}
        {[...Array(10)].map((_, i) => (
          <LightBeam key={i} delay={i * 0.3} />
        ))}
        
        {/* Prayer scene */}
        <div className="absolute inset-x-0 bottom-32 h-64">
          <div className="absolute left-1/2 -translate-x-1/2">
            <PrayerMat />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <WorshipFigure />
            </div>
          </div>
        </div>

        {/* Text */}
        <motion.div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-3xl font-semibold text-emerald-300">
            In moments of devotion
          </p>
          <p className="text-2xl text-emerald-300/90">
            Finding peace in prostration
          </p>
        </motion.div>
      </div>
    </Scene>
  );
};
