import { Button, ButtonVariantEnum } from '@components/Button';
import { DropdownComponent } from '@components/Dropdown/Dropdown.component';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { ThemeToggleComponent } from '@components/ThemeToggle';
import { getUUID } from '@utils/getUUID';
import React, { useState } from 'react';
import { ethers } from 'ethers';
import styles from './Header.module.scss';

export const HeaderComponent: React.FC = () => {
  const [check, setCheck] = useState(true);
  const [value, setValue] = useState('');
  const [userAccount, setUserAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const onConnect = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((account) => {
          setUserAccount(account[0]);
          getBalance(account[0]);
        });
      window.ethereum.on('accountChanged', onConnect);
      window.ethereum.on('chainChanged', chainChanedHandler);
    } else {
      alert('Place install metamask');
    }
  };

  const getBalance = (account) => {
    window.ethereum
      .request({
        method: 'eth_getBalance',
        params: [account, 'latest'],
      })
      .then((balance) => {
        setBalance(+ethers.utils.formatEther(balance));
      });
  };

  const chainChanedHandler = () => {
    window.location.reload();
  };
  console.log(userAccount);
  console.log(balance);
  return (
    <div className={styles.wrap}>
      <div className={styles.headMobile}>
        <div className={styles.logo}></div>
        <div className={styles.btnsMobile}>
          <Button
            text={'Connect wallet'}
            variant={ButtonVariantEnum.primary}
            size={'mob'}
          />
          <div className={styles.dropSidebarBtn}>
            <SvgIcon src={IconsEnum.drop} />
          </div>
        </div>
      </div>
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
      </div>
      <div className={styles.btnsBlock}>
        <div className={styles.toggler}>
          <ThemeToggleComponent
            id={getUUID()}
            onClick={() => setCheck(!check)}
            checked={check}
          />
        </div>
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
            onClick={onConnect}
          />
        </div>
      </div>
    </div>
  );
};

HeaderComponent.displayName = 'Header';
