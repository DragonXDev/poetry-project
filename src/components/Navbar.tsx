import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="text-xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            Amaar Chughtai
          </motion.div>
          <div className="flex space-x-8">
            {['Hero', 'Emerald', 'Technology', 'Nature', 'Heritage', 'Travel', 'Final'].map((item) => (
              <motion.button
                key={item}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector(`.${item.toLowerCase()}-scene`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
