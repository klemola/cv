import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import Project from './Project';

const style = {};

const Projects = ({ data, i18n }) => {
  const relevantProjects = data.filter((project) => project.relevance >= 6);
  return (
    <section style={style}>
      <h1>{i18n.title}</h1>
      {relevantProjects.map((project) => <Project data={project} />)}
    </section>
  );
};

export default Radium(Projects);
