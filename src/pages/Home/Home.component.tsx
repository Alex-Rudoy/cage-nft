import { BtnsSwitcher } from '@components/BtnsSwitcher';
import { Button, ButtonVariantEnum } from '@components/Button';
import { CardNFT } from '@components/CardNFT';
import { BUTTON_CONFIG_LIST_2 } from '@components/Dropdown/constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

export const HomeComponent: React.FC = () => {
  const [buttonList1CurrentId, setButtonList1CurrentId] = useState<
    number | null
  >(1);

  const [buttonList2CurrentId, setButtonList2CurrentId] = useState<
    number | null
  >(2);

  const [buttonList3CurrentId, setButtonList3CurrentId] = useState<
    number | null
  >(2);

  const handleSetButtonList1CurrentId = (id: number | null) => {
    if (buttonList1CurrentId === id) {
      setButtonList1CurrentId(null);
      return;
    }
    setButtonList1CurrentId(id);
  };

  const handleSetButtonList2CurrentId = (id: number | null) => {
    if (buttonList2CurrentId === id) {
      setButtonList2CurrentId(null);
      return;
    }
    setButtonList2CurrentId(id);
  };

  const handleSetButtonList3CurrentId = (id: number | null) => {
    if (buttonList3CurrentId === id) {
      setButtonList3CurrentId(null);
      return;
    }
    setButtonList3CurrentId(id);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.board}>
          <div className={styles.duck}></div>
        </div>
        <div className={styles.searchTitle}>
          <div className={styles.searchText}>
            <h3>Top NFT per 24 hours</h3>
            <div className={styles.subTitle}>
              Showed more than 10 938 collections
            </div>
          </div>
          <BtnsSwitcher
            buttonConfigList={BUTTON_CONFIG_LIST_2}
            currentButtonId={buttonList2CurrentId}
            setCurrentButtonId={handleSetButtonList2CurrentId}
            size={'sm'}
          />
        </div>
        <div className={styles.topNFTBlock}>
          <Link to={`/marketplace/777`}>
            <CardNFT
              id={'777'}
              currentButtonId={buttonList2CurrentId}
              src={'images/card/bluemonkey.png'}
              srcAva={'images/card/ava.png'}
              nickname={'MagicEdenEscrow_1'}
              title={'3D render in Blender'}
            />
          </Link>
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/2.png'}
            srcAva={'images/card/avaphoto.png'}
            nickname={'Rodion Kutsaev'}
            title={'Editional'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/3.png'}
            nickname={'Rodion Kutsaev'}
            title={'Editional'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/3.png'}
            nickname={'Rodion Kutsaev'}
            title={'Editional'}
          />
          <CardNFT
            src={'images/card/collect.png'}
            title={'3D Sol Kitties #2920'}
            currentButtonId={buttonList2CurrentId}
            variant={'collection'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/4.png'}
            nickname={'Rodion Kutsaev'}
            title={'Editional'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/4.png'}
            nickname={'Rodion Kutsaev'}
            title={'Editional'}
          />
        </div>
        <div className={styles.btnWrapper}>
          <Button
            variant={ButtonVariantEnum.light}
            width={'full'}
            text={'View all'}
          />
        </div>
        <div className={styles.searchTitle}>
          <div className={styles.searchText}>
            <h3>Top creators</h3>
            <div className={styles.subTitle}>
              Showed more than 20 collections
            </div>
          </div>
          <BtnsSwitcher
            buttonConfigList={BUTTON_CONFIG_LIST_2}
            currentButtonId={buttonList3CurrentId}
            setCurrentButtonId={handleSetButtonList3CurrentId}
            size={'sm'}
          />
        </div>
        <div className={styles.topCreators}>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/1.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>1</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              {/*{srcAvatar && */}
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/2.png'} alt="userAvatar" />
              </div>
              {/*}*/}
              <div className={styles.avatarBadge}>2</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/3.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>3</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/4.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>4</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/5.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>5</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/6.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>6</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/7.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>7</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/8.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>8</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
          <div className={styles.creatorsInfo}>
            <div className={styles.avatar}>
              <div className={styles.imgwrap}>
                <img src={'icons/avatars/9.png'} alt="userAvatar" />
              </div>
              <div className={styles.avatarBadge}>9</div>
            </div>
            <div className={styles.name}>
              <h4>John Sacarty</h4>
              <span>Earned</span>
              <span className={styles.ETHvalue}>0.233 ETH</span>
            </div>
            <div className={styles.traded}>
              <h4>$1 039 234</h4>
              <span>Traded this month</span>
            </div>
          </div>
        </div>
        <div className={styles.btnWrapper}>
          <Button
            variant={ButtonVariantEnum.light}
            width={'full'}
            text={'View all'}
          />
        </div>
        <div className={styles.searchTitle}>
          <div className={styles.searchText}>
            <h3>Top NFT per all time</h3>
            <div className={styles.subTitle}>
              Showed more than 20 collections
            </div>
          </div>
          <BtnsSwitcher
            buttonConfigList={BUTTON_CONFIG_LIST_2}
            currentButtonId={buttonList1CurrentId}
            setCurrentButtonId={handleSetButtonList1CurrentId}
            size={'sm'}
          />
        </div>
        <div className={styles.topNFTAllTime}>
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/5.png'}
            srcAva={'images/card/ava.png'}
            nickname={'MagicEdenEscrow_1'}
            title={'3D render in Blender'}
          />
          <CardNFT
            src={'images/card/collect.png'}
            title={'3D Sol Kitties #2920'}
            currentButtonId={buttonList2CurrentId}
            variant={'collection'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/6.png'}
            srcAva={'images/card/ava.png'}
            nickname={'MagicEdenEscrow_1'}
            title={'3D render in Blender'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/7.png'}
            srcAva={'images/card/ava.png'}
            nickname={'MagicEdenEscrow_1'}
            title={'3D render in Blender'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/8.png'}
            srcAva={'images/card/ava.png'}
            nickname={'MagicEdenEscrow_1'}
            title={'3D render in Blender'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/9.png'}
            srcAva={'images/card/ava.png'}
            nickname={'MagicEdenEscrow_1'}
            title={'3D render in Blender'}
          />
          <CardNFT
            currentButtonId={buttonList2CurrentId}
            src={'images/card/8.png'}
            srcAva={'images/card/ava.png'}
            nickname={'MagicEdenEscrow_1'}
            title={'3D render in Blender'}
          />
        </div>
      </div>
    </>
  );
};

HomeComponent.displayName = 'Home';
