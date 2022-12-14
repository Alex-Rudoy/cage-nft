import React from 'react';
import classNames from 'classnames';

import { Input } from '@components/Input';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { DropdownSearchProps } from './DropdownSearch.types';

import styles from './DropdownSearch.module.scss';

export const DropdownSearchComponent = React.forwardRef<
  HTMLInputElement,
  DropdownSearchProps
>(
  (
    { autoComplete = 'none', placeholder = 'Search', className, ...rest },
    ref
  ) => {
    return (
      <Input
        {...rest}
        className={classNames(styles.dropdownSearch, className)}
        placeholder={placeholder}
        ref={ref}
        autoComplete={autoComplete}
        type="text"
        leftBlock={
          <div className={styles.search}>
            <SvgIcon src={IconsEnum.search} size={20} color="gray-50" />
          </div>
        }
        onClick={(e) => e.stopPropagation()}
      />
    );
  }
);

DropdownSearchComponent.displayName = 'DropdownSearch';
