import React from 'react';

const ConsultationMobile = () => {
  return (
    <div className='flex flex-col items-center'>
      <img src='assets/img/consult-block1.png' alt='consultation' className='h-full mb-6' />
      <p className='text-gray font-dm-sans leading-7 px-5 mb-8'>
        Overcome treatment problems by getting free consultations from health experts from various countries that we
        have provided
      </p>
      <button className='bg-dark-blue px-12 py-4 text-lg flex gap-2 items-center justify-center text-almost-white w-full mb-5'>
        Get starter
      </button>
      <div className='flex flex-col px-5'>
            <img src='assets/img/item1.png' alt='consult' className='w-100 mb-4'></img>
            <div className='flex justify-between items-center'>
              <p className='text-almost-black font-dm-sans'>Solid Black Cream</p>
              <p className='text-almost-black font-dm-sans flex items-center'>
                <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
              </p>
            </div>
          </div>
    </div>
  );
};

export default ConsultationMobile;
