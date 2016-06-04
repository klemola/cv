import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import Publication from './Publication';

const style = {};

const Publications = ({ data, i18n }) => (
  <section style={style}>
    <h1>{i18n.title}</h1>
    {data.map((publication) => <Publication data={publication} i18n={i18n} />)}
  </section>
);

export default Radium(Publications);
