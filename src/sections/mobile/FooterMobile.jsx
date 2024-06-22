import React from 'react';

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

      <ul className='flex flex-col text-almost-white-70 text-dm-sans mb-32'>
        <li className='font-medium border-b border-almost-white-70 mt-4'>
          <div className='text-almost-white flex justify-between pb-4'>
            <h3>Menu</h3>
          </div>

          {/*открыт mb-4, закрыт h-0 */}
          <ul className='space-y-4 text-almost-white-70 overflow-hidden mb-4'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Consultant</a>
            </li>
            <li>
              <a href='#'>Product</a>
            </li>
            <li>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>About Us</a>
            </li>
          </ul>
        </li>
        <li className='font-medium border-b border-almost-white-70 mt-4'>
          <div className='text-almost-white flex justify-between pb-4'>
            <h3>Product</h3>
          </div>

          {/*открыт mb-4, закрыт h-0 */}
          <ul className='space-y-4 text-almost-white-70 overflow-hidden h-0'>
            <li>
              <a href='#'>Skincare</a>
            </li>
            <li>
              <a href='#'>Handbody</a>
            </li>
            <li>
              <a href='#'>Oil</a>
            </li>
            <li>
              <a href='#'>Fashwash</a>
            </li>
          </ul>
        </li>
        <li className='font-medium border-b border-almost-white-70 mt-4'>
          <div className='text-almost-white flex justify-between pb-4'>
            <h3>Service</h3>
          </div>

          {/*открыт mb-4, закрыт h-0 */}
          <ul className='space-y-4 text-almost-white-70 overflow-hidden h-0'>
            <li>
              <a href='#'>Order</a>
            </li>
            <li>
              <a href='#'>Bokeed</a>
            </li>
            <li>
              <a href='#'>Payment</a>
            </li>
            <li>
              <a href='#'>Delivery</a>
            </li>
          </ul>
        </li>
        <li className='font-medium border-b border-almost-white-70 mt-4'>
          <div className='text-almost-white flex justify-between pb-4'>
            <h3>Support</h3>
          </div>

          {/*открыт mb-4, закрыт h-0 */}
          <ul className='space-y-4 text-almost-white-70 overflow-hidden h-0'>
            <li>
              <a href='#'>Chat Online</a>
            </li>
            <li>
              <a href='#'>Call Online</a>
            </li>
            <li>
              <a href='#'>Language</a>
            </li>
            <li>
              <a href='#'>Copyright</a>
            </li>
          </ul>
        </li>
      </ul>

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
