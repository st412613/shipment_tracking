import { makeStyles } from '@mui/styles';

const BoardMemberStyle = makeStyles(() => ({
  boardMembersContent: {
    width: '100%',
  },
  color: {
    height: '10vh',
    margin: '5rem auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '-1',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#F0801A'
  },
  itemContainer: {
    display: 'flex', 
    width: '100%',
  },
  imageContent: {
    width: '40%'
  },
  textContent: {
    width: '60%',
    paddingLeft: '10px',
    '& h4': {
      color: '#F0801A',
      fontSize: '20px',
    },
    '& p': {
      color: '#004F6E',
      fontSize: '15px',
    },
  },

  '@media screen and (max-width: 768px)': {
    boardMembersContent: {
      '& div': {
        '& div': {
          '& div': {
            marginBottom: '20px',
          },
        },
      },
    },
    color: {
      display: 'none',
    },
    itemContainer: {
      display: 'block', 
      width: '90%',
      margin: 'auto'
    },
    imageContent: {
      width: '100%',
      height: '60vh'
    },
    textContent: {
      width: '100%',
      '& h4': {
        color: '#F0801A',
        fontSize: '18px',
      },
      '& p': {
        color: '#004F6E',
        fontSize: '13px',
      },
    },
  
  }
}));

export default BoardMemberStyle;