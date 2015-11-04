'use strict';

import React from 'react';
import Radium from 'radium';

const style = {
    'marginTop': '15px'
};

const Publication = ({data}) => (
    <div style={style}>
        <strong>{data.name}</strong>
        <div>{data.type}, {data.releaseDate}</div>
        <div>{data.publisher}</div>
        <div>Commissioned by: {data.commission}</div>
        <a href="{data.url}">{data.url}</a>
    </div>
);

export default Radium(Publication);
