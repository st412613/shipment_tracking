import { makeStyles } from '@mui/styles';

const FooterStyle = makeStyles(() => ({
  footerContainer: {
    background: 'linear-gradient(to top, #002A38, #004F6E)',
    bottom: 0,
    width: '100%',
  },
  topContainer: {
    color: '#fff',
    display: 'grid',
    gridTemplateColumns: '5fr 4fr 5fr 4fr',
    gridGap: '5px',
  },
  contentBox: {
    margin: '10px',
    '& h2': {
      textTransform: 'uppercase',
      fontSize: '18px',
      marginBottom: '20px',
      fontWeight: '600',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        bottom: '-6px',
        backgroundColor: '#e91e63',
        height: '2px',
        boxSizing: 'border-box',
        width: '20%',
      }
    }
  },
  content: {
    '& h1': {
      fontSize: '2.8rem',
      background: 'linear-gradient(to top, #e91e63, lightblue)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    '& p': {
      margin: '10px 10px 10px 0px',
      fontSize: '12px',
      display:'flex',
      alignItems: 'center',
      '& span': {
        marginRight:'10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '18px',
          color: '#fff'
        }
      },
    },
    '& h3': {
      color: 'lightblue',
      fontSize: '14px',
      fontWeight: '600',
    },
  },
  socialIcon: {
    alignItems: 'center',
    marginTop: '3rem',
    '& svg': {
      marginRight: '10px',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.2)',
      }
    }
  },
  serviceContent: {
    margin: '40px 0px',
    '& h5': {
      cursor: 'pointer',
      fontSize: '14px',
      margin: '10px 0px',
      fontWeight: '600',
      display:'flex',
      alignItems: 'center',
      '& span': {
        marginRight:'10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '14px',
          color: '#fff'
        }
      },
    }
  },
  endLegalContainer: {
    borderTop: '1px solid lightblue',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      display: 'flex',
      fontSize: '14px',
      alignItem:'center',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif"',
    },
  },
  newsletterContent: {
    marginTop: '2rem',
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
      '& svg': {
        color: '#004F6E',
        cursor: 'pointer',
        margin: '10px',
      }
    }
  },

  '@media screen and (max-width: 768px)': {
    topContainer: {
      display: 'block',
      padding: '20px 0px',
    },
    contentBox: {
      margin: '0px 10px',
      '& h2': {
        fontSize: '18px',
        marginBottom: '10px',
        '&::before': {
          width: '8%',
        }
      }
    },
    content: {
      '& h1': {
        fontSize: '2.6rem',
      },
      '& p': {
        margin: '0px',
        fontSize: '12px',
        '& span': {
          '& svg': {
            width: '16px',
          }
        },
      },
      '& h3': {
        fontSize: '14px',
      },
    },
    socialIcon: {
      marginTop: '1rem',
      textAlign: 'center',
    },
    serviceContent: {
      margin: '10px 0px',
      '& h5': {
        fontSize: '14px',
        margin: '8px 0px',
        '& span': {
          marginRight:'8px',
          '& svg': {
            width: '12px',
          }
        },
      }
    },
    endLegalContainer: {
      padding: '15px',
      '& p': {
        fontSize: '14px',
      },
    },
    newsletterContent: {
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  }
}));

export default FooterStyle;