import React from 'react';

const AboutMobile = () => {
  return (
    <div className='px-5 mb-5'>
      <p className='text-almost-black font-serif text-4xl leading-[150%] py-3 mb-10 text-center'>
        Beauty is part of women's privileges still do body care to always maintain your beautiful features. let's join
        other women to get products from the latest skinseed
      </p>
      <p className='text-almost-black font-serif text-3xl leading-[140%] mb-8'>
        Beauty is part of the privilege of women
      </p>
     
     <div className='mb-14'>
        <p className='text-almost-black font-serif font-semibold text-3xl mb-2'>01</p>
        <p className='leading-7 font-dm-sans text-grey mb-6'>Consumption of our products to maintain skin moisture from the sun</p>
        <img className='w-full' src='assets/img/woman1.png' alt='woman1'/>
     </div>

     <div className='mb-14'>
        <p className='text-almost-black font-serif font-semibold text-3xl mb-2'>02</p>
        <p className='leading-7 font-dm-sans text-grey mb-6'>This Brand can last for 24 hours to keep your skin white. use branded regularly to get white skin</p>
        <img className='w-full' src='assets/img/woman2.png' alt='woman2'/>
     </div>

    </div>
  );
};

export default AboutMobile;
