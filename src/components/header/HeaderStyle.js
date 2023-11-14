import { makeStyles } from '@mui/styles';

const HeaderStyle = makeStyles(() => ({
  headerContainer: {
    padding: '8px 40px',
    display: 'flex',
    maxWidth: '100%',
    margin: 'auto',
    justifyContent: 'space-between',
    backgroundColor: '#002A38',
  },
  socialIconContainer: {
    width: '30%',
    alignItems: 'center',
    display: 'flex',
    '& svg': {
      marginLeft: '10px',
      height: '25px',
      width: '23px',
      cursor: 'pointer',
      color: '#fff',
      borderRadius: '50%',
      '&:hover': {
        transform: 'scale(1.2)',
      }
    }
  },
  ContactInfoContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    color: '#fff',
    '& p': {
      marginBottom: '0px',
      display:'flex',
      fontSize: '14px',
      alignItems: 'center',
      marginLeft: '30px',
      '& span': {
        marginRight:'10px',
        display: 'flex',
        alignItems: 'center',
        '& svg': {
          width: '18px',
        }
      },
    }
  },
  MenuNavContainer: {
    zIndex: '2',
    color: '#fff',
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    position: 'sticky',
    top: 0,
  },
  logoContainer: {
    padding: '4px 30px',
    backgroundColor: '#fff',
    width: '25%',
    '& img': {
      cursor: 'pointer',
      width: '60%',
      height: '100%',
    }
  },
  navLinksContainer: {
    width: '75%',
    background: '#fff',
  },
  navContent: {
    background: '#e91e63',
    height: '100%',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '1.8rem 3rem 1rem 8rem',
    clipPath: 'polygon(6% 0, 100% 0, 100% 100%, 0 100%)',
    '& ul': {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      '& li': {
        listStyle: 'none',
        '& a': {
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 0.3s',

          '&:hover': {
            color: '#004F6E',
          },

          '&.active': {
            color: '#004F6E', 
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
        color: '#004F6E',
      },

      '&.active': {
        color: '#004F6E', 
      },
    },
  },


  '@media screen and (max-width: 768px)': {
    headerContainer: {
      width: '100%',
      padding: '6px 30px',
    },
    socialIconContainer: {
      width: '20%',
      display: 'grid',
      '& svg': {
        marginLeft: '0px',
        marginBottom: '2px',
      }
    },
    ContactInfoContainer: {
      width: '80%',
      display: 'grid',
      '& p': {
        display:'inline-flex',
        fontSize: '12px',
        marginLeft: '0px',
      }
    },
    MenuNavContainer: {
      height: '14vh'
    },
    logoContainer: {
      padding: '2px 10px',
      width: '50%',
      '& img': {
        width: '100%',
        height: '100%',
      }
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
      backgroundColor: '#e91e63',
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
      backgroundColor: '#e91e63',
      color:'#fff',
      zIndex: '1',
      height: 'auto',
      display: 'block',
      transition: 'all .5s',
    },  
  }
  
}));

export default HeaderStyle;