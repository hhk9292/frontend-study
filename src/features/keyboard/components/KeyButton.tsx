import React from 'react';

import './style.css';
import { ClickKeyboardEvent } from '@keyboard/types';

type Props = {
  size: 1 | 1.25 | 1.5 | 1.75 | 2 | 2.25 | 2.5 | 2.75 | 6.25;
  text: string;
  upperText?: string;
  onClick: (e: ClickKeyboardEvent) => void;
};

const BASE_WIDTH = 48;
const BASE_HEIGHT = BASE_WIDTH;

const KeyButton = ({ size, text, upperText, onClick }: Props) => {
  const width = size * BASE_WIDTH;

  const onClickHandler = () => {
    onClick({
      key: text,
      keyWithShift: upperText,
    });
  };
  return (
    <div className="keyboard_button_wrapper" style={{ height: `${BASE_HEIGHT}px`, width: `${width}px` }}>
      <button className="keyboard_button" onClick={onClickHandler}>
        {upperText && <span className="upperText">{upperText}</span>}
        <span className="text">{text}</span>
      </button>
    </div>
  );
};

export default KeyButton;
