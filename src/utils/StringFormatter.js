'use strict';

import Moment from 'moment';

export default class StringFormatter {
    static dateString(date) {
        return date ? Moment(date).format('DD.MM.YYYY') : ''
    }

    static monthOfYearString(date) {
        return date ? Moment(date).format('MM/YYYY') : ''
    }

    static yearRange(startYearString, endYearString) {
        return (startYearString === endYearString) || !endYearString ?
            startYearString
            : `${startYearString} - ${endYearString}`
    }
}
