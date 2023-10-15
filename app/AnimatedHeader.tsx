'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';

const AnimatedHeader = () => {
  const [vantaEffect, setVantaEffect] = useState<unknown>(null);
  const headerAnimationRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const effect: unknown = WAVES({
        el: headerAnimationRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: true,
        // minHeight: 200.0,
        // minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xc000000,
        shininess: 30.0,
        waveHeight: 7.5,
        waveSpeed: 0.35,
        zoom: 1,
      });
      setVantaEffect(effect);
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      (vantaEffect as any)?.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div className="h-full w-screen max-w-7xl" ref={headerAnimationRef} />
    </>
  );
};

export default AnimatedHeader;
