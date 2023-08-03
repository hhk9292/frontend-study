import React from 'react';

import KeyButton from '@keyboard/components/KeyButton';
import KeyRow from '@keyboard/components/KeyRow';
import { ClickKeyboardEvent } from '@keyboard/types';

type Props = {
  onClick: (e: ClickKeyboardEvent) => void;
};

const KeyboardRow5 = ({ onClick }: Props) => {
  return (
    <KeyRow>
      <KeyButton text="`" upperText="~" size={1} onClick={onClick} />
      <KeyButton text="1" upperText="!" size={1} onClick={onClick} />
      <KeyButton text="2" upperText="@" size={1} onClick={onClick} />
      <KeyButton text="3" upperText="#" size={1} onClick={onClick} />
      <KeyButton text="4" upperText="$" size={1} onClick={onClick} />
      <KeyButton text="5" upperText="%" size={1} onClick={onClick} />
      <KeyButton text="6" upperText="^" size={1} onClick={onClick} />
      <KeyButton text="7" upperText="&" size={1} onClick={onClick} />
      <KeyButton text="8" upperText="*" size={1} onClick={onClick} />
      <KeyButton text="9" upperText="(" size={1} onClick={onClick} />
      <KeyButton text="0" upperText=")" size={1} onClick={onClick} />
      <KeyButton text="-" upperText="_" size={1} onClick={onClick} />
      <KeyButton text="=" upperText="+" size={1} onClick={onClick} />
      <KeyButton text="Backspace" size={2} onClick={onClick} />
    </KeyRow>
  );
};

export default KeyboardRow5;
