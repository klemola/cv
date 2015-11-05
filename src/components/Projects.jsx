'use strict';

import React from 'react';
import Radium from 'radium';
import Project from './Project';

const style = {};

const Projects = ({data}) => (
    <section style={style}>
        <h1>{data.title}</h1>
        {data.items.map((project) => <Project data={project}/>)}
    </section>
);

export default Radium(Projects);
