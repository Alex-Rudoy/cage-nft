import {Avatar} from '@components/Avatar'
import {Button, ButtonVariantEnum} from '@components/Button'
import {InputComponent} from '@components/Input/Input.component'
import {IconsEnum} from '@components/SvgIcon'
import {ToggleComponent} from '@components/Toggle/Toggle.component'
import React, {useState} from 'react'
import {inspect} from 'util'

import {MarketplaceLayoutProps} from './MarketplaceLayout.types'

export const MarketplaceLayoutComponent: React.FC<
  MarketplaceLayoutProps
> = () => {
  const [check, setCheck] = useState(true)
  const [value, setValue] = useState('')
  console.log(check)
  return (
    <>
      <div style={{ background: 'lightGray' }}>
        <Button text={'Button text'} variant={ButtonVariantEnum.secondary} size={'sm'} icon={IconsEnum.account} />
        <Avatar name={'Alex'}/>
        <InputComponent value={value} id={'99'} onChange={(e) => setValue(e.target.value)}/>
        <ToggleComponent id={'123'} onClick={() => setCheck(!check) } checked={check}/>
      </div>
    </>
  );
};

MarketplaceLayoutComponent.displayName = 'MarketplaceLayout';
