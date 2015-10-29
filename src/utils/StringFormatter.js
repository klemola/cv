'use strict';

import Moment from 'moment';

export default class StringFormatter {
    static dateString(date) {
        return Moment(date).format('DD.MM.YYYY')
    }

    static monthOfYearString(date) {
        return Moment(date).format('MM/YYYY')
    }
}
