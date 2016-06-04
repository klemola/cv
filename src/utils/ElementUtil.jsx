'use strict';

import React from 'react';
import Radium from './ConfiguredRadium';

export default class ElementUtil {
    static textToParagraph(text) {
        return text.split('\n').map((paragraph) => !!paragraph
            ? <p>{paragraph}</p>
            : false)
    }
}
