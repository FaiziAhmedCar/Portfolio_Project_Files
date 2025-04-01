import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText("faiziahmedcar@gmail.com");
        setHasCopied(true);
        setTimeout(() => {
           setHasCopied(false); 
        }, 2000);   
    }
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3 ">
          <div className="grid-container">
            <img
              src="./assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I'm Faizi!</p>
              <p className="grid-subtext">I’m a Full-Stack Web Developer passionate about building dynamic and user-friendly web applications.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="./assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack :</p>
              <p className="grid-subtext">
              I specialize in modern web development with React.js, Next.js, and Tailwind CSS for the front-end, combined with Node.js, Express.js, and MongoDB for scalable back-end solutions. My workflow is enhanced by tools like GitHub and Arcjet.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center ">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                showGlobe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 30.377604,
                    lng: 78.067188,
                    text: "I'm here!",
                    color: "white",
                    size: 10,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
              I work remotely and adapt to various time zones to ensure smooth project collaboration.
              </p>
              <p className="grid-subtext">
              I work remotely from India, collaborating with clients worldwide.
              </p>
              <a href="#contact">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass={"w-full mt-10"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2  xl:row-span-3" >
            <div className="grid-container" >
                <img src="./assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain " />
                <div>
                    <p className="grid-headtext"  >My Passion for Coding</p>
                    <p className="grid-subtext" >Coding is more than just writing lines of code—it’s about solving problems, building innovative solutions, and creating seamless digital experiences. I love transforming ideas into functional applications, exploring new technologies, and continuously learning. Every project challenges me to think creatively and push the boundaries of what's possible.</p>
                </div>
            </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container" >
                <img src="./assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                <div className="space-y-2 flex flex-col items-center justify-center" >
                    <p className="grid-subtext  " >Contact Me</p>
                    <div className="copy-container" onClick={handleCopy} >
                <img src={hasCopied ? "./assets/tick.svg" : "./assets/copy.svg"} alt="copy" />
                <p className="lg:text-xl md:text-lg font-medium text-gray_gradient text-white" >faiziahmedcar@gmail.com</p>
                    </div>
                    

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
