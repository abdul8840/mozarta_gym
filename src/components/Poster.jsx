import React from 'react'
import '../index.css'

const Poster = () => {
  return (
    <div className='my-10'>
    <div className="back_img flex items-center justify-center text-center">
      <div className="bg-black bg-opacity-50 w-[300px] sm:w-6/12 h-[300px] p-4 md:p-10">
        <h2 className='text-2xl md:text-4xl text-center font-serif text-[#EE4E4E] font-800'>
        DON’T THINK, BEGIN TODAY!
        </h2>
        <h3 className='text-xl md:text-2xl text-center mt-8 mb-8 text-White font-700'>WHERE HEALTH, BEAUTY AND FITNESS MEET.</h3>
        <a href="#">
          <span className='font-semibold border-2 border-[#EE4E4E] py-2 px-6 hover:bg-[#EE4E4E] hover:text-white'>Connect Now</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default Poster
