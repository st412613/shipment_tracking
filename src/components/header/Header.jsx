import React, { useState } from 'react';
import HeaderStyle from './HeaderStyle';
import { Facebook, Twitter, Instagram, Pinterest, Phone, Mail, Clear, Menu } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import {Box} from '@mui/material';
import companyLogo from '../../assets/images/CompanyLogo.jpeg';

const Header = () => {
  const classes = HeaderStyle();
  const [isNavOpen, setIsNavOpen]  = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  // const closeNav = () => {
  //   setIsNavOpen(false);
  // };

  return (
    <>
      <div className={classes.topNavContainer}>
        <div className={classes.socialIconContainer}>
          <Facebook />
          <Twitter />
          <Instagram />
          <Pinterest />
        </div>
        <div className={classes.ContactInfoContainer}>
          <p><span><Mail /></span>INFO@NOWTRANSITCARGO.COM,  Sales@nowtransitcargo.com</p>
          <p><span><Phone /></span>9930002453, 9646666663</p>
        </div>
      </div>

      <div className={classes.MenuNavContainer}>
        <div className={classes.logoContainer}>
          <img src={companyLogo} alt='CompanyLogo'/>
        </div>
        <div className={classes.navLinksContainer}>
          <div className={classes.navContent}>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Tracking</li>
              <li>Customer Login</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className={classes.menuButton} onClick={toggleNav}>
          { isNavOpen ? <Clear /> : <Menu />}
        </div>
      </div>
      {isNavOpen ? 
        <Box className={classes.menuShow}>
          <MenuItem color='black'>Home</MenuItem>
          <MenuItem color='black'>About Us</MenuItem>
          <MenuItem color='black'>Services</MenuItem>
          <MenuItem color='black'>Tracking</MenuItem>
          <MenuItem color='black'>Customer Login</MenuItem>
          <MenuItem color='black'>Contact Us</MenuItem>
        </Box> 
        : 
        <></>
      }
    </>
  );
};

export default Header;