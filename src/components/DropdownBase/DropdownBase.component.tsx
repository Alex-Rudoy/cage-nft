import { InputComponent } from '@components/Input/Input.component';
import { IconsEnum, SvgIcon } from '@components/SvgIcon';
import { getUUID } from '@utils/getUUID';
import React, {
  useState,
  useRef,
  useImperativeHandle,
  PropsWithChildren,
} from 'react';
import classnames from 'classnames';
import { usePopper } from 'react-popper';

import { Portal } from '@components/Portal';

import { DropdownBaseProps } from './DropdownBase.types';

import styles from './DropdownBase.module.scss';

export const DropdownBaseComponent = React.forwardRef<
  { forceUpdatePosition: () => void },
  PropsWithChildren<DropdownBaseProps>
>(
  (
    {
      caller,
      disabled,
      maxHeight = 625,
      children,
      customState,
      placement = 'bottom',
      offsetMain = 0,
      offsetSide = 0,
      className,
      dontCloseOnInnerClick = false,
      style,
      onClickOutsideCallback,
    },
    ref
  ) => {
    const [value, setValue] = useState('');
    const [defaultIsOpen, setDefaultIsOpen] = useState(false);
    const [isOpen, setIsOpen] = customState || [
      defaultIsOpen,
      setDefaultIsOpen,
    ];
    const [callerRef, setCallerRef] = useState<HTMLDivElement>(null);
    const [dropdownRef, setDropdownRef] = useState<HTMLDivElement>(null);
    const backdropRef = useRef(null);

    const { styles: popperStyles, update } = usePopper(callerRef, dropdownRef, {
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [offsetSide, offsetMain],
          },
        },
        {
          name: 'preventOverflow',
          options: {
            mainAxis: true,
            altAxis: true,
          },
        },
      ],
    });

    useImperativeHandle(ref, () => ({
      forceUpdatePosition() {
        update?.();
      },
    }));

    const dropdownClass = classnames(
      styles.dropdown,
      { [styles.dropdown_open]: isOpen },
      className
    );

    const toggleDropdown = () => {
      update();
      !disabled && setIsOpen(!isOpen);
    };

    const backdropClick = (e: React.MouseEvent) => {
      if (e.target === backdropRef.current && isOpen) {
        onClickOutsideCallback && onClickOutsideCallback();
        toggleDropdown();
      }
    };

    const handleClick = (e) => {
      if (e && e.target.classList.contains('removeItem')) {
        return;
      }
      toggleDropdown();
    };

    return (
      <div className={styles.container}>
        <div className={styles.input}>
          <InputComponent
            value={value}
            id={getUUID()}
            leftBlock={
              <div>
                <SvgIcon src={IconsEnum.loop} size={15} />
              </div>
            }
            onChange={(e) => setValue(e.target.value)}
          />
          <div
            className={styles.caller}
            onClick={handleClick}
            ref={(ref) => setCallerRef(ref)}
          >
            <SvgIcon src={IconsEnum.filter} />
            {/*{caller}*/}
          </div>
        </div>
        <Portal>
          <div
            className={classnames(styles.backdrop, {
              [styles.backdrop_active]: isOpen,
            })}
            onClick={backdropClick}
            ref={backdropRef}
          >
            <div
              className={dropdownClass}
              style={{
                maxHeight: `${maxHeight}px`,
                ...popperStyles.popper,
                ...style,
              }}
              ref={(ref) => setDropdownRef(ref)}
              onClick={() => {
                if (!dontCloseOnInnerClick && isOpen) {
                  // toggleDropdown();
                }
              }}
            >
              {children}
            </div>
          </div>
        </Portal>
      </div>
    );
  }
);

DropdownBaseComponent.displayName = 'DropdownBase';
