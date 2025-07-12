import { IoDesktopSharp } from 'react-icons/io5';
import SlickSlider from './SlickSlider';
import React, { useState,useEffect } from 'react'
// main fucntion
const ServiceCard = ({services}) => {
  const [isSlider, setIsSlider] = useState(window.innerWidth < 992);
  useEffect(() => {
   const HandleResize=() =>{
    setIsSlider(window.innerWidth < 992)
   }
    window.addEventListener("resize",HandleResize)
  
    return () => {
     window.removeEventListener("resize",HandleResize) 
    }
  }, [])
  const responsiveSetting =[{
    breakpoint:768,
    settings:{
        slidesToShow: 1,
        slidesToScroll: 1,
    }
}]
  return (
    <>
    {isSlider ? (<SlickSlider slidesToShow={2} slidesToScroll={1} responsiveSetting={responsiveSetting} className="">
    { services.map((service,index)=>{
      return(
        <div className='group text-para2 h-[380px] py-12 w-auto lg:w-[500px] bg-background2 mt-5 lg:mt-14 px-4 border border-para1 flex flex-col items-center justify-center mr-3' key={index}>
        <div className='text-center group-hover:text-heading transition-text w-32 mx-auto' >
        {service.icon}
        </div>
          {/* <IoDesktopSharp size={90} /> */}
          <h4 className='my-3 lg:my-5 text-lg sm:text-xl lg:text-2xl group-hover:text-heading transition-text' >{service.title}</h4>
          <p class="leading-relaxed  text-lg lg:text-xl text-gray-500">{service.description}</p>
      </div>
      )
    })}
</SlickSlider>
):( services.map((service,index)=>{
  return(
    <div className='group text-para2 h-[400px] w-auto lg:w-[500px] bg-background2 mt-5 lg:mt-14 px-4 border border-para1 flex flex-col items-center justify-center mr-3' key={index}>
    <div className='text-center group-hover:text-heading transition-text' >
    {service.icon}
    </div>
      {/* <IoDesktopSharp size={90} /> */}
      <h4 className=' my-5 text-2xl group-hover:text-heading transition-text' >{service.title}</h4>
      <p class="leading-relaxed text-xl text-gray-500">{service.description}</p>
  </div>
  )
})
)}
       </>
  )
}
export default ServiceCard;