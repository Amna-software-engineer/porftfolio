import { MdClose } from "react-icons/md";
import { useState } from "react";

const NewProject = ({project,close}) => {
  const [showVideo, setShowVideo] = useState(false)
  const [showContent, setshowContent] = useState(true)

  return (
  
    <div className="text-white fixed top-0 left-0 h-full w-full bg-black/85  transition-opacity z-[99999] flex items-center justify-center flex-col select-none">
      <div className="bg-background2 h-[80%] max-w-[90%] lg:w-[80%] flex items-center justify-center px-6 flex-col  overflow-y-scroll relative">
     
    {/* close btn */}
      <div className="absolute right-3 top-3" onClick={()=>{  
      if (showVideo) {
        setShowVideo(false); setshowContent(true)
      }else(close())}}><MdClose size={30} className="cursor-pointer text-para2"/></div>
    {/* content row */}
      {showContent&& 
      <div className="flex items-center justify-between flex-col lg:flex-row px-6">
        <div className="w-full lg:w-1/2 pt-5"><img src={project.src} alt="project14" className='group-hover:scale-105 transition'/></div>
        <div className="w-full lg:w-1/2">
            <div>  <h5 className="text-heading text-4xl font-semibold">
                {project.title}
              </h5>
              <p className="lg:text-lg xl:text-xl text-para1">
                {project.description}
              </p></div>
          </div>
      </div>}

   {/* Show Video Button */}
          {!showVideo ? (
           <button
              className="bg-heading text-black px-10 py-2 mt-4 rounded-full hover:shadow-custom transition mb-6"
              onClick={() => {setShowVideo(true);setshowContent(false)}} >Watch a Video</button>    
          ) : (
            <div >
              <video
                src={project.vSrc}
                autoPlay
                muted
                controls
                className="rounded-xl shadow-xl mx-auto"
              />
            </div>
          )}
      
      </div>
      
    </div>
)};

export default NewProject;