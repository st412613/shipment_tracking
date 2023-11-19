import React, { useState } from 'react';
import ShipmentTrackStyles from './ShipmentTrackStyles';
import { Search } from '@mui/icons-material';

const ShipmentTracking = () => {
  const classes = ShipmentTrackStyles();
  const [pod_Input, setPODInput] = useState('');

  const handleTextareaChange = (event) => {
    setPODInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here (you can customize the validation logic)
    if (!pod_Input.trim()) {
      return;
    }

    // Handle the submit logic (e.g., API call, processing data)
    console.log('Submitted Airway No:', pod_Input);
  };

  return (
    <div className={classes.shipmentTrackContainer}>
      <div className={classes.shipmentTrackContent}>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Airway No."
              value={pod_Input}
              onChange={handleTextareaChange}
            />
            <button type="submit" className={classes.searchButton}>
              <Search />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShipmentTracking;
