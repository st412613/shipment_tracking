import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyle from './HeaderStyle';
import { Facebook, Twitter, Instagram, Pinterest, Phone, Mail, Clear, Menu, KeyboardArrowDown } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import {Box} from '@mui/material';
import companyLogo from '../../assets/images/Logo.jpeg';

const Header = () => {
  const classes = HeaderStyle();
  const [isNavOpen, setIsNavOpen]  = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
  };

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
          <p><span><Mail /></span>info@nowtransitcargo.com ,  Sales@nowtransitcargo.com</p>
          <p><span><Phone /></span>9930002453, 9646666663</p>
        </div>
      </div>

      <div className={classes.MenuNavContainer}>
        <div className={classes.logoContainer}>
          <img src={companyLogo} alt='CompanyLogo'/>
        </div>
        <div className={classes.clipContainer}></div>
        <div className={classes.navLinksContainer}>
          <div className={classes.navContent}>
            <ul>
              <li><NavLink to="/" className={classes.activeLink}>Home</NavLink></li>
              <li><NavLink to="/about-us" className={classes.activeLink}>About Us</NavLink></li>
              <li className={classes.dropdown}>
                <NavLink to="/services" className={classes.activeLink}>
                  Services
                  <KeyboardArrowDown />
                </NavLink>
                <div className={classes.dropdownContent} style={{color: 'black'}}>
                  <NavLink to="/services" className={classes.activeLink}>Our Services</NavLink>
                  <NavLink to="/services/IT-services" className={classes.activeLink}>IT Services</NavLink>
                </div>
              </li>
              {/* <li><NavLink to="/tracking" className={classes.activeLink}>Tracking</NavLink></li> */}
              <li className={classes.dropdown}>
                <NavLink to="/pincode-Tracking" className={classes.activeLink}>
                  Tracking
                  <KeyboardArrowDown />
                </NavLink>
                <div className={classes.dropdownContent} style={{color: 'black'}}>
                  <NavLink to="/pincode-Tracking" className={classes.activeLink}>Pincode Tracking</NavLink>
                  <NavLink to="/users/track-Your-Shipment" className={classes.activeLink}>Track Shipment</NavLink>
                </div>
              </li>
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
          <MenuItem onClick={closeNav}><NavLink to="/" className={classes.activeLink}>Home</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/about-us" className={classes.activeLink}>About Us</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/services" className={classes.activeLink}>Our Services</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/services/IT-services" className={classes.activeLink}>IT Services</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/pincode-Tracking" className={classes.activeLink}>Pincode Tracking</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/users/track-Your-Shipment" className={classes.activeLink}>Track Shipment</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/customer-login" className={classes.activeLink}>Customer Login</NavLink></MenuItem>
          <MenuItem onClick={closeNav}><NavLink to="/contact-us" className={classes.activeLink}>Contact Us</NavLink></MenuItem>
        </Box>
        : 
        <></>
      }
    </>
  );
};

export default Header;