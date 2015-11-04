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
            <h3>{data.name}</h3>
        </Row>
        <Row>
            <span>{data.client} ({yearRange(data.start, data.end)})</span>
        </Row>
        {textToParagraph(data.description)}
    </div>
);

export default Radium(Project);
