import React from 'react';
import ITServicesStyle from './ITServiceStyle';

const ITService = () => {
  const classes = ITServicesStyle();
  const servicesData = [
    {
      id: 0,
      title: 'MOBILE APPS',
      description: `NOWTRANSIT CARGO PRIVATE LIMITED APP available for our all customer to track shipment , Pickup Request & many more .We integrate advancements of mobile technology along with the core aspects of the transportation industry in our customized logistics software solutions. Our holistic approach enables you to simplify complex and highly challenging transport and logistics business processes.
      Customer Login Customer Can See his all Shipment
      Track Shipment
      Pickup Request
      Our Service Avality`,
      imageUrl: '',
    },
    {
      id: 1,
      title: 'LOGISTICS API SERVICES',
      description: `NOWTRANSIT CARGO PRIVATE LIMITED provide API, API as a service is a Software as a Service (SaaS) primarily exposed as an API (application programming interface). It allows users to use all our services in his system(software)
      We provide API to our Customers, that can intigrate our software to his software.
      
      Daily MIS Report by auto email
      Why API Services
      Saves time & increases oprations efficiency
      Enhances accuracy
      Minimises error on shipment information during pickup
      Stores all addresses for any future use
      Records all pick up requests along with their Final status
      Proactive information on delivery
      Controls your express distribution needs
      Integrates with your business applications`,
      imageUrl: '',
    },
  ];
    
  return (
    <div className={classes.itServicesContainer}>
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

export default ITService;