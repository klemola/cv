'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column'
import Row from './Row'
import {textToParagraph} from '../utils/ElementUtil'
import {yearRange} from '../utils/StringFormatter'

const style = {
    'marginTop': '15px'
};

const Project = ({data}) => (
    <div style={style}>
        <Row>
            <strong>{data.name}</strong>
        </Row>
        <Row>
            <span>{data.client} ({yearRange(data.start, data.end)})</span>
        </Row>
        {textToParagraph(data.description)}
    </div>
);

export default Radium(Project);
