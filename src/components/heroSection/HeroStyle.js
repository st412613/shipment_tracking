import { makeStyles } from '@mui/styles';

const HeroStyle = makeStyles(() => ({
  heroContainer: {
    '& div': {
      '& div': {
        boxShadow: 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px',
        '& div': {
          width: '100%',
          height: '90vh',
          '& img': {
            width: '100%',
            height: '100%'
          }
        }
      }
    }
  },
  disclaimerContainer: {
    margin: '40px 0px',
    '& div': {
      background: '#e5eaf8',
      color: '#004F6E'
    }
  },

  '@media screen and (max-width: 768px)': {
    heroContainer: {
      '& div': {
        '& div': {
          '& div': {
            height: '40vh',
          }
        }
      }
    },
  }
}));

export default HeroStyle;