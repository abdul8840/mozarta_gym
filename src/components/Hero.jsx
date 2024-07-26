import React, { useState, useEffect } from 'react';
import Main1 from '../assets/main1.jpg';
import Main2 from '../assets/main2.jpg';
import Main3 from '../assets/main3.jpg';

const images = [
  {
    src: Main1,
    caption: 'WORK HARDER, GET STRONGER',
    caption2: 'EASY WITH OUR GYM'
  },
  {
    src: Main2,
    caption: 'SHAPE YOUR BODY',
    caption2: 'BE STRONG, TRANING HARD'
  },
  {
    src: Main3,
    caption: 'MAKE YOUR BODY',
    caption2: 'TO PERFECT FIT'
  },
  // Add more images here
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[80vh]">
      <div className="overflow-hidden relative rounded-lg shadow-lg h-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full h-[80vh] relative flex-shrink-0">
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover opacity-[0.7]"
              />
              <div className="absolute bottom-20 w-full mx-auto text-center bg-white bg-opacity-50 p-2 rounded">
                <p className='text-[#EE4E4E] font-semibold text-xl mb-2'>{image.caption}</p>
                <h2 className='text-3xl font-semibold p-2 text-white bg-[#EE4E4E]'>{image.caption2}</h2>
              </div>
              {/* <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-50 p-2 rounded">
                <p className='text-[#FF5F00] font-semibold text-md'>{image.caption}</p>
                <h2 className='text-3xl font-semibold text-white bg-[#FF5F00] p-1'>{image.caption2}</h2>
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
