import React from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeStyle from './WelcomeStyle';
import CompanyImage from '../../assets/images/production.jpg';

const Welcome = () => {
  const classes = WelcomeStyle();
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    // Redirect to the 'about-us' page
    navigate('/about-us');
  };
    
  return (
    <div className={classes.aboutUsContainer}>
      <div className={classes.flexContainer}>
        <div className={classes.imageContainer}>
          <img alt='image' src={CompanyImage}/>
        </div>
        <div className={classes.textContainer}>
          <div>
            <h1>Welcome to NCPL Logistic Pvt Ltd</h1>
            <h5>NCPL Logistics Pvt Ltd is today a multi-unit, multi-location and multi-faceted Transport and Logistics conglomerate in India having a tracking record of over Three Months. As a group it offers a complete range of Supply chain solutions that harness the use of technology and decision support tools. We are an ISO Certified company.</h5>
            <p>It is committed to offer effective, industry focused & customer centric solution that integrate the various processes of its clients to organize cost effective, reliable, and timely products and information flow. MICS Logistics Pvt Ltd has grown from strength to strength with confidence in our expertise and commitment to deliver the best to our customers.</p>
            <p>Through our concentrated efforts, we have set benchmarks of excellence within the industry verticals. All modes of transportation have been efficiently integrated to provide Door to Door transport service for all types of cargo - from heavy lifts to an envelope.</p>

            <button onClick={handleReadMoreClick}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;