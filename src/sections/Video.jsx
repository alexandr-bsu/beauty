import React from 'react';

const Video = () => {
  return (
    <div className='container-1440 flex flex-col 2lg:flex-row  relative overflow-hidden bg-cream mb-32'>
      <div className='z-10 w-full 2lg:w-2/5 py-8 lg:py-[4.375rem] px-5 2lg:px-[7.5rem] grow flex flex-col'>
        <p className='text-accent leading-[1.875rem] lg:leading-[160%] text-base lg:text-2xl font-dm-sans mb-4 lg:mb-6'>Quote today</p>
        <p className='text-almost-black leading-[150%] lg:leading-[160%] font-serif text-2xl lg:text-3xl max-2lg:mb-6'>
          “ Every time you create beauty around you, you restore your own soul. So be a great woman from the outside and
          inside “
        </p>
        <p className='leading-[160%] text-base max-lg:font-medium lg:text-2xl font-dm-sans mt-auto'>Alice Walker</p>
        <img src='assets/extra/leaf2.svg' alt='leaf' className='absolute bottom-[-11.25rem] left-0 z-0 max-2lg:hidden'></img>
      </div>
      <div className='relative flex items-center justify-center'>
        <img src='assets/img/video-placeholder.png' alt='placeholder' className='h-full w-full'></img>
        <div className='absolute w-32 h-32 bg-[hsla(0,0%,100%,0.5)] rounded-full flex items-center justify-center cursor-pointer'>
          <img src='assets/icons/play-filed.svg' alt='play'></img>
        </div>
      </div>

      
    </div>
  );
};

export default Video;
