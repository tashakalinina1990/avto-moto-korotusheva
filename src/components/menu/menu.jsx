import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({className}) => {
    return (
        <div className={`${className} menu`}>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Автомобили
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Контакты
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Услуги
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Вакансии
                </a>
            </span>
        </div>
    );
};

Menu.propTypes = {
    className: PropTypes.string.isRequired
};

export {Menu};
