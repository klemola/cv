'use strict';

import React from 'react';
import Radium from 'radium';
import Degree from './Degree';

const style = {};

const Education = ({data}) => (
    <section style={style}>
        <h1>{data.title}</h1>
        {data.items.map((degree) => <Degree data={degree}/>)}
    </section>
);

export default Radium(Education);
