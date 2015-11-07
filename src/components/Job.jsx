'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column'
import Row from './Row'
import {monthOfYearString} from '../utils/StringFormatter';
import {textToParagraph} from '../utils/ElementUtil'

const style = {
    'marginTop': '15px'
};

const Job = ({data}) => (
    <div style={style}>
        <Row>
            <Column width={'33.33%'}>
                {monthOfYearString(data.start)} - {monthOfYearString(data.end)}
            </Column>
            <Column>
                <Row>
                    <strong>{data.position}</strong>
                </Row>
                <Row>{data.company}</Row>
                {textToParagraph(data.description)}
                {data.tech && <Row><span>Key technologies: {data.tech}</span></Row>}
            </Column>
        </Row>
    </div>
);

export default Radium(Job);