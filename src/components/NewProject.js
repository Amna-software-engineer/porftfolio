import { MdClose } from "react-icons/md";
import { useState } from "react";

const NewProject = ({ project, close }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [showContent, setshowContent] = useState(true)

  return (

    <div className="text-white fixed top-0 left-0 h-full w-full bg-black/85  transition-opacity z-[99999] flex items-center justify-center flex-col select-none">
      <div className="bg-background2 h-auto max-h-[90vh] max-w-[95%] lg:w-[80%] xl:w-[70%] flex flex-col px-6 py-8 overflow-y-auto relative rounded-3xl shadow-2xl">
        {/* close btn */}
        <div
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
          onClick={() => {
            if (showVideo) {
              setShowVideo(false);
              setshowContent(true);
            } else {
              close();
            }
          }}
        >
          <MdClose size={25} className="cursor-pointer text-para2" />
        </div>

        {/* Content (Image and Text) */}
        {showContent && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 pt-10">
            {/* Image Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-auto aspect-video object-contain rounded-xl"
              />
            </div>

            {/* Text Container */}
            <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center">
              <h5 className="text-heading text-3xl lg:text-4xl font-semibold leading-tight">
                {project.title}
              </h5>
              <p className="text-base lg:text-lg xl:text-xl text-para1 mt-4 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        )}

        {/* Video Section */}
        <div className="mt-8 mb-4 w-full flex flex-col items-center">
          {!showVideo ? (
            <button
              className="bg-heading text-black font-semibold px-12 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
              onClick={() => {
                setShowVideo(true);
                setshowContent(false);
              }}
            >
              Watch a Video
            </button>
          ) : (
            <div className="w-full max-w-4xl">
              <video
                src={project.vSrc}
                autoPlay
                muted
                controls
                className="rounded-2xl shadow-2xl mx-auto w-full aspect-video object-cover"
              />
            </div>
          )}
        </div>
      </div>

    </div>
  )
};

export default NewProject;