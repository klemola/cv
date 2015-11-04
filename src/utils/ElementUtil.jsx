'use strict';

import React from 'react';

export default class ElementUtil {
    static textToParagraph(text) {
        return text.split('\n').map(function(paragraph){
            return !!paragraph ? <p>{paragraph}</p> : false
        })
    }
}
