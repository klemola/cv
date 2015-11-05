'use strict';

import React from 'react';
import Radium from 'radium';
import R from 'Ramda';
import Column from './Column';
import Row from './Row';
import SkillGroup from './SkillGroup';

const groupByType = R.groupBy((skill) => skill.type);
const cutInHalf = (collection) => {
    return R.splitEvery(Math.ceil(collection.length / 2))(collection);
};

const style = {
    marginRight: '40px'
};

const header = (
    <Row>
        <Column width={'40%'}></Column>
        <Column textAlign={'right'}>Skill (1-5)</Column>
        <Column textAlign={'right'}>Exp (Years)</Column>
    </Row>
);

const Skills = ({data}) => {
    const relevantSkills = data.items.filter((skill) => skill.relevance > 5);
    const typeGroups = R.values(groupByType(relevantSkills));
    const sides = cutInHalf(typeGroups);

    return (
        <section>
            <h1>{data.title}</h1>
            <Row>
                <Column>
                    <div key="leftColumn" style={style}>
                        {header}
                        {sides[0].map((group) => <SkillGroup data={group}/>)}
                    </div>
                </Column>
                <Column>
                    <div key="rightColumn" style={style}>
                        {header}
                        {sides[1].map((group) => <SkillGroup data={group}/>)}
                    </div>
                </Column>
            </Row>
        </section>
    )
};

export default Radium(Skills);
