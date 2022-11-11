import { Button, ButtonVariantEnum } from '@components/Button';
import { InputComponent } from '@components/Input/Input.component';
import React, { useState } from 'react';
import styles from './BidSection.module.scss';
// import { BidSectionProps } from './BidSection.types';

export const BidSectionComponent: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <div className={styles.bid}>
      <div className={styles.bidInfo}>
        <div className={styles.higestBid}>
          <span className={styles.bidTitle}>Highest bid</span>
          <div className={styles.higestAmount}>2.00093 ETH</div>
        </div>
        <div className={styles.auctionEnds}>
          <span className={styles.bidTitle}>Auction ends</span>
          <div className={styles.date}>
            January 12<span>at</span>10:41 pm
          </div>
        </div>
      </div>
      <div className={styles.fractionsCalc}>
        <div className={styles.amountInput}>
          <span>Amount</span>
          <InputComponent
            id={'dfd2g'}
            value={value}
            placeholder={'10'}
            variant={'primary'}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className={styles.fractions}>
          <span>You will get</span>
          <div className={styles.clalculatedFract}>
            <span className={styles.fractAmount}>10 399</span>
            <span className={styles.fract}>fractions</span>
          </div>
        </div>
      </div>
      <div className={styles.btnsGroup}>
        <Button size={'lg-2'} width={'md'} text={'Place a bid'} />
        <Button
          variant={ButtonVariantEnum.light}
          size={'lg-2'}
          width={'full'}
          text={'Buy now per 2.00093 ETH'}
        />
      </div>
    </div>
  );
};

BidSectionComponent.displayName = 'BidSection';
