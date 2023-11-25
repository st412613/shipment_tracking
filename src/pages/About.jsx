import React from 'react';
import Navigation from '../common/navigate/Navigation';
import HeadingSection from '../common/headingSection/HeadingSection';
import AboutCompany from '../components/aboutCompany/AboutCompany';
import OurClient from '../components/ourClient/OurClient';
import MissionAndVision from '../components/mission&vision/Mission&Vision';
import BoardMembers from '../components/boardMembers/BoardMembers';

const About = () => {
  return (
    <>
      <Navigation />
      <HeadingSection title='About Company' subtitle='Discover Who We Are'/>
      <AboutCompany />
      <MissionAndVision />
      <HeadingSection title='Board Members' subtitle='Introducing Our Directorial Team' />
      <BoardMembers />
      <HeadingSection title='Our Client' subtitle='Our Collaborations' />
      <OurClient />
    </>
  );
};

export default About;