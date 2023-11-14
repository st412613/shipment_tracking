import { makeStyles } from '@mui/styles';

const WelcomeStyle = makeStyles(() => ({
  aboutUsContainer: {
    width: '100%',
  },
  flexContainer: {
    width: '90%',
    margin: '20px auto',
    display: 'flex'
  },
  imageContainer: {
    width: '40%',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  textContainer: {
    width: '60%',
    '& div': {
      margin: '0px 20px',
      '& h1': {
        color:  '#004F6E',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-6px',
          backgroundColor: '#e91e63',
          height: '2px',
          boxSizing: 'border-box',
          width: '20%',
        }
      },
      '& h5': {
        color: '#002A38',
        marginTop: '20px',
        fontSize: '16px',
      },
      '& p': {
        color: '#002A38',
        margin: '20px 0px',
        fontSize: '15px',
      },
      '& button': {
        marginBottom: '10px',
        cursor: 'pointer',
        background: '#004F6E',
        color: '#fff',
        boxShadow: '10px 10px 0 rgba(0,0,0,.5)',
        fontSize: '18px',
        padding: '8px 30px',
        border: 'none',
        outline: 'none', 
        '&:hover': {
          background: '#002233',
          boxShadow: '10px 10px 0 rgba(0,0,0,.8)',
          transition: 'background 0.3s, box-shadow 0.3s',
        },
      }
    },
  },

  '@media screen and (max-width: 768px)': {
    flexContainer: {
      display: 'block'
    },
    imageContainer: {
      width: '100%',
      height: '30vh',
    },
    textContainer: {
      width: '100%',
      '& div': {
        margin: '0px',
        textAlign: 'center',
        '& h1': {
          fontSize: '30px',
          '&::before': {
            width: '100%',
          }
        },
        '& h5': {
          fontSize: '14px',
        },
        '& p': {
          fontSize: '13px',
        },
        '& button': {
          fontSize: '16px',
        }
      },
    },
  }
}));

export default WelcomeStyle;