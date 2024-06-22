import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import AboutMobile from './sections/mobile/AboutMobile';
import Video from './sections/Video';
import Consultation from './sections/Consultation';
import ConsultationMobile from './sections/mobile/ConsultationMobile';
import Products from './sections/Products';
import ReviewSlider from './sections/ReviewSlider';
import Footer from './sections/Footer';
import FooterMobile from './sections/mobile/FooterMobile';

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
      <div class='max-lg:hidden'>
        <Consultation />
      </div>
      <div class='lg:hidden'>
        <ConsultationMobile />
      </div>
      <Products />
      <ReviewSlider />
      <div class='max-lg:hidden'>
        <Footer />
      </div>
      <div class='lg:hidden'>
        <FooterMobile />
      </div>
    </>
  );
};

export default App;
