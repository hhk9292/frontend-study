import React, { useState } from 'react';

import './style.css'

import KeyboardRow1 from '@keyboard/containers/KeyboardRow1';
import KeyboardRow2 from '@keyboard/containers/KeyboardRow2';
import KeyboardRow3 from '@keyboard/containers/KeyboardRow3';
import KeyboardRow4 from '@keyboard/containers/KeyboardRow4';
import KeyboardRow5 from '@keyboard/containers/KeyboardRow5';
import { ClickKeyboardEvent } from '@keyboard/types';

const Keyboard = () => {
  const [text, setText] = useState('');
  const [shiftState, setShiftState] = useState<'on' | 'off' | 'hold'>('off');

  const addLetter = (e: ClickKeyboardEvent) => {
    const { key, keyWithShift } = e;

    if (shiftState === 'off') {
      setText(`${text}${key.toLowerCase()}`);
      return;
    }

    if (keyWithShift) {
      setText(`${text}${keyWithShift}`);
    } else {
      setText(`${text}${key}`);
    }

    if (shiftState === 'on') {
      setShiftState('off');
    }
  };

  const toggleShift = () => {
    if (shiftState === 'off') {
      setShiftState('on');
    } else if (shiftState === 'on') {
      setShiftState('off');
    }
  };

  const toggleHoldShift = () => {
    if (shiftState === 'hold') {
      setShiftState('off');
    } else {
      setShiftState('hold');
    }
  };

  const onClickHandler = (e: ClickKeyboardEvent) => {
    switch (e.key) {
      case 'Space':
        setText(`${text} `);
        break;

      case 'Backspace':
        if (!text) {
          setText(text);
        }
        setText(text.substring(0, text.length - 1));
        break;

      case 'Shift':
        toggleShift();
        break;

      case 'CapsLock':
        toggleHoldShift();
        break;

      case 'Enter':
        alert(text);
        break;

      case 'Tab':
        setText(`${text}  `);
        break;

      default:
        addLetter(e);
        break;
    }
  };

  return (
    <div className="container">
      <div className="keyboard_wrapper">
        <KeyboardRow5 onClick={onClickHandler} />
        <KeyboardRow4 onClick={onClickHandler} />
        <KeyboardRow3 onClick={onClickHandler} />
        <KeyboardRow2 onClick={onClickHandler} />
        <KeyboardRow1 onClick={onClickHandler} />
      </div>
      <input type="text" value={text} readOnly />
    </div>
  );
};

export default Keyboard;
