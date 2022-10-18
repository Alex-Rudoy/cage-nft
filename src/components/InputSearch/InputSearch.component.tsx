import React from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from '@components/Input';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { InputSearchProps } from './InputSearch.types';

import styles from './InputSearch.module.scss';
import classNames from 'classnames';

export const InputSearchComponent = React.forwardRef<
  HTMLInputElement,
  InputSearchProps
>(({ autoComplete = 'none', placeholder, containerClass, ...rest }, ref) => {
  const { t: translate } = useTranslation('common');

  return (
    <div className={classNames(styles.container, containerClass)}>
      <Input
        {...rest}
        placeholder={placeholder || translate('search')}
        ref={ref}
        autoComplete={autoComplete}
        type="text"
        leftBlock={
          <div className={styles.search}>
            <SvgIcon src={IconsEnum.search} size={20} color="gray-500" />
          </div>
        }
      />
    </div>
  );
});

InputSearchComponent.displayName = 'InputSearch';
