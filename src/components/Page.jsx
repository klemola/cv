import React from 'react';
import Radium from '../utils/ConfiguredRadium';

const Page = ({ children, noPageBreak }) => {
  const style = {
    pageBreakAfter: noPageBreak
      ? 'none'
      : 'always',
  };
  return <div style={style}>{children}</div>;
};

export default Radium(Page);
