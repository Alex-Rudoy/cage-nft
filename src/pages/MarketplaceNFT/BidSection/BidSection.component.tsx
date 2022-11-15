import { Button, ButtonVariantEnum } from '@components/Button';
import { InputComponent } from '@components/Input/Input.component';
import { ModalComponent } from '@components/Modal/Modal.component';
import { Addpurchanse } from '@pages/MarketplaceNFT/Popups/Addpurchanse';
import { ConfirmPurchanse } from '@pages/MarketplaceNFT/Popups/ConfirmPurchanse';
import React, { useState } from 'react';
import styles from './BidSection.module.scss';

export const BidSectionComponent: React.FC = () => {
  const [value, setValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const completeStep = () => {
    setCurrentStep((cur) => cur + 1);
  };

  const stepBack = () => {
    currentStep && setCurrentStep((cur) => cur - 1);
    !currentStep && setIsVisible(false);
  };

  const handleCloseModal = () => {
    setIsVisible(!isVisible);
    setCurrentStep(0);
  };

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
        <Button
          size={'lg-2'}
          width={'md'}
          text={'Place a bid'}
          onClick={() => setIsVisible(!isVisible)}
        />
        <Button
          variant={ButtonVariantEnum.light}
          size={'lg-2'}
          width={'full'}
          text={'Buy now per 2.00093 ETH'}
        />
      </div>
      <ModalComponent onClose={handleCloseModal} isVisible={isVisible}>
        {currentStep === 0 && (
          <ConfirmPurchanse stepBack={stepBack} completeStep={completeStep} />
        )}
        {currentStep === 1 && (
          <Addpurchanse stepBack={stepBack} completeStep={completeStep} />
        )}
        {currentStep === 2 && <div>Congratulations!</div>}
      </ModalComponent>
    </div>
  );
};

BidSectionComponent.displayName = 'BidSection';
