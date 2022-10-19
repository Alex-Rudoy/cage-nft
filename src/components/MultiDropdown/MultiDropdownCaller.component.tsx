import React from 'react';
import classNames from 'classnames';

import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { MultiDropdownCallerProps } from './MultiDropdown.types';

import styles from './MultiDropdown.module.scss';

export const MultiDropdownCaller = <T extends string | number>({
  icon,
  iconOnly,
  options,
  className,
  style,
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

            {!iconOnly && <p>{option.label}</p>}
            <div
              className={`${styles.multiDropdownItemRemove} removeItem`}
              onClick={() => removeOption(option)}
            >
              <SvgIcon src={IconsEnum.cross} size={15} />
            </div>
          </div>
        ))}

        {!options.length && <p>{placeholder}</p>}
      </div>

      <SvgIcon
        src={IconsEnum.arrowChevron}
        size={20}
        className={styles.arrow}
      />
    </div>
  );
};
