import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
      <div className={classes.headerContainer}>
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
              <li><NavLink to="/" className={classes.activeLink}>Home</NavLink></li>
              <li><NavLink to="/about" className={classes.activeLink}>About Us</NavLink></li>
              <li><NavLink to="/services" className={classes.activeLink}>Services</NavLink></li>
              <li><NavLink to="/tracking" className={classes.activeLink}>Tracking</NavLink></li>
              <li><NavLink to="/customer-login" className={classes.activeLink}>Customer Login</NavLink></li>
              <li><NavLink to="/contact-us" className={classes.activeLink}>Contact Us</NavLink></li>
            </ul>
          </div>
        </div>

        <div className={classes.menuButton} onClick={toggleNav}>
          { isNavOpen ? <Clear /> : <Menu />}
        </div>
      </div>
      {isNavOpen ? 
        <Box className={classes.menuShow}>
          <MenuItem><NavLink to="/" className={classes.activeLink}>Home</NavLink></MenuItem>
          <MenuItem><NavLink to="/about" className={classes.activeLink}>About Us</NavLink></MenuItem>
          <MenuItem><NavLink to="/services" className={classes.activeLink}>Services</NavLink></MenuItem>
          <MenuItem><NavLink to="/tracking" className={classes.activeLink}>Tracking</NavLink></MenuItem>
          <MenuItem><NavLink to="/customer-login" className={classes.activeLink}>Customer Login</NavLink></MenuItem>
          <MenuItem><NavLink to="/contact-us" className={classes.activeLink}>Contact Us</NavLink></MenuItem>
        </Box> 
        : 
        <></>
      }
    </>
  );
};

export default Header;