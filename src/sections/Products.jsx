import React from 'react';

const Products = () => {
  return (
    <div className='container-1200 flex flex-col items-center'>
      <h2 className='ext-almost-black font-serif text-[3.25rem] mb-20'>Various skinseetd products</h2>
      <div className='grid grid-cols-3 gap-x-10 gap-y-20 mb-[3.25rem]'>
        <div data-name='product-item' className='flex flex-col'>
          <img data-name='product-img' src='img/item1.png' alt='item1' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
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
          <img data-name='product-img' src='img/item2.png' alt='item2' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
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
          <img data-name='product-img' src='img/item3.png' alt='item3' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
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
          <img data-name='product-img' src='img/item4.png' alt='item4' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
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
          <img data-name='product-img' src='img/item5.png' alt='item5' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
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
          <img data-name='product-img' src='img/item6.png' alt='item6' className='w-full mb-4'></img>
          <div data-name='item-title' className='flex justify-between items-end'>
            <p className='text-almost-black font-serif font-medium text-3xl'>Solid Black Cream</p>
            <p className='text-almost-black font-dm-sans flex items-center'>
              <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
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

      <button className='border-2 border-dark-blue text-dark-blue px-9 py-4 text-lg flex gap-2 items-center mb-12'>
                  See more
                  <img src='icons/arrow-right.svg' alt='arrow' />
                </button>
    </div>
  );
};

export default Products;
