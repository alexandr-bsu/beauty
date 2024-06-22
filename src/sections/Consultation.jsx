import React from 'react';

const Consultation = () => {
  return (
    <div className='container-1440 relative flex flex-col h-[50rem] mb-40'>
      <div className='container-1200 h-full'>
        <h2 className='text-almost-black font-serif text-[3.25rem] mb-9 whitespace-pre-line'>
          {'Consult your problem\nwith the experts'}
        </h2>
        <div className='flex justify-between'>
          <div>
            <p className='font-dm-sans text-lg text-grey leading-[193%] w-3/5 mb-9'>
              Overcome treatment problems by getting free consultations from health experts from various countries that
              we have provided`
            </p>

            <button className='bg-dark-blue px-12 py-4 text-lg flex gap-2 items-center text-almost-white'>
              Consultant Now
            </button>
          </div>

          <div className='flex flex-col'>
            <img src='img/consult-block2.png' alt='consult' className='w-80 mb-4'></img>
            <div className='flex justify-between items-center'>
              <p className='text-almost-black font-dm-sans'>Solid Black Cream</p>
              <p className='text-almost-black font-dm-sans flex items-center'>
                <img src='extra/star-rating.svg' alt='star' className='inline size-4'></img>4.8
              </p>
            </div>
          </div>
        </div>
      </div>

      <img data-name='middle-img' src='img/consult-block1.png' alt='consult' className='absolute bottom-0 self-center'></img>
      <img src="extra/leaf1.svg" alt="leaf" className='absolute bottom-0 left-[-2rem] scale-x-[-1] '/>
      <img src="extra/curve.svg" alt="leaf" className='absolute top-0 right-64 '/>

    </div>
  );
};

export default Consultation;
