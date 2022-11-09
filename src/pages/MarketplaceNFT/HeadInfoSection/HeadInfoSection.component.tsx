import { Avatar } from '@components/Avatar';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import React from 'react';
import styles from './HeadInfoSection.module.scss';
// import { HeadInfoSectionProps } from './HeadInfoSection.types';

export const HeadInfoSectionComponent: React.FC = () => {
  return (
    <>
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
          <Avatar src={''} msgsValue={null} isOnline={false} />
          <div className={styles.contentInfo}>
            <span className={styles.contentTitle}>Owner</span>
            <div className={styles.bold}>0x17136...0527</div>
          </div>
        </div>
        <div className={styles.collection}>
          <Avatar src={'/images/user/nftava.png'} msgsValue={null} />
          <div className={styles.contentInfo}>
            <span className={styles.contentTitle}>Collection</span>
            <div className={styles.bold}>HAPEAPE club</div>
          </div>
        </div>
      </div>
      <div className={styles.contentText}>
        Just ape. A collection of 10,000 Apes that take us back to basics. None
        of the fluff, all of the value.
      </div>
    </>
  );
};

HeadInfoSectionComponent.displayName = 'HeadInfoSection';
