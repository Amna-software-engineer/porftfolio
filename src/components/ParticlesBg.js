import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesBg = () => {
    // const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (

    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 170,
            // value: getRandomNumber(200,300),
          },
          size: {
            value:0.1,
            // value:getRandomNumber(0.1,1.3),
            random: true
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
          },
          move: {
            enable: true,
            speed: 0.2,
          },
        },
      }}
      className="w-full h-full"/>

  );
};

export default ParticlesBg;
