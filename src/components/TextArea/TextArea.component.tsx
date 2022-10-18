import React, { useState } from 'react';
import classNames from 'classnames';

import { Text, TextVariantsEnum } from '@components/Text';

import { TextAreaProps } from './TextArea.types';

import styles from './TextArea.module.scss';

export const TextAreaComponent = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(
  (
    {
      id,
      label,
      placeholder,
      className,
      style,
      errorMessage,
      value,
      disabled,
      onChange = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onClick = () => null,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setIsFocused(true);
      onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (disabled) return;
      setIsFocused(false);
      onBlur(e);
    };

    const textAreaClass = classNames(
      styles.textArea,
      {
        [styles.textArea_focused]: isFocused,
        [styles.textArea_error]: !!errorMessage,
        [styles.textArea_disabled]: disabled,
      },
      className
    );

    return (
      <div className={textAreaClass} style={style}>
        {!!label && (
          <Text
            variant={TextVariantsEnum.Text_sm}
            color="gray-700"
            className={styles.label}
          >
            {label}
          </Text>
        )}
        <div className={styles.inner}>
          <textarea
            placeholder={placeholder}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={onClick}
            id={id}
            name={id}
            disabled={disabled}
            ref={ref}
            {...rest}
          >
            {value}
          </textarea>
        </div>
        {!!errorMessage && (
          <Text
            variant={TextVariantsEnum.Text_sm}
            color="error-500"
            className={styles.errorMessage}
          >
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);

TextAreaComponent.displayName = 'TextArea';
