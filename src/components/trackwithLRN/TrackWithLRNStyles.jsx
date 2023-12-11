import { makeStyles } from '@mui/styles';

const TrackWithLRNStyles = makeStyles(() => ({
  shipmentTrackContainer: {
    width: '100%',
    backgroundColor: '#ecf4f9',
    padding: '4rem 0rem',
  },
  shipmentTrackContent: {
    width: '90%',
    margin: 'auto',
  },
  formContainer: {
    display: 'flex'
  },
  inputContainer:{
    width: '50%',
    '& input': {
      width: '100%',
      padding: '20px',
      border: 'none',
      outline: 'none',
      height: '30px',
    },
  },
  buttonContainer: {
    margin: 'auto 20px',
    '& button':{
      cursor: 'pointer',
      background: '#004F6E',
      color: '#fff',
      marginRight: '2rem',
      fontSize: '16px',
      padding: '7px 20px',
      border: 'none',
      outline: 'none',
      '&:hover': {
        background: '#002233',
        boxShadow: '4px 4px 0 rgba(0,0,0,.4)',
        transition: 'background 0.2s, box-shadow 0.2s',
      },
    }
  },
  errorContainer: {
    color: 'red',
    marginTop: '10px',
  },
  LRContainer: {
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
  trackDetailsContent: {
    margin: '10px 0px 0px 0px',
    position: 'relative'
  },
  detailContent: {
    margin: '10px',
    '& h5': {
      display: 'inline-block',
      fontSize: '16px',
      color: '#059205'
    },
    '& h6': {
      display: 'inline-block',
      marginLeft: '10px',
      color: 'cadetblue',
    }
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
    formContainer: {
      display: 'block'
    },
    inputContainer:{
      width: '100%',
    },
    buttonContainer: {
      margin: 'auto 20px',
      textAlign: 'center',
      '& button':{
        marginRight: '0rem',
        marginTop: '20px',
      }
    },
    LRContainer: {
      '& h3': {
        fontSize: '16px',
      },
    },
    summaryContainer: {
      width: '100%',
      '& h4': {
        fontSize: '18px',
      },
      '& h1': {
        '& span': {
          fontSize: '20px',
        }
      }
    },
  }
}));

export default TrackWithLRNStyles;