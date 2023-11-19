import React, { useState } from 'react';
import PincodeTrackStyles from './PincodeTrackStyles';

const PincodeTracking = () => {
  const classes = PincodeTrackStyles();

  const [pincodeInput, setPincodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextareaChange = (event) => {
    setPincodeInput(event.target.value);
    setErrorMessage(''); // Clear error message on textarea change
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here (you can customize the validation logic)
    if (!pincodeInput.trim()) {
      setErrorMessage('Please enter at least one pincode.');
      return;
    }

    // Handle the submit logic (e.g., API call, processing data)
    console.log('Submitted pincode:', pincodeInput);
  };

  const handleReset = () => {
    setPincodeInput('');
    setErrorMessage('');
  };

  return (
    <div className={classes.pincodeTrackContainer}>
      <div className={classes.pincodeTrackContent}>
        <h4>Pincode Tracking (Multiple pincodes can be tracked)</h4>
        <form onSubmit={handleSubmit} className={classes.formContainer}>

          <textarea
            value={pincodeInput}
            onChange={handleTextareaChange}
            placeholder="Enter pincodes here..."
          />
          <div className={classes.buttonContainer}>
            <button type="submit">
              Submit
            </button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
          {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default PincodeTracking;
