import { AnimationControls, useAnimation } from 'framer-motion';
import { ReactNode } from 'react';
import { createContext } from 'react';

interface EstadoContextProps {
  controls: AnimationControls;
  animationNormalState: () => void;
}

export const AnimationContext = createContext<EstadoContextProps>({} as EstadoContextProps);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const controls = useAnimation();

  function animationNormalState() {
    controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
  }

  return (
    <AnimationContext.Provider value={{ controls, animationNormalState }}>
      {children}
    </AnimationContext.Provider >
  );
}