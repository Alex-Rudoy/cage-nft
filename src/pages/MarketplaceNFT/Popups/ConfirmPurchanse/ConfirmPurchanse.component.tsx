import { Button, ButtonVariantEnum } from '@components/Button';
import React, { useState } from 'react';
import styles from './ConfirmPurchanse.module.scss';
import { ConfirmPurchanseProps } from './ConfirmPurchanse.types';

export const ConfirmPurchanseComponent: React.FC<ConfirmPurchanseProps> = ({
  completeStep,
}) => {
  const [amount, setAmount] = useState<number>(0);
  const handleIncrement = () => {
    if (amount) setAmount(amount - 1);
  };
  const handleDecrement = () => setAmount(amount + 1);
  const currentPrice = 2.00093;
  const subtotal = ('' + currentPrice * amount).match(/\d\.\d{5}/);
  return (
    <>
      <div className={styles.wrap}>
        <h3>Confirm your purchase</h3>
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div className={styles.nftInfo}>
            <div>
              <span>Amount</span>
              <div onClick={handleIncrement}>-</div>
              {amount}
              <div onClick={handleDecrement}>+</div>
            </div>
          </div>
        </div>
        <div>
          <span>Total:</span>
          <span>Subtotal:{subtotal}</span>
        </div>
        <div className={styles.btnsBlock}>
          <Button text={'Cancel'} variant={ButtonVariantEnum.secondaryFilt} />
          <Button
            width={'full'}
            text={'Confirm'}
            variant={ButtonVariantEnum.primary}
            onClick={completeStep}
          />
        </div>
      </div>
    </>
  );
};

ConfirmPurchanseComponent.displayName = 'ConfirmPurchanse';
