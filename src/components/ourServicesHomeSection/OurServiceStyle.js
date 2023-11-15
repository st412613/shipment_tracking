import { makeStyles } from '@mui/styles';

const OurServicesStyle = makeStyles(() => ({
  ourServicesContainer: {
    width: '100%',
  },
  mainContainer: {
    width: '90%',
    margin: '6rem auto',
    textAlign: 'center',
  },
  gridContainer: {
    marginTop: '3rem',
  },
  gridContent: {
    margin: '10px 20px',
    '& h5': {
      textTransform: 'uppercase',
      color:  '#004F6E',
      marginTop: '20px',
      fontSize: '16px',
    },
    '& p': {
      color:  '#004F6E',
      margin: '20px 0px',
      fontSize: '15px',
    },
  },
  logoContainer: {
    margin: '20px auto',
    width: '40%',
    height: '40%',
    '& img': {
      width: '100%',
      height: '100%',
      '& svg': {
        color: 'red',
      }
    }
  },

  '@media screen and (max-width: 768px)': {
    mainContainer: {
      margin: '3rem auto',
    },
    gridContainer: {
      marginTop: '2rem',
    },
    gridContent: {
      '& h5': {
        marginTop: '10px',
      },
      '& p': {
        fontSize: '14px',
      },
    },
  }
}));

export default OurServicesStyle;