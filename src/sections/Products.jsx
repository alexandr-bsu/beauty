import React from 'react';

const Products = () => {
  return (
    <div className='container-1200 flex flex-col items-center max-md:px-5 mb-4 lg:mb-40'>
      <h2 className='text-almost-black font-serif text-[3.25rem] mb-20 max-md:text-4xl max-md:mb-14 max-md:leading-[140%]'>Various skinseetd products</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-20 mb-[3.25rem] max-md:gap-y-10'>
        <div data-name='product-item' className='flex flex-col '>
          <img data-name='product-img' src='assets/img/item1.png' alt='item1' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
            </p>
          </div>
          <div data-name='item-price' className='flex justify-between items-end'>
            <p className='text-almost-black flex gap-4 items-center'>
              <span className='line-through'>$80.00</span>
              <span className='block rounded-lg bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-2 py-1 font-medium'>30%</span>
            </p>
            <p className='text-almost-black font-dm-sans flex items-center font-bold text-xl'>
              <span className='text-accent'>$ </span>5.8
            </p>
          </div>
        </div>
        <div data-name='product-item' className='flex flex-col'>
          <img data-name='product-img' src='assets/img/item2.png' alt='item2' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
            </p>
          </div>
          <div data-name='item-price' className='flex justify-between items-end'>
            <p className='text-almost-black flex gap-4 items-center'>
              <span className='line-through'>$80.00</span>
              <span className='block rounded-lg bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-2 py-1 font-medium'>30%</span>
            </p>
            <p className='text-almost-black font-dm-sans flex items-center font-bold text-xl'>
              <span className='text-accent'>$ </span>5.8
            </p>
          </div>
        </div>
        <div data-name='product-item' className='flex flex-col'>
          <img data-name='product-img' src='assets/img/item3.png' alt='item3' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
            </p>
          </div>
          <div data-name='item-price' className='flex justify-between items-end'>
            <p className='text-almost-black flex gap-4 items-center'>
              <span className='line-through'>$80.00</span>
              <span className='block rounded-lg bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-2 py-1 font-medium'>30%</span>
            </p>
            <p className='text-almost-black font-dm-sans flex items-center font-bold text-xl'>
              <span className='text-accent'>$ </span>5.8
            </p>
          </div>
        </div>
        <div data-name='product-item' className='flex flex-col'>
          <img data-name='product-img' src='assets/img/item4.png' alt='item4' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
            </p>
          </div>
          <div data-name='item-price' className='flex justify-between items-end'>
            <p className='text-almost-black flex gap-4 items-center'>
              <span className='line-through'>$80.00</span>
              <span className='block rounded-lg bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-2 py-1 font-medium'>30%</span>
            </p>
            <p className='text-almost-black font-dm-sans flex items-center font-bold text-xl'>
              <span className='text-accent'>$ </span>5.8
            </p>
          </div>
        </div>
        <div data-name='product-item' className='flex flex-col'>
          <img data-name='product-img' src='assets/img/item5.png' alt='item5' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
            </p>
          </div>
          <div data-name='item-price' className='flex justify-between items-end'>
            <p className='text-almost-black flex gap-4 items-center'>
              <span className='line-through'>$80.00</span>
              <span className='block rounded-lg bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-2 py-1 font-medium'>30%</span>
            </p>
            <p className='text-almost-black font-dm-sans flex items-center font-bold text-xl'>
              <span className='text-accent'>$ </span>5.8
            </p>
          </div>
        </div>
        <div data-name='product-item' className='flex flex-col'>
          <img data-name='product-img' src='assets/img/item6.png' alt='item6' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='assets/extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
            </p>
          </div>
          <div data-name='item-price' className='flex justify-between items-end'>
            <p className='text-almost-black flex gap-4 items-center'>
              <span className='line-through'>$80.00</span>
              <span className='block rounded-lg bg-[rgba(255,0,0,0.1)] text-[#FF0000] px-2 py-1 font-medium'>30%</span>
            </p>
            <p className='text-almost-black font-dm-sans flex items-center font-bold text-xl'>
              <span className='text-accent'>$ </span>5.8
            </p>
          </div>
        </div>
     
      </div>

      <button className='border-2 border-dark-blue text-dark-blue px-9 py-4 text-lg flex gap-2 items-center  max-md:w-full justify-center'>
                  See more
                  <img src='assets/icons/arrow-right.svg' alt='arrow' />
                </button>
    </div>
  );
};

export default Products;
