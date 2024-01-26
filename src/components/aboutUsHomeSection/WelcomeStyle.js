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
    width: '35%',
    height: '80vh',
    '& img': {
      width: '100%',
      height: '100%',
    },
    '& h1': {
      fontSize: '2.2rem',
      fontWeight: '700',
      color:  '#004F6E',
      position: 'relative',
      marginBottom: '20px',
      '& span': {
        color: '#F0801A'
      },
    },
  },
  textContainer: {
    width: '40%',
    '& div': {
      margin: '0px 20px',
      '& h3': {
        marginTop: '100px',
        fontSize: '1.6rem',
        color:  '#004F6E',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-6px',
          backgroundColor: '#F0801A',
          height: '1px',
          boxSizing: 'border-box',
          width: '100%',
        }
      },
      '& h5': {
        color: '#002A38',
        marginTop: '20px',
        fontSize: '16px',
      },
      '& p': {
        margin: '10px 0px',
        fontSize: '15px',
      },
      '& button': {
        marginBottom: '10px',
        cursor: 'pointer',
        background: '#4E4945',
        color: '#fff',
        // boxShadow: '10px 10px 0 rgba(0,0,0,.5)',
        fontSize: '16px',
        padding: '8px 30px',
        border: 'none',
        outline: 'none', 
        '&:hover': {
          background: '#F0801A',
          boxShadow: '10px 10px 0 rgba(0,0,0,.8)',
          transition: 'background 0.3s, box-shadow 0.3s',
        },
      }
    },
  },
  missionContainer: {
    width: '25%',
    '& h1': {
      fontSize: '2.2rem',
      fontWeight: '700',
      color:  '#004F6E',
      position: 'relative',
      marginBottom: '20px',
      '& span': {
        color: '#F0801A'
      },
    },
  },

  '@media screen and (max-width: 768px)': {
    flexContainer: {
      display: 'Block',
      textAlign: 'center',
    },
    imageContainer: {
      width: '100%',
      height: '50vh',
      '& h1':{
        fontSize: '2rem',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-6px',
          backgroundColor: '#F0801A',
          height: '1px',
          boxSizing: 'border-box',
          width: '100%',
        }
      },
    },
    textContainer: {
      width: '100%',
      '& div': {
        margin: '20px 5px',
        '& h3': {
          marginTop: '10rem'
        },
        '& h5': {
          textAlign: 'justify',
          color: '#002A38',
          marginTop: '20px',
          fontSize: '16px',
        },
        '& p': {
          textAlign: 'justify',
        },
      },
    },
    missionContainer: {
      width: '100%',
      '& h1': {
        fontSize: '2.2rem',
        fontWeight: '700',
        color:  '#004F6E',
        position: 'relative',
        marginBottom: '20px',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: '-10px',
          backgroundColor: '#F0801A',
          height: '2px',
          boxSizing: 'border-box',
          width: '100%',
        },
        '& span': {
          color: '#004F6E',
        },
      },
      '& p': {
        textAlign: 'justify',
      }
    },
  }
}));

export default WelcomeStyle;