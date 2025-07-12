import ServiceCard from './ServiceCard';
import { PiDevicesBold } from "react-icons/pi";
import { IoDesktopSharp } from 'react-icons/io5';
import { AiOutlineCode } from 'react-icons/ai';
import { SiBootstrap, SiTailwindcss } from 'react-icons/si'
import OverlayText from './OverlayText';
import { forwardRef } from 'react';
// main function
const Services = forwardRef((props,ref) => {
  const services =[
    {
      title: "Front-End Design",
      icon: <IoDesktopSharp size={90}/>,
      description: "I develop interactive and engaging websites using HTML, CSS, and JavaScript, focusing on turning designs into functional web pages."
    },
    {
      title: "Responsive Design",
      icon:  <PiDevicesBold size={90} />,
      description: "I design websites that look great and function perfectly on all devices, from desktop computers to smartphones, adapting to any screen size."
    },
    {
      title: "PSD to HTML/CSS",
      icon: <AiOutlineCode size={90}/>,
      description: "I transform PSD files into high-quality HTML/CSS, ensuring responsiveness and cross-browser compatibility."
    },
    {
      title: <>Figma/PSD to <br /> Bootstrap/TailwindCSS</>,
      icon: (
        <div className="flex space-x-2">
          <SiBootstrap  size={90}/>
          <SiTailwindcss size={90}/>
        </div>
      ),
      description: "I convert Figma and PSD designs into fully responsive websites using Bootstrap or TailwindCSS."
    }
  ]
  return (
        // Services Section
    <section className='bg-background1 w-full min-h-screen' id='services' ref={ref}>
        <div className='container py-6 lg:py-12'>
            <div className='text-center'>
            <div className='relative w-full text-center'>
            <h2 className='title text-para2 z-[99]'>SERVICES</h2>
            <OverlayText content="SERVICES" top="10%" left="30%"/>
            </div>
            <div className='flex justify-between items-center flex-wrap'>
            <ServiceCard services={services}/>
            </div>
            </div>
        </div>
    </section>
  )
})

export default Services;