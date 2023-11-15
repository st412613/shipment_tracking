import React from 'react';
import Navigation from '../common/navigate/Navigation';
import HeadingSection from '../common/headingSection/HeadingSection';
import AboutCompany from '../components/aboutCompany/AboutCompany';

const About = () => {
  return (
    <>
      <Navigation />
      <HeadingSection title='About Company' subtitle='know more about us'/>
      <AboutCompany />
    </>
  );
};

export default About;