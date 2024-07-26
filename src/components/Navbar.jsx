import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent p-4 sticky">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-[#EE4E4E] text-xl font-bold">Mozarta<span className='text-slate-500'>Gym</span></span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-slate-500 hover:text-slate-700 font-semibold">Home</a>
          <a href="#" className="text-slate-500 hover:text-slate-700 font-semibold">About</a>
          <a href="#" className="text-slate-500 hover:text-slate-700 font-semibold">Services</a>
          <a href="#" className="text-slate-500 hover:text-slate-700 font-semibold">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-slate-500 hover:text-white focus:outline-none focus:text-white"
          >
            <svg className="h-6 w-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-slate-500 hover:text-slate-700 font-semibold px-2 py-1">Home</a>
          <a href="#" className="block text-slate-500 hover:text-slate-700 font-semibold px-2 py-1">About</a>
          <a href="#" className="block text-slate-500 hover:text-slate-700 font-semibold px-2 py-1">Services</a>
          <a href="#" className="block text-slate-500 hover:text-slate-700 font-semibold px-2 py-1">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
