import './style.scss';
import Particles from 'react-particles-js';
import { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from 'react-icons/fi';

export function Hero() {
  const constraintsRef = useRef(null);
  return (
    <div className="hero-container">
      <div className="text-hero">
        <h1 className="first-title">Control your activities and your</h1>
        <h1 className="sub-title">SMARTHOME</h1>
        <p className="text">If you want to have more control over your routine, your activities or the equipment in your smart<br /> home, this is the system you are looking for.</p>
        <motion.div className="container" ref={constraintsRef} >
          <p>GET START</p>
          <motion.div className="item" drag="x" dragConstraints={{ left: 0, right: 152 }} >
            <FiArrowRight color="#6C63FF" size="1.2rem" />
          </motion.div>
        </motion.div>
      </div>
      <Particles
        params={{
          particles: {
            "number": {
              "value": 180
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
    </div>
  );
}