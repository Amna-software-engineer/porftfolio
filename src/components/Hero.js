import React, { useEffect, useRef,forwardRef } from 'react';
import Btn from "./Btn";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Social from './Social';
import ParticlesBg from './ParticlesBg';
gsap.registerPlugin(ScrollTrigger);   
// main function
const Hero = forwardRef((props, ref ) => {
  const heroPart2Ref = useRef(null);
  useEffect(() => {
    gsap.from(heroPart2Ref.current, {
      x: -200,
      duration: 2,
      scrollTrigger: {
        trigger: heroPart2Ref.current,
        start: "50px  0px", 
        // end:"bottom 90%",
        scrub: 1,
        // markers: true,
      }
    });
  }, []);
return (
   <>
       {/*  Hero Section */}
     <section id="hero" className="bg-background1 relative lg:min-h-screen overflow-x-hidden" ref={ref}>
        <div className="absolute top-0 left-0 w-full h-full z-auto">
     <ParticlesBg/>
     </div>
     <div className="container flex gap-10 justify-between lg:relative pr-0">
         <div className="flex flex-col mt-10 lg:mt-36 select-none mb-20 lg:mb-0"> <span className="text-heading text-3xl -mb-10">Hello, I'm </span><br/> <span className="text-para2 text-[9rem] font-bold leading-[1.2] name">Amna <br/> Haq</span> <br/> <span className="text-gray-600 text-3xl">MERN/Full Stack Developer</span> <br/> <Btn href="mailto:amnahaqamna83@gmail.com" content="Hire Me"/>   </div>
         <div className="hero-part2 hidden lg:block"  ref={heroPart2Ref}>
            src=
             <img src={"assets/images/Design.png"} alt='imgNotFound'   className="min-w-[110%] z-20 relative lg:-right-60 " />
          <Social />
         </div>
     </div>
    </section>
   </>
  )
})

export default Hero;