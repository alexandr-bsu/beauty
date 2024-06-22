import React from 'react';
import Accardion from '../../components/Accardion';

const FooterMobile = () => {
  return (
    <div className='bg-dark-blue pt-16 px-5 pb-24 w-full'>
      <div className='mb-10'>
        <img src='assets/img/white-logo.png' width={70} height={70} alt='logo' className='mb-4'></img>
        <p className='text-almost-white-70 font-dm-sans leading-[150%]'>
          This Brand is a company engaged in beauty in 2023. This has made more than 2000 products every day since its
          establishment brand is the only beauty company that is the top ranking one in all of Indonesia
        </p>
      </div>

      <div className='flex flex-col gap-4 text-almost-white text-dm-sans mb-4'>
        <div className='flex gap-4'>
          <img src='assets/icons/phone.svg' alt='phone' />
          <p>(270) 555-0117 - (270) 555-2344</p>
        </div>
        <div className='flex gap-6'>
          <img src='assets/icons/location.svg' alt='location' />
          <p>6391 Elgin St. Celina, Delaware 10299</p>
        </div>

        <div className='flex gap-6'>
          <img src='assets/icons/email.svg' alt='email' />
          <p>infotechbeauty@gmail.com</p>
        </div>
      </div>

      <Accardion/>

      <div className='flex flex-col gap-4 items-center text-sm text-almost-white-70'>
        <ul className='flex gap-10'>
          <li>
            <a href='#'>Privacy policy</a>
          </li>
          <li>
            <a href='#'>Sitemap</a>
          </li>
          <li>
            <a href='#'>Term of use</a>
          </li>
        </ul>

        <p>© 2021-2022, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterMobile;
