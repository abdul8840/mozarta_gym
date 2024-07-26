import React from 'react';
import Class1 from '../assets/class-1.jpg';
import Class2 from '../assets/class-2.jpg';
import Class3 from '../assets/class-3.jpg';
import Class4 from '../assets/class-4.jpg';
import Class5 from '../assets/class-5.jpg';
import { IoIosArrowDropright } from "react-icons/io";

const OurClasses = () => {
    const classes = [
        {
            src: Class1,
            head: 'STRENGTH',
            caption: 'INDOOR CYCLING'
          },
          {
            src: Class2,
            head: 'CARDIO',
            caption: 'KETTLEBELL POWER'
          },
          {
            src: Class3,
            head: 'WEIGHTLIFTING',
            caption: 'TO PERFECT FIT'
          },
      ];
    const classes1 = [
        {
            src: Class4,
            head: 'CARDIO',
            caption: 'INDOOR CYCLING'
          },
          {
            src: Class5,
            head: 'STRENGTH',
            caption: 'WEIGHTLIFTING'
          },
      ];
  return (
    <div className='mt-20 mb-10 max-w-5xl mx-auto'>
        <div className="text-center mb-8">
            <p className="text-xl font-semibold text-[#EE4E4E]">Our Classes</p>
            <h2 className='text-2xl font-bold'>Connect With Us</h2>
        </div>
        <div className="flex flex-wrap gap-5 justify-center md:justify-between">
            {classes.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 items-center bg-[#111]">
                    <div className="max-w-[300px]">
                        <img src={item.src} alt="" className="w-full object-cover rounded-md" />
                        <div className="flex pt-5 p-3 justify-between">
                            <div className="">
                                <p className="text-md text-[#EE4E4E] font-bold">{item.head}</p>
                                <p className="text-sm font-semibold mt-1 text-[#BDBDBD]">{item.caption}</p>
                            </div>
                            <div className="p-3 bg-[#333] flex items-center">
                                <a href="#"><IoIosArrowDropright className=' text-xl' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between mx-4 md:mx-0 mt-10">
            {classes1.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 items-center bg-[#111]">
                <div className="max-w-2xl">
                    <img src={item.src} alt="" className="w-full object-cover rounded-md" />
                    <div className="flex pt-5 p-3 justify-between">
                        <div className="">
                            <p className="text-md text-[#EE4E4E] font-bold">{item.head}</p>
                            <p className="text-sm font-semibold mt-1 text-[#BDBDBD]">{item.caption}</p>
                        </div>
                        <div className="p-3 bg-[#333] flex items-center">
                            <a href="#"><IoIosArrowDropright className=' text-xl' /></a>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default OurClasses
