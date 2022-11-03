import { Avatar } from '@components/Avatar';
import React from 'react';
import classNames from 'classnames';

import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { CardNFTProps } from './CardNFT.types';

import styles from './CardNFT.module.scss';

export const CardNFTComponent: React.FC<CardNFTProps> = ({
  currentButtonId,
  nickname,
  variant,
  isVerified = true,
  src,
  srcAva,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.image}>
        <img src={src} alt="nft" />
        <div className={styles.ethLabel}>0.2 ETH</div>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.avatar}>
          {srcAva && <img src={srcAva} alt="userAvatar" />}
          {isVerified && (
            <div className={styles.badgeWrap}>
              <img
                className={styles.badge}
                src={'images/card/v.svg'}
                alt="verify"
              />
            </div>
          )}
        </div>
        <div className={styles.textContent}>
          <div className={styles.subtitle}>{nickname}</div>
          <h5>{variant}</h5>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.social}>
          <SvgIcon src={IconsEnum.heartt} />
          <span>10 900</span>
          <SvgIcon src={IconsEnum.bubble} />
          <span>19</span>
          <SvgIcon src={IconsEnum.eyess} color="primary" />
          <span>109 381</span>
        </div>
      </div>
    </div>
  );
};

CardNFTComponent.displayName = 'CardNFT';
