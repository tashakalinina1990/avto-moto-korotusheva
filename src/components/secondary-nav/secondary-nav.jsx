import React from 'react';
import PropTypes from 'prop-types';

const SecondaryNav = ({className}) => {
    return (
        <nav className={`${className} secondary-nav wrapper`}>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Корпоративным клиентам
                </a>
            </span>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Клиентам
                </a>
            </span>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Аренда авто
                </a>
            </span>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Каршеринг
                </a>
            </span>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Как продать авто
                </a>
            </span>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Traid-in
                </a>
            </span>
            <span className="secondary-nav__item">
                <a href="/" className="secondary-nav__link">
                    Test draiv
                </a>
            </span>
        </nav>
    );
};

SecondaryNav.propTypes = {
    className: PropTypes.string.isRequired
};

export {SecondaryNav};
