import React, { forwardRef } from 'react';
import OverlayText from './OverlayText';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiExpress, SiMongodb } from "react-icons/si";
import { SiTailwindcss, SiGreensock } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa6';


const Skills = forwardRef((props, ref) => {
const skillList = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React JS", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
];

  return (
    <section className='bg-background1 w-full min-h-screen' id='skills' ref={ref}>
      <div className='container py-6 lg:py-12'>
        <div className='text-center'>
          <div className='relative w-full text-center'>
            <h2 className='title text-para2 z-[99]'>MY SKILLS</h2>
            <OverlayText content="MY SKILLS" top="10%" left="30%" />
          </div>

      <div className='flex justify-center items-center flex-wrap gap-6 mt-10'>
  {skillList.map((skill, index) => (
    <div
      key={index}
      className='bg-background2 hover:bg-[#1f1f1f] text-white rounded-2xl text-center shadow-lg p-6 w-[260px] transition-transform hover:scale-105 flex justify-center items-center flex-col group'
    >
      <div className='text-4xl mb-3 text-gray-400 group-hover:text-yellow-400 transition-colors'>
        {skill.icon}
      </div>
      <h5 className='text-xl font-semibold text-para2'>{skill.name}</h5>
    </div>
  ))}
</div>

        </div>
      </div>
    </section>
  );
});

export default Skills;
