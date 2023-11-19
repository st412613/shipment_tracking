import { makeStyles } from '@mui/styles';

const OurClientStyle = makeStyles(() => ({
  ourClientContainer: {
    width:'100%'
  },
  ourClientContent: {
    width: '90%',
    margin: '0px auto',
  },
  '@media screen and (max-width: 768px)': {}
}));

export default OurClientStyle;