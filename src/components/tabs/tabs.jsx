import React, {useState} from 'react';
import {Tab} from '../tab/tab';
import {Characteristics} from '../characteristics/characteristics';
import {Reviews} from '../reviews/reviews';
import {Contacts} from '../contacts/contacts';
import PropTypes from 'prop-types';
import {Tabs as TabTitles} from '../../const';
import {TabNames} from '../../const';

const Tabs = ({className}) => {

    const [tab, setTab] = useState(TabTitles.CHARACTERISTICS);

    return (
        <section className={`tabs ${className}`}>
            <div className="tabs__wrapper">
                {Object.keys(TabTitles).map((key) =>
                    <Tab key={key}
                         onClick={() => setTab(key)}
                         className={`tabs__${key}-btn ${tab === key && 'tab--active'}`}
                         nameButton={TabNames[key]}/>
                )}
            </div>
            {tab === TabTitles.CHARACTERISTICS && <Characteristics className={`tabs__${TabTitles.CHARACTERISTICS}`}/>}
            {tab === TabTitles.REVIEWS && <Reviews className={`tabs__${TabTitles.REVIEWS}`}/>}
            {tab === TabTitles.CONTACTS && <Contacts className={`tabs__${TabTitles.CONTACTS}`}/>}
        </section>
    );
};

Tabs.propTypes = {
    className: PropTypes.string.isRequired
};

export {Tabs};
