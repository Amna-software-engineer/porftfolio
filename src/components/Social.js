import { TfiEmail } from "react-icons/tfi";
import { FaFacebook,FaWhatsapp  } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
//main function
const Social = (props) => {
    const classes=` socail flex gap-5 lg:absolute lg:bottom-6 lg:-left-[39%] text-3xl bg-background2 w-[490px] p-3 rounded-full border border-para1 ${props.className}`
    const social =[
        {
            href:"mailto:amnahaqamna83@gmail.com",
            icon: <TfiEmail />,
            title: "Email"
        },
        {
            href:"https://www.facebook.com/maslam.khan.528316",
            icon: <FaFacebook />,
            title: "Facbook"
        },
        {
            href:"https://api.whatsapp.com/send?phone=15551234567&text=Send20%a20%quote",
            icon: <FaWhatsapp />,
            title: "Watsapp"
        },
        {
            href:"https://www.linkedin.com/in/amna-haq-82bb79256/",
            icon: <FaLinkedin />,
            title: "Linkedin"
        }
    ]
  return (
    <div className={classes} >

        {social.map((item,i)=>{
            return(
                <div className="socail-items bg-background1 h-14 w-14 rounded-full border border-para1 flex justify-start ps-3 items-center cursor-pointer overflow-hidden transition-[width] duration-200 hover:w-44 hover:pt-0" key={i}>
                <a href={item.href}  target="_blank" className="text-para2 flex justify-between items-center" >
                    {item.icon}
                    <span className="socail-text ps-3 text-2xl">{item.title}</span> 
                 </a>
            </div>
            )
        })} 
    </div>
  )
}

export default Social;