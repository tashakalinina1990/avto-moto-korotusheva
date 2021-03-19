import React from 'react';
import PropTypes from 'prop-types';
import {Map} from '../map/map';

const Contacts = ({className}) => {
    return (
        <article className={`contact ${className}`}>
            <h2 className="visually-hidden contact__title">Контакты</h2>
            <ul className="contact__list contact-list">
                <li className="contact-list__item">
                    <span className="contact-list__txt">
                        <b className="contact-list__title">Адрес</b>
                        Санкт-Петербург, набережная&nbsp;реки&nbsp;Карповки,&nbsp;дом&nbsp;5
                    </span>
                </li>
                <li className="contact-list__item">
                    <span className="contact-list__txt">
                        <b className="contact-list__title">Режим работы</b>
                        Ежедневно, с&nbsp;10:00&nbsp;до&nbsp;21:00
                    </span>
                </li>
                <li className="contact-list__item">
                    <span className="contact-list__txt">
                        <b className="contact-list__title">Телефон</b>
                        <a className="contact-list__tel" href="tel:88003335599">8&nbsp;(800)&nbsp;333-55-99</a>
                    </span>
                </li>
                <li className="contact-list__item">
                    <span className="contact-list__txt">
                        <b className="contact-list__title">E-mail</b>
                        <a className="contact-list__email" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
                    </span>
                </li>
            </ul>
            <Map className="contact__map">Map</Map>
        </article>
    );
};

Contacts.propTypes = {
    className: PropTypes.string.isRequired
};

export {Contacts};
