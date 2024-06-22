import React from 'react';

const Accardion = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <ul className='flex flex-col text-almost-white-70 text-dm-sans mb-32'>
      <li className='font-medium border-b border-almost-white-70 mt-4'>
        <div className='text-almost-white flex justify-between pb-4' onClick={() => setOpenIndex(0)}>
          <h3>Menu</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className={`fill-almost-white ${openIndex == 0 ? 'scale-y-[-1]' : '' }`}>
            <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
          </svg>
        </div>

        {/*открыт mb-4, закрыт h-0 */}
        <ul className={`space-y-4 text-almost-white-70 overflow-hidden ${openIndex == 0 ? 'mb-4' : 'h-0' }`}>
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
        <div className='text-almost-white flex justify-between pb-4' onClick={() => setOpenIndex(1)}>
          <h3>Product</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className={`fill-almost-white ${openIndex == 1 ? 'scale-y-[-1]' : '' }`}>
            <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
          </svg>
        </div>

        {/*открыт mb-4, закрыт h-0 */}
        <ul className={`space-y-4 text-almost-white-70 overflow-hidden ${openIndex == 1 ? 'mb-4' : 'h-0' }`}>
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
        <div className='text-almost-white flex justify-between pb-4' onClick={() => setOpenIndex(2)}>
          <h3>Service</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className={`fill-almost-white ${openIndex == 2 ? 'scale-y-[-1]' : '' }`}>
            <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
          </svg>
        </div>

        {/*открыт mb-4, закрыт h-0 */}
        <ul className={`space-y-4 text-almost-white-70 overflow-hidden ${openIndex == 2 ? 'mb-4' : 'h-0' }`}>
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
      <li className='font-medium border-b border-almost-white-70 mt-4' >
        <div className='text-almost-white flex justify-between pb-4' onClick={() => setOpenIndex(3)}>
          <h3>Support</h3>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width={24}
            height={24}
            className={`fill-almost-white ${openIndex == 3 ? 'scale-y-[-1]' : '' }`}>
            <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
          </svg>
        </div>

        {/*открыт mb-4, закрыт h-0 */}
        <ul className={`space-y-4 text-almost-white-70 overflow-hidden ${openIndex == 3 ? 'mb-4' : 'h-0' }`}>
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
  );
};

export default Accardion;
