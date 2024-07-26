import { GiGymBag } from "react-icons/gi";
import { FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { MdSportsGymnastics } from "react-icons/md";
import React from 'react'

const About = () => {
    const about = [
        {
          icon: <FaDumbbell />,
          caption: 'Proffesponal training plan',
          caption2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
        },
        {
          icon: <FaHeartbeat />,
          caption: 'Unique to your needs',
          caption2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
        },
        {
          icon: <MdSportsGymnastics />,
          caption: 'Modern equipment',
          caption2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
        },
        {
          icon: <GiGymBag />,
          caption: 'Healthy nutrition plan',
          caption2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.'
        },
      ];
  return (
    <div className='mt-20 mb-10 max-w-5xl mx-auto'>
        <div className="text-center mb-8">
            <p className="text-xl font-semibold text-[#EE4E4E]">Why choose us</p>
            <h2 className='text-2xl font-bold'>PUSH YOUR LIMITS FORWARD</h2>
        </div>
      <div className="flex flex-wrap gap-2 justify-between">
        {about.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 text-center w-[200px]">
                <div className="flex items-center justify-center p-6 rounded-full bg-[#111] text-4xl text-[#EE4E4E] hover:bg-[#EE4E4E] hover:text-white">{item.icon}</div>
                <p className="text-md font-semibold text-slate-500">{item.caption}</p>
                <p className="text-sm text-gray-400">{item.caption2}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default About
