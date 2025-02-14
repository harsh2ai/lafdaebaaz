import { useSpring, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

interface IPhoneProps {
  screenshotUrl: string;
}

export function IPhone({ screenshotUrl }: IPhoneProps) {
  const [{ rotateX, rotateY }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      // Calculate rotation based on cursor position
      // Limit rotation to keep screen visible (-15 to 15 degrees)
      const rotX = ((clientY / innerHeight) * 30 - 15) * -1;
      const rotY = (clientX / innerWidth) * 30 - 15;
      
      api.start({
        rotateX: rotX,
        rotateY: rotY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [api]);

  return (
    <div className="perspective-1000 w-[300px] h-[600px]">
      <animated.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full relative"
      >
        {/* iPhone Frame */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1c1c1e] via-[#2a1f3d] to-[#3d1f2a] rounded-[50px] shadow-xl transform-style-preserve-3d">
          {/* Top Edge Highlight */}
          <div className="absolute top-0 left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-purple-500/20" />
          
          {/* Bottom Edge Highlight */}
          <div className="absolute bottom-0 left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-purple-500/20 via-pink-500/30 to-purple-500/20" />
          
          {/* Left Edge Highlight */}
          <div className="absolute left-0 top-[50px] bottom-[50px] w-[2px] bg-gradient-to-b from-purple-500/20 via-pink-500/30 to-purple-500/20" />
          
          {/* Right Edge Highlight */}
          <div className="absolute right-0 top-[50px] bottom-[50px] w-[2px] bg-gradient-to-b from-pink-500/20 via-purple-500/30 to-pink-500/20" />
          
          {/* Corner Highlights */}
          <div className="absolute top-0 left-0 w-[50px] h-[50px] rounded-tl-[50px] bg-gradient-to-br from-purple-500/20 to-transparent" />
          <div className="absolute top-0 right-0 w-[50px] h-[50px] rounded-tr-[50px] bg-gradient-to-bl from-purple-500/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[50px] h-[50px] rounded-bl-[50px] bg-gradient-to-tr from-purple-500/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-[50px] h-[50px] rounded-br-[50px] bg-gradient-to-tl from-purple-500/20 to-transparent" />
          
          {/* Screen */}
          <div className="absolute inset-[12px] rounded-[38px] overflow-hidden bg-black">
            <img
              src={screenshotUrl}
              alt="App Screenshot"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[25px] bg-[#1c1c1e] rounded-b-[20px] z-10">
            {/* Notch Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/15 to-purple-500/10 rounded-b-[20px]" />
          </div>
          
          {/* Side Button with Gradient */}
          <div className="absolute right-[-2px] top-[120px] w-[3px] h-[30px] bg-gradient-to-b from-pink-500/30 to-purple-500/30 rounded-r-sm" />
          <div className="absolute right-[-2px] top-[170px] w-[3px] h-[60px] bg-gradient-to-b from-purple-500/30 to-pink-500/30 rounded-r-sm" />
          
          {/* Volume Buttons with Gradient */}
          <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-gradient-to-b from-pink-500/30 to-purple-500/30 rounded-l-sm" />
          <div className="absolute left-[-2px] top-[170px] w-[3px] h-[60px] bg-gradient-to-b from-purple-500/30 to-pink-500/30 rounded-l-sm" />
        </div>
      </animated.div>
    </div>
  );
}