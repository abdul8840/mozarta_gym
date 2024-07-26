import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Team1 from '../assets/first-trainer.jpg'
import Team2 from '../assets/second-trainer.jpg'
import Team3 from '../assets/third-trainer.jpg'

const Team = () => {
    const team = [
        {
            image: Team1,
            roll: "Strength Trainer",
            name: "Bret D. Bowers",
            desc: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
            url: "#"
        },
        {
            image: Team2,
            roll: "Muscle Trainer",
            name: "Hector T. Daigl",
            desc: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
            url: "#"
        },
        {
            image: Team3,
            roll: "Power Trainer",
            name: "Paul D. Newman",
            desc: "Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.",
            url: "#"
        },
    ]
  return (
    <div className='mt-20 mb-10 max-w-5xl mx-auto'>
        <div className="text-center mb-8">
            <p className="text-xl font-semibold text-[#EE4E4E]">Our Team</p>
            <h2 className='text-2xl font-bold'>TRAIN WITH EXPERTS</h2>
        <div className="mt-10 flex flex-wrap justify-center md:justify-between items-center gap-5">
                {team.map((item, index) => (
                    <div key={index} className="flex flex-col items-center justify-center gap-4 bg-[#111] w-[300px]">
                        <img src={item.image} alt={item.name} className="w-full rounded" />
                        <div className="flex flex-col gap-2 text-start p-4">
                        <p className="text-md font-semibold text-[#EE4E4E]">{item.roll}</p>
                        <p className="text-lg font-semibold text-slate-500">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                        <div className="flex gap-5 mt-5">
                            <a href={item.url} className="rounded-md text-[#EE4E4E] hover:text-slate-500 text-xl" ><FaInstagramSquare /></a>
                            <a href={item.url} className="rounded-md text-[#EE4E4E] hover:text-slate-500 text-xl" ><FaFacebook /></a>
                            <a href={item.url} className="rounded-md text-[#EE4E4E] hover:text-slate-500 text-xl" ><FaLinkedin /></a>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Team
