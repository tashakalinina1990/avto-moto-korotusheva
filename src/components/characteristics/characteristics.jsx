import React from 'react';
import PropTypes from 'prop-types';

const Characteristics = ({className}) => {
    return (
        <article className={`characteristics ${className}`}>
            <h2 className="visually-hidden characteristics__title">Характеристики</h2>
            <ul className="characteristics__list characteristics-list">
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Трансмиссия</span>
                    <span className="characteristics-list__value">Роботизированная</span>
                </li>
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Мощность двигателя, л.с.</span>
                    <span className="characteristics-list__value">249</span>
                </li>
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Тип двигателя</span>
                    <span className="characteristics-list__value">Бензиновый</span>
                </li>
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Привод</span>
                    <span className="characteristics-list__value">Полный</span>
                </li>
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Объем двигателя, л</span>
                    <span className="characteristics-list__value">2.4</span>
                </li>
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Макс. крутящий момент</span>
                    <span className="characteristics-list__value">370/4500</span>
                </li>
                <li className="characteristics-list__item">
                    <span className="characteristics-list__title">Количество цилиндров</span>
                    <span className="characteristics-list__value">4</span>
                </li>
            </ul>
        </article>
    );
};

Characteristics.propTypes = {
    className: PropTypes.string.isRequired
};

export {Characteristics};
