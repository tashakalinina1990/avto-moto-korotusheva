import React from 'react';
import PropTypes from 'prop-types';

const Map = ({className}) => {
    return (
        <article className={`map ${className}`}>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa327a584f1fcc01886b23b95549c7396f0861401450b6dbba59bd29b1a59ff9f&amp;source=constructor"
                width="100%" height="271" frameBorder="0"/>
        </article>
    );
};

Map.propTypes = {
    className: PropTypes.string.isRequired
};

export {Map};
