import React, { useState } from 'react';

import { Input } from '@components/Input';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { InputPasswordProps } from './InputPassword.types';

import styles from './InputPassword.module.scss';

export const InputPasswordComponent = React.forwardRef<
  HTMLInputElement,
  InputPasswordProps
>(({ autoComplete = 'new-password', ...rest }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      {...rest}
      ref={ref}
      autoComplete={autoComplete}
      type={showPassword ? 'text' : 'password'}
      rightBlock={
        <div className={styles.eye} onClick={toggleShowPassword}>
          <SvgIcon
            src={showPassword ? IconsEnum.hidePassowrd : IconsEnum.showPassword}
            size={20}
            color="gray-40"
          />
        </div>
      }
    />
  );
});

InputPasswordComponent.displayName = 'InputPassword';
