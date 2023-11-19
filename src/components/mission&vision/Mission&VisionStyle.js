import { makeStyles } from '@mui/styles';

const MissionVisionStyle = makeStyles(() => ({
  missionVisionContainer: {
    width: '100%'
  },
  missionVisionContent: {
    width: '90%',
    margin: '0px auto',
  },
  leftContent: {
    width: '70%',
    height: '50vh',
    marginBottom: '30px',
    backgroundColor: '#004F6E',
    color: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    clipPath: 'polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)',
    display: 'flex',            // Use flexbox
    justifyContent: 'center',   // Center content horizontally
    alignItems: 'center',  
  },
  rightContent: {
    width: '70%',
    height: '50vh',
    marginBottom: '30px',
    clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)',
    marginLeft: 'auto',
    backgroundColor: '#004F6E',
    color: '#fff',
    display: 'flex',            // Use flexbox
    justifyContent: 'center',   // Center content horizontally
    alignItems: 'center',  
  },
  leftSideContent: {
    margin:'auto',
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '4fr 6fr 2.8fr',
    gridGap: '1px',
  },
  rightSideContent: {
    display: 'grid',
    width: '100%',
    margin:'20px auto',
    gridTemplateColumns: '2.8fr 6fr 4fr',
    gridGap: '1px',
  },
  imageContent: {
    width: '100%',
    height: '40vh',
    '& img': {
      width: '100%',
      height: '100%',
    }
  },
  textContent: {
    '& h4': {
      position: 'relative',
      fontSize: '24px',
      marginBottom: '20px',
      background: 'linear-gradient(to top, #f394b4, lightblue)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-6px',
        backgroundColor: '#e91e63',
        height: '2px',
        boxSizing: 'border-box',
        width: '10%',
      }
    },
    '& p': {
      fontSize: '16px',
    }
  },

  '@media screen and (max-width: 768px)': {
    missionVisionContent: {
      width: '100%',
    },
    leftContent: {
      width: '100%',
      height: 'auto',
      marginBottom: '10px',
      clipPath: 'none',
      display: 'block',            // Use flexbox
      justifyContent: 'center',   // Center content horizontally
      alignItems: 'left',  
    },
    rightContent: {
      width: '100%',
      height: 'auto',
      marginBottom: '20px',
      clipPath: 'none',
      marginLeft: 'auto',
      display: 'block',       
      justifyContent: 'center',
      alignItems: 'left',  
    },
    leftSideContent: {
      margin:'auto',
      padding: '10px',
      display: 'block',
      gridTemplateColumns: 'none',
      gridGap: '0px',
    },
    rightSideContent: {
      display: 'block',
      padding: '10px',
      margin:'20px auto',
      gridTemplateColumns: 'none',
      gridGap: '0px',
    },
    imageContent: {
      display: 'none',
    },
    textContent: {
      '& p': {
        fontSize: '14px',
      }
    },
  }
}));

export default MissionVisionStyle;