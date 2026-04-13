import { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";
import Hero from './components/hero';
import OfferSlider from './components/offerslider';
import Footer from './components/footer';
import Cards from './components/cards';
import FAQ from './components/faq';
import Information from './components/information';
import Testimonials from './components/testimonials';
import BrandSlider from './components/brandslider';
import CardDetailSlider from './components/cardetailslider';
import TravelSlider from './components/vacationslider';

function App() {

  return (
    <>
      <Hero />
      <OfferSlider />
      <CardDetailSlider />
      <Information />
      <Cards />
      <Testimonials />
      <BrandSlider />
      <FAQ />
      <TravelSlider />
      <Footer />
    </>
  );
}

export default App;
