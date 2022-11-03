import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import React from 'react';

import styles from './CardCollection.module.scss';

import { CardCollectionProps } from './CardCollection.types';

export const CardCollectionComponent: React.FC<CardCollectionProps> = ({
  currentButtonId,
  variant,
  src,
}) => {
  return (
    <div className={styles.wrap}>
      <img className={styles.image} src={src} alt="nft" />
      <div className={styles.cardContent}>
        <div className={styles.textContent}>
          <div className={styles.contgroup}>
            <div className={styles.airdrop}>Airdrop</div>
            <h5>{variant}</h5>
          </div>
          <div className={styles.readm}>
            <span>Read more</span>
            <SvgIcon src={IconsEnum.right} size={11} />
          </div>
        </div>
      </div>
    </div>
  );
};

CardCollectionComponent.displayName = 'CardCollection';
