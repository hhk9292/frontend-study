import React from 'react';

import KeyButton from '@keyboard/components/KeyButton';
import KeyRow from '@keyboard/components/KeyRow';
import { ClickKeyboardEvent } from '@keyboard/types';

type Props = {
  onClick: (e: ClickKeyboardEvent) => void;
};

const KeyboardRow1 = ({ onClick }: Props) => {
  return (
    <KeyRow>
      <KeyButton text="Ctrl" size={1.25} onClick={onClick} />
      <KeyButton text="-" size={1.25} onClick={() => void {}} />
      <KeyButton text="Alt" size={1.25} onClick={onClick} />
      <KeyButton text="Space" size={6.25} onClick={onClick} />
      <KeyButton text="Alt" size={1.25} onClick={onClick} />
      <KeyButton text="Fn" size={1.25} onClick={() => void {}} />
      <KeyButton text="-" size={1.25} onClick={() => void {}} />
      <KeyButton text="Ctrl" size={1.25} onClick={onClick} />
    </KeyRow>
  );
};

export default KeyboardRow1;
