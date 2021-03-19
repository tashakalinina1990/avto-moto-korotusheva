import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Textarea} from '../textarea/textarea';
import {CloseButton} from '../close-button/close-button';
import {openModal, saveNewReview} from '../../store/actions/actions';
import {extend} from '../../utils';
import {StarBar} from '../star-bar/star-bar';
import {ESC_CODE} from '../../const';

const ReviewForm = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.isOpenModal);
    const overlayRef = useRef();

    const emptyFormData = {
        name: '',
        dignity: '',
        limitations: '',
        comment: '',
        rating: '0'
    };

    const [review, setReview] = useState({...emptyFormData});
    const {name, dignity, limitations, comment, rating} = review;

    const [isError, setError] = useState({
        name: false,
        comment: false
    });

    useEffect(() => {
        document.addEventListener('keydown', onEscClick);
        return () => {
            document.removeEventListener('keydown', onEscClick);
        };
    }, [isOpen]);

    const closeForm = () => {
        setError({name: false, comment: false});
        setReview({...emptyFormData});
        dispatch(openModal(false));
    };

    const onCloseFormButtonClick = () => {
        closeForm();
    };

    const onEscClick = (event) => {
        if (event.keyCode === ESC_CODE) {
            closeForm();
        }
    };

    const onSubmitClick = (evt) => {
        evt.preventDefault();
        if (name && comment) {
            dispatch(saveNewReview(extend({...review}, {date: new Date()})));
            setReview({...emptyFormData});
            dispatch(openModal(false));
        } else {
            setError({name: !name, comment: !comment});
        }
    };

    const onFieldChange = (evt) => {
        const {name, value} = evt.target;
        setReview((prevComment) => extend(prevComment, {[name]: value}));
        if (isError.name || isError.comment) {
            setError({name: !review.name, comment: !review.comment});
        }
    };

    const onOverlayClick = (evt) => {
        evt.target === overlayRef.current && closeForm();
    };

    return (
        <>
            {isOpen &&
            <div className="overlay" ref={overlayRef} onClick={onOverlayClick}>
                <form className="review-form">
                    <h2 className="review-form__title">Оставить отзыв</h2>
                    <CloseButton onClick={onCloseFormButtonClick} className="review-form__close"/>
                    <div className="review-form__wrapper">
                        <div className="review-form__left">
                            <Input autoFocus onChange={(evt) => onFieldChange(evt)} className="review-form__input"
                                   placeholder="Имя" isMandatory={true} name="name" value={name}
                                   label={isError.name ? 'Пожалуйста, заполните поле' : ''}/>
                            <Input onChange={(evt) => onFieldChange(evt)} className="review-form__input"
                                   placeholder="Достоинства" name="dignity" value={dignity}/>
                            <Input onChange={(evt) => onFieldChange(evt)} className="review-form__input"
                                   placeholder="Недостатки" name="limitations" value={limitations}/>
                        </div>
                        <div className="review-form__right">
                            <div className="review-form__stars-wrapper">
                                <span className="review-form__stars-text">Оцените товар:</span>
                                <StarBar className="review-form__star-bar" onChange={(evt) => onFieldChange(evt)}
                                         rating={rating} size={30}/>
                            </div>
                            <Textarea onChange={(evt) => onFieldChange(evt)} className="review-form__textarea"
                                      placeholder="Комментарий" isMandatory={true} name="comment" value={comment}
                                      label={isError.comment ? 'Пожалуйста, заполните поле' : ''}/>
                        </div>
                    </div>
                    <Button onClick={(evt) => onSubmitClick(evt)}
                            nameButton="Оставить отзыв" type="submit" className="review-form__submit"/>
                </form>
            </div>
            }
        </>
    );
};

export {ReviewForm};
