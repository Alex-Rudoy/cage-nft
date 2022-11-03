import { BtnsSwitcher } from '@components/BtnsSwitcher';
import { Button, ButtonVariantEnum } from '@components/Button';
import { DropdownDividerComponent } from '@components/DropdownDivider/DropdownDivider.component';
import { DropdownInput } from '@components/DropdownSearch';
import { InputComponent } from '@components/Input/Input.component';
import React, { useMemo, ChangeEvent, useState } from 'react';
import { BUTTON_CONFIG_LIST_1, BUTTON_CONFIG_LIST_2 } from './constants';
import { DropdownBase } from '@components/DropdownBase';
import { DropdownCaller } from '@components/DropdownCaller';
import { DropdownDivider } from '@components/DropdownDivider';
import { DropdownItem } from '@components/DropdownItem';
import Select, { components } from 'react-select';
import { Checkbox } from '@components/Checkbox';
import { getUUID } from '@utils/getUUID';

import { DropdownProps } from './Dropdown.types';

import styles from './Dropdown.module.scss';

export const DropdownComponent = <T extends string | number>({
  className,
  containerClass,
  iconOnly,
  options,
  preFilteredOptions,
  showSearch,
  setValue,
  placeholder = '',
  value,
  width = 320,
  emptyStateText,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [valueMin, setValueMin] = useState<number | null>(null);
  const [valueMax, setValueMax] = useState<number | null>(null);

  const [buttonList1CurrentId, setButtonList1CurrentId] = useState<
    number | null
  >(1);

  const [buttonList2CurrentId, setButtonList2CurrentId] = useState<
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

  const activeOption = options.find((option) => option.value === value) || {
    icon: null,
    label: '',
  };

  const filteredOptions = useMemo(
    () =>
      (preFilteredOptions || options).filter(
        (item) =>
          item.label.toLowerCase().includes(search.toLowerCase()) ||
          item.value.toString().toLowerCase().includes(search.toLowerCase())
      ),
    [search, options, preFilteredOptions]
  );

  const optio = [
    {
      value: 'Price High to low',
      label: 'Price High to low',
      icon: (
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.86281 0.996231L0.698748 4.23563C0.57319 4.36119 0.491577 4.5558 0.491577 4.7253C0.491577 5.12081 0.767805 5.39076 1.15703 5.39076C1.34537 5.39076 1.49604 5.32798 1.6216 5.19615L2.91485 3.85268L3.74353 2.89844L3.69331 4.22935V12.0579C3.69331 12.4534 3.97581 12.7359 4.36504 12.7359C4.75427 12.7359 5.0305 12.4534 5.0305 12.0579V4.22935L4.98655 2.89844L5.80896 3.85268L7.10221 5.19615C7.22777 5.32798 7.38471 5.39076 7.57305 5.39076C7.956 5.39076 8.23223 5.12081 8.23223 4.7253C8.23223 4.5558 8.15062 4.36119 8.02506 4.23563L4.861 0.996231C4.58477 0.707448 4.14532 0.70117 3.86281 0.996231ZM12.1371 12.5162L15.3011 9.27678C15.4267 9.14495 15.5083 8.95033 15.5083 8.78083C15.5083 8.3916 15.2321 8.12165 14.8429 8.12165C14.6545 8.12165 14.5039 8.18443 14.3783 8.30999L13.085 9.65346L12.2564 10.6077L12.3066 9.27678V1.44824C12.3066 1.06529 12.0241 0.776505 11.6349 0.776505C11.2519 0.776505 10.9694 1.06529 10.9694 1.44824V9.27678L11.0133 10.6077L10.1909 9.65346L8.89769 8.30999C8.77213 8.18443 8.61518 8.12165 8.43312 8.12165C8.04389 8.12165 7.76766 8.3916 7.76766 8.78083C7.76766 8.95033 7.84928 9.14495 7.97484 9.27678L11.1389 12.5162C11.4151 12.8112 11.8546 12.8175 12.1371 12.5162Z"
            fill="#81878D"
          />
        </svg>
      ),
    },
    {
      value: 'Price Low to high',
      label: 'Price Low to high',
      icon: (
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.86281 0.996231L0.698748 4.23563C0.57319 4.36119 0.491577 4.5558 0.491577 4.7253C0.491577 5.12081 0.767805 5.39076 1.15703 5.39076C1.34537 5.39076 1.49604 5.32798 1.6216 5.19615L2.91485 3.85268L3.74353 2.89844L3.69331 4.22935V12.0579C3.69331 12.4534 3.97581 12.7359 4.36504 12.7359C4.75427 12.7359 5.0305 12.4534 5.0305 12.0579V4.22935L4.98655 2.89844L5.80896 3.85268L7.10221 5.19615C7.22777 5.32798 7.38471 5.39076 7.57305 5.39076C7.956 5.39076 8.23223 5.12081 8.23223 4.7253C8.23223 4.5558 8.15062 4.36119 8.02506 4.23563L4.861 0.996231C4.58477 0.707448 4.14532 0.70117 3.86281 0.996231ZM12.1371 12.5162L15.3011 9.27678C15.4267 9.14495 15.5083 8.95033 15.5083 8.78083C15.5083 8.3916 15.2321 8.12165 14.8429 8.12165C14.6545 8.12165 14.5039 8.18443 14.3783 8.30999L13.085 9.65346L12.2564 10.6077L12.3066 9.27678V1.44824C12.3066 1.06529 12.0241 0.776505 11.6349 0.776505C11.2519 0.776505 10.9694 1.06529 10.9694 1.44824V9.27678L11.0133 10.6077L10.1909 9.65346L8.89769 8.30999C8.77213 8.18443 8.61518 8.12165 8.43312 8.12165C8.04389 8.12165 7.76766 8.3916 7.76766 8.78083C7.76766 8.95033 7.84928 9.14495 7.97484 9.27678L11.1389 12.5162C11.4151 12.8112 11.8546 12.8175 12.1371 12.5162Z"
            fill="#81878D"
          />
        </svg>
      ),
    },
  ];

  // const dot = (color = 'transparent') => ({
  //   alignItems: 'center',
  //   display: 'flex',
  //
  //   ':before': {
  //     backgroundColor: color,
  //     // borderRadius: 10,
  //     content: '" "',
  //     backgroundImage: '../../../public/icons/header/arrowupdown.svg',
  //     backgroundRepeat: false,
  //     backgroundPosition: 'center',
  //     display: 'block',
  //     marginRight: 12,
  //     height: 12,
  //     width: 15,
  //   },
  // });
  const { Option } = components;
  // const IconOption = (props) => (
  //   <Option {...props}>
  //     <img
  //       src={require('./' + props.data.icon)}
  //       style={{ width: 20 }}
  //       alt={props.data.label}
  //     />
  //     {props.data.label}
  //   </Option>
  // );

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      // backgroundImage: '../../../public/icons/header/arrowupdown.svg',
      width: 290,
      borderRadius: 10,
      borderColor: '#F1F3F4',
      marginRight: 'auto',
      marginLeft: 'auto',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: data.color,
      };
    },
    // input: (styles) => ({ ...styles, ...dot() }),
    // placeholder: (styles) => ({ ...styles, ...dot('transparent') }),
    // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };

  return (
    <div>
      <DropdownBase
        caller={
          <DropdownCaller
            className={containerClass}
            text={activeOption?.label}
            icon={activeOption?.icon}
            iconOnly={iconOnly}
            placeholder={placeholder}
            style={{ width: `${width}px` }}
          />
        }
        offsetMain={4}
        customState={[isOpen, setIsOpen]}
        className={className}
        style={{ width: `${width}px` }}
      >
        <span className={styles.title}>Sort by</span>
        <Select
          options={optio}
          styles={colourStyles}
          defaultValue={optio[0]}
          components={{
            // Option: IconOption,
            IndicatorSeparator: () => null,
          }}
        />

        <span className={styles.title}>Price</span>
        <BtnsSwitcher
          buttonConfigList={BUTTON_CONFIG_LIST_1}
          currentButtonId={buttonList1CurrentId}
          setCurrentButtonId={handleSetButtonList1CurrentId}
          size={'exsm'}
        />
        <div className={styles.range}>
          <DropdownInput
            id={'df'}
            value={valueMin}
            onChange={(e: ChangeEvent<HTMLInputElement> | any) =>
              setValue(e.target.valueMin)
            }
          />
          <div></div>
          <DropdownInput
            id={'df'}
            value={valueMax}
            onChange={(e: ChangeEvent<HTMLInputElement> | any) =>
              setValue(e.target.valueMax)
            }
            placeholder={'Max'}
          />
        </div>
        <span className={styles.title}>Chain</span>
        <BtnsSwitcher
          buttonConfigList={BUTTON_CONFIG_LIST_2}
          currentButtonId={buttonList2CurrentId}
          setCurrentButtonId={handleSetButtonList2CurrentId}
          size={'sm'}
        />
        <span className={styles.title}>Type</span>
        <div className={styles.checkboxes}>
          <Checkbox
            checked={check}
            id={getUUID()}
            onClick={() => setCheck(!check)}
            text={'All Times'}
          />
          <Checkbox
            checked={check2}
            id={getUUID()}
            onClick={() => setCheck2(!check2)}
            text={'Fractionalized items'}
          />
          <Checkbox
            checked={check3}
            id={getUUID()}
            onClick={() => setCheck3(!check3)}
            text={'Single items'}
          />
          <Checkbox
            checked={check4}
            id={getUUID()}
            onClick={() => setCheck4(!check4)}
            text={'Bundle of items'}
          />
        </div>
        <DropdownDivider />
        <div>
          <Button
            width={'full'}
            text={'Apply'}
            variant={ButtonVariantEnum.primary}
          />
          <div className={styles.btnsBlock}>
            <Button
              text={'Clear All'}
              variant={ButtonVariantEnum.secondaryFilt}
            />
            <Button text={'Cancel'} variant={ButtonVariantEnum.secondaryFilt} />
          </div>
        </div>
      </DropdownBase>
    </div>
  );
};

DropdownComponent.displayName = 'Dropdown';
