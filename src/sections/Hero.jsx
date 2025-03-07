import { Canvas } from "@react-three/fiber";
import MySetup from "./../components/MySetup";
import CanvasLoader from "./../components/CanvasLoader";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({
    minWidth: 441,
    maxWidth: 768,
  });
  const isTablet = useMediaQuery({
    minWidth: 769,
    maxWidth: 1024,
  });

  const size = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl text-white font-medium font-generalsans text-center">
          Hi, I am Faizi <span className="waving-hand">🤟</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          I am a Full Stack Web Developer
        </p>
      </div>
      <div className="w-full  h-full absolute inset-0">
        <Canvas className="w-full h-full ">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls
              enableZoom={false}
              enablePan
              enableRotate
              minPolarAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2}
            />
            <MySetup
              scale={size.deskScale}
              position={size.deskPosition}
              rotation={[0, 0.1, -0.01]}
            />
            <group>
              <Target position={size.targetPosition} scale={3}/>
              
            </group>
            <ambientLight intensity={0.9} />
            <directionalLight position={[5, 5, 1]} intensity={5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
