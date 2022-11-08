import { Avatar } from '@components/Avatar';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import React from 'react';
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
          <div className={styles.update}>
            <div>
              <SvgIcon src={IconsEnum.reload} size={19} />
              <span>Reload</span>
            </div>
            <div>
              <SvgIcon src={IconsEnum.share} size={19} />
              <span>Share</span>
            </div>
          </div>
          <h2>King of Da Street #8839</h2>
          <div className={styles.contentBlock}>
            <div className={styles.owner}>
              <Avatar src={'/images/user/nftava.png'} msgsValue={null} />
              <div></div>
            </div>
            <div className={styles.collection}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

MarketplaceNFTComponent.displayName = 'MarketplaceNFT';
