import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { DropdownBase } from '@components/DropdownBase';
import { DropdownCaller } from '@components/DropdownCaller';
import { DropdownItem } from '@components/DropdownItem';
import { DropdownSearch } from '@components/DropdownSearch';
import { FontWeightEnum, Text, TextVariantsEnum } from '@components/Text';

import { DropdownProps } from './Dropdown.types';

import styles from './Dropdown.module.scss';

export const DropdownComponent = <T extends string | number>({
  className,
  containerClass,
  fontWeight,
  iconOnly,
  options,
  preFilteredOptions,
  showSearch,
  setValue,
  textVariant,
  placeholder = '',
  value,
  width = 320,
  emptyStateText,
}: DropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { t: translate } = useTranslation('common');

  const handleSelect = (value) => {
    setIsOpen(false);
    setValue(value);
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

  return (
    <DropdownBase
      caller={
        <DropdownCaller
          className={containerClass}
          fontWeight={fontWeight}
          text={activeOption?.label}
          icon={activeOption?.icon}
          iconOnly={iconOnly}
          textVariant={textVariant}
          placeholder={placeholder}
          style={{ width: `${width}px` }}
        />
      }
      offsetMain={4}
      customState={[isOpen, setIsOpen]}
      className={className}
      style={{ width: `${width}px` }}
    >
      {showSearch && (
        <DropdownSearch
          id="dropdownSearch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      {filteredOptions.length === 0 && (
        <div className={styles.emptyState}>
          <Text
            variant={TextVariantsEnum.Text_sm}
            fontWeight={FontWeightEnum.Medium}
          >
            {emptyStateText || translate('noValuesFound')}
          </Text>
        </div>
      )}

      {filteredOptions.map((option, index) => (
        <DropdownItem
          key={index}
          text={option.label}
          icon={option.icon}
          onClick={() => handleSelect(option.value)}
        />
      ))}
    </DropdownBase>
  );
};

DropdownComponent.displayName = 'Dropdown';
