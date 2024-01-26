import { makeStyles } from '@mui/styles';

const NewsLetterStyle = makeStyles(() => ({
  newsletterContainer: {
    display: 'flex',
    width: '100%',
    bottom: 0
  },
  leftContainer: {
    width: '70%',
    display: 'grid',
    gridTemplateColumns: '5fr 5fr',
    gridGap: '5px',
    backgroundColor:  '#F0801A',
    padding: '20px',
  },
  content: {
    color: '#fff',
    display: 'flex',
    margin: '10px 20px',
  },
  icon: {
    width: '30%',
    textAlign: 'end',
    '& svg': {
      width: '4rem',
      height: '4rem',
      margin: '0px 20px'
    }
  },
  text: {
    width: '70%'
  },
  inputContainer: {
    margin: 'auto',
    width: '100%',
    '& input': {
      width: '100%',
      padding: '20px',
      border: 'none',
      outline: 'none',
      height: '30px',
    }
  },
  rightContainer: {
    width: '30%',
    alignItems: 'center',
    backgroundColor:  '#002A38',
    padding: '52px 10px 10px 40px',
    '& button': {
      cursor: 'pointer',
      background: '#004F6E',
      color: '#fff',
      display: 'flex',
      boxShadow: '10px 10px 0 rgba(0,0,0,.5)',
      fontSize: '20px',
      padding: '4px 20px',
      transform: 'skew(-20deg)',
      border: 'none',
      outline: 'none', 
      '&:hover': {
        background: '#002233',
        boxShadow: '10px 10px 0 rgba(0,0,0,.8)',
        transition: 'background 0.3s, box-shadow 0.3s',
      },
      '& svg': {
        marginLeft: '10px',
        marginTop: '3px',
      }
    }
  },

  '@media screen and (max-width: 768px)': {
    newsletterContainer: {
      display: 'block',
      backgroundColor:  '#F0801A',
    },
    leftContainer: {
      width: '100%',
      display: 'block',
      padding: '10px 20px',
    },
    content: {
      margin: '0px',
    },
    icon: {
      textAlign: 'right',
      '& svg': {
        margin: '0px 0px'
      }
    },
    text: {
      width: '100%',
      '& h3': {
        fontSize: '1.2rem',
      },
      '& h2': {
        fontSize: '1.6rem',
      },
    },
    rightContainer: {
      width: '100%',
      backgroundColor:  '#F0801A',
      padding: '0px 0px 18px 0px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& button': {
        transform: 'skew(0deg)',
      }
    },
  }
}));

export default NewsLetterStyle;