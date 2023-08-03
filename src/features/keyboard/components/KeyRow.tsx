import React from 'react';

import './style.css';

type Props = {
  children?: React.ReactNode;
};

const KeyRow = ({ children }: Props) => {
  return <div className="keyboard_row">{children}</div>;
};

export default KeyRow;
