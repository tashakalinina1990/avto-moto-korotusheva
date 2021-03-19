import React from 'react';
import PropTypes from 'prop-types';

const Star = ({className, isChecked = false, size = 30}) => {

    return (
        <svg className={`${className} star ${isChecked && 'star--checked'}`}
             width={size} height={size} viewBox="0 0 17 16">
            <path fill="#BDBEC2" opacity="0.7"
                  d="M8.63145 0L10.5103 5.87336L16.5906 5.87336L11.6716 9.50329L13.5505 15.3766L8.63145 11.7467L3.71242 15.3766L5.59132 9.50329L0.672291 5.87336L6.75254 5.87336L8.63145 0Z"/>
        </svg>
    );
};

Star.propTypes = {
    className: PropTypes.string.isRequired,
    isChecked: PropTypes.bool,
    size: PropTypes.number
};

export {Star};
