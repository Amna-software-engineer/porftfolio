import React, { forwardRef, useRef } from 'react';
import Btn from "./Btn";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import OverlayText from './OverlayText';
gsap.registerPlugin(ScrollTrigger);  
// main function
const About = forwardRef((props,ref) => {
  const aboutRef = useRef(null);
 useGSAP(()=>{
  gsap.from(aboutRef.current,
    {
        x: -200, opacity: 0, duration: 1,
        scrollTrigger: {
            trigger: "#about", start: "top 50px",
            // markers:true
        }
    })
 })
  return (
        // About Section
    <div className='bg-background2 overflow-x-hidden' ref={ref}>
    <section id="about" class="bg-background2 container text-para1 lg:min-h-screen py-6 lg:py-12 text-xl w-full"> 
    <div class="w-full text-center relative" >
      <h2 class="title text-center z-[99]">ABOUT ME</h2>
      <OverlayText content="ABOUT ME" top="41%" left="30%"/>
    </div>
  <div class="bottom lg:mt-12 flex flex-col justify-between items-start  lg:gap-16 lg:flex-row">
 <div class="bottom-part-1 lg:w-1/2 mb-6 lg:mb-0">
  <img src="assets/images/about.jpg" alt="aboutme" class="lg:min-h-[600px] lg:min-w-[100%] max-w-[100%]" ref={aboutRef}/>
</div>
 <div class="bottom-part-2 lg:w-1/2">
  <h3 class="text-para2 text-4xl font-semibold">Hi There! I'm Amna Haq</h3> <h4 class="text-heading my-5 text-2xl">Frontend Developer</h4>
  <p class="text-[18px] lg:text-xl leading-relaxed">I'm a Front-End Developer with a passion for visual design and digital branding. My focus is on creating websites and applications that not only look great but also attract and inspire users. I aim to design experiences that spark interest, encourage interaction, and leave a positive impression.</p>
  <table class="text-[18px] lg:text-xl mt-4">
        <tbody class="lg:leading-loose">
            <tr> <td>Birthday </td> <td>: June 04, 2004</td> </tr>
            <tr> <td>Phone </td> <td>: +92 334 2225989</td> </tr>
            <tr> <td>Email </td> <td>: amnahaqamna83@gmail.com</td> </tr>
            <tr> <td>From </td> <td>: Bannu, Khyber Pakhtunkhwa, Pakistan </td> </tr>
            <tr> <td>Language </td> <td>: Urdu, English, Pashto</td> </tr>
            <tr> <td>Freelance </td> <td>: Available</td> </tr>
        </tbody>
        </table>
        <Btn href="Amna_Haq_CV_July_2025.pdf" content="Download CV"/>
</div>
</div>
   </section>
   </div>
  )
})
export default About;