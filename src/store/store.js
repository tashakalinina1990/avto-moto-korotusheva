import {createStore} from 'redux';
import {REVIEWS_STORAGE_KEY} from '../const';
import reducer from './reducers/reducer';

const DEFAULT_REVIEW = {
    name: 'Борис Иванов',
    dignity: 'мощность, внешний вид',
    limitations: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: '3',
    date: new Date('2021-02-28')
};

const createInitialState = (reviews) => ({
    reviews: reviews || [DEFAULT_REVIEW],
    isOpenModal: false,
    images: [
        {
            src: '/images/img-0.png',
            alt: 'Фото автомобиля'
        },
        {
            src: '/images/img-1.png',
            alt: 'Фото салона автомобиля'
        },
        {
            src: '/images/img-2.png',
            alt: 'Фото панели приборов автомобиля'
        }
    ]
});

export const loadState = () => {
    try {
        const reviews = JSON.parse(localStorage.getItem(REVIEWS_STORAGE_KEY));
        return createInitialState(reviews);
    } catch (err) {
        localStorage.removeItem(REVIEWS_STORAGE_KEY);
        return createInitialState();
    }
};

export const saveState = (state) => {
    localStorage.setItem(REVIEWS_STORAGE_KEY, JSON.stringify(state.reviews));
};

export const initStore = () => {
    const persistedState = loadState();
    const store = createStore(
        reducer, persistedState
    );
    store.subscribe(() => saveState(store.getState()));
    return store;
};
