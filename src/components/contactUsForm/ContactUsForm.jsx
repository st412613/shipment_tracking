import React, { useState } from 'react';
import ContactUsFormStyles from './ContactUsFormStyles';
import { Edit, Email, Person, Phone, Place } from '@mui/icons-material';
import HeadingSection from '../../common/headingSection/HeadingSection';

const ContactUsForm = () => {
  const classes = ContactUsFormStyles();
  const mapData = 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3763.250309995756!2d72.83106387337905!3d19.40158794167408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA%20301%20Murdang%20Building%20Sector%201%20Vasant%20Nagri%20Vasai(E)%20Mumbai%20%2C%20401208!5e0!3m2!1sen!2sin!4v1700885393634!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here (e.g., API call)
    console.log('Submitted form data:', formData);

    // Reset the form after submission
    handleReset();
  };

  const handleReset = () => {
    // Reset form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className={classes.contactUsContainer}>
      <div className={classes.contactUsContent}>
        <div className={classes.contactFormContainer}>
          <h5>Contact Form</h5>
          <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div className={classes.nameContent}>
              <Person />
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.emailContent}>
              <Email />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={classes.descriptionContent}>
              <Edit />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter here..."
              />
            </div>
            <div className={classes.buttonContainer}>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className={classes.contactInfoContainer}>
          <h5>Contact Info</h5>
          <div className={classes.contactInfoContent}>
            <div className={classes.flexContent}>
              <div className={classes.iconContent}><Place /></div>
              <div className={classes.infoContent}>
                <h5>NowTransit Cargo PVT. LTD.</h5>
                <p>NOWTRANSIT CARGO PRIVATE LIMITED , A 301 Murdang Building Sector 1 Vasant Nagri Vasai(E) Mumbai , 401208</p>
                <p>NOWTRANSIT CARGO PRIVATE LIMITED, Gala No 1 Reliable Complex Near Gaon Devi Mandir Sativali Vasai(E) Mumbai 401208.</p>
              </div>
            </div>
            <div className={classes.flexContent}>
              <div className={classes.iconContent}><Phone /></div>
              <div className={classes.infoContent}>
                <h5>Phone</h5>
                <p>9930002453 / 9646666663</p>
              </div>
            </div>
            <div className={classes.flexContent}>
              <div className={classes.iconContent}><Email /></div>
              <div className={classes.infoContent}>
                <h5>Email</h5>
                <p>info@nowtransitcargo.com Sales@nowtransitcargo.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.locationContainer}>
        <HeadingSection title='Our Location' subtitle='Explore the Live Location of Our Head Office' />
        <div>
          <iframe src={mapData}></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
