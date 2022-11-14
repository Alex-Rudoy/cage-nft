import { Button, ButtonVariantEnum } from '@components/Button';
import React from 'react';
import styles from './Addpurchanse.module.scss';
import { AddpurchanseProps } from './Addpurchanse.types';

export const AddpurchanseComponent: React.FC<AddpurchanseProps> = ({
  completeStep,
}) => {
  return (
    <>
      <div className={styles.wrap}>
        <h3>Add funds to purchase</h3>
        <span>You need 2.000993</span>
        <div>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain{' '}
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

AddpurchanseComponent.displayName = 'Addpurchanse';
