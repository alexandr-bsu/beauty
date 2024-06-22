import React from 'react';

const ReviewSlider = () => {
  return (
    <div className='px-5 lg:container-1200 relative'>
      <h2 className='text-almost-black font-serif leading-[100%] text-3xl lg:text-[3.25rem] mb-10 lg:mb-14 w-2/5 max-md:w-full'>
        What customers say about our products
      </h2>
      <div className='w-full bg-cream flex justify-between md:rounded-r-xl mb-10 lg:mb-6'>
        <div className='w-full md:w-3/5 flex flex-col pt-4 pb-14 lg:py-14 px-4 lg:px-24'>
          <p className='font-serif font-bold mb-8 lg:mb-4'>
            <span className='text-rose text-5xl lg:text-6xl'>01 / </span> <span className='text-rose-80 text-3xl'>05</span>
          </p>

          <p className='font-serif font-medium leading-[193%] text-base lg:text-xl mb-10'>
            Wow! Very amazing. Thanks for the products from skinseed, I really love using skin products to help me out
            in the sun! I'm waiting for an amazing new product :)
          </p>
          <p className='font-dm-sans font-medium leading-[193%] text-base lg:text-xl'>Stevanus Putri</p>
        </div>
        <div className='hidden md:block w-2/5 rounded-xl'>
          <img src='assets/img/about.png' alt='review' className='w-full h-full' />
        </div>
      </div>
      <div className='flex justify-between items-center mb-32'>
        <ul className='flex gap-2'>
          <li className='w-4 h-2 rounded-3xl bg-accent cursor-pointer'></li>
          <li className='w-2 h-2 rounded-full bg-[#FFDEAC] cursor-pointer'></li>
          <li className='w-2 h-2 rounded-full bg-[#FFDEAC] cursor-pointer'></li>
          <li className='w-2 h-2 rounded-full bg-[#FFDEAC] cursor-pointer'></li>
          <li className='w-2 h-2 rounded-full bg-[#FFDEAC] cursor-pointer'></li>
        </ul>
        <div className='flex gap-4 '>
          <div className='bg-[#F5F5F5] w-14 h-14 flex items-center justify-center cursor-pointer'>
            <img src='assets/icons/slider-left.svg' alt='slider-left' />
          </div>
          <div className='bg-dark-blue w-14 h-14 flex items-center justify-center cursor-pointer'>
            <img src='assets/icons/slider-right.svg' alt='slider-right' />
          </div>
        </div>
      </div>

      <img src='assets/extra/leaf1.svg' alt='leaf' className='absolute bottom-0 left-[-12.25rem] z-0 scale-x-[-1]'></img>
      <img src='assets/extra/leaf1.svg' alt='leaf' className='absolute top-[-4rem] right-[-10.25rem] z-0 hidden 2lg:block'></img>
    </div>
  );
};

export default ReviewSlider;
