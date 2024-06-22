import React from 'react';

const Footer = () => {
  return (
    <div className='bg-dark-blue pt-32 pb-12 w-full'>
      <div className='container-1200'>
        <div className='mb-24'>
          <div className='flex gap-36 justify-between'>
            <div className='flex flex-col max-w-96'>
              <img src='assets/img/white-logo.png' width={70} height={70} alt='logo' className='mb-4'></img>
              <p className='text-almost-white-70 font-dm-sans text-lg leading-[150%] mb-14'>
                This is a company engaged in beauty in 2001. This has made more than 2023 products every day since its
                establishment this is the only beauty company that is the top ranking one in all of Indonesia
              </p>

              <div className='flex flex-col gap-6 text-almost-white text-dm-sans'>
                <div className='flex gap-6'>
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
            </div>
            
            <div className='flex gap-20'>
              <div data-name='footer-menu-section'>
                <h3 className='font-medium font-dm-sans text-xl text-almost-white mb-6'>Menu</h3>
                <ul className='space-y-6 text-almost-white-70'>
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
              </div>
              <div data-name='footer-menu-section'>
                <h3 className='font-medium font-dm-sans text-xl text-almost-white mb-6'>Product</h3>
                <ul className='space-y-6 text-almost-white-70'>
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
              </div>
              <div data-name='footer-menu-section'>
                <h3 className='font-medium font-dm-sans text-xl text-almost-white mb-6'>Service</h3>
                <ul className='space-y-6 text-almost-white-70'>
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
              </div>
              <div data-name='footer-menu-section'>
                <h3 className='font-medium font-dm-sans text-xl text-almost-white mb-6'>Support</h3>
                <ul className='space-y-6 text-almost-white-70'>
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
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between text-sm text-almost-white'>
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
    </div>
  );
};

export default Footer;
