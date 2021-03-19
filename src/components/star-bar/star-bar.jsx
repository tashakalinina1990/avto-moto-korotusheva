import React, {useState} from 'react';
import {Star} from '../star/star';
import PropTypes from 'prop-types';
import {RATING_VALUES} from '../../const';

const StarBar = ({className, onChange, rating = 0, size}) => {

    const [temporaryRating, setTemporaryRating] = useState(0);
    const readOnly = !onChange;

    return (
        <div className={`${className} star-bar`} onMouseLeave={() => !readOnly && setTemporaryRating(rating)}>
            {RATING_VALUES.map((value) =>
                <React.Fragment key={value}>
                    <input onChange={(evt) => onChange(evt)} checked={value === rating.toString()}
                           className="star-bar__input visually-hidden" name="rating"
                           value={value}
                           id={`${value}-stars`} type="radio"/>
                    <label htmlFor={`${value}-stars`} className="star-bar__label"
                           title={`${value}-stars`} onMouseOver={() => !readOnly && setTemporaryRating(value)}>
                        <Star className="star-bar__star-img"
                              isChecked={(temporaryRating || rating) >= value}
                              size={size}/>
                    </label>
                </React.Fragment>
            )}
        </div>
    );
};

StarBar.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    rating: PropTypes.string.isRequired,
    size: PropTypes.number
};

export {StarBar};