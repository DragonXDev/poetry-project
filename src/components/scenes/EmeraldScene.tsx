import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Scene from '../Scene';
import StickFigure from '../StickFigure';

const Calendar = () => (
  <motion.div 
    className="absolute -right-96 top-1/2 -translate-y-1/2 w-64 bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-emerald-500/20"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-center border-b border-emerald-500/20 pb-4">
      <h3 className="text-2xl font-semibold text-white">May 2024</h3>
    </div>
    <div className="grid grid-cols-7 gap-2 mt-6 text-sm">
      {/* Weekday Headers */}
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
        <div key={i} className="text-center text-white">{day}</div>
      ))}
      {/* Empty days for alignment */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={`empty-${i}`} className="text-center"></div>
      ))}
      {/* Dates for May 2024 */}
      {Array.from({ length: 31 }, (_, i) => (
        <motion.div
          key={i}
          className={`text-center p-2 ${
            i + 1 === 4 ? 'bg-emerald-500/30 rounded-full font-bold text-white' : 'text-white'
          }`}
          whileHover={{ scale: 1.1 }}
        >
          {i + 1}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Emerald = () => (
  <motion.div
    className="relative w-96 h-96"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Main emerald shape */}
    <div className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Complex emerald shape */}
        <path
          d="M50 5 L80 20 L90 50 L80 80 L50 95 L20 80 L10 50 L20 20 Z"
          className="fill-emerald-500"
          filter="url(#emeraldGlow)"
        />
        
        {/* Inner facets */}
        <path
          d="M50 15 L70 25 L75 50 L70 75 L50 85 L30 75 L25 50 L30 25 Z"
          className="fill-emerald-400/50"
        />
        
        <path
          d="M50 25 L60 35 L65 50 L60 65 L50 75 L40 65 L35 50 L40 35 Z"
          className="fill-emerald-300/30"
        />

        {/* Highlight */}
        <path
          d="M45 20 L55 25 L60 35 L55 45 L45 50 L35 45 L30 35 L35 25 Z"
          className="fill-white/20"
        />

        {/* Definitions for filters and gradients */}
        <defs>
          <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feFlood floodColor="#10B981" floodOpacity="0.5" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>

    {/* Magical particles */}
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-emerald-300/50 rounded-full blur-sm"
        style={{
          left: `${50 + Math.cos((i / 12) * Math.PI * 2) * 120}%`,
          top: `${50 + Math.sin((i / 12) * Math.PI * 2) * 120}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2 + i * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </motion.div>
);

export const EmeraldScene = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <Scene className="bg-gradient-to-b from-emerald-900 to-emerald-950">
      <div className="flex flex-col items-center justify-center min-h-[80vh] relative">
        <div className="relative flex items-center justify-center">
          <Emerald />
          <Calendar />
        </div>

        <motion.div 
          className="mt-16 text-center max-w-2xl space-y-6"
          style={{ opacity }}
        >
          <motion.p 
            className="text-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I am from the emerald of May,
          </motion.p>
          <motion.p 
            className="text-xl text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A birthstone that symbolizes growth and prosperity
          </motion.p>
          <motion.p 
            className="text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Like the fresh spring leaves that emerge anew,<br/>
            My journey unfolds with each passing day
          </motion.p>
        </motion.div>

        <StickFigure animate="observing" className="text-white w-16 h-16 mt-8" />
      </div>
    </Scene>
  );
};
