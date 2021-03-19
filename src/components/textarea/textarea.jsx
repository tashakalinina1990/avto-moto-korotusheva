import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({className, onChange, value, name, label, placeholder, isMandatory = false}) => {
    return (
        <div className={`${className} ${isMandatory && 'textarea--mandatory'} ${label && 'textarea--error'} textarea`}>
            <span className="textarea__error">
              {label}
            </span>
            <textarea onChange={(evt) => onChange(evt)} className="textarea__block"
                      value={value} name={name} placeholder={placeholder} rows="6"></textarea>
        </div>
    );
};

Textarea.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    isMandatory: PropTypes.bool
};

export {Textarea};
