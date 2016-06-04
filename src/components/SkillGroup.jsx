import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import sort from 'array-sort';
import Column from './Column';
import Row from './Row';

const groupStyle = {
  marginTop: '12px',
};

const sortSkills = (skills) => sort(skills, [
  'skill', 'experience', 'relevance',
], { reverse: true });

const SkillGroup = ({ data, i18n }) => {
  const sortedSkills = sortSkills(data);
  return (
    <div style={groupStyle}>
      <Row>
        <Column>
          <strong>{i18n.types[sortedSkills[0].type]}</strong>
        </Column>
      </Row>
      {sortedSkills.map((skill) => (
        <Row>
          <Column width={'45%'}>{skill.name}</Column>
          <Column textAlign={'right'}>{skill.skill}</Column>
          <Column textAlign={'right'}>{skill.experience}</Column>
        </Row>
      ))}
    </div>
  );
};

export default Radium(SkillGroup);
