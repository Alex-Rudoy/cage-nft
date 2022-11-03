import { BtnsSwitcher } from '@components/BtnsSwitcher';
import { BUTTON_CONFIG_LIST_2 } from '@components/Dropdown/constants';
import React from 'react';
import { TopNFTHeadProps } from './TopNFTHead.types';

import styles from './TopNFTHead.module.scss';

export const TopNFTHeadComponent: React.FC<TopNFTHeadProps> = (
  {
    // buttonList2CurrentId,
    // setCurrentButtonId,
  }
) => {
  return (
    <div>
      {/*<div>*/}
      {/*  <h3>Top NFT per 24 hours</h3>*/}
      {/*  <div className={styles.subTitle}>*/}
      {/*    Showed more than 10 938 collections*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<BtnsSwitcher*/}
      {/*  buttonConfigList={BUTTON_CONFIG_LIST_2}*/}
      {/*  currentButtonId={buttonList2CurrentId}*/}
      {/*  size={'sm'}*/}
      {/*/>*/}
    </div>
  );
};

TopNFTHeadComponent.displayName = 'TopNFTHead';
