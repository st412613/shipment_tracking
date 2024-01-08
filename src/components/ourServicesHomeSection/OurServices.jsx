import React from 'react';
import OurServicesStyle from './OurServiceStyle';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import TrainLogo from '../../assets/images/trainLogo.png';
import TruckLogo from '../../assets/images/truckLogo.png';
import AirplaneLogo from '../../assets/images/airoplaneLogo.png';
import TopayLogo from '../../assets/images/topayLogo.png';
import FastDeliveryLogo from '../../assets/images/fastDeliveryLogo.png';
import ECommerceLogo from  '../../assets/images/ecommerceLogo.png';
import ReverseLogisticLogo from '../../assets/images/reverseLogisticLogo1.svg';
import HeadingSection from '../../common/headingSection/HeadingSection';
import Carousel from 'react-elastic-carousel';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: '10px',
  margin: '10px',
  textAlign: 'center',
  width: '95%',
  justifyContent: 'center',
  height: '40vh',
}));

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 225, itemsToShow: 2 },
  { width: 550, itemsToShow: 3 },
  { width: 700, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

const itemsData = [
  { id: 1, logo: TruckLogo , title: 'Surface cargo' },
  { id: 2, logo: TrainLogo , title: 'Train cargo' },
  { id: 3, logo: AirplaneLogo, title: 'Air cargo' },
  { id: 4, logo: TopayLogo, title: 'Cod & topay service' },
  { id: 5, logo: ReverseLogisticLogo, title: 'Reverse logistic' },
  { id: 6, logo: ECommerceLogo, title: 'E-Commerce Solution' },
  { id: 7, logo: FastDeliveryLogo, title: 'Fast Delivery' },

];

//----------------------Defining Carousel property--------------
const carouselProps = {
  itemsToShow: 3.5,
  breakPoints: [...breakpoints],
  isRTL: false
};

const OurServices = () => {
  const classes = OurServicesStyle();

  const getItemData = () => itemsData.map((item) => (
    <Item key={item.id} style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset'}}>
      <div className={classes.gridContent}>
        <div className={classes.logoContainer}>
          <img src={item.logo} alt='logo' style={{ fill: 'red' }}/>
        </div>
        <div>
          <h5>{item.title}</h5>
        </div>
      </div>
    </Item>
  ));

  return (
    <div className={classes.ourServicesContainer}>
      <div className={classes.mainContainer}>
        <HeadingSection title='Our Services' subtitle='We make shipping easy! Choose from Surface, Train, or Air Cargo for all-inclusive logistics solutions.'/>
      </div>

      <div className={classes.ourServiceContainer}>
        <Carousel {...carouselProps}>
          {getItemData()}
        </Carousel>
      </div>
    </div>
  );
};

export default OurServices;