import React from 'react';
import FooterStyle from './FooterBelowStyle';
import { Facebook, Twitter, Instagram, Pinterest, Phone, Mail, Apartment } from '@mui/icons-material';

const FooterBelow = () => {
  const classes = FooterStyle();

  return (
    <>
      <div className={classes.footerContainer}>
        <div className={classes.topContainer}>

          <div className={classes.contentBox}>
            <h2>Contact Us</h2>
            <div className={classes.content}>
              <h3>Head Office Address</h3>
              <p><span><Apartment /></span>NOWTRANSIT CARGO PRIVATE LIMITED , A 301 Murdang Building Sector 1 Vasant Nagri Vasai(E)  Mumbai , 401208</p>
              <p><span><Mail /></span>info@nowtransitcargo.com</p>
              <p><span><Phone /></span>9930002453</p>
              <p><span><Phone /></span>9646666663</p>
            </div>
          </div>

          <div className={classes.contentBox}>
            <h2>Our Services</h2>
            <div className={classes.serviceContent}>
              <h5>Surface Cargo</h5>
              <h5>Train Cargo</h5>
              <h5>Air Cargo</h5>
              <h5>Time Bound Delivery</h5>
              <h5>E Commerce Solution</h5>
            </div>
          </div>

          <div className={classes.contentBox}>
            <h2>About Us</h2>
            <div className={classes.content}>
              <h1>NowTransit Cargo Private Limited</h1>
              <p>NowTransit Cargo Private Limited today a multi-unit, multi-location and multi-faceted Transport and Logistics conglomerate in India having a tracking record of over Three Months. As a group it offers a complete range of Supply chain solutions that harness the use of technology and decision support tools.</p>
              <div className={classes.socialIcon}>
                <Facebook />
                <Twitter />
                <Instagram />
                <Pinterest />
              </div>
            </div>
          </div>

        </div>

        <div className={classes.endLegalContainer}>
          <p>© Copyright 2023 by&nbsp;<span>NOWTRANSIT CARGO PRIVATE LIMITED.&nbsp;</span> All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default FooterBelow;