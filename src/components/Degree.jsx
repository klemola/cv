'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column'
import Row from './Row'
import {monthOfYearString} from '../utils/StringFormatter';

const style = {
    'marginTop': '15px'
};

const Degree = ({data}) => (
    <div style={style}>
        <Row>
            <Column width={'33.33%'}>
                {monthOfYearString(data.start)} - {monthOfYearString(data.end)}
            </Column>
            <Column>
                <Row>
                    <strong>{data.degree}</strong>
                </Row>
                <Row>{data.name}</Row>
                {data.specialization && <Row><span>Specialization in {data.specialization}</span></Row>}
            </Column>
        </Row>
    </div>
);

export default Radium(Degree);
