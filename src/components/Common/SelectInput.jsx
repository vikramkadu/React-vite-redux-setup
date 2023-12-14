// SelectInput.js

import React from 'react';
import Select from 'react-select';

const SelectInput = ({ label, value, onChange, options, placeholder }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <Select
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
            />
        </div>
    );
};

SelectInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.function,
    placeholder: PropTypes.string,
    options: PropTypes.string,
}

export default SelectInput;
