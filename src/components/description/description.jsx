import React from 'react';
import {LinkButton} from '../link-button/link-button';
import {Slider} from '../slider/slider';
import {IconList} from '../icon-list/icon-list';
import {Tabs} from '../tabs/tabs';
import {useSelector} from 'react-redux';

const Description = () => {

    const images = useSelector((state) => state.images);

    return (
        <main className="wrapper description">
            <div className="description__info">
                <Slider className="description__slider" images={images}/>
                <div className="description__wrapper">
                    <h1 className="description__title">Марпех 11</h1>
                    <IconList className="description__icons"/>
                    <p className="description__price">
                        <span className="description__new-price">2&nbsp;300&nbsp;000&nbsp;₽</span>
                        <small className="description__old-price">2&nbsp;400&nbsp;000&nbsp;₽</small>
                    </p>
                    <LinkButton nameButton="Оставить заявку" className="description__btn"/>
                    <LinkButton nameButton="В кредит от 11 000 ₽" className="description__btn" isOutline={true}/>
                </div>
            </div>
            <Tabs className="description__tabs"/>
        </main>
    );
};

export {Description};
