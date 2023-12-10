import React, { useState } from 'react';
import ShipmentTrackStyles from './ShipmentTrackStyles';
import { Search } from '@mui/icons-material';

const ShipmentTracking = () => {
  const classes = ShipmentTrackStyles();
  const [podInput, setPODInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleTextareaChange = (event) => {
    setPODInput(event.target.value);
    setErrorMessage(''); // Clear error message on textarea change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation here (you can customize the validation logic)
    if (!podInput.trim()) {
      setErrorMessage('Please enter an AWB number.');
      return;
    }

    try {
      // Construct the API URL with the entered airway number
      const apiUrl = `https://dlv-api.delhivery.com/v3/unified-tracking?wbn=${podInput}`;

      // Make the API request
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data && data.data && data.data.length > 0) {
        // Handle the response data (you can update state, display data, etc.)
        console.log('API Response:', data);
        setResponseData(data);
      } else {
        const errorMessage = 'Invalid AWB number. Please check and try again.';
        setErrorMessage(errorMessage);
        console.error(errorMessage);
      }

      // Handle the response data (you can update state, display data, etc.)
      // console.log('API Response:', data);
      // setResponseData(data);
    } catch (error) {
      const errorMessage = 'Error fetching data. Please try again later.';
      setErrorMessage(errorMessage);
      console.error(errorMessage, error);
    }
  };

  return (
    <div className={classes.shipmentTrackContainer}>
      <div className={classes.shipmentTrackContent}>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Airway No."
              value={podInput}
              onChange={handleTextareaChange}
            />
            <button type="submit" className={classes.searchButton}>
              <Search />
            </button>
          </div>
        </form>

        {/* Display error message for invalid AWB or empty input */}
        {errorMessage && <div className={classes.errorMessage}>{errorMessage}</div>}

        {/* Display the API response data */}
        {responseData && responseData.data && responseData.data.length > 0 && (
          <div className={classes.responseContainer}>
            {/* Display Tracking ID */}
            <div className={classes.trackIDContainer}>
              <h3>TRACKING ID <span>{responseData.data[0].awb} (LR Number: {responseData.data[0].lrn})</span></h3>
            </div>

            {/* Display Tracking Summary */}
            <div className={classes.summaryContainer}>
              <div className={classes.upperContent}>
                <h4>{responseData.data[0].deliveryDateText}</h4>
                <div className={classes.statusContent}>
                  <h5>{responseData.data[0].status.status}</h5>
                </div>
              </div>
              <div className={classes.summaryContent}>
                {/* Extracting only the date portion */}
                <h5>{responseData.data[0].deliveryDate.split(',')[0]}</h5>
              </div>
              <div className={classes.packTypContent}>{responseData.data[0].packageType}</div>
            </div>

            {/* Display Tracking Details */}
            <div className={classes.summaryContainer}>
              <h4>Tracking details</h4>
              {responseData.data[0].trackingStates.map((state, index) => (
                <div key={index} className={classes.trackDetailsContent}>
                  <div className={classes.trackingStepper}>
                    <div className={classes.greenBox}></div>
                    <div className={classes.cardStepper}>
                      <div className={classes.cardHeader}>
                        <h5><span>{state.label}</span></h5>
                        <p>{state.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className={classes.msgContent}>Your Order was delivered on {responseData.data[0].deliveryDate}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipmentTracking;
