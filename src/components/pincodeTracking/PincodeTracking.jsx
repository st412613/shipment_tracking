import React, { useState } from 'react';
import PincodeTrackStyles from './PincodeTrackStyles';

const PincodeTracking = () => {
  const classes = PincodeTrackStyles();

  const [pincodeInput, setPincodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [matchingData, setMatchingData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTextareaChange = (event) => {
    setPincodeInput(event.target.value);
    setErrorMessage(''); // Clear error message on textarea change
    setMatchingData(null); // Clear matching data on textarea change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation here (you can customize the validation logic)
    if (!pincodeInput.trim()) {
      setErrorMessage('Please enter at least one pincode.');
      return;
    }

    try {
      setLoading(true);
      // Make API call
      const response = await fetch('https://sheetdb.io/api/v1/nyp5y0s4aeapc', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      // Find matching data based on input pincode
      const matchedData = data.find((item) => item.Pin === pincodeInput);

      if (matchedData) {
        setMatchingData(matchedData);
      } else {
        setErrorMessage('No matching data found for the entered pincode.');
      }
    } catch (error) {
      setErrorMessage('Error fetching data. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after the API call is complete
    }
  };

  const handleReset = () => {
    setPincodeInput('');
    setErrorMessage('');
    setMatchingData(null);
  };

  return (
    <div className={classes.pincodeTrackContainer}>
      <div className={classes.pincodeTrackContent}>
        <h4>Pincode Tracking</h4>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <textarea
            value={pincodeInput}
            onChange={handleTextareaChange}
            placeholder="Enter pincodes here..."
          />
          <div className={classes.buttonContainer}>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
          {loading && <p className={classes.loadingMessage}>Loading...</p>}
          {errorMessage && <p className={classes.errorMessage}>{errorMessage}</p>}
        </form>
      </div>

      
      {matchingData && (
        <div className={classes.resultContainer}>
          <h5>Pincode Detail:</h5>
          <table className={classes.resultTable}>
            <thead>
              <tr>
                <th>Pincode</th>
                <th>State</th>
                <th>City</th>
                <th>Return Center</th>
                <th>Dispatch Center</th>
                <th>Origin Center</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{matchingData.Pin}</td>
                <td>{matchingData['Facility State']}</td>
                <td>{matchingData['Facility City']}</td>
                <td>{matchingData['Return Center']}</td>
                <td>{matchingData['Dispatch Center']}</td>
                <td>{matchingData['Origin Center']}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PincodeTracking;
