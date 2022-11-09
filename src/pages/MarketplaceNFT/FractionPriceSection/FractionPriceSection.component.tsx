import { Button, ButtonVariantEnum } from '@components/Button';
import Items from '@pages/MarketplaceNFT/MarketpalceNFTData.json';
import React from 'react';
import styles from './FractionPriceSection.module.scss';
import { FractionPriceSectionProps } from './FractionPriceSection.types';

export const FractionPriceSectionComponent: React.FC<
  FractionPriceSectionProps
> = ({ variant = null }) => {
  return (
    <div className={styles.nftPrice}>
      <div className={styles.nftPriceItems}>
        {Items.map((el, i) => (
          <div className={styles.nftPriceItem} key={i}>
            <div className={styles.priceTitle}>{Object.keys(el)}</div>
            <div className={styles.price}>{Object.values(el)}</div>
          </div>
        ))}
      </div>
      <div className={styles.bottomBlock}>
        {!variant && (
          <div className={styles.btnsGroup}>
            <Button size={'lg-2'} width={'md'} text={'Place a bid'} />
            <Button
              variant={ButtonVariantEnum.light}
              size={'lg-2'}
              width={'full'}
              text={'Buy now per 2.00093 ETH'}
            />
          </div>
        )}
        {variant && (
          <div className={styles.soldWrap}>
            <div className={styles.sold}>
              <div className={styles.soldInfo}>
                <span className={styles.soldText}>Sold</span>
                <span className={styles.soldAmount}>8 932</span>
                <span className={styles.soldText}>from</span>
                <span className={styles.soldAmount}>10 883</span>
              </div>
              <div className={styles.sales}>
                <b>50%</b>sold
              </div>
            </div>
            <div className={styles.progressLine}>
              <div className={styles.progressWidth}></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

FractionPriceSectionComponent.displayName = 'FractionPriceSection';
