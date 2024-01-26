import React from 'react';
import HeroStyle from './HeroStyle';
import AeroplaneImage from '../../assets/images/airoplane.jpg';
import ShipImage from '../../assets/images/ship.jpg';
import TrainImage from '../../assets/images/train.jpg';
import TruckImage from '../../assets/images/truck.jpg';
import ShipmentImage from '../../assets/images/shipment.jpg';

const HeroSection = () => {
  const classes = HeroStyle();

  return (
    <div className={classes.heroContainer}>

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={AeroplaneImage} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ShipImage} alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={TruckImage} alt="fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={TrainImage} alt="five slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={ShipmentImage} alt="six slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className={classes.disclaimerContainer}>
        <div>
          <marquee>Shipment Dispatch : Every Shipment is delivered on time.</marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;