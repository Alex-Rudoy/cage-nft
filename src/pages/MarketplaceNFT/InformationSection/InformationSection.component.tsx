import { BtnsSwitcher } from '@components/BtnsSwitcher';
import React, { useState } from 'react';
import styles from './InformationSection.module.scss';
// import {InformationSectionProps} from './InformationSection.types'
import cn from 'classnames';
import { Avatar } from '@components/Avatar';

const data = [
  { 'Mint adress': 'GeBow3c4smN....ZeMyHQU3iW' },
  { 'Adress of token': 'GeBow3c4smN....ZeMyHQU3iW' },
  { 'Royalty of artist': '10.9%' },
  { 'Listing/Bit/Cancel': 'Free of fees' },
  { MoonRank: 12455 },
  { HowRareIs: 90 },
];

export const INFORMATION_LIST = [
  { id: 12, title: 'Details' },
  { id: 32, title: 'Properties' },
  { id: 34, title: 'Bids' },
  { id: 234, title: 'History' },
];

const properties = [
  ['type', 'Hape APE', 'rarity 90.0%'],
  ['hat', 'Cap', 'rarity 10%'],
  ['mouth', 'Unfolded', 'rarity 0.09%'],
  ['pattern', 'Flower', 'rarity 90.0%'],
  ['t_shirt', 'Blue', 'rarity 10%'],
  ['background', 'Pink Purple', 'rarity 0.09%'],
];

const bids = [
  ['10.043439 ETH', 'EQDIU...vW7IWM'],
  ['5.009 ETH ETH', '0xdje...23fedidre'],
  ['2 ETH', '230.43.23..234002'],
  ['0.1 ETH', 'EQDIU...vW7IWM'],
  ['0.009 ETH', 'EQDIU...vW7IWM'],
  ['0.00023 ETH', 'EQDIU...vW7IWM'],
];

const history = [
  ['10.043439 ETH', 'EQDIU...vW7IWM'],
  ['5.009 ETH ETH', '0xdje...23fedidre'],
  ['2 ETH', '230.43.23..234002'],
  ['0.1 ETH', 'EQDIU...vW7IWM'],
  ['0.009 ETH', 'EQDIU...vW7IWM'],
  ['0.00023 ETH', 'EQDIU...vW7IWM'],
];

export const InformationSectionComponent: React.FC = () => {
  const [buttonList2CurrentId, setButtonList2CurrentId] = useState<
    number | null
  >(12);

  const handleSetButtonList2CurrentId = (id: number | null) => {
    if (buttonList2CurrentId === id) {
      setButtonList2CurrentId(null);
      return;
    }
    setButtonList2CurrentId(id);
  };

  return (
    <div className={cn(styles.wrap)}>
      <div className={styles.sectionTitle}>Information</div>
      <div className={styles.btnSwitcher}>
        <BtnsSwitcher
          buttonConfigList={INFORMATION_LIST}
          currentButtonId={buttonList2CurrentId}
          setCurrentButtonId={handleSetButtonList2CurrentId}
          size={'full'}
        />
      </div>
      {buttonList2CurrentId === 12 && (
        <div className={styles.detailsList}>
          {data.map((el, i) => (
            <div key={i} className={styles.deteailsRow}>
              <span>{Object.keys(el)}</span>
              {i < 2 ? (
                <a href="#">
                  <span className={styles.adresLink}>{Object.values(el)}</span>
                </a>
              ) : (
                <span>{Object.values(el)}</span>
              )}
            </div>
          ))}
        </div>
      )}
      {buttonList2CurrentId === 32 && (
        <div className={styles.properties}>
          {properties.map((el, i) => (
            <div key={i} className={styles.propItem}>
              <div className={styles.prop1}>{el[0]}</div>
              <div className={styles.prop2}>{el[1]}</div>
              <div className={styles.prop3}>{el[2]}</div>
            </div>
          ))}
        </div>
      )}
      {buttonList2CurrentId === 34 && (
        <div className={styles.bids}>
          {bids.map((el, i) => (
            <div key={i} className={styles.bidsItem}>
              <Avatar src={''} msgsValue={null} isOnline={false} />
              <div className={styles.info}>
                <span>Expiration: 6h 59m</span>
                <div>
                  {el[0]}
                  <span>from</span>
                  {el[1]}
                </div>
              </div>
              {!i && (
                <div className={styles.higestBid}>
                  <div>Highest bid</div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {buttonList2CurrentId === 234 && (
        <div className={styles.bids}>
          {history.map((el, i) => (
            <div key={i} className={styles.bidsItem}>
              <Avatar src={''} msgsValue={null} isOnline={false} bg={'gray'} />
              <div className={styles.info}>
                <span>6 hours ago</span>
                <span className={styles.infoId}>ID 32294-234</span>
                <div>
                  {el[0]}
                  <span>from</span>
                  {el[1]}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

InformationSectionComponent.displayName = 'InformationSection';
