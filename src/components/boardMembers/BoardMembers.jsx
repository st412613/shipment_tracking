import React from 'react';
import BoardMemberStyle from './BoardMemberStyle';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SumanImage from '../../assets/images/suman.jpeg';
import GayatriImage from '../../assets/images/Gayatri.jpeg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '20px',
  color: theme.palette.text.secondary,
}));

const BoardMembers = () => {
  const classes = BoardMemberStyle();
    
  return (
    <div className={classes.boardMembersContent}>
      <div className={classes.color}></div>
      <Box sx={{ width: '90%', margin: 'auto' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6}>
            <Item className={classes.itemContainer}>
              <Box className={classes.imageContent}><img src={GayatriImage} height={'100%'} width={'100%'} /></Box>
              <Box className={classes.textContent}>
                <h4>Mrs. GAYATRI GOUD (CMD)</h4>
                <p>Mrs. GAYATRI GOUD  who started this company on April 8th 2006 with an ambition of creating a highly motivated team to give personalized service to its clients .His origin was a humble beginning as a delivery pick up boy working on On Dot Courier & Cargo Ltd carrying with him a dream and a strong desire to develop a highly motivated and service efficient origination . He has 14 Year Exp. in the Logistics & Transport Industries.</p>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Item className={classes.itemContainer}>
              <Box className={classes.imageContent}><img src={SumanImage} height={'100%'} width={'100%'} /></Box>
              <Box className={classes.textContent}>
                <h4>Mrs. SUMAN DEVI (Executive Director)</h4>
                <p>She has good exp in Customer Support & Query solving. She is also manging administraton in NOWTRANSIT CARGO PRIVATE LIMITED.</p>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BoardMembers;