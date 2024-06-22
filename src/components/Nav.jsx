import React from 'react';

const Nav = () => {
  return (
    <nav className='absolute z-10 t-0 w-full items-center flex mt-6'>
      <img alt="logo" src='assets/img/logo.png'></img>
      <ul className='hidden lg:flex text-almost-black leading-[193%] font-dm-sans gap-10 ml-16'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
      <button className='border-2 border-almost-black px-4 py-2 ml-auto text-lg font-dm-sans flex gap-2 items-center'>
        Product trailer
        <img src="assets/icons/play-circle.svg" alt="play" />
      </button>
    </nav>
  );
};

export default Nav;
