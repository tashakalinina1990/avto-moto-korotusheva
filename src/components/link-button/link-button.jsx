import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({nameButton, className, isOutline = false, href = '/'}) => {
    return (
        <a href={href} className={`link-button ${className} ${isOutline && 'link-button--outline'}`}>
            {nameButton}
        </a>
    );
};

LinkButton.propTypes = {
    className: PropTypes.string.isRequired,
    nameButton: PropTypes.string.isRequired,
    isOutline: PropTypes.bool,
    href: PropTypes.string
};

export {LinkButton};
