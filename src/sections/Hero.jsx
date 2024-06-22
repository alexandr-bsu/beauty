import React from 'react';
import Nav from '../components/Nav';

const Hero = () => {
  return (
    <div className='bg-cream w-full'>
      <div className='px-32'>
        <div className='relative z-10'>
          <Nav></Nav>
          <div data-name='left-part' className='w-2/3 pt-40 pb-24'>
            <div data-name='content' className='flex flex-col'>
              <span className='font-poppins text-lg text-almost-black leaing-[193%] mb-4'>
                We can help your problem
              </span>
              <h1 className='mb-8 title-style mr-[12.5rem] text-almost-black'>
                Maximize your bright face with clean skin
                <img src='assets/extra/star.svg' alt='star' className='inline size-16'/>
              </h1>
              <p className='text-lg font-poppins text-grey leading-8 mr-[12.5rem] mb-16'>
                Get a skinseed product right away to make your skin bright again. suitable for those of you who often go
                out in the sun using a cream that doesn't fade easily
              </p>
              <div data-name='buttons' className='flex gap-6 mb-20'>
                <button className='bg-dark-blue px-12 py-4 text-lg flex gap-2 items-center text-almost-white'>
                  Get starter
                </button>
                <button className='border-2 border-almost-black px-9 py-4 text-lg flex gap-2 items-center'>
                  <img src='assets/icons/shop-bag.svg' alt='shop bag' />
                  Order Now
                </button>
              </div>
            </div>
            <div data-name='items' className='flex gap-12'>
              <div data-name='header-item' className='flex flex-col items-center justify-between gap-3'>
                <p className='font-serif text-5xl font-black text-almost-black'>4.9</p>
                <div className='flex gap-1'>
                  <img src='assets/extra/star-rating.svg' alt='star' />
                  <img src='assets/extra/star-rating.svg' alt='star' />
                  <img src='assets/extra/star-rating.svg' alt='star' />
                  <img src='assets/extra/star-rating.svg' alt='star' />
                  <img src='assets/extra/star-rating.svg' alt='star' />
                </div>
                <p className='font-poppins text-lg text-grey'>Customers Reviews</p>
              </div>

              <div data-name='header-item' className='flex flex-col items-center text-center justify-between gap-3'>
                <p className='font-serif text-5xl font-black text-almost-black '>
                  2100<span className='text-accent'>K</span>
                </p>
                <p className='font-poppins text-lg text-grey whitespace-pre-line '>
                  {'Testimonials are\n feeling happy'}
                </p>
              </div>
            </div>
            <div data-name='blur' className='absolute z-20 bottom-24 right-72 bg-[#FFE6C0] w-80 h-80 rounded-full blur-3xl'></div>
          </div>
          <div data-name='right-part' className='absolute right-[-8rem] top-0 w-[30rem] h-full bg-no-repeat bg-cover bg-right bg-header-image'></div>
        </div>
      </div>
      <div data-name='blur' className='absolute z-0 top-0 left-0 bg-[#FFEFD7] w-80 h-80 rounded-full blur-3xl'></div>
      
    </div>
  );
};

export default Hero;
