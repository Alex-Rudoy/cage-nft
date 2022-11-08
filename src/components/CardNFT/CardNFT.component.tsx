import { Avatar } from '@components/Avatar';
import { Button, ButtonVariantEnum } from '@components/Button';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { IconsEnum, SvgIcon } from '@components/SvgIcon';

import { CardNFTProps } from './CardNFT.types';

import styles from './CardNFT.module.scss';

export const CardNFTComponent: React.FC<CardNFTProps> = ({
  currentButtonId,
  nickname,
  title,
  src,
  srcAva,
  variant = null,
}) => {
  return (
    <>
      {!variant ? (
        <div className={styles.wrap}>
          <div>
            <div className={styles.image}>
              <div className={styles.imgwrap}>
                <img src={src} alt="nft" />
              </div>
              <div className={styles.ethLabel}>
                <Button
                  variant={ButtonVariantEnum.lightBordered}
                  text={'0.2 ETH'}
                  size={'lgETH'}
                />
              </div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.avatar}>
                <div className={styles.imgwrap}>
                  {srcAva ? (
                    <img src={srcAva} alt="userAvatar" />
                  ) : (
                    <div className={styles.whitecircle}></div>
                  )}
                </div>
                <div className={styles.badgeWrap}>
                  <img
                    className={styles.badge}
                    src={'images/card/v.svg'}
                    alt="verify"
                  />
                </div>
              </div>
              <div className={styles.textContent}>
                <div className={styles.subtitle}>{nickname}</div>
                <h5>{title}</h5>
              </div>
              <div className={styles.divider}></div>

              <div className={cn(styles.social, styles.social_mobile)}>
                <div className={styles.cont}>
                  <div className={cn(styles.text, styles.text_likes)}>
                    <div className={styles.heartIco}></div>
                    <span>10 900</span>
                  </div>
                  <div className={styles.text}>
                    <div className={styles.bubbleIco}></div>
                    <span>19</span>
                  </div>
                  <div className={styles.watch}>
                    <div className={styles.eyesIco}></div>
                    <span>109 381</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.imgwrap}>
            <img className={styles.image} src={src} alt="nft" />
          </div>
          <div className={styles.collectionContent}>
            <div className={styles.textCollection}>
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
      )}
    </>
  );
};

CardNFTComponent.displayName = 'CardNFT';
