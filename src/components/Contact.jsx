import React from 'react';
import Img from '../assets/class-1.jpg';

const Contact = () => {
  return (
    <div className='mt-20 mb-10' id='contact'>
      <div className="text-center mb-8">
        <p className="text-xl font-semibold text-[#EE4E4E]">Contact Us</p>
        <h2 className='text-2xl font-bold'>CONNECT WITH US</h2>
      </div>
      <div className="flex flex-col md:flex-row m-2 md:m-0">
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d57661.35864093624!2d82.99579108740234!3d25.4103360060112!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1722003620217!5m2!1sen!2sin"
            // width="600"
            // height="450"
            className='w-full h-full'
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-1 bg-[#111]">
          <div className="max-w-2xl mx-auto">
            
          <form className="flex flex-col justify-center items-center gap-5 mt-10 mb-10 bg-white p-8 rounded-md">
            <div className="flex flex-wrap gap-5 w-full">
                <input type="text" placeholder='Full Name' className='flex-1 p-2 outline-none border border-black bg-transparent rounded-sm' />
                <input type="email" placeholder='Your Email' className=' flex-1 p-2 outline-none border border-black bg-transparent rounded-sm' />
            </div>
            <input type="text" placeholder='Your Email' className='w-full p-2 outline-none border border-black bg-transparent rounded-sm' />
            <textarea type="text" placeholder='Your Email' rows={10} className='w-full p-2 outline-none border border-black bg-transparent rounded-sm' />
            <button className='w-full font-semibold border-2 border-[#EE4E4E] py-2 px-6 hover:bg-[#EE4E4E] text-black hover:text-white' type='submit'>Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
