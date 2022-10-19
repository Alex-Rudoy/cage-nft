import React, { useMemo, useState } from 'react';

import { DropdownBase } from '@components/DropdownBase';
import { DropdownCaller } from '@components/DropdownCaller';
import { DropdownItem } from '@components/DropdownItem';
import { DropdownSearch } from '@components/DropdownSearch';

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
      {showSearch && (
        <DropdownSearch
          id="dropdownSearch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}

      {filteredOptions.length === 0 && (
        <div className={styles.emptyState}>
          <p>{emptyStateText}</p>
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
