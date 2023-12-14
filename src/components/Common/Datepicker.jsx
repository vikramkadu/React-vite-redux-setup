// DatePicker.js

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReactDatePicker = ({ selectedDate, onChange, placeholder }) => {
  return (
    <div className="input-container">
      <label>Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        placeholderText={placeholder}
      />
    </div>
  );
};
ReactDatePicker.propTypes = {
    selectedDate: PropTypes.string,
    onChange: PropTypes.function,
    placeholder: PropTypes.string,
}

export default ReactDatePicker;
