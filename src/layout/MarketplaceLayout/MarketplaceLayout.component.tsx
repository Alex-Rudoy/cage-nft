import {Avatar} from '@components/Avatar'
import {BtnsSwitcher} from '@components/BtnsSwitcher'
import {Button, ButtonVariantEnum} from '@components/Button'
import {Checkbox} from '@components/Checkbox'
import {CheckboxComponent} from '@components/Checkbox/Checkbox.component'
import {InputComponent} from '@components/Input/Input.component'
import {IconsEnum} from '@components/SvgIcon'
import {ThemeToggleComponent} from '@components/ThemeToggle/ThemeToggle.component'
import {buttonsList} from '@layout/MarketplaceLayout/constants'
import React, {useState} from 'react'
import {getUUID} from '@utils/getUUID'
import {inspect} from 'util'

import {MarketplaceLayoutProps} from './MarketplaceLayout.types'

export const MarketplaceLayoutComponent: React.FC<
  MarketplaceLayoutProps
> = () => {
  const [check, setCheck] = useState(true)
  const [checkBox, setCheckBox] = useState(true)
  const [value, setValue] = useState('')
  const [active, setActive] = useState('')
  
  const handleBtnClk = (id:string) => {
    setActive(id)
    console.log({id})
  }
  return (
    <>
      <div style={{ background: 'lightGray' }}>
        <Button text={'Button text'} variant={ButtonVariantEnum.secondary} size={'sm'} icon={IconsEnum.account} />
        <Avatar name={'Alex'}/>
        <InputComponent value={value} id={getUUID()} onChange={(e) => setValue(e.target.value)}/>
        <ThemeToggleComponent id={getUUID()} onClick={() => setCheck(!check) } checked={check}/>
        <Checkbox checked={checkBox} id={getUUID()} onClick={() => setCheckBox(!checkBox) }/>
        <BtnsSwitcher buttonsList={buttonsList} handleBtnClk={handleBtnClk} active={active} size={'sm'}/>
      </div>
    </>
  );
};

MarketplaceLayoutComponent.displayName = 'MarketplaceLayout';
