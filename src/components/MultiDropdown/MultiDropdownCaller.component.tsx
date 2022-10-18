import classNames from 'classnames';
import React from 'react';

import { MultiDropdownCallerProps } from './MultiDropdown.types';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import styles from './MultiDropdown.module.scss';

export const MultiDropdownCaller = <T extends string | number>({
  icon,
  iconOnly,
  options,
  className,
  style,
  textVariant = TextVariantsEnum.Text_xs,
  fontWeight = FontWeightEnum.Medium,
  placeholder,
  removeOption,
}: MultiDropdownCallerProps<T>) => {
  const dropdownCallerClass = classNames(styles.multiDropdownCaller, className);
  return (
    <div className={dropdownCallerClass} style={style}>
      <div className={styles.multiDropdownCallerInner}>
        {options.map((option) => (
          <div className={styles.multiDropdownItem} key={option.value}>
            {icon && <SvgIcon src={icon} size={16} color="inherit" />}

            {!iconOnly && (
              <Text variant={textVariant} fontWeight={fontWeight}>
                {option.label}
              </Text>
            )}
            <div
              className={`${styles.multiDropdownItemRemove} removeItem`}
              onClick={() => removeOption(option)}
            >
              <SvgIcon src={IconsEnum.cross} size={15} />
            </div>
          </div>
        ))}

        {!options.length && (
          <Text
            variant={textVariant}
            fontWeight={fontWeight}
            color={'gray-500'}
          >
            {placeholder}
          </Text>
        )}
      </div>

      <SvgIcon
        src={IconsEnum.arrowChevron}
        size={20}
        className={styles.arrow}
      />
    </div>
  );
};
