import { makeStyles } from '@mui/styles';

const PincodeTrackStyles = makeStyles(() => ({
  pincodeTrackContainer: {
    width: '100%',
    backgroundColor: '#ecf4f9',
    padding: '4rem 0rem',
  },
  pincodeTrackContent: {
    width: '90%',
    margin: 'auto',
    padding: '1.5rem',
    backgroundColor: '#fff',
    '& h4': {
      color:  '#004F6E',
    }
  },
  formContainer:{
    width: '100%',
    '& textarea': {
      width: '100%',
      height: '20vh',
      margin: '10px 0px'
    },
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
  errorMessage:{
    color: 'red'
  },

  '@media screen and (max-width: 768px)': {
    pincodeTrackContainer: {
      padding: '2rem 0rem',
    },
    pincodeTrackContent: {
      padding: '1rem',
      '& h4' :{
        fontSize :'1.2rem'
      }
    },
    buttonContainer:{
      display: 'flex',
      justifyContent: 'space-between',
      '& button': {
        marginRight: '0rem',
        fontSize: '14px',
      }
    },
    errorMessage:{
      fontSize: '0.8rem',
    },
  }
}));

export default PincodeTrackStyles;