import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#111] py-10'>
        <div className='flex flex-col items-center justify-center'>
            <h1><span className="text-[#EE4E4E] text-3xl font-bold">Mozarta<span className='text-slate-500'>Gym</span></span></h1>
            <div className="flex gap-2 mt-5 flex-wrap">
                <a href="#" className='hover:text-[#EE4E4E] font-bold text-md'>Home</a>
                <a href="#about" className='hover:text-[#EE4E4E] font-bold text-md'>About</a>
                <a href="#services" className='hover:text-[#EE4E4E] font-bold text-md'>Services</a>
                <a href="#price" className='hover:text-[#EE4E4E] font-bold text-md'>price</a>
                <a href="#classes" className='hover:text-[#EE4E4E] font-bold text-md'>Classes</a>
                <a href="#expert" className='hover:text-[#EE4E4E] font-bold text-md'>Experts</a>
            </div>
            
            <div className="mt-5 text-sm">Copyright ©2024 All rights reserved | This template is made with  by ARN</div>
        </div> 
    </div>
  )
}

export default Footer
