import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import R from 'ramda';
import Column from './Column';
import Row from './Row';
import SkillGroup from './SkillGroup';

const groupByType = R.groupBy((skill) => skill.type);
const cutInHalf = (collection) => R.splitEvery(Math.ceil(collection.length / 2))(collection);

const style = {
  marginRight: '40px',
};

const headerTextStyle = {
  fontSize: '10px',
};

const Skills = ({ data, i18n }) => {
  const relevantSkills = data.filter((skill) => skill.relevance > 6);
  const typeGroups = R.values(groupByType(relevantSkills));
  const sides = cutInHalf(typeGroups);

  const header = (
    <Row>
      <Column width={'45%'} />
      <Column textAlign={'right'}>
        <span key="legend1" style={headerTextStyle}>
          <span>{i18n.skill}</span>
          (1-5)
        </span>
      </Column>
      <Column textAlign={'right'}>
        <span key="legend2" style={headerTextStyle}>
          {i18n.experience}
        </span>
      </Column>
    </Row>
  );

  return (
    <section>
      <h1>{i18n.title}</h1>
      <Row>
        <Column>
          <div key="leftColumn" style={style}>
            {header}
            {sides[0].map((group) => <SkillGroup data={group} i18n={i18n} />)}
          </div>
        </Column>
        <Column>
          <div key="rightColumn" style={style}>
            {header}
            {sides[1].map((group) => <SkillGroup data={group} i18n={i18n} />)}
          </div>
        </Column>
      </Row>
    </section>
  );
};

export default Radium(Skills);
