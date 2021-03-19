import React from 'react';
import {ReactComponent as Engine} from './engine.svg';
import {ReactComponent as Transmission} from './transmission.svg';
import {ReactComponent as Power} from './power.svg';
import {ReactComponent as Volume} from './volume.svg';
import PropTypes from 'prop-types';

const IconList = ({className}) => {
    return (
        <ul className={`${className} icon-list`}>
            <li className="icon-list__item">
                <Engine className="icon-list__img"/>
                <span className="icon-list__txt">Бензин</span>
            </li>
            <li className="icon-list__item">
                <Transmission className="icon-list__img"/>
                <span className="icon-list__txt">Механика</span>
            </li>
            <li className="icon-list__item">
                <Power className="icon-list__img"/>
                <span className="icon-list__txt">100 л.с.</span>
            </li>
            <li className="icon-list__item">
                <Volume className="icon-list__img"/>
                <span className="icon-list__txt">1.4 л</span>
            </li>
        </ul>

    );
};

IconList.propTypes = {
    className: PropTypes.string.isRequired
};

export {IconList};
