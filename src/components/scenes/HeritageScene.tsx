import React from 'react';
import { Heart } from 'lucide-react';
import Scene from '../Scene';
import StickFigure from '../StickFigure';

export const HeritageScene = () => (
  <Scene className="scene bg-purple-900/30">
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center gap-4">
        <Heart className="w-16 h-16" />
      </div>
      <StickFigure animate="praying" className="text-white" />
      <p className="text-2xl">From Chughtai and Manzoor,<br/>I am from courage and honor</p>
    </div>
  </Scene>
);