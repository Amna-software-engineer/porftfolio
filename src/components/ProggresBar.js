import React,{ useRef } from 'react';
import {gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
// main function
const ProggresBar = (props) => {
  const ProggresBarRef = useRef(null);
  const percentageRef = useRef(null);
  useGSAP(()=>{
    gsap.from(ProggresBarRef.current,{
      width: 0, opacity: 0,duration: 0.5,stagger: 0.5,delay: 0.2,
      scrollTrigger: {
        trigger: "#progresBar", start:"top 30%",
        //  markers: true
      }
    })
    gsap.from(percentageRef.current,{
      x: -200,opacity: 0,duration: 0.5,stagger: 0.5,delay: 0.2,
      scrollTrigger: {
        trigger: "#progresBar",start:"top 30%", 
        // markers: true
      }
    })
  })
  // console.log(props);
  return (
    <div className='mb-6' id='progresBar'>
        <div className='text-para2 flex justify-between items-center mb-1'><span>{props.title}</span> <span className='text-heading' ref={percentageRef}>{props.width}</span></div>
        <div className={`w-full  h-[3px] bg-para1 rounded-xl relative `}>
          <div className={`absolute top-0 left-0 h-full bg-heading rounded-xl`} style={{width:` ${props.width}`}} ref={ProggresBarRef}></div>
        </div>
    </div>
  )
}
export default ProggresBar;