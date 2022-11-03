import { BtnsSwitcher } from '@components/BtnsSwitcher';
import { Button, ButtonVariantEnum } from '@components/Button';
import { DropdownComponent } from '@components/Dropdown/Dropdown.component';
import { InputComponent } from '@components/Input/Input.component';
import { ThemeToggleComponent } from '@components/ThemeToggle';
import { buttonsList } from '@layout/MarketplaceLayout/constants';
import { getUUID } from '@utils/getUUID';
import React, { useState } from 'react';
import classNames from 'classnames';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';

// import { HeaderProps } from './Header.types';

import styles from './Header.module.scss';

export const HeaderComponent: React.FC<any> = () => {
  const [check, setCheck] = useState(true);
  const [checkBox, setCheckBox] = useState(true);
  const [value, setValue] = useState('');
  const [active, setActive] = useState('');

  return (
    <div className={styles.wrap}>
      <div className={styles.input}>
        <DropdownComponent
          showSearch={true}
          iconOnly={false}
          value={'2'}
          options={[
            {
              value: 'Sort by',
              label: 'Price High to low',
              icon: 'IconsEnum.arrowupdown',
            },
            {
              value: 'Sort by',
              label: 'Price High to low',
              icon: 'IconsEnum.arrdown',
            },
          ]}
          width={333}
          emptyStateText={'nothing'}
          placeholder={'dd33'}
          setValue={() => console.log(value)}
          preFilteredOptions={[
            {
              value: 'Sort by',
              label: 'Price High to low',
              icon: 'IconsEnum.arrowupdown',
            },
            {
              value: 'Sort by',
              label: 'Price High to low',
              icon: 'IconsEnum.arrdown',
            },
          ]}
        />
        {/*<InputComponent*/}
        {/*  value={value}*/}
        {/*  id={getUUID()}*/}
        {/*  onChange={(e) => setValue(e.target.value)}*/}
        {/*/>*/}
      </div>
      <div className={styles.btnsBlock}>
        <ThemeToggleComponent
          id={getUUID()}
          onClick={() => setCheck(!check)}
          checked={check}
        />
        <div className={styles.bell}>
          <Button
            variant={ButtonVariantEnum.bell}
            icon={IconsEnum.bell}
            size={'exsm'}
          />
        </div>
        <div className={styles.btnsLg}>
          <Button
            text={'Create collection'}
            variant={ButtonVariantEnum.secondary}
            size={'mds'}
          />
          <Button
            text={'Connect wallet'}
            variant={ButtonVariantEnum.primary}
            icon={IconsEnum.heart}
          />
        </div>
      </div>
    </div>
  );
};

HeaderComponent.displayName = 'Header';