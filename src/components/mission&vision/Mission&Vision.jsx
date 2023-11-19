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
              <p>Our Mission is to offer a complete portfolio of logistics services to satisfy our customers needs. As a team, we are always committed to our customers cause at all times. We are specialized in what we do, and we try to upgrade ourselves through high-quality operational excellence.</p>
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