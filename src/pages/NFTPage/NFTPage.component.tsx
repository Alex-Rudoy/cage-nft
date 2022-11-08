import React, { useState } from 'react';
import styles from './NFTpage.module.scss';

// import styles from './Home.module.scss';
// import { NFTPageProps } from './NFTPage.types';

export const NFTPageComponent: React.FC = () => {
  // const [buttonList1CurrentId, setButtonList1CurrentId] = useState<
  //   number | null
  //   >(1);
  //
  // const [buttonList2CurrentId, setButtonList2CurrentId] = useState<
  //   number | null
  //   >(2);
  //
  // const [buttonList3CurrentId, setButtonList3CurrentId] = useState<
  //   number | null
  //   >(2);
  //
  // const handleSetButtonList1CurrentId = (id: number | null) => {
  //   if (buttonList1CurrentId === id) {
  //     setButtonList1CurrentId(null);
  //     return;
  //   }
  //   setButtonList1CurrentId(id);
  // };
  //
  // const handleSetButtonList2CurrentId = (id: number | null) => {
  //   if (buttonList2CurrentId === id) {
  //     setButtonList2CurrentId(null);
  //     return;
  //   }
  //   setButtonList2CurrentId(id);
  // };
  //
  // const handleSetButtonList3CurrentId = (id: number | null) => {
  //   if (buttonList3CurrentId === id) {
  //     setButtonList3CurrentId(null);
  //     return;
  //   }
  //   setButtonList3CurrentId(id);
  // };
  return (
    <>
      <div className={styles.wrap}>NFT</div>
    </>
  );
};

NFTPageComponent.displayName = 'NFTPage';
