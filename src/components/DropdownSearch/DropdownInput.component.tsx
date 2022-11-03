import React, { useState } from 'react';
import classNames from 'classnames';

import { Input, InputProps } from '@components/Input';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { DropdownInputProps } from './DropdownInput.types';

import styles from './DropdownInput.module.scss';

export const DropdownInputComponent = React.forwardRef<
  HTMLInputElement,
  InputProps
>(
  (
    {
      id,
      label,
      type = 'text',
      autoComplete = 'off',
      placeholder = 'Min',
      className,
      style,
      value,
      disabled,
      leftBlock,
      rightBlock,
      onChange = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onClick = () => null,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (disabled) return;
      setIsFocused(true);
      onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (disabled) return;
      setIsFocused(false);
      onBlur(e);
    };

    // const inputClass = classNames(
    //   styles.input,
    //   { [styles.input_focused]: isFocused },
    //   className
    // );

    return (
      <div className={styles.input}>
        <input
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={onClick}
          value={value}
          id={id}
          name={id}
          type={type}
          disabled={disabled}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

DropdownInputComponent.displayName = 'DropdownInput';
