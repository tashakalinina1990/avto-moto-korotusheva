import React from 'react';
import PropTypes from 'prop-types';
import {Menu} from '../menu/menu';
import {Logo} from '../logo/logo';

const MainNav = ({className}) => {
    return (
        <nav className={`${className} main-nav wrapper`}>
            <Logo className="main-nav__logo"/>
            <Menu className="main-nav__menu"/>
        </nav>
    );
};

MainNav.propTypes = {
    className: PropTypes.string.isRequired
};

export {MainNav};
