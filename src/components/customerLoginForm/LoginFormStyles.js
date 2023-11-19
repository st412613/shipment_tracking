import { makeStyles } from '@mui/styles';

const LoginFormStyles = makeStyles(() => ({
  customerLoginContainer: {
    width: '100%',
    backgroundColor: '#ecf4f9',
    padding: '4rem 0rem',
  },
  customerLoginContent: {
    width: '30%',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '2rem',
    position: 'relative',
    '& h5': {
      color: '#004F6E',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '30%',
        bottom: '-15px',
        backgroundColor: '#e91e63',
        height: '2px',
        boxSizing: 'border-box',
        width: '40%',
      }
    },
    '& p': {
      color: '#004F6E',
      margin: '2rem 0rem',
    },
  },
  formGroup: {
    width: '100%',
    marginBottom: '1rem',
    '& input': {
      width: '100%',
      backgroundColor: '#c6e3f5',
      padding: '20px',
      border: 'none',
      outline: 'none',
      height: '30px',
    },
    '& button': {
      cursor: 'pointer',
      background: '#004F6E',
      color: '#fff',
      marginRight: '2rem',
      fontSize: '16px',
      padding: '6px 20px',
      border: 'none',
      outline: 'none',
      '&:hover': {
        background: '#002233',
        boxShadow: '4px 4px 0 rgba(0,0,0,.4)',
        transition: 'background 0.2s, box-shadow 0.2s',
      },
    },
  },
  errorContainer: {
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#f5e1e1',
    color: 'red',
    padding: '0rem',
    marginBottom: '1rem',
  },
  successContainer: {
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: '#d2f0c3',
    color: 'green',
    padding: '0.5rem',
    marginBottom: '1rem',
  },

  '@media screen and (max-width: 768px)': {
    customerLoginContent: {
      width: '90%',
      padding: '1rem',
    },
  }
}));

export default LoginFormStyles;
