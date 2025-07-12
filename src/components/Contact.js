import React, { forwardRef } from 'react'
import OverlayText from './OverlayText'
import Social from './Social'
import { TfiEmail } from 'react-icons/tfi'
import {FaWhatsapp  } from "react-icons/fa6";
import { IoLocation } from 'react-icons/io5'
import Btn from './Btn'
// main fucntion
const Contact = forwardRef((props,ref) => {
    const fields =[
        {
            type: "text",id: "name",placeholder:"Your Name"
        },
        {
            type: "email",id: "email",placeholder:"Your Email"
        },
        {
            type: "text",id: "subject",placeholder:"Your Subject"
        },
        {
            type: "textarea",id: "message",placeholder:"Your Message"
        },
    ]
  return (
        // Contact Section
    <div className='bg-background2 max-w-full min-h-screen' id='contact' ref={ref}>
        <section className='text-white container py-6 lg:py-12 pb-16 flex items-center justify-between flex-col'>
          {/* title */}
      <div className='relative w-full text-center'>
            <h2 className='title before:left-[-12px] text-para2 z-[99]'>CONTACT US</h2>
            <OverlayText content="CONTACT US" top="10%" left="30%"/>
      </div>
      {/* content */}
     <div className='w-full lg:flex lg:items-start lg:justify-between  lg:gap-8 lg:pb-12'>
     <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h2 className='text-para2 text-4xl font-semibold'>Just say Hello</h2>
        {
            fields.map((field,i)=>{
                return(
                    <div className="mb-12 mt-8"> <input type={field.type}id={field.id} placeholder={field.placeholder}  className='w-full py-3 ps-3 bg-background2 rounded-md border border-para1'/> </div>
                )
            })
        }
            
           <Btn content="Send Messege" className='cursor-pointer  px-4'/>
    </div>
    <div className="lg:w-1/2 relative flex flex-col gap-6">
            <h2 className='text-para2 text-4xl font-semibold '>Contact Info</h2>
            <p className="w-[80%] text-md lg:text-xl text-para1">If you have any questions, project ideas, or just want to say hello, feel free to reach out. I'm always open to discussing new projects and creative ideas. The best way to get in touch is through email, but you can also find me on social media. I look forward to connecting with you!</p>
            <div className="text-xl text-para1 flex justify-start items-center gap-6 ">
                 <div className='socail-items h-14 w-14 rounded-full border border-para1 flex justify-center items-center cursor-pointer text-para2'> <TfiEmail size={30}/> </div> <div><h4>Email</h4> <p>amnahaqamna83@gmail.com</p></div> </div>
            <div  className="text-xl text-para1 flex justify-start items-center gap-6 ">
            <div className='socail-items h-14 w-14 rounded-full border border-para1 flex justify-center items-center cursor-pointer text-para2'> <FaWhatsapp size={30}/></div>
                <div><h4>Watsapp</h4> <p> 0334 2225989</p></div> </div>
            <div  className="text-xl text-para1 flex justify-start items-center gap-6 ">
            <div className='socail-items h-14 w-14 rounded-full border border-para1 flex justify-center items-center cursor-pointer text-para2'><IoLocation size={30}/></div><div><h4>Address</h4> <p> Muslim Abad Bannu</p></div> </div>
            <p className="text-xl text-para1">Visite my social profile and get connected</p>
            <Social className="bg-transparent w-full relative flex-wrap lg:left-[-10px] lg:bottom-[-5.5rem] border-0  mb-3" />
    </div>
     </div>
        </section>
    </div>
  )
})
export default Contact;