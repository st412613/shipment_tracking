import React from 'react';
import { useLocation } from 'react-router-dom';
// import (useLocation)
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  navigationContainer: {
    top: 0,
    height: '10vh',
    backgroundColor: '#e5eaf8',
    display: 'flex',
    alignItems: 'center', 
    '& h5': {
      textTransform: 'capitalize',
      fontSize: '1rem',
      color: '#004F6E',
      margin: 'auto 3rem',
      '& span': {
        color: '#e91e63',
        textTransform: 'uppercase',
      },
    }
  },

  '@media screen and (max-width: 768px)': {
    navigationContainer: {
      height: '8vh', 
      '& h5': {
        fontSize: '1rem',
        margin: 'auto 2rem',
      }
    },
  }
}));

const Navigation = () => {
  const classes = useStyles();
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const lastRoute = pathSegments[pathSegments.length - 1];

  return (
    <div className={classes.navigationContainer}>
      {/* <h5><span>HOME</span> / {location.pathname.split('/')[1]}</h5> */}
      <h5><span>HOME</span> / {lastRoute}</h5>
    </div>
  );
};

export default Navigation;