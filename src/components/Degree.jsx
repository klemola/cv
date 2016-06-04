import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import Column from './Column';
import Row from './Row';
import { monthOfYearString } from '../utils/StringFormatter';

const style = {
  marginTop: '15px',
};

const Degree = ({ data, i18n }) => (
  <div style={style}>
    <Row>
      <Column width={'30%'}>
        {monthOfYearString(data.start)}
        - {monthOfYearString(data.end)}
      </Column>
      <Column>
        <Row>
          <strong>{data.degree}</strong>
        </Row>
        <Row>{data.name}</Row>
        {data.specialization && <Row>
          <span>{i18n.specialization} {data.specialization}</span>
        </Row>}
      </Column>
    </Row>
  </div>
);

export default Radium(Degree);
