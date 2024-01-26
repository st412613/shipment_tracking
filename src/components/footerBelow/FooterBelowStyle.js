import { makeStyles } from '@mui/styles';

const FooterBelowStyle = makeStyles(() => ({
  footerContainer: {
    background: 'linear-gradient(to top, #002A38, #004F6E)',
    bottom: 0,
    width: '100%',
  },
  topContainer: {
    color: '#fff',
    padding: '30px 20px',
    display: 'grid',
    gridTemplateColumns: '5fr 6fr 5fr',
    gridGap: '5px',
  },
  contentBox: {
    margin: '10px',
    '& h2': {
      textTransform: 'uppercase',
      fontSize: '25px',
      marginBottom: '20px',
      fontWeight: '600',
      position: 'relative',
    }
  },
  content: {
    '& h1': {
      fontSize: '26px',
      background: '#F0801A',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    '& p': {
      margin: '10px 10px 10px 0px',
      fontSize: '14px',
      display:'flex',
      alignItems: 'center',
      '& span': {
        marginRight:'10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '20px',
          color: '#F0801A',
        }
      },
    },
    '& h3': {
      color: 'lightblue',
      fontSize: '14px',
      fontWeight: '600',
    },
  },
  socialIcon: {
    alignItems: 'center',
    marginTop: '1rem',
    '& svg': {
      marginRight: '10px',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.2)',
      }
    }
  },
  serviceContent: {
    margin: '40px 0px',
    '& h5': {
      width: '70%',
      border: '1px solid #fff',
      padding: '5px 10px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px 0px',
      fontWeight: '600',
      display:'flex',
      alignItems: 'center',
      '&:hover': {
        backgroundColor: '#F0801A',
      }
    }
  },
  endLegalContainer: {
    borderTop: '1px solid #436069',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      display: 'flex',
      fontSize: '14px',
      alignItem:'center',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
      '& span' :{
        color: '#F0801A',
      },
    },
  },

  '@media screen and (max-width: 768px)': {
    topContainer: {
      color: '#fff',
      padding: '30px 20px',
      display: 'block'
    },
    serviceContent: {
      margin: '20px 0px',
      '& h5': {
        width: '80%',
      }
    },
    endLegalContainer: {
      padding: '10px',
      textAlign: 'center',
      display: 'block',
      '& p': {
        display: 'block',
        fontSize: '14px',
        alignItem:'center',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
        '& span' :{
          color: '#F0801A',
        },
      },
    },
  }
}));

export default FooterBelowStyle;