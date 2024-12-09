import React from 'react';
import { motion } from 'framer-motion';
import Scene from '../Scene';

const PianoKey = ({ white = true, note, delay = 0 }) => (
  <motion.div
    className={`relative ${white ? 'w-20 h-72' : 'w-12 h-48 -ml-6 z-10'} ${white ? 'bg-white' : 'bg-gray-900'} rounded-b-md`}
    style={{
      boxShadow: white ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.3)'
    }}
    whileHover={{ y: 2 }}
    initial={{ y: 0 }}
    animate={{
      y: [0, -4, 0],
    }}
    transition={{
      duration: 0.3,
      delay,
      repeat: Infinity,
      repeatDelay: 4
    }}
  >
    <motion.div
      className={`absolute bottom-0 left-0 right-0 ${white ? 'bg-blue-300' : 'bg-blue-400'} rounded-b-md`}
      initial={{ height: 0 }}
      animate={{
        height: ['0%', '30%', '0%'],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 2
      }}
      style={{
        opacity: 0.3
      }}
    />
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-500">
      {note}
    </div>
  </motion.div>
);

const Piano = () => (
  <div className="relative">
    <motion.div
      className="relative bg-gray-800 rounded-lg p-8 pt-16 shadow-2xl"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Music stand */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-96 h-48">
        <div className="w-full h-full bg-gray-700 rounded-t-lg transform -skew-x-6 shadow-lg" />
      </div>

      {/* Keys container */}
      <div className="relative flex justify-center">
        {/* White keys */}
        <div className="flex">
          {[
            'C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'A', 'B'
          ].map((note, i) => (
            <PianoKey key={i} white note={note} delay={i * 0.1} />
          ))}
        </div>

        {/* Black keys */}
        <div className="absolute top-0 left-0 flex w-full justify-between px-10">
          {[
            'C#', 'D#', '', 'F#', 'G#', 'A#', '', // First set of black keys
            'C#', 'D#', '', 'F#', 'G#', 'A#', '' // Second set of black keys
          ].map((note, i) =>
            note ? (
              <PianoKey key={i} white={false} note={note} delay={i * 0.1 + 0.05} />
            ) : (
              <div key={i} className="w-20"></div> // Spacer for missing black keys
            )
          )}
        </div>
      </div>
    </motion.div>
  </div>
);




export const MusicScene: React.FC = () => {
  return (
    <Scene className="scene overflow-hidden bg-gradient-to-b from-gray-900 to-indigo-900">
      <div className="relative w-full h-[800px] flex flex-col items-center justify-center">
        <Piano />
        
        {/* Text */}
        <motion.div 
          className="absolute bottom-20 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <p className="text-3xl font-semibold text-blue-300">
            Through melodies of life
          </p>
          <p className="text-2xl text-blue-300/90">
            Each note a story untold
          </p>
        </motion.div>
      </div>
    </Scene>
  );
};
