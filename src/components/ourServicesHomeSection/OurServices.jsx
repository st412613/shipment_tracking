import React from 'react';
import OurServicesStyle from './OurServiceStyle';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TrainLogo from '../../assets/images/trainLogo.svg';
import TruckLogo from '../../assets/images/truckLogo.svg';
import AirplaneLogo from '../../assets/images/airplaneLogo.svg';
import TopayLogo from '../../assets/images/topayLogo.svg';
import ReverseLogisticLogo from '../../assets/images/reverseLogisticLogo.svg';
import HeadingSection from '../../common/headingSection/HeadingSection';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '10px',
  textAlign: 'center',
  height: '60vh',
}));

const OurServices = () => {
  const classes = OurServicesStyle();
  const itemsData = [
    { id: 1, logo: TruckLogo , title: 'Surface cargo', description: 'We have gained immense expertise in providing Surface Cargo Service to respectable clients.' },
    { id: 2, logo: TrainLogo , title: 'train cargo', description: 'We transport goods by Express trains instead of the traditional goods trains.' },
    { id: 3, logo: AirplaneLogo, title: 'air cargo', description: 'We are one of the leading firms engaged in providing Air Cargo Service to esteemed clients.' },
    { id: 4, logo: TopayLogo, title: 'Cod & topay service', description: 'We are providing Logistics & Transport , COD & ToPay.' },
    { id: 5, logo: ReverseLogisticLogo, title: 'reverse logistic', description: 'NowTransit Cargo Private Limited provide Reverse Logistics to the Customer.' },
  ];

  return (
    <div className={classes.ourServicesContainer}>
      <div className={classes.mainContainer}>
        <HeadingSection title='Our Services' subtitle='We make shipping easy! Choose from Surface, Train, or Air Cargo for all-inclusive logistics solutions.'/>
        <Box className={classes.gridContainer}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {itemsData.map((item, id) => (
              <Grid xs={12} sm={4} md={4} key={id}>
                <Item style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
                  <div className={classes.gridContent}>
                    <div className={classes.logoContainer}>
                      <img src={item.logo} alt='logo' style={{ fill: 'red' }}/>
                    </div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default OurServices;