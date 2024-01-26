import { makeStyles } from '@mui/styles';

const ServiceStyle = makeStyles(() => ({
  ourServicesContainer: {
    width: '100%',
  },
  flexContent: {
    width: '90%',
    margin: '40px auto',
    display: 'flex'
  },
  imageContainer: {
    width: '30%',
    '& img': {
      width: '100%',
      height: '100%'
    }
  },
  textContainer: {
    width: '70%',
    padding: '0px 20px',
    '& h3': {
      fontSize: '2rem',
      marginBottom: '20px',
      textTransform: 'uppercase',
      color:  '#004F6E',
    },
    '& p': {
      color:  '#004F6E',
    },
  },

  '@media screen and (max-width: 768px)': {
    flexContent: {
      display: 'block'
    },
    imageContainer: {
      width: '100%',
    },
    textContainer: {
      width: '100%',
      padding: '0px 0px',
      '& h3': {
        margin: '10px 0px',
        fontSize: '24px'
      },
      '& p': {
        fontSize: '14px'
      }
    },
  },
}));

export default ServiceStyle;