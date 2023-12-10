import React from 'react';
import MissionVisionStyle from './Mission&VisionStyle';
import MissionImage from '../../assets/images/mission.svg';
import VisionImage from '../../assets/images/vision.svg';

const MissionAndVision = () => {
  const classes = MissionVisionStyle();
    
  return (
    <div className={classes.missionVisionContainer}>
      <div className={classes.missionVisionContent}>
        <div className={classes.leftContent}>
          <div className={classes.leftSideContent}>
            <div className={classes.imageContent}>
              <img alt='vision' src={VisionImage} />
            </div>
            <div className={classes.textContent}>
              <h4>Vision</h4>
              <p>Our ultimate vision is to become the leader in the logistics sector providing high-quality and cost-effective logistics solutions to our clients. We strive hard to surpass our goals and remain a trusted partner to our customers</p>
            </div>
          </div>
        </div>
        <div className={classes.rightContent}>
          <div className={classes.rightSideContent}>
            <div></div>
            <div className={classes.textContent}>
              <h4>Mission</h4>
              <p>We believe to be one of the most trusted service provider offering customer centric solutions, adhering to commitments and ensuring zero-defect on time delivery.
We aim for customer delight by offering them with flexible and efficacious solutions best suited to meet their dynamic needs resulting in cost effective and intact deliveries.</p>
            </div>
            <div className={classes.imageContent}>
              <img alt='mission' src={MissionImage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;