import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  headingContainer: {
    width: '90%',
    margin: '6rem auto',
    textAlign: 'center',
    '& h1': {
      display: 'inline-flex',
      color:  '#004F6E',
      textTransform: 'uppercase',
      fontWeight: '700',
      fontSize: '2.9rem',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-10px',
        backgroundColor: '#F0801A',
        height: '2px',
        boxSizing: 'border-box',
        width: '100%',
      }
    },
    '& h5': {
      marginTop: '20px',
      fontSize: '20px',
      fontWeight: 400,
    }
  },

  '@media screen and (max-width: 768px)': {
    headingContainer: {
      margin: '2rem auto',
      '& h1': {
        fontSize: '2.2rem',
      },
      '& h5': {
        fontSize: '16px',
      }
    },
  }
}));

const HeadingSection = ({ title, subtitle }) => {
  const classes = useStyles();
    
  return (
    <div className={classes.headingContainer}>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
    </div>
  );
};

HeadingSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default HeadingSection;
