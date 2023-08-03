import React from 'react';

import KeyButton from '@keyboard/components/KeyButton';
import KeyRow from '@keyboard/components/KeyRow';
import { ClickKeyboardEvent } from '@keyboard/types';

type Props = {
  onClick: (e: ClickKeyboardEvent) => void;
};

const KeyboardRow3 = ({ onClick }: Props) => {
  return (
    <KeyRow>
      <KeyButton text="CapsLock" size={1.75} onClick={onClick} />
      <KeyButton text="A" size={1} onClick={onClick} />
      <KeyButton text="S" size={1} onClick={onClick} />
      <KeyButton text="D" size={1} onClick={onClick} />
      <KeyButton text="F" size={1} onClick={onClick} />
      <KeyButton text="G" size={1} onClick={onClick} />
      <KeyButton text="H" size={1} onClick={onClick} />
      <KeyButton text="J" size={1} onClick={onClick} />
      <KeyButton text="K" size={1} onClick={onClick} />
      <KeyButton text="L" size={1} onClick={onClick} />
      <KeyButton text=";" upperText=":" size={1} onClick={onClick} />
      <KeyButton text="'" upperText='"' size={1} onClick={onClick} />
      <KeyButton text="Enter" size={2.25} onClick={onClick} />
    </KeyRow>
  );
};

export default KeyboardRow3;
