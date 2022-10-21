import React, { useState } from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.types';

import styles from './Input.module.scss';

export const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = 'text',
      autoComplete = 'off',
      placeholder= 'Search by name of collection',
      className,
      style,
      errorMessage,
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

    const inputClass = classNames(
      styles.input,
      {
        [styles.input_focused]: isFocused,
        [styles.input_error]: !!errorMessage,
        [styles.input_disabled]: disabled,
      },
      className
    );

    const leftRightBlockClickHandler = () => {
      const input: HTMLInputElement = document.querySelector(`#${id || name}`);
      input.focus();
    };

    return (
      <div className={inputClass} style={style}>
        {!!label && <p className={styles.label}>{label}</p>}
        <div className={styles.inner}>
          {leftBlock && (
            <div
              className={styles.leftBlock}
              onClick={leftRightBlockClickHandler}
            >
              {leftBlock}
            </div>
          )}
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
          {rightBlock && (
            <div
              className={styles.rightBlock}
              onClick={leftRightBlockClickHandler}
            >
              {rightBlock}
            </div>
          )}
        </div>
        {!!errorMessage && (
          <p className={styles.errorMessage}>{errorMessage}</p>
        )}
      </div>
    );
  }
);

InputComponent.displayName = 'Input';
