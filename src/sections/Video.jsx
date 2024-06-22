import React from 'react';

const Video = () => {
  return (
    <div className='container-1440 flex relative overflow-hidden bg-cream mb-32'>
      <div className='z-10 w-2/5 py-[4.375rem] px-[7.5rem] grow flex flex-col'>
        <p className='text-accent leading-[160%] text-2xl font-dm-sans mb-6'>Quote today</p>
        <p className='text-almost-black leading-[160%] font-serif text-3xl'>
          “ Every time you create beauty around you, you restore your own soul. So be a great woman from the outside and
          inside “
        </p>
        <p className='leading-[160%] text-2xl font-dm-sans mt-auto'>Alice Walker</p>
      </div>
      <div className='relative flex items-center justify-center'>
        <img src='img/video-placeholder.png' alt='placeholder' className=''></img>
        <div className='absolute w-32 h-32 bg-[hsla(0,0%,100%,0.5)] rounded-full flex items-center justify-center cursor-pointer'>
          <img src='icons/play-filed.svg' alt='play'></img>
        </div>
      </div>

      <img src='extra/leaf2.svg' alt='leaf' className='absolute bottom-[-11.25rem] left-0 z-0'></img>
    </div>
  );
};

export default Video;
