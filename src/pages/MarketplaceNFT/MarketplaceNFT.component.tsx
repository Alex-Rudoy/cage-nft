import { BidSection } from '@pages/MarketplaceNFT/BidSection';
import { FractionPriceSection } from '@pages/MarketplaceNFT/FractionPriceSection';
import { HeadInfoSection } from '@pages/MarketplaceNFT/HeadInfoSection';
import { InformationSection } from '@pages/MarketplaceNFT/InformationSection';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MarketplaceNFT.module.scss';

export const MarketplaceNFTComponent: React.FC = () => {
  const { id } = useParams();
  return (
    <div className={styles.wrap}>
      <div className={styles.content}>
        <div className={styles.leftBlock}>
          <div className={styles.imgwrap}>
            <img src={'/images/card/111.png'} alt="cartnft" />
          </div>
          <div>Chat</div>
        </div>
        <div className={styles.rightBlock}>
          <HeadInfoSection />
          <FractionPriceSection variant={1} />
          <BidSection />
          <InformationSection />
        </div>
      </div>
    </div>
  );
};

MarketplaceNFTComponent.displayName = 'MarketplaceNFT';
