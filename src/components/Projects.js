import React, { useState,useEffect, forwardRef } from 'react';
import OverlayText from './OverlayText';
import { FaCirclePlus } from 'react-icons/fa6';
import Btn from "./Btn";
import NewProject from './NewProject';
import SlickSlider from './SlickSlider';
// main function
const Projects = forwardRef((props,ref) => {
  // slider settings
  const [isSlider, setIsSlider] = useState(window.innerWidth<992);
  useEffect(() => {
   const HandleResize=() =>{
    setIsSlider(window.innerWidth<992)
   }
    window.addEventListener("resize",HandleResize)
  
    return () => {
     window.removeEventListener("resize",HandleResize) 
    }
  }, [])
  const responsiveSetting=[
    {
    breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
  },
  {
  breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
  }
]
  // project details
  const [selectedProjectTitle, setselectedProjectTitle] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  
  let ProjectDetail=[
    {description:"WebsiteTemplateDemo is a user-friendly website designed with HTML, CSS, JavaScript, jQuery, and SlickSlider. The site features a stunning hero section with a beautiful linear gradient background, Bootstrap cards, and dynamic SlickSlider for engaging visuals. It also includes attractive hover effects to enhance user interaction, showcasing a blend of modern design elements and functionality. Click the video button to view a detailed screen recording of the website.",title:"Website Template Demo",src:"/assets/images/project14.png", vSrc:"/assets/videos/website template demo.mp4"},
    {description:"it is a simple user-friendly tic-tac-toe game designed by me using HTML, CSS, and JavaScript. Players can take turns as X and O, each represented in distinct colors for easy identification. The game features victory messages upon winning, a reset option for starting new rounds, and subtle animations to enhance the gaming experience. Click the video button to view a detailed screen recording of the website.",title:"Tic Tac Toe Game",src:"/assets/images/project10.png", vSrc:"/assets/videos/tic tac toe.mp4"},
    {description:"It is a simple WeatherApp and  dynamic web application built with HTML, CSS, and JavaScript. Users can enter a city name to view detailed weather information, including current conditions, an illustrative weather image, humidity percentage, and wind speed. Powered by the Weather API, this app offers real-time updates and an interactive experience. Click the video button to view a detailed screen recording of the website.",title:"Wheather App",src:"/assets/images/project11.png", vSrc:"/assets/videos/weather app.mp4"},
    {description:"Currency Converter App is a user-friendly web application created with HTML, CSS, and JavaScript. It features an input field for users to enter an amount of currency, along with two selection boxes for choosing the 'From' and 'To' currencies, each displaying country flags and codes. The app includes a message box and a 'Get Exchange Rate' button to fetch and display the converted amount. Utilizing the Currency API for currency rates and an additional API for country flags, this app provides accurate and up-to-date exchange information. Click the video button to view a detailed screen recording of the website.",title:"Currency Converter",src:"/assets/images/project13.png", vSrc:"/assets/videos/currency converter.mp4"},  
    {description:"It a simple To Do List website which i have created using HTML, CSS, and JavaScript. This application allows users to easily write down tasks, remove tasks they no longer need, and mark tasks as completed when they're done. It's like having a digital notebook to keep track of your daily tasks efficiently. Click the video button to view a detailed screen recording of the website.",title:"To Do List",src:"/assets/images/project12.png", vSrc:"/assets/videos/to do list.mp4"},
    {description:"Bubble Game is an engaging web application developed using HTML, CSS, and JavaScript. The game features three main elements: a hit box, a timer box, and a score box, along with a primary area filled with bubbles containing randomly generated numbers. Players must click on bubbles that match the number displayed in the hit box. The score dynamically updates with each correct hit, and a message is displayed when the game timer runs out.",title:"Bubble Game",src:"/assets/images/project15.png", vSrc:"/assets/videos/bubble game.mp4"},
    {description: "Quiz App is a fully functional and interactive web application built using React JS, Tailwind CSS, and Redux Toolkit. Each question has a 15-second countdown timer, and users can skip questions or select an answer. At the end of the quiz, a scoreboard is displayed showing the final score, correct and incorrect answers. The app ensures real-time state updates using Redux Toolkit and offers a smooth and engaging quiz-taking experience. Click the video button to view a detailed screen recording of the app.", title: "Quiz App", src: "/assets/images/quiz-app.png", vSrc: "/assets/videos/quiz-app.mp4" }
]
// open new project
   const openProject = (project) => {
     setselectedProjectTitle(project.title);
     setSelectedProject(project)
  }
 const handleClose=()=>{
  setSelectedProject(null);
 }
  return (
        // Projects Section
    <div className='bg-background1 w-full min-h-screen relative' id='projects' ref={ref}>
    <section className='container py-6 lg:py-12  flex items-center justify-between flex-col'>
             {/* title */}
      <div className='relative w-full text-center'>
            <h2 className='title before:left-[-12px] text-para2 z-[99]'>PROJECTS</h2>
            <OverlayText content="PROJECTS" top="10%" left="30%"/>
      </div>
      {/* content */}
        {
          isSlider ?
           (<SlickSlider slidesToShow={3} slidesToScroll={3} responsiveSetting={responsiveSetting}>
          { ProjectDetail.map((project,i)=>{
            return(
              <div className="project-card group relative w-[300px]" onClick={()=>{
                openProject(project)
              }} key={i}>
              <div className="overlay" ></div> <img src={project.src} alt="project14" className='group-hover:scale-105 transition'/> <div className="project-detail"> <FaCirclePlus size={30} className='text-yellow-400 cursor-pointer hover:scale-110'/><h5>{project.title}</h5></div> 
           </div> )})
           }
          </SlickSlider>
          ):(
            <>
            <div className='flex flex-shrink-0 flex-wrap justify-between items-center gap-6'>
             {ProjectDetail.map((project,i)=>{
              return(
                <div className="project-card group relative inline-block" onClick={()=>{
                  // setselectedProject(project.title);
                  // <NewProject project={project} />
                  openProject(project)
                }} key={i}>
                <div className="overlay" ></div> <img src={project.src} alt="project14" className='group-hover:scale-105 transition'/> <div className="project-detail"> <FaCirclePlus size={30} className='text-yellow-400 cursor-pointer hover:scale-110'/><h5>{project.title}</h5></div> 
             </div> )})}
      </div>
          <div className="mt-5">
          {/* <Btn content="Load More"/> */}
    </div>
    </>
          )
        }
    </section>
  {     selectedProject &&  ( <NewProject project={selectedProject} close={handleClose}/>)
  }    </div>
    )
  })
export default Projects;