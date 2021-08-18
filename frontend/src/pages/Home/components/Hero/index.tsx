import './style.scss';
import Particles from 'react-particles-js';
import { useRef, useState } from "react";
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { FiArrowRight } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

export function Hero() {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const xInput = [0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #6C63FF 0%, #6C63FF 100%)",
    "linear-gradient(180deg, #B5B0FF 0%, #B5B0FF 100%)",
  ]);

  const [arrowMovement, serArrowMovement] = useState(0);
  const [particlesNumber, setParticlesNumber] = useState(150);

  const controls = useAnimation();

  function handleDragEnd(_: any, info: any) {
    const offset = info.offset.x;

    if (offset > 72) {
      controls.start({ x: 152, opacity: 1, transition: { duration: 0.3 } });
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  }

  const handleResize = () => {
    (window.innerWidth <= 1050)
      ? setParticlesNumber(50)
      : setParticlesNumber(150)
  }

  window.addEventListener('load', handleResize);
  window.addEventListener('resize', handleResize);


  return (
    <div className="hero-container">
      <div className="text-hero">
        <h1 className="first-title">Control your activities and your</h1>
        <h1 className="sub-title">SMARTHOME</h1>
        <p className="text">If you want to have more control over your routine, your activities or the equipment in your smart<br /> home, this is the system you are looking for.</p>
        <motion.div className="container" ref={constraintsRef} style={{ background }}>
          <p>GET START</p>
          <motion.div className="item" drag="x" dragConstraints={{ left: 0, right: 152 }} style={{ x }} onDrag={(event, info) => { serArrowMovement(info.offset.x) }} onDragEnd={handleDragEnd} whileTap={{ cursor: 'grabbing' }} animate={controls}>
            <FiArrowRight color={arrowMovement > 50 ? "#B5B0FF" : "#6C63FF"} size="1.2rem" />
          </motion.div>
        </motion.div>
      </div>
      <Particles
        params={{
          particles: {
            "number": {
              "value": particlesNumber
            },
            line_linked: {
              shadow: {
                enable: true,
                color: "#6C63FF",
                blur: 1
              }
            },

          },

        }}
        style={{
          width: '100%',
        }}
      />
      <div className="container-arrow">
        <IoIosArrowDown className="arrow-icon" size="2.5rem" color="#6C63FF" />
      </div>
    </div>
  );
}