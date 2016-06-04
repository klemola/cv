import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import Job from './Job';

const style = {};

const Work = ({ data, i18n }) => (
  <section style={style}>
    <h1>{i18n.title}</h1>
    {data.map((job) => <Job data={job} i18n={i18n} />)}
  </section>
);

export default Radium(Work);
