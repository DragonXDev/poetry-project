import React from 'react';
import { motion } from 'framer-motion';

interface StickFigureProps {
  className?: string;
  animate?: "walking" | "reading" | "praying" | "building" | "eating" | "flying";
}

export const StickFigure: React.FC<StickFigureProps> = ({ className = "", animate = "walking" }) => {
  const animations = {
    walking: {
      legs: {
        rotate: [0, 45, 0, -45, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
      },
      arms: {
        rotate: [0, -30, 0, 30, 0],
        transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
      },
      body: {
        y: [0, -5, 0],
        transition: { duration: 0.75, repeat: Infinity }
      }
    },
    reading: {
      arms: {
        rotate: -30,
        y: 10,
        transition: {
          rotate: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }
      },
      body: {
        rotate: [0, 5, 0],
        transition: { duration: 2, repeat: Infinity }
      }
    },
    praying: {
      arms: {
        rotate: 0,
        x: [0, 5, 0],
        y: [0, -5, 0],
        transition: { duration: 2, repeat: Infinity }
      },
      body: {
        rotate: [40, 45, 40],
        transition: { duration: 2, repeat: Infinity }
      }
    },
    building: {
      arms: {
        rotate: [-60, 60],
        transition: { 
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      body: {
        rotate: [-5, 5],
        transition: { duration: 1.5, repeat: Infinity }
      }
    },
    eating: {
      arms: {
        rotate: [-45, -30],
        y: [0, 5],
        transition: { 
          duration: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      body: {
        rotate: [0, 5, 0],
        transition: { duration: 1, repeat: Infinity }
      }
    },
    flying: {
      body: {
        y: [0, -15, 0],
        rotate: [-5, 5],
        transition: { 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      },
      arms: {
        rotate: [-60, -45],
        x: [-5, 5],
        transition: { 
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }
      },
      legs: {
        rotate: [15, 0, 15],
        transition: { duration: 1, repeat: Infinity }
      }
    }
  };

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={`${className}`}
      initial="initial"
      animate={animate}
    >
      {/* Head with more detail */}
      <motion.g>
        <motion.circle 
          cx="50" 
          cy="20" 
          r="10" 
          stroke="currentColor" 
          fill="none" 
          strokeWidth="2"
          animate={{
            scale: [1, 1.05, 1],
            transition: { duration: 2, repeat: Infinity }
          }}
        />
        {/* Eyes */}
        <motion.circle 
          cx="46" 
          cy="18" 
          r="1" 
          fill="currentColor"
          animate={{
            scale: [1, 1.2, 1],
            transition: { duration: 3, repeat: Infinity }
          }}
        />
        <motion.circle 
          cx="54" 
          cy="18" 
          r="1" 
          fill="currentColor"
          animate={{
            scale: [1, 1.2, 1],
            transition: { duration: 3, repeat: Infinity }
          }}
        />
        {/* Smile */}
        <motion.path
          d="M45 23 Q50 26 55 23"
          stroke="currentColor"
          fill="none"
          strokeWidth="1"
          animate={{
            d: [
              "M45 23 Q50 26 55 23",
              "M45 23 Q50 28 55 23",
              "M45 23 Q50 26 55 23"
            ],
            transition: { duration: 3, repeat: Infinity }
          }}
        />
      </motion.g>
      
      {/* Body with more segments */}
      <motion.g variants={animations[animate]?.body}>
        <motion.line
          x1="50" y1="30" x2="50" y2="60"
          stroke="currentColor"
          strokeWidth="2"
        />
        <motion.line
          x1="50" y1="40" x2="50" y2="45"
          stroke="currentColor"
          strokeWidth="3"
          animate={{
            strokeWidth: [3, 2, 3],
            transition: { duration: 1, repeat: Infinity }
          }}
        />
      </motion.g>
      
      {/* Arms with joints */}
      <motion.g variants={animations[animate]?.arms}>
        {/* Left arm */}
        <motion.g>
          <line x1="50" y1="40" x2="40" y2="45" stroke="currentColor" strokeWidth="2" />
          <line x1="40" y1="45" x2="30" y2="50" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="45" r="2" fill="currentColor" />
        </motion.g>
        {/* Right arm */}
        <motion.g>
          <line x1="50" y1="40" x2="60" y2="45" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="45" x2="70" y2="50" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="45" r="2" fill="currentColor" />
        </motion.g>
      </motion.g>
      
      {/* Legs with joints */}
      <motion.g variants={animations[animate]?.legs}>
        {/* Left leg */}
        <motion.g>
          <line x1="50" y1="60" x2="40" y2="75" stroke="currentColor" strokeWidth="2" />
          <line x1="40" y1="75" x2="30" y2="90" stroke="currentColor" strokeWidth="2" />
          <circle cx="40" cy="75" r="2" fill="currentColor" />
        </motion.g>
        {/* Right leg */}
        <motion.g>
          <line x1="50" y1="60" x2="60" y2="75" stroke="currentColor" strokeWidth="2" />
          <line x1="60" y1="75" x2="70" y2="90" stroke="currentColor" strokeWidth="2" />
          <circle cx="60" cy="75" r="2" fill="currentColor" />
        </motion.g>
      </motion.g>
    </motion.svg>
  );
};

export default StickFigure;