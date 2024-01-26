import React from 'react';
import map from '../../assets/images/map1.png';
import Avtar from '../../assets/images/avtar.png';
import CustomerReviewStyle from './CustomerReviewStyles';

const reviews = [
  {
    id: 1,
    image: Avtar,
    name: 'Surendra',
    address: 'Mumbai',
    text: 'I have been working with DPGC Logistic for over 10 years and I can only say that the organization takes pride in providing outstanding customer service, on-time delivery and support for our organization.',
  },
  {
    id: 2,
    image: Avtar,
    name: 'Mohit Singh',
    address: 'Pune',
    text: 'DPGC Logistic has been a key player in making my job as successful as it can be. I appreciate the attention and dedication that comes from this organization and they strive to work with us on a continual basis to make our business a success.',
  },
  {
    id: 3,
    image: Avtar,
    name: 'Anjali Gupta',
    address: 'Delhi',
    text: 'I enjoy doing business with DPGC Logistic are the people. Our sales representative is awesome because he always goes beyond the call of duty. The drivers are always professional looking and polite. Their Customer Service Department is always polite as well and they listen to what you have to say before responding.',
  },
  {
    id: 4,
    image: Avtar,
    name: 'Raghav Mehra',
    address: 'Banglore',
    text: 'DPGC Logistic has been a key player in making my job as successful as it can be. I appreciate the attention and dedication that comes from this organization and they strive to work with us on a continual basis to make our business a success.',
  },
  {
    id: 5,
    image: Avtar,
    name: 'Puneet Pathak',
    address: 'Goa',
    text: 'I enjoy doing business with DPGC Logistic are the people. Our sales representative is awesome because he always goes beyond the call of duty. The drivers are always professional looking and polite. Their Customer Service Department is always polite as well and they listen to what you have to say before responding.',
  },
];

const CustomerReview = () => {
  const classes = CustomerReviewStyle();

  return (
    <div className={classes.customerReviewContainer}>
      <div className={classes.flexContainer}>
        <div className={classes.mapContainer}>
          <img src={map} alt='map' />
        </div>
        <div className={classes.reviewContainer}>
          <h3>CUSTOMER <span>REVIEWS</span></h3>
          <div className={classes.reviewContent}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                {reviews.map((review, index) => (
                  <li key={index} data-target="#carouselExampleIndicators" data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {reviews.map((review, index) => (
                  <div key={review.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className={classes.reviewFlex}>
                      <div className={classes.reviewImageContent}>
                        <img className="d-block w-100" src={review.image} alt={`Review ${index + 1}`} />
                      </div>
                      <div className={classes.reviewTextContent}>
                        <h5>{review.name}<span>{review.address}</span></h5>
                        <p>{review.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
