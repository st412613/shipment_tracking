import React from 'react';
import ServiceStyle from './ServiceStyles';
import TruckImage from '../../assets/images/truck.jpg';
import TrainImage from '../../assets/images/train.jpg';
import AirplaneImage from '../../assets/images/airoplane.jpg';

const Services = () => {
  const classes = ServiceStyle();

  // Sample data representing services
  const servicesData = [
    {
      id: 0,
      title: 'SURFACE CARGO',
      description: 'Our Company provides services for Full Truck Load (FTL) as well as Part Truck Load (PTL) to customers, which gives them flexibility for quantity of their consignment. Under PTL, the customers have the flexibility of hiring the truck on part basis. The goods of various customers are consolidated and transported to multiple destinations on the same truck. Under FTL, we provide door to door service wherein the entire truck is loaded with goods of a single customer and are delivered to the delivery point as specified by the customer. The customers who have large quantities of goods to be transported hire full truck load for transport of cargo.',
      imageUrl: TruckImage,
    },
    {
      id: 1,
      title: 'TRAIN CARGO',
      description: 'Through this service, we transport goods by passenger trains instead of the traditional goods trains. This is because goods trains are generally for goods in bulk quantities like food grains, coal etc. Booking small sections in one container of goods trains is not cost effective and thus we transport our consignments using the Luggage compartments of the passenger trains. Also, the goods trains take more transit time than passenger trains due to which customers of certain non-perishable goods prefer passenger trains as it is a cheaper mode of transport than air cargo.We ensure our customers timely door-to-door pick up & delivery which helps us in retaining our customers as they are satisfied with the service.',
      imageUrl: TrainImage,
    },
    {
      id: 2,
      title: 'AIR CARGO',
      description: 'Air Cargo Service is a fast transportation service and used by customers with urgent transportation need and / or perishable goods. Currently, we provide same-day-delivery service only for Metro cities in India. Our air consignments move through various airways. Air Cargo bookings are on requirement basis, and a network of various airlines ensures better availability of consignments. Air Cargo is beneficial to our customers as it is a time-definite mode and also beneficial to our Company as it helps in route optimization. We book air consignments and further sub-contract the consignment to carriers / other agencies for transport to the required destination by Air.',
      imageUrl: AirplaneImage,
    },
  ];

  return (
    <div className={classes.ourServicesContainer}>
      {servicesData.map((service) => (
        <div key={service.id} className={classes.flexContent}>
          <div className={classes.imageContainer}>
            <img alt={service.title} src={service.imageUrl} />
          </div>
          <div className={classes.textContainer}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
