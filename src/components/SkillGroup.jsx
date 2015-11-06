'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column';
import Row from './Row';
import {capitalize} from '../utils/StringFormatter';
import {alignedText} from '../utils/ElementUtil';

const groupStyle = {
    marginTop: '15px'
};

const SkillGroup = ({data}) => {
    return (
        <div style={groupStyle}>
            <Row>
                <Column width={'45%'}>
                    <strong>{capitalize(data[0].type)}</strong>
                </Column>
                <Column></Column>
                <Column></Column>
            </Row>
            {data.map((skill) => {
                return (
                    <Row>
                        <Column width={'45%'}>{skill.name}</Column>
                        <Column textAlign={'right'}>{skill.skill}</Column>
                        <Column textAlign={'right'}>{skill.experience}</Column>
                    </Row>
                );
            })}
        </div>
    )
};

export default Radium(SkillGroup)
