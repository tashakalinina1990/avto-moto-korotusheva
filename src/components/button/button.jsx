import React from 'react';
import PropTypes from 'prop-types';

const Button = ({nameButton, onClick, className, disabled = false, type = 'button', isOutline}) => {
    return (
        <button onClick={(evt) => onClick(evt)}
                disabled={disabled}
                className={`button ${className} ${isOutline && 'link-button--outline'}`}
                type={type}>
            {nameButton}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string.isRequired,
    nameButton: PropTypes.string.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isOutline: PropTypes.bool,
    disabled: PropTypes.bool
};

export {Button};
