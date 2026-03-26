import { useContext, useState,useRef } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMenu , IoClose} from "react-icons/io5";
import { MdLightMode, MdNightlight } from 'react-icons/md';
import {ThemContext} from "../context/ThemContext"
import { ScrollContext } from '../context/ScrollContext';
// main function
const Header = () => {
const DarkBtnRef = useRef(null);
const LightBtnRef = useRef(null);
 const {theme,themeToggle} = useContext(ThemContext);
 const {homeRef,aboutRef,skillsRef,resumeRef,projectsRef,contactRef}=useContext(ScrollContext)
//  console.log(theme);
//  toggling menu
    const [toggle,setToggle]=useState(true);
    const links=[
      { link: "About",
        href:"#about",
        ref: aboutRef
      },
      { link: "Skills",
        href:"#skills",
        ref: skillsRef
      },
      { link: "Resume",
        href:"#resume",     
          ref: resumeRef
          
      },
      { link:   "Projects",
        href:"#projects",
        ref: projectsRef
      },
      { link:   "Contact me",
        href:"#contact",
        ref: contactRef
      }, ]
      // function to handle smooth scroll
      const handleScroll =(elemRef) =>{
        if(elemRef && elemRef.current){
          window.scroll({top: elemRef.current.offsetTop,behavior:"smooth"})
        }else{
          console.log("elemnt not found");
          
        }
      }
        
  return (
    // Header Section
   <div className=' bg-background1 z-[9999] sticky top-0 left-0 shadow'>
    <header className="lg:container mx-auto px-3 flex justify-between items-center text-para2 py-5 select-none gap-6">
    <div className="logo text-para2  text-3xl md:text-4xl font-medium"><span className="text-heading">Amna</span>Haq</div>
    <div className='flex justify-end items-center'>
    <nav className={` bg-background1 flex items-start flex-col w-full mx-auto px-3 pb-6 gap-5 absolute top-[75px] left-0 z-[9999] lg:flex-row lg:flex lg:justify-end lg:relative lg:top-1 lg:gap-5 lg:pb-0 ${
      toggle ? 'hidden' : 'flex'
      }`} id="navbar" >
        <a class="text-para1 transition hover:text-heading lg:text-[14px] lg:text-heading lg:uppercase" href='/'  onClick={()=>(handleScroll(homeRef))}>Home</a>
        {
            links.map((item,i)=>{
                return(
                    <a className="text-para1 transition hover:text-heading lg:text-[14px] lg:text-para2 lg:uppercase" href={item.href}  key={i} onClick={()=>(handleScroll(item.ref))}>
                    {item.link} 
                    </a>
                )
            })
        }
         <a class="text-para1 transition hidden  hover:text-heading lg:text-lg lg:text-para2 lg:uppercase  lg:block" href="#" >|</a>
          <a className="lg:flex lg:justify-between lg:items-center text-para1 transition hidden hover:text-heading lg:text-[14px] lg:text-heading lg:uppercase whitespace-nowrap" href="tel:03342225989" target="_blank" rel="noreferrer"> <FaPhoneAlt className='text-para2 me-1'/>  +92 334 2225989</a> 
    </nav>
    </div> 
    {/* menu and them icons */}
    <div className="lg:hidden flex items-center">
        {
          toggle ?
          (
            <IoMenu className="text-3xl text-slate-700 toggle-btn cursor-pointer focus:outline-none focus:border focus:border-heading" onClick={()=>{  setToggle(!toggle);}}/>
          )
          :(
            <IoClose className="text-3xl text-slate-700 toggle-btn cursor-pointer  " onClick={()=>{
              setToggle(true)
            }}/>
          )
        }
          {theme === "light" ? 
          (
            <MdNightlight ref={DarkBtnRef}
              className=' text-para1 cursor-pointer ml-2 hover:scale-[1.1]'
              size={30} onClick={themeToggle}
            />
          ) : (
            <MdLightMode
              className='text-heading cursor-pointer ml-2 hover:scale-[1.1] '
              size={30} ref={LightBtnRef} onClick={themeToggle}
              />
        )}
    </div>     
    <div className='hidden lg:block'>
        {theme === "light" ? (
            <MdNightlight ref={DarkBtnRef}
              className=' text-para1 cursor-pointer ml-2 hover:scale-[1.1]'
              size={30} onClick={themeToggle}
            />
          ) : (
            <MdLightMode
              className='text-heading cursor-pointer ml-2 hover:scale-[1.1] '
              size={30} ref={LightBtnRef} onClick={themeToggle}
              />
        )}
    </div>
</header>
   </div>
  )
}
export default Header;





