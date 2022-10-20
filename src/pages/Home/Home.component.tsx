import React from 'react';

import { Button, ButtonVariantEnum } from '@components/Button';
import { Input } from '@components/Input';

// import styles from './Home.module.scss';

export const HomeComponent: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <>
      dddddd
      <Button variant={ButtonVariantEnum.primary} text="ololo"></Button>
      <Input
        id="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></Input>
    </>
  );
};

HomeComponent.displayName = 'Home';
