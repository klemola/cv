'use strict';

import React from 'react';
import Radium from 'radium';
import Project from './Project';

const style = {};

const Projects = ({data}) => {
    const relevantProjects = data.items.filter((project) => project.relevance >= 6);
    return (<section style={style}>
        <h1>{data.title}</h1>
        {relevantProjects.map((project) => <Project data={project}/>)}
    </section>)
};

export default Radium(Projects);
