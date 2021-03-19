import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {ReviewsList} from '../reviews-list/reviews-list';
import {openModal} from '../../store/actions/actions';
import {Button} from '../button/button';

const Reviews = ({className}) => {

    const dispatch = useDispatch();

    const onOpenFormButtonClick = () => {
        dispatch(openModal(true));
    };

    return (
        <article className={`reviews ${className}`}>
            <h2 className="visually-hidden reviews__title">Отзывы</h2>
            <Button className="reviews__btn" nameButton="оставить отзыв" onClick={onOpenFormButtonClick} isOutline={true}/>
            <ReviewsList className="reviews__list"/>
        </article>
    );
};

Reviews.propTypes = {
    className: PropTypes.string.isRequired
};

export {Reviews};
