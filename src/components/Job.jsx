'use strict';

import React from 'react'
import Radium from 'radium'
import Column from './Column'
import Row from './Row'
import {monthOfYearString} from '../utils/StringFormatter'
import {textToParagraph} from '../utils/ElementUtil'

const style = {
    'marginTop': '15px'
};

const Job = ({data, i18n}) => (
    <div style={style}>
        <Row>
            <Column width={'30%'}>
                {monthOfYearString(data.start)} - {monthOfYearString(data.end)}
            </Column>
            <Column>
                <Row>
                    <strong>{data.position}</strong>
                </Row>
                <Row>{data.company}</Row>
                {textToParagraph(data.description)}
                {data.tech && <Row><span>{i18n.keyTech}: {data.tech}</span></Row>}
            </Column>
        </Row>
    </div>
);

export default Radium(Job);
