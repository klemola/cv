'use strict';

import Moment from 'moment';

const LOCAL_DATE_FORMAT = 'YYYY-MM-DD';
const PRINT_DATE_FORMAT = 'DD.MM.YYYY';

export default class StringFormatter {
    static formatDate(date) {
        return Moment(date).format(PRINT_DATE_FORMAT)
    }
}
