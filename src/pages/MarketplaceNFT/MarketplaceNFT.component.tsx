import { Avatar } from '@components/Avatar';
import { Button, ButtonVariantEnum } from '@components/Button';
import { DropdownInput } from '@components/DropdownSearch';
import { InputComponent } from '@components/Input/Input.component';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { FractionPriceSection } from '@pages/MarketplaceNFT/FractionPriceSection';
import { HeadInfoSection } from '@pages/MarketplaceNFT/HeadInfoSection';
import { MarketpalceNFTProps } from '@pages/MarketplaceNFT/MarketpalceNFT.types';
import { NFTPage } from '@pages/NFTPage';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MarketplaceNFT.module.scss';
import Items from './MarketpalceNFTData.json';

export const MarketplaceNFTComponent: React.FC = () => {
  const { id } = useParams();
  const [value, setValue] = useState('');
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
        </div>
      </div>
    </div>
  );
};

MarketplaceNFTComponent.displayName = 'MarketplaceNFT';
