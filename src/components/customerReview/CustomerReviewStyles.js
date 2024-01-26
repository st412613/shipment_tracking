import { makeStyles } from '@mui/styles';

const CustomerReviewStyle = makeStyles(() => ({
  customerReviewContainer: {
    width: '100%',
    paddingTop: '2rem',
  },
  flexContainer: {
    width: '90%',
    margin: '20px auto',
    display: 'flex'
  },
  mapContainer: {
    width: '50%',
    '& img': {
      width: '90%',
      height: '90%',
    }
  },
  reviewContainer: {
    width: '50%',
    '& h3': {
      fontSize: '2rem',
      color:  '#004F6E',
      position: 'relative',
      '& span': {
        color: '#F0801A'
      },
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
  reviewContent: {
    padding: '20px 0px'
  },
  reviewFlex: {
    width: '100%',
    display: 'flex',
  },
  reviewImageContent: {
    width: '30%',
    height: '25vh',
    padding: '0px 10px 10px 0px', 
    '& img': {
      width: '60%',
      height: '100%',
    }
  },
  reviewTextContent: {
    width: '70%',
    padding: '0px 0px 0px 10px',
    '& span':{
      fontSize: '14px',
      marginLeft: '20px',
      color: '#8e969e' 
    }
  },

  '@media screen and (max-width: 768px)': {
    flexContainer: {
      margin: '20px auto',
      display: 'block',
      textAlign: 'center'
    },
    mapContainer: {
      width: '100%',
      '& img': {
        width: '100%',
        height: '100%',
      }
    },
    reviewContainer: {
      width: '100%',
      '& h3': {
        '& span': {
          color: '#004F6E'
        },
        '&::before': {
          height: '2px',
        }
      },
    },
    reviewContent: {
      padding: '30px 0px'
    },
    reviewImageContent: {
      width: '30%',
      height: '16vh',
      '& img': {
        width: '50%',
        height: '100%',
      }
    },
    reviewTextContent: {
      width: '70%',
      padding: '0px 0px 0px 0px',
      textAlign: 'justify',
      '& span':{
        fontSize: '14px',
        marginLeft: '20px',
        color: '#8e969e' 
      }
    },
  },
}));

export default CustomerReviewStyle;