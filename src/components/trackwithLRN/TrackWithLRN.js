import React, { useState } from 'react';
import TrackWithLRNStyles from './TrackWithLRNStyles';

const TrackWithLRN = () => {
  const classes = TrackWithLRNStyles();
  const [podInput, setPODInput] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTextareaChange = (event) => {
    setPODInput(event.target.value);
    setErrorMessage(''); // Clear error message on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform validation here (you can customize the validation logic)
    if (!podInput.trim()) {
      setErrorMessage('Please enter an LR number.');
      return;
    }

    try {
      setLoading(true); 
      // Construct the API URL with the entered LR number
      const apiUrl = `https://btob.api.delhivery.com/v2/track/${podInput}`;

      // Make the API request
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (!response.ok) {
        const errorMessage = 'Invalid LR number. Please check and try again.';
        setErrorMessage(errorMessage);
        console.error(errorMessage);
      } else {
        setResponseData(data);
        setErrorMessage(''); // Clear any previous error messages
      }
    } catch (error) {
      const errorMessage = 'Error fetching data. Please try again later.';
      setErrorMessage(errorMessage);
      console.error(errorMessage, error);
    } finally {
      setLoading(false); // Set loading to false after the API call is complete
    }
  };

  return (
    <div className={classes.shipmentTrackContainer}>
      <div className={classes.shipmentTrackContent}>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Enter LRN No.."
              value={podInput}
              onChange={handleTextareaChange}
            />
          </div>
          <div className={classes.buttonContainer}>
            <button type="submit">Submit</button>
          </div>
        </form>

        {/* Display loading message or spinner during data fetching */}
        {loading && <div className={classes.loadingMessage}>Loading...</div>}

        {responseData && (
          <div className={classes.resultContainer}>

            <div className={classes.LRContainer}>
              <h3>LR Number: <span>{responseData.lrnum} (AWB No: {responseData.mwbn})</span></h3>
            </div>

            <div className={classes.summaryContainer}>
              <div className={classes.upperContent}>
                <h4>Delivered on</h4>
                <div className={classes.statusContent}>
                  <h5>{responseData.status}</h5>
                </div>
              </div>
              <div className={classes.summaryContent}>
                <h5>{new Date(responseData.delivered_date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}</h5>
              </div>
            </div>

            {/* Display Tracking Details */}
            <div className={classes.summaryContainer}>
              <h4>Tracking details</h4>
              <div className={classes.trackDetailsContent}>
                <div className={classes.detailContent}>
                  <h5>Pickup Date:</h5>
                  <h6>
                    {new Date(responseData.pickup_date).toLocaleDateString('en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}</h6>
                </div>

                <div className={classes.detailContent}>
                  <h5>Pickup Location:</h5>
                  <h6>{responseData.origin_city}</h6>
                </div>
                <div className={classes.detailContent}>
                  <h5>Destination:</h5>
                  <h6>{responseData.destination_city}</h6>
                </div>
                <div className={classes.detailContent}>
                  <h5>Location:</h5>
                  <h6>{responseData.location}</h6>
                </div>
              </div>

              <div className={classes.msgContent}>Your Order was delivered on {new Date(responseData.delivered_date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })} </div>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className={classes.errorContainer}>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackWithLRN;
