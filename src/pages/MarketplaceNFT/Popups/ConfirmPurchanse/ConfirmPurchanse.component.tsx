import { Button, ButtonVariantEnum } from '@components/Button';
import React, { useState } from 'react';
import styles from './ConfirmPurchanse.module.scss';
import { ConfirmPurchanseProps } from './ConfirmPurchanse.types';

export const ConfirmPurchanseComponent: React.FC<ConfirmPurchanseProps> = ({
  completeStep,
  stepBack,
}) => {
  const [amount, setAmount] = useState<number>(1);
  const handleIncrement = () => {
    if (amount) setAmount(amount - 1);
  };
  const handleDecrement = () => setAmount(amount + 1);
  const currentPrice = 2.00093;
  const subtotal = (currentPrice * amount).toFixed(5);
  return (
    <>
      <div className={styles.wrap}>
        <h3>Confirm your purchase</h3>
        <div className={styles.contentContainer}>
          <div className={styles.image}>
            <div className={styles.imgwrap}>
              <img src={'/images/card/111.png'} alt="nft-img" />
            </div>
          </div>
          <div className={styles.nftInfo}>
            <div className={styles.counterBlock}>
              <span className={styles.span}>Amount</span>
              <div className={styles.countBtn} onClick={handleIncrement}>
                -
              </div>
              <span className={styles.amount}>{amount}</span>
              <div className={styles.countBtn} onClick={handleDecrement}>
                +
              </div>
            </div>
            <div className={styles.title}>King of Da Street #8839</div>
            <div className={styles.subtitle}>
              <span className={styles.span}>Collection</span> HAPEAPE club
            </div>
            <div className={styles.price}>
              <h3>2.00093 ETH</h3>
              <span>One 1.030000 ETH</span>
            </div>
          </div>
        </div>
        <div className={styles.totPrice}>
          <div className={styles.displayPrice}>
            <span>Total</span>
            <span>{subtotal}</span>
          </div>
          <div className={styles.displayPrice}>
            <span>Subtotal</span>
            <span>{subtotal}</span>
          </div>
        </div>
        <div className={styles.btnsBlock}>
          <Button
            width={'sm'}
            text={'Cancel'}
            variant={ButtonVariantEnum.secondaryFilt}
            onClick={stepBack}
          />
          <Button
            width={'lg'}
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
