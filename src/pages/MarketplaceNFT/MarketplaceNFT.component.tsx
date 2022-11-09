import { Avatar } from '@components/Avatar';
import { Button, ButtonVariantEnum } from '@components/Button';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { FractionPriceSection } from '@pages/MarketplaceNFT/FractionPriceSection';
import { HeadInfoSection } from '@pages/MarketplaceNFT/HeadInfoSection';
import { MarketpalceNFTProps } from '@pages/MarketplaceNFT/MarketpalceNFT.types';
import { NFTPage } from '@pages/NFTPage';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './MarketplaceNFT.module.scss';
import Items from './MarketpalceNFTData.json';

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
          <FractionPriceSection variant={2} />
        </div>
      </div>
    </div>
  );
};

MarketplaceNFTComponent.displayName = 'MarketplaceNFT';
