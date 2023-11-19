import React, { useState } from 'react';
import LoginFormStyles from './LoginFormStyles';

const CustomerLoginForm = () => {
  const classes = LoginFormStyles();

  // State to manage form data
  const [formData, setFormData] = useState({
    customerId: '',
    password: '',
  });

  // State to manage form validation
  const [formErrors, setFormErrors] = useState({
    customerId: '',
    password: '',
  });

  // State to manage success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the corresponding validation error when the user types
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formData.customerId.trim()) {
      errors.customerId = 'Customer ID is required.';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setSuccessMessage('');
      return;
    }

    // Simulate a successful login (replace with actual login logic)
    // For demonstration purposes, showing a success message
    setSuccessMessage('Login successfully!');
    // Reset the form after submission
    setFormData({
      customerId: '',
      password: '',
    });
    setFormErrors({});
  };

  return (
    <div className={classes.customerLoginContainer}>
      {Object.keys(formErrors).length > 0 && (
        <div className={classes.errorContainer}>
          {Object.values(formErrors).map((error, index) => (
            <span key={index}>{error}</span>
          ))}
        </div>
      )}
      {successMessage && (
        <div className={classes.successContainer}>
          <span>{successMessage}</span>
        </div>
      )}
      <div className={classes.customerLoginContent}>
        <h5>Sign In</h5>
        <p>Enter your User Name and your password.</p>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <input
              type="text"
              name="customerId"
              placeholder="Customer ID"
              value={formData.customerId}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.formGroup}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.formGroup}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerLoginForm;