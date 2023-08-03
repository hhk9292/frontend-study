import React from 'react';

import KeyButton from '@keyboard/components/KeyButton';
import KeyRow from '@keyboard/components/KeyRow';
import { ClickKeyboardEvent } from '@keyboard/types';

type Props = {
  onClick: (e: ClickKeyboardEvent) => void;
};

const KeyboardRow2 = ({ onClick }: Props) => {
  return (
    <KeyRow>
      <KeyButton text="Shift" size={2.25} onClick={onClick} />
      <KeyButton text="Z" size={1} onClick={onClick} />
      <KeyButton text="X" size={1} onClick={onClick} />
      <KeyButton text="C" size={1} onClick={onClick} />
      <KeyButton text="V" size={1} onClick={onClick} />
      <KeyButton text="B" size={1} onClick={onClick} />
      <KeyButton text="N" size={1} onClick={onClick} />
      <KeyButton text="M" size={1} onClick={onClick} />
      <KeyButton text="," upperText="<" size={1} onClick={onClick} />
      <KeyButton text="." upperText=">" size={1} onClick={onClick} />
      <KeyButton text="/" upperText="?" size={1} onClick={onClick} />
      <KeyButton text="Shift" size={2.75} onClick={onClick} />
    </KeyRow>
  );
};

export default KeyboardRow2;
