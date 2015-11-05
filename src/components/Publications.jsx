'use strict';

import React from 'react';
import Radium from 'radium';
import Publication from './Publication';

const style = {};

const Publications = ({data}) => (
    <section style={style}>
        <h1>{data.title}</h1>
        {data.items.map((publication) => <Publication data={publication}/>)}
    </section>
);

export default Radium(Publications);
