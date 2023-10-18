'use client';

import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.waves.min';
import NET from 'vanta/dist/vanta.net.min';

export enum Effects {
  WAVES = 'WAVES',
  NET = 'NET',
}

const Vanta: FC<{ effectType: Effects }> = ({ effectType }) => {
  const [vantaEffect, setVantaEffect] = useState<unknown>(null);
  const headerAnimationRef = useRef(null);

  useEffect(() => {
    let effect: unknown = null;

    if (vantaEffect) {
      return;
    }

    switch (effectType) {
      case Effects.WAVES:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        effect = WAVES({
          el: headerAnimationRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xc000000,
          shininess: 30.0,
          waveHeight: 7.5,
          waveSpeed: 0.35,
          zoom: 1,
        });
        break;

      case Effects.NET:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        effect = NET({
          el: headerAnimationRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x595959,
          backgroundColor: 0x0,
          points: 11.0,
        });
        break;
    }

    setVantaEffect(effect);

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
      (vantaEffect as any)?.destroy();
    };
  }, [vantaEffect, effectType]);

  return (
    <>
      <div className="h-full w-full" ref={headerAnimationRef} />
    </>
  );
};

export default Vanta;
