import { makeStyles } from '@mui/styles';

const HeaderStyle = makeStyles(() => ({
  headerContainer: {
    padding: '8px 40px',
    display: 'flex',
    maxWidth: '100%',
    height: '25vh',
    margin: 'auto',
    justifyContent: 'space-between',
    backgroundColor: '#F3F3F3',
  },
  socialIconContainer: {
    width: '25%',
    alignItems: 'center',
    display: 'flex',
    '& svg': {
      marginLeft: '10px',
      height: '30px',
      width: '35px',
      cursor: 'pointer',
      color: '#F0801A',
      borderRadius: '50%',
      '&:hover': {
        transform: 'scale(1.2)',
      }
    }
  },
  logoImageContainer: {
    width: '35%',
    padding : '20px 0px',
    '& h6': {
      color: '#F0801A',
      fontSize: '1.2rem',
      fontWeight: '700'
    },
    '& p': {
      color: '#5c5454',
      fontWeight: '600',
      marginBottom: '0px',
      fontSize: '15px',
      alignItems: 'center',
    }
  },
  ContactInfoContainer: {
    width: '40%',
    padding : '20px 0px',
    '& h6': {
      fontWeight: '600',
      marginBottom: '10px',
      color: '#000',
      display:'flex',
      alignItems: 'center',
      '& span': {
        color: '#F0801A',
        marginRight:'10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '30px',
        }
      },
    },
    '& p': {
      color: '#5c5454',
      fontWeight: '600',
      marginBottom: '0px',
      marginLeft: '5px',
      display:'flex',
      fontSize: '15px',
      alignItems: 'center',
      '& span': {
        color: '#F0801A',
        marginRight:'10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '20px',
          marginRight: '5px',
        }
      },
    }
  },
  MenuNavContainer: {
    zIndex: '2',
    color: '#fff',
    backgroundColor: '#4E4945',
    height: '14vh',
    width: '100%',
    display: 'flex',
    position: 'sticky',
    top: 0,
  },
  logoContainer: {
    backgroundColor: '#fff',
    width: '22%',
    '& img': {
      cursor: 'pointer',
      width: '100%',
      height: '100%',
    }
  },
  clipContainer: {
    width: '15%',
    background: '#4E4945',
    // clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
    marginRight: '-1px',
  },
  navLinksContainer: {
    width: '60%',
    background: '#fff',
  },
  navContent: {
    background: '#4E4945',
    height: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '1.8rem 3rem 1rem 0rem',
    // clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)',
    '& ul': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      '& li': {
        listStyle: 'none',
        '& a': {
          textDecoration: 'none',
          fontSize: '15px',
          fontWeight: '600',
          color: '#fff',
          transition: 'color 0.3s',
          display: 'flex',
          alignItems: 'center',
          marginRight: '10px',
          '&:hover': {
            color: '#F0801A',
          },
          '&.active': {
            color: '#F0801A', 
          },
        },
      }
    }
  },
  menuButton: {
    display: 'none',
  },
  menuShow: {
    display: 'none',
    '& a': {
      textDecoration: 'none',
      color: '#fff',
      transition: 'color 0.3s',

      '&:hover': {
        color: '#F0801A',
      },

      '&.active': {
        color: '#F0801A', 
      },
    },
  },
  dropdown: {
    position: 'relative',
    display: 'inline-block',
    '&:hover $dropdownContent': {
      display: 'block',
    },
    '&:hover a': {
      color: '#F0801A',
    },
  },

  dropdownContent: {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#4E4945',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    '& a': {
      color: '#fff !important',
      fontSize: '14px !important',
      padding: '12px 16px',
      textDecoration: 'none',
      display: 'block',
      marginRight: '0px !important'
    },
    '& a:hover': {
      // backgroundColor: '#ddd',
      color: '#F0801A !important',
    },
  },


  '@media screen and (max-width: 768px)': {
    headerContainer: {
      width: '100%',
      padding: '6px 10px',
      display: 'block',
      textAlign: 'center',
      height: 'auto'
    },
    socialIconContainer: {
      width: '100%',
      display: 'block',
      '& svg': {
        marginLeft: '0px',
        height: '23px',
        width: '35px',
      }
    },
    logoImageContainer: {
      width: '100%',
      padding : '0px 0px',
      marginBottom: '5px',
      '& h6': {
        color: '#F0801A',
        fontSize: '1rem',
        fontWeight: '700'
      },
      '& p': {
        fontSize: '14px',
      }
    },
    ContactInfoContainer: {
      width: '100%',
      padding : '2px 0px',
      '& h6': {
        fontSize: '14px',
        marginBottom: '5px',
        '& span': {
          color: '#F0801A',
          marginRight:'10px',
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            width: '18px',
          }
        },
      },
      '& p': {
        marginBottom: '5px',
        fontSize: '15px',
        marginLeft: '0px',
        '& span': {
          marginRight:'0px',
          '& svg': {
            width: '18px',
            marginRight: '5px',
          }
        },
      }
    },
    MenuNavContainer: {
      height: '14vh'
    },
    logoContainer: {
      width: '90%',
      '& img': {
        width: '100%',
        height: '100%',
      }
    },
    clipContainer: {
      display: 'none',
    },
    navLinksContainer: {
      width: '50%',
      display: 'none',
    },
    navContent: {
      padding: '0rem',
      '& ul': {
        display: 'none',
      }
    },
    menuButton: {
      display: 'block',
      color: '#fff',
      width: '60%',
      clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)',
      padding: '20px 20px',
      textAlign: 'end',
      '& svg': {
        height:  '2rem',
        width: '2rem',
        cursor:  'pointer'
      }
    },
    menuShow: {
      backgroundColor: '#4E4945',
      color:'#fff',
      zIndex: '1000',
      height: '100vh',
      width: '60%',
      position: 'sticky',
      top: 0,
      display: 'block',
      transition: 'all .5s',
    },  
  }
  
}));

export default HeaderStyle;