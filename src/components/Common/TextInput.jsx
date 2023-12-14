// TextInput.js

import React from 'react';

const TextInput = ({ label, value, onChange, placeholder }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

TextInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.function,
    placeholder: PropTypes.string,
}
export default TextInput;
