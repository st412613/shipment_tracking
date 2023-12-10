import { makeStyles } from '@mui/styles';

const ContactUsFormStyles = makeStyles(() => ({
  contactUsContainer: {
    width: '100%',
    backgroundColor: '#ecf4f9',
    padding: '4rem 0rem',
  },
  contactUsContent: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  contactFormContainer: {
    width: '55%',
    backgroundColor: '#fff',
    padding: '2rem',
    '& h5': {
      color: '#004F6E'
    }
  },
  contactInfoContainer: {
    width: '40%',
    height: 'auto',
    padding: '2rem',
    backgroundColor: '#fff',
    '& h5': {
      color: '#004F6E'
    }
  },
  contactInfoContent: {
    margin: '1rem 0rem'
  },
  flexContent: {
    color: '#004F6E',
    display: 'flex',
    marginBottom: '1rem',
  },
  iconContent:{
    backgroundColor: '#e91e63',
    color: '#fff',
    width: '3rem',
    height: '3rem',
    '& svg':{
      margin: '10px',
    },
  },
  infoContent: {
    padding: '0px 10px',
    '& h5': {
      textTransform: 'uppercase',
      fontSize:'1.1rem',
    },
    '& p': {
      fontSize:'14px',
    }
  },
  locationContainer: {
    width: '90%',
    margin: 'auto',
    '& div': {
      width: '100%',
      '& iframe': {
        width: '100%',
        height: '80vh',
      },
    }
  },

  '@media screen and (max-width: 768px)': {
    contactUsContainer: {
      padding: '2rem 0rem',
    },
    contactUsContent: {
      display: 'block',
      justifyContent: 'none',
    },
    contactFormContainer: {
      width: '100%',
      height: '100vh',
      padding: '1rem',
      textAlign: 'center',
    },
    formContainer: {
      display: 'block',
    },
    contactInfoContainer: {
      width: '100%',
      marginTop: '2rem',
      padding: '1rem',
      textAlign: 'center',
    },
    iconContent:{
      width: '2.5rem',
      height: '2.5rem',
      '& svg':{
        margin: '8px',
      },
    },
    infoContent: {
      textAlign: 'start',
      '& h5': {
        fontSize:'1rem',
      },
    },
    locationContainer: {
      '& div': {
        '& iframe': {
          height: '60vh',
        },
      }
    },
  }
}));

export default ContactUsFormStyles;