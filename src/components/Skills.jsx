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
        <Column width={'45%'}></Column>
        <Column textAlign={'right'}>Skill (1-5)</Column>
        <Column textAlign={'right'}>Exp (Years)</Column>
    </Row>
);

const Skills = ({data, i18n}) => {
    const relevantSkills = data.filter((skill) => skill.relevance > 6);
    const typeGroups = R.values(groupByType(relevantSkills));
    const sides = cutInHalf(typeGroups);

    return (
        <section>
            <h1>{i18n.title}</h1>
            <Row>
                <Column>
                    <div key="leftColumn" style={style}>
                        {header}
                        {sides[0].map((group) => <SkillGroup data={group} i18n={i18n}/>)}
                    </div>
                </Column>
                <Column>
                    <div key="rightColumn" style={style}>
                        {header}
                        {sides[1].map((group) => <SkillGroup data={group} i18n={i18n}/>)}
                    </div>
                </Column>
            </Row>
        </section>
    )
};

export default Radium(Skills);
