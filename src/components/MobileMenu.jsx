import React from 'react';
import Accardion from './Accardion';

const MobileMenu = ({isClosed, onClose}) => {
  return (
    <div className={`bg-dark-blue px-5 py-5 w-full h-full fixed t-0 z-30 ${isClosed ? 'hidden': '' }`}>
      <div className='flex justify-between items-center mb-8'>
        <img alt='logo' src='assets/img/white-logo.png' width={70} height={70}></img>
        <button className='text-almost-white text-lg font-dm-sans flex gap-2 items-center' onClick={onClose}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width={32} height={32} className='fill-almost-white'> 
            <path d='M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z' />
          </svg>
        </button>
      </div>
      <Accardion/>
    </div>
  );
};

export default MobileMenu;
