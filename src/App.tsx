import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { PinnedStickman } from './components/PinnedStickman';
import { HeroScene } from './components/scenes/HeroScene';
import { EmeraldScene } from './components/scenes/EmeraldScene';
import { TechnologyScene } from './components/scenes/TechnologyScene';
import { NatureScene } from './components/scenes/NatureScene';
import { MusicScene } from './components/scenes/MusicScene';
import { WorshipScene } from './components/scenes/WorshipScene';
import { FoodScene } from './components/scenes/FoodScene';
import { TravelScene } from './components/scenes/TravelScene';
import { FinalScene } from './components/scenes/FinalScene';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
  
    const scenes = gsap.utils.toArray('.scene');
  
    scenes.forEach((scene: any) => {
      gsap.to(scene, {
        scrollTrigger: {
          trigger: scene,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
          markers: false,
          onEnter: () => {
            gsap.to(scene, {
              opacity: 1, // Ensure full visibility
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(scene, {
              opacity: 1, // Do not reduce opacity below 1
              y: 100,
              duration: 1,
              ease: "power3.in",
            });
          },
        },
      });
    });
  
    // Create a smooth scroll effect
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      <HeroScene />
      <EmeraldScene />
      <NatureScene />
      <TechnologyScene />
      <MusicScene />
      <WorshipScene />
      <FoodScene />
      <TravelScene />
      <FinalScene />
    </div>
  );
}

export default App;