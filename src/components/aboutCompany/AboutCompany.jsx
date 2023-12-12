import React from 'react';
import AboutCompanyStyle from './AboutCompanyStyle';

const AboutCompany = () => {
  const classes = AboutCompanyStyle();

  return (
    <div className={classes.AboutCompanyContainer}>
      <div className={classes.AboutCompanyContent}>
        {/* 

        <p>We are a young organization with vast experience and have successfully handled large biz volume to the total satisfaction of our clients’ needs and time-bound deliveries, to their expectation on a pan-India basis. We look forward to an opportunity given with an assurance that our service will be in power with best in the industry. As discussed, we are giving you a brief of our company as below.</p>

        <p>We carry with us years of experience with a clear understanding of the industry needs and cost-effective commercials. In a short period of time, we have developed a large network and are catering to a number of clients both in private and corporate sectors on a PAN India basis. We have a team of highly skilled manpower in our operation and back-office CRM. We are tech-savvy and are available for any details on our website. We provide you with a single window solution; our prime focus is customer satisfaction.</p>

        <p>We are prepared to assist you in developing any process operationally to meet your requirement. Further, we prepare an SOP jointly so it is well understood by our ops team. We have a fleet taking care of daily pickup from any location as desired also we are doing cross logistics and reverse from any point.</p> */}

        <p>Founded on April 2018 , NowTransit Cargo Private Limited was envisaged to be a Leading Company in Logistic Sector of the India. With the head office in Vasai. and an  21000+  Pincode serviceable , the company stands as a one stop provider for logistics solutions.
Ever in the pursuit for excellence, NowTransit Cargo Private Limited  endeavors to serve its clients with a complete suite of logistics services tailored to give their business the advantage of cost effective transportation in minimum duration of time. Capitalizing on its dedicated personnel and in depth domain knowledge, the company ensures a safe and secure movement of goods/ packages with the same responsibility as instilled by its customers. The reliability and transparency of the company is projected through its effective logistic management. </p>
      </div>
    </div>
  );
};

export default AboutCompany;
