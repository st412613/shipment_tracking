import { makeStyles } from '@mui/styles';

const AboutCompanyStyle = makeStyles(() => ({
  AboutCompanyContainer: {
    border: '1px solid black',
    width: '100%',
  },
  AboutCompanyContent: {
    width: '90%',
    margin: '20px auto',
    display: 'flex'
  },

  '@media screen and (max-width: 768px)': {}
}));

export default AboutCompanyStyle;