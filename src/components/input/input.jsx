import React from 'react';
import PropTypes from 'prop-types';

const Input = ({className, onChange, value, name, label, placeholder, isMandatory = false, autoFocus}) => {
    return (
        <label className={`${className} ${isMandatory && 'input--mandatory'} ${label && 'input--error'} input`}>
            <span className="input__error">
              {label}
            </span>
            <input onChange={(evt) => onChange(evt)} className="input__block"
                   value={value} name={name} placeholder={placeholder} autoFocus={autoFocus}/>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isMandatory: PropTypes.bool,
    autoFocus: PropTypes.bool
};

export {Input};
