'use strict';

import React from 'react';
import Radium from 'radium';
import Job from './Job';

const style = {};

const Work = ({data}) => (
    <section style={style}>
        <h1>{data.title}</h1>
        {data.items.map((job) => <Job data={job}/>)}
    </section>
);

export default Radium(Work);
