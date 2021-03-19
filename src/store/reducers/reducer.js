import {Actions} from '../../const';

const reducer = (state, action) => {
    switch (action.type) {
        case Actions.OPEN_MODAL:
            return {
                ...state,
                isOpenModal: action.payload,
            };
        case Actions.SAVE_NEW_REVIEW:
            return {
                ...state,
                reviews: [action.payload, ...state.reviews]
            };
        default:
            return state;
    }
};

export default reducer;
