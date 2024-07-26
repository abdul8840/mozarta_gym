import { GiGymBag } from "react-icons/gi";
import { FaDumbbell, FaHeartbeat, FaArrowAltCircleRight } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
import React from 'react'

const Services = () => {
    const services = [
        {
            head: "Basic Fitness",
            desc: "Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
            url: "#"
        },
        {
            head: "New Gym Training",
            desc: "If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.",
            url: "#"
        },
        {
            head: "Basic Muscle Course",
            desc: "Credit goes to Pexels website for images and video background used in this HTML template.",
            url: "#"
        },
        {
            head: "Advanced Muscle Course",
            desc: "You may want to browse through Digital Marketing or Corporate HTML CSS templates on our website.",
            url: "#"
        },
        {
            head: "Yoga Training",
            desc: "This template is built on Bootstrap v4.3.1 framework. It is easy to adapt the columns and sections.",
            url: "#"
        },
        {
            head: "Body Building Course",
            desc: "Suspendisse fringilla et nisi et mattis. Curabitur sed finibus nisi. Integer nibh sapien, vehicula et auctor.",
            url: "#"
        },
      ];
  return (
    <div className='mt-20 mb-10 max-w-5xl mx-auto'>
        <div className="text-center mb-8">
            <p className="text-xl font-semibold text-[#EE4E4E]">Our Services</p>
            <h2 className='text-2xl font-bold'>WHAT WE OFFER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-2 md:m-0">
            
                {services.map((item, index) => (
                    <div className="grid grid-cols-[0.5fr_3fr] gap-3">
                <div className="flex items-center gap-3 bg-[#EE4E4E] p-5 rounded text-5xl"><FaArrowAltCircleRight /></div>
                    <div key={index} className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 text-xl font-bold text-slate-500">{item.head}</div>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                        <a href={item.url} className="text-[#EE4E4E] text-sm font-bold">Discover More</a>
                    </div>
                    </div>
                ))}
            </div>
        
      
    </div>
  )
}

export default Services
