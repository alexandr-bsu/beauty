import React from 'react';

const About = () => {
  return (
      <div className='container-1200 mb-5 lg:mb-36'>
        <div className='font-poppins text-5xl leading-[150%] text-almost-black text-center px-10 py-[7.5rem]'>
          Beauty is part of women's privileges still do body care to always maintain your beautiful features. Let's join
          other women to get products from the latest Brand.
        </div>

        <div className='flex gap-24 relative'>
          <div className='flex grow z-10 flex-col'>
            <img src='assets/img/woman1.png' alt='woman1' className='w-full mb-10'></img>
            <p className='font-serif text-5xl font-medium leading-[160%] text-almost-black mb-2'>02</p>
            <p className='dm-sans text-lg leading-[160%] text-almost-black'>
              Brand can last for 24 hours to keep your skin white. use brand regularly to get white skin
            </p>
          </div>
          <div className='w-2/3 flex z-10 flex-col grow'>
            <p className='mb-14 whitespace-pre-line font-serif text-6xl'>
              {'Beauty is part of the\nprivilege of women'}
            </p>
            <p className='font-serif text-5xl font-medium leading-[160%] text-almost-black mb-2'>01</p>
            <p className='dm-sans text-lg leading-[160%] text-almost-black mb-10'>
              Consumption of skinseed products to maintain skin moisture from the sun
            </p>
            <img src='assets/img/woman2.png' alt='woman2' className='grow'></img>
          </div>

          <img src='assets/extra/ellipse.svg' alt='ellipse' className='absolute top-[-2.5rem] left-[-6.25rem] z-0'></img>
          <img src='assets/extra/leaf1.svg' alt='leaf' className='absolute top-0 right-[-15rem] z-0 hidden 2lg:block'></img>
        </div>
      </div>
  );
};

export default About;
