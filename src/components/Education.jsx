'use strict';

import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import Degree from './Degree';

const style = {};

const Education = ({data, i18n}) => (
    <section style={style}>
        <h1>{i18n.title}</h1>
        {data.map((degree) => <Degree data={degree} i18n={i18n}/>)}
    </section>
);

export default Radium(Education);
