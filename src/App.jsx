import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import AboutMobile from './sections/mobile/AboutMobile';
import Video from './sections/Video';
import Consultation from './sections/Consultation';
import Products from './sections/Products';
import ReviewSlider from './sections/ReviewSlider';
import Footer from './sections/Footer';

const App = () => {
  return (
    <>
      <Hero />
      <div class='max-sm:hidden'>
        <About />
      </div>
      <div class='sm:hidden'>
        <AboutMobile />
      </div>
      <Video />
      <Consultation />
      <Products />
      <ReviewSlider />
      <Footer />
    </>
  );
};

export default App;
