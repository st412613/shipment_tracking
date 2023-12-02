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
  responseContainer: {
    margin: '10px auto',
  },
  trackIDContainer: {
    paddingBottom: '8px',
    margin: '10px 0px',
    borderBottom: '1px solid #bbd7cb',
    '& h3': {
      fontSize: '20px',
      '& span': {
        fontWeight: '400'
      },
    },
  },
  summaryContainer: {
    backgroundColor: '#fff',
    width: '60%',
    padding: '1rem',
    margin: '10px 0px',
    '& h4': {
      borderBottom: '2px solid #ecf4f9',
      paddingBottom: '10px',
      fontSize: '20px',
    },
    '& h1': {
      '& span': {
        fontSize: '20px',
      }
    }
  },
  upperContent: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  statusContent: {
    '& h5' :{
      backgroundColor: '#c8fad9',
      color:'#018b71',
      borderRadius: '3px',
      fontSize: '14px',
      padding: '8px 10px',
      fontWeight: '500',
      display: 'inline-block',
    },
  },
  summaryContent: {
    '& h5': {
      fontSize: '24px',
      fontWeight: '400'
    },
  },
  packTypContent: {
    backgroundColor: '#dbf0e6',
    borderRadius: '6px',
    display: 'inline-block',
    color: '#5b80f7',
    fontSize: '14px',
    padding: '2px 10px',
    fontWeight: '500'
  },
  trackDetailsContent: {
    margin: '10px 0px 0px 0px',
    position: 'relative'
  },
  trackingStepper: {
    padding: '4px 6px',
  },
  greenBox: {
    width: '20px',
    height: '20px',
    backgroundColor: '#0d9d59',
    position: 'absolute',
    left: -2,
    top: 0,
  },
  cardStepper: {
    padding: '0 0 20px 8px',
    borderLeft: '2.5px dotted #0d9d59',
    border: 'none'
  },
  cardHeader: {
    margin: '10px',
    '& h5': {
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
      '& span': {
        marginRight: '10px',
        display: 'flex',
        alignItems: 'center',
      },
    },
    '& p': {
      color: '#766969',
      fontSize: '13px',
    },
  },
  msgContent: {
    borderRadius: '2px',
    backgroundColor: '#dbf0e6',
    margin: '1px auto',
    width: '90%',
    padding: '8px',
    fontSize: '14px',
    color: '#000000',
    fontWeight: '500'
  },

  '@media screen and (max-width: 768px)': {
    formContainer:{
      width: '100%',
    },
  }
}));

export default ShipmentTrackStyles;