import React from 'react';
import Navigation from '../common/navigate/Navigation';
import ITService from '../components/itServicesPage/ITService';
import { makeStyles } from '@mui/styles';
import HeadingSection from '../common/headingSection/HeadingSection';

const useStyle = makeStyles(() => ({
  heroContainer: {
    width: '100%',
    height: '50vh',
    objectFit: 'contain',
    position: 'relative',
    '& h5': {
      position: 'absolute', 
      color: '#fff', 
      top: '50%', 
      left: '2%', 
      display: 'inline-block',
      width:'30%'
    },
  },

  '@media screen and (max-width: 768px)': {
    heroContainer: {
      width: '100%',
      height: '40vh',
      objectFit: 'contain',
      '& h5': { 
        top: '0%', 
        left: '2%',
        width:'100%'
      },
    },
  
  }
}));

const ITServices = () => {
  const classes = useStyle();
  return (
    <>
      <Navigation />
      <div className={classes.heroContainer}>
        <h5>Mobile App & 
          <br />Third Party API Services</h5>
        <img alt='' src='https://www.bluecloudt.com/wp-content/uploads/2020/06/managed-service.jpg' height={'100%'} width={'100%'} style={{ objectFit: 'cover'}} />
      </div>
      <HeadingSection title='IT Services' subtitle='Checkout our IT services'/>
      <ITService />
    </>
  );
};

export default ITServices;