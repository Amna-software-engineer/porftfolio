import React, { forwardRef } from 'react';
import OverlayText from './OverlayText';
import { RiGraduationCapFill } from 'react-icons/ri';
// main function
const Resume = forwardRef((props,ref) => {
  return (
     // Resume Section
    <div className='bg-background2 w-full min-h-screen' id='resume' ref={ref}>
      <section className='container py-6 lg:py-12  flex items-center justify-between flex-col'>
        {/* title */}
      <div className='relative w-full text-center'>
            <h2 className='title before:left-[-12px] text-para2 z-[99]'>RESUME</h2>
            <OverlayText content="RESUME" top="10%" left="30%"/>
      </div>
      {/* content */}
      <div className="content text-para1">
      <h3 className='text-para2 text-4xl mb-8 flex items-center gap-6 relative'><RiGraduationCapFill className='absolute -left-4'/> <span  className='absolute left-[4rem] font-semibold'>Education</span></h3>
        <div className="text-xl border-l-[1px] pl-[4rem] border-para1 pb-4">
           <div className="timeline-circle">
                <h3 className="text-4xl text-heading mb-3 ">Intermediate in Science</h3> <h4>2020 - 2021</h4>
            <h4 className="text-para2 my-3 font-medium">GPGC For Women Bannu</h4>
            <p className="">Completed my FSC with a strong emphasis on science subjects, including Physics, Chemistry, and Mathematics. Actively participated in various academic projects and extracurricular activities, which helped in developing a solid foundation for further studies in the field of computer science.</p>
        </div>
        <div className="after:top-3 timeline-circle"> 
            <h3 className="text-4xl text-heading mb-3 mt-8">Undergraduate</h3> <h4>2022 - 2026</h4>
            <h4 className="text-para2 my-3 font-medium">GPGC Bannu</h4>
            <p className="">During my undergraduate studies, I'm learning about computer science with a focus on web development, software engineering, and data structures. I'm not just studying theory but also applying it to solve real-world problems and create new and useful solutions</p>
        </div>
        </div>
    </div>
      </section>
    </div>
  )
})
export default Resume;