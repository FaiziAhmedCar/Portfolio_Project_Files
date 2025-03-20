import { Canvas } from "@react-three/fiber";
import MySetup from "./../components/MySetup";
import CanvasLoader from "./../components/CanvasLoader";
import { Suspense } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "./../components/Ring";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({
    minWidth: 441,
    maxWidth: 768,
  });
  // const isTablet = useMediaQuery({
  //   minWidth: 769,
  //   maxWidth: 1024,
  // });

  const size = calculateSizes(isSmall, isMobile);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl text-white font-medium font-generalsans text-center">
          Hi, I am Faizi <span className="waving-hand">🤟</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I am a Full Stack Web Developer
        </p>
      </div>
      <div className="w-full  h-full absolute  inset-0">
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <MySetup
                scale={size.deskScale}
                position={size.deskPosition}
                rotation={[0, 0.1, -0.01]}
              />
            </HeroCamera>

            <group>
              <Target position={size.targetPosition} scale={size.targetScale} />
              <ReactLogo
                position={size.reactLogoPosition}
                scale={size.reactLogoScale}
              />
              <Cube position={size.cubePosition} scale={size.cubeScale} />
              <Rings position={size.ringPosition} scale={size.ringScale} />
            </group>
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 1]} intensity={5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute  bottom-6 left-0 right-0 w-full z-10 c-space">
        <a href="#about"  className="w-fit">
          <Button
            name="Let's work together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
