import { makeStyles } from '@mui/styles';

const NewsLetterStyle = makeStyles(() => ({
  mainContainer: {
    border: '1px solid black',
    display: 'flex',
    width: '100%',
    bottom: 0
  },
  leftContainer: {
    width: '70%',
    display: 'grid',
    gridTemplateColumns: '5fr 5fr',
    gridGap: '5px',
    backgroundColor:  '#e91e63',
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
    backgroundColor:  '#002A38',
    border: '1px solid yellow',
    padding: '20px',
  },

  '@media screen and (max-width: 768px)': {}
}));

export default NewsLetterStyle;