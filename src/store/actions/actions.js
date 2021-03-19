import {Actions} from '../../const';

export const openModal = (payload) => ({
    type: Actions.OPEN_MODAL,
    payload: payload
});

export const saveNewReview = (payload) => ({
    type: Actions.SAVE_NEW_REVIEW,
    payload: payload
});
