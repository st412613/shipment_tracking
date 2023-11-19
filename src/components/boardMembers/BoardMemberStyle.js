import { makeStyles } from '@mui/styles';

const BoardMemberStyle = makeStyles(() => ({
  boardMembersContent: {
    width: '100%',
    '& div': {
      '& div': {
        '& div': {
          '& div': {
            height: '40vh',
            '& h4': {
              color: '#e91e63',
              fontSize: '20px',
            },
            '& p': {
              color: '#004F6E',
              fontSize: '15px',
            },
          },
        },
      },
    },
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
    backgroundColor: '#e91e63'
  },

  '@media screen and (max-width: 768px)': {
    boardMembersContent: {
      '& div': {
        '& div': {
          '& div': {
            marginBottom: '20px',
            '& div': {
              height: 'auto',
              '& h4': {
                fontSize: '18px',
              },
              '& p': {
                fontSize: '14px',
              },
            },
          },
        },
      },
    },
    color: {
      display: 'none',
    },
  
  }
}));

export default BoardMemberStyle;