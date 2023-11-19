import { makeStyles } from '@mui/styles';

const ShipmentTrackStyles = makeStyles(() => ({
  shipmentTrackContainer: {
    width: '100%',
    backgroundColor: '#ecf4f9',
    padding: '4rem 0rem',
  },
  shipmentTrackContent: {
    width: '90%',
    margin: 'auto',
  },
  formContainer:{
    width: '50%',
    margin: '2rem 0rem',
    '& div': {
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems:'center',
      '& input': {
        width: '100%',
        padding: '20px',
        border: 'none',
        outline: 'none',
        height: '30px',
      },
      '& button': {
        border: 'none',
        backgroundColor: '#fff',
        outline: 'none',
        '& svg': {
          color: '#004F6E',
          cursor: 'pointer',
          margin: '10px',
        },
        '&:hover': {
          backgroundColor: '#e91e63', 
          '& svg': {
            color: '#fff',
          },
        },
      }
    }
  },

  '@media screen and (max-width: 768px)': {
    formContainer:{
      width: '100%',
    },
  }
}));

export default ShipmentTrackStyles;