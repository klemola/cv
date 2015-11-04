'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column'
import Row from './Row'
import StringFormatter from '../utils/StringFormatter';
import ElementUtil from '../utils/ElementUtil'

const style = {
    'marginTop': '15px'
};

const Job = ({data}) => (
    <div style={style}>
        <Row>
            <Column width={'33.33%'}>
                {StringFormatter.monthOfYearString(data.start)} - {StringFormatter.monthOfYearString(data.end)}
            </Column>
            <Column>
                <Row>
                    <strong>{data.position}</strong>
                </Row>
                <Row>{data.company}</Row>
                {ElementUtil.textToParagraph(data.description)}
                <Row><span>Key technologies: {data.tech}</span></Row>
            </Column>
        </Row>
    </div>
);

export default Radium(Job);
