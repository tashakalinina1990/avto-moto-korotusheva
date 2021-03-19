import moment from 'moment';
import {MONTH_NAMES} from './const';

export const extend = (a, b) => Object.assign({}, a, b);

const getWordForm = (n, array) => {
    const modN = n % 10;
    if (n > 10 && n < 21) {
        return n + ' ' + array[2];
    } else if (modN > 1 && modN < 5) {
        return n + ' ' + array[1];
    } else if (modN === 1) {
        return n + ' ' + array[0];
    } else {
        return n + ' ' + array[2];
    }
};

export const getDate = (date) => {
    const begin = date;
    const end = moment();
    const duration = moment.duration(moment(end).diff(moment(begin)));

    if (duration.days() > 0) {
        return (`${moment(date).date()} ${MONTH_NAMES[moment(date).month()]} ${moment(date).year()}`);
    }
    if (duration.hours() > 0) {
        return (`${getWordForm(duration.hours(), ['час', 'часа', 'часов'])} назад`);
    }
    if (duration.minutes() === 0) {
        return ('Менее минуты назад');
    }
    if (duration.minutes() >= 0) {
        return (`${getWordForm(duration.minutes(), ['минуту', 'минуты', 'минут'])} назад`);
    }
    return (`${getWordForm(duration.hours(), ['час', 'часа', 'часов'])} назад`);
};
