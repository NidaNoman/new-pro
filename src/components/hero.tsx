

import React from 'react';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[716px] lg:h-[800px] bg-blue-500 text-white mt-0">
      {/* Background Image */}
      <Image 
        src="/hero.jpg" 
        alt="maingirl" 
        height={716} 
        width={1440} 
        className="w-full h-full object-cover" 
        priority 
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-6 sm:px-12 md:px-16">
        <div className="text-white text-center sm:text-left sm:ml-6 md:ml-10 lg:ml-20 md:w-3/4 lg:w-1/2">
          <p className="uppercase text-xs sm:text-sm lg:text-base tracking-widest mb-5 sm:mb-7">
            Summer 2020
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold my-3 sm:my-4">
            New Collection
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl my-4 sm:my-6">
            We know how large objects will act, <br /> 
            but things on a small scale.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 lg:px-9 lg:py-5 rounded-lg transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;



