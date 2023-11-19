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
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  nameContent: {
    margin: '10px 0px',
    border: '1px solid lightgrey',
    flex: '0 0 50%',
    maxWidth: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    '& input': {
      borderLeft: '1px solid lightgrey',
      width: '100%',
      padding: '10px 20px',
      outline: 'none',
      height: '30px',
      border: 'none'
    },
    '& svg': {
      color: '#004F6E',
      cursor: 'pointer',
      margin: '5px',
    }
  },
  emailContent: {
    margin: '10px 0px',
    border: '1px solid lightgrey',
    flex: '0 0 50%',
    maxWidth: '50%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    '& input': {
      borderLeft: '1px solid lightgrey',
      width: '100%',
      padding: '10px 20px',
      outline: 'none',
      height: '30px',
      border: 'none'
    },
    '& svg': {
      color: '#004F6E',
      cursor: 'pointer',
      margin: '5px',
    }
  },
  descriptionContent: {
    flex: '0 0 100%',
    maxWidth: '100%',
    margin: '20px 0px',
    border: '1px solid lightgrey',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    '& textarea': {
      borderLeft: '1px solid lightgrey',
      width: '100%',
      padding: '10px 20px',
      outline: 'none',
      height: '20vh',
      border: 'none'
    },
    '& svg': {
      color: '#004F6E',
      cursor: 'pointer',
      margin: '10px',
    }
  },
  buttonContainer:{
    display: 'flex',
    '& button': {
      cursor: 'pointer',
      background: '#004F6E',
      color: '#fff',
      marginRight: '2rem',
      fontSize: '16px',
      padding: '4px 20px',
      border: 'none',
      outline: 'none',
      '&:hover': {
        background: '#002233',
        boxShadow: '4px 4px 0 rgba(0,0,0,.4)',
        transition: 'background 0.2s, box-shadow 0.2s',
      },
    }
  },
  contactInfoContainer: {
    width: '40%',
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
      padding: '1rem',
      textAlign: 'center',
    },
    formContainer: {
      display: 'block',
    },
    nameContent: {
      margin: '20px 0px',
      maxWidth: '100%',
      '& input': {
        height: '40px',
      }
    },
    emailContent: {
      margin: '10px 0px',
      maxWidth: '100%',
      '& input': {
        height: '40px',
      }
    },
    descriptionContent: {
      '& svg': {
        margin: '5px',
      }
    },
    buttonContainer:{
      display: 'flex',
      justifyContent: 'space-between',
      '& button': {
        marginRight: '0rem',
      }
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