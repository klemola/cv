import React from 'react';
import Radium from '../utils/ConfiguredRadium';

const Column = ({ children, width, textAlign }) => {
  let style = {
    flex: width
      ? 'none'
      : 1,
    width: width,
    textAlign: textAlign || 'left',
  };

  return <div style={style}>{children}</div>;
};

export default Radium(Column);
