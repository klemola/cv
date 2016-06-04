import React from 'react';
import Radium from '../utils/ConfiguredRadium';

const style = {
  marginTop: '15px',
};

const Publication = ({ data, i18n }) => (
  <div style={style}>
    <strong>{data.name}</strong>
    <div>{data.type}, {data.releaseDate}</div>
    <div>{data.publisher}</div>
    <div>{i18n.commission}: {data.commission}</div>
    <a href={data.url}>{data.url}</a>
  </div>
);

export default Radium(Publication);
