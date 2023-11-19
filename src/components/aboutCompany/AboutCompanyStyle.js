import { makeStyles } from '@mui/styles';

const AboutCompanyStyle = makeStyles(() => ({
  AboutCompanyContainer: {
    width: '100%',
  },
  AboutCompanyContent: {
    width: '90%',
    margin: '20px auto',
    '& p': {
      marginBottom: '2rem',
    },
  },

  '@media screen and (max-width: 768px)': {
    AboutCompanyContent: {
      margin: '15px auto',
      '& p': {
        marginBottom: '1.5rem',
        fontSize: '14px',
      },
    },
  }
}));

export default AboutCompanyStyle;