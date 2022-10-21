import {Avatar} from '@components/Avatar'
import {Button, ButtonVariantEnum} from '@components/Button'
import {InputComponent} from '@components/Input/Input.component'
import {IconsEnum} from '@components/SvgIcon'
import React from 'react'

import {MarketplaceLayoutProps} from './MarketplaceLayout.types'

export const MarketplaceLayoutComponent: React.FC<
  MarketplaceLayoutProps
> = () => {
  return (
    <>
      <Button text={'Button text'} variant={ButtonVariantEnum.secondary} size={'sm'} icon={IconsEnum.account} />
      <Avatar name={'Alex'}/>
      <InputComponent value={''} id={'99'}/>
    </>
  );
};

MarketplaceLayoutComponent.displayName = 'MarketplaceLayout';
