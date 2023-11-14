import React from 'react';
import Newsletter from '../components/newsletter/Newsletter';
import HeroSection from '../components/heroSection/HeroSection';
import Welcome from '../components/aboutUsHomeSection/Welcome';
import OurServices from '../components/ourServicesHomeSection/OurServices';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Welcome />
      <OurServices />
      <Newsletter />
    </>
  );
};

export default Home;