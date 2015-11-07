'use strict';

import React from 'react';
import Radium from 'radium';
import sort from 'array-sort';
import Column from './Column';
import Row from './Row';
import {capitalize} from '../utils/StringFormatter';
import {alignedText} from '../utils/ElementUtil';

const groupStyle = {
    marginTop: '12px'
};

const sortSkills = (skills) => {
    return sort(skills, ['skill', 'experience', 'relevance'], {reverse: true});
};

const SkillGroup = ({data}) => {
    const sortedSkills = sortSkills(data);
    return (
        <div style={groupStyle}>
            <Row>
                <Column>
                    <strong>{capitalize(sortedSkills[0].type)}</strong>
                </Column>
            </Row>
            {sortedSkills.map((skill) => {
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
