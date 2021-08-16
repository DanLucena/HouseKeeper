import './style.scss';
import Particles from 'react-particles-js';

export function Hero() {
  return (
    <div className="hero-container">
      <div className="text-hero">
        <h1 className="first-title">Control your activities and your</h1>
        <h1 className="sub-title">SMARTHOME</h1>
        <p className="text">If you want to have more control over your routine, your activities or the equipment in your smart<br /> home, this is the system you are looking for.</p>
        <button><span>GET START</span> <div className="teste"></div></button>
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