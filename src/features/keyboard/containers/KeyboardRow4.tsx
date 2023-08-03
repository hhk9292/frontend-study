import React from 'react';

import KeyButton from '@keyboard/components/KeyButton';
import KeyRow from '@keyboard/components/KeyRow';
import { ClickKeyboardEvent } from '@keyboard/types';

type Props = {
  onClick: (e: ClickKeyboardEvent) => void;
};

const KeyboardRow4 = ({ onClick }: Props) => {
  return (
    <KeyRow>
      <KeyButton text="Tab" size={1.5} onClick={onClick} />
      <KeyButton text="Q" size={1} onClick={onClick} />
      <KeyButton text="W" size={1} onClick={onClick} />
      <KeyButton text="E" size={1} onClick={onClick} />
      <KeyButton text="R" size={1} onClick={onClick} />
      <KeyButton text="T" size={1} onClick={onClick} />
      <KeyButton text="Y" size={1} onClick={onClick} />
      <KeyButton text="U" size={1} onClick={onClick} />
      <KeyButton text="I" size={1} onClick={onClick} />
      <KeyButton text="O" size={1} onClick={onClick} />
      <KeyButton text="P" size={1} onClick={onClick} />
      <KeyButton text="[" upperText="{" size={1} onClick={onClick} />
      <KeyButton text="]" upperText="}" size={1} onClick={onClick} />
      <KeyButton text="\" upperText="|" size={1.5} onClick={onClick} />
    </KeyRow>
  );
};

export default KeyboardRow4;
