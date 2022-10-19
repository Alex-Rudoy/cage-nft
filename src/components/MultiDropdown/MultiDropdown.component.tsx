import React, { useEffect, useState } from 'react';

import { DropdownBase } from '@components/DropdownBase';
import { DropdownItem } from '@components/DropdownItem';
import { MultiDropdownCaller } from './MultiDropdownCaller.component';

import { simpleOption } from '@typings/dictionary';

import { MultiDropdownProps } from './MultiDropdown.types';

export const MultiDropdown = <T extends string | number>({
  className,
  containerClass,
  iconOnly,
  options,
  setValue,
  placeholder = '',
  width = 320,
  value,
}: MultiDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addedOptions, setAddedOptions] = useState<simpleOption<T>[]>(value);
  const [remainOptions, setRemainOptions] =
    useState<simpleOption<T>[]>(options);

  useEffect(() => {
    const newRemainOptions = options.filter((option) => {
      return !value.some((addedOption) => addedOption.value === option.value);
    });

    setRemainOptions(newRemainOptions);
  }, [options, value]);

  useEffect(() => {
    setAddedOptions(value);
  }, [value]);

  const handleSelect = (currentOption) => {
    setIsOpen(false);

    const newAddedOptions = [...addedOptions, currentOption];
    const newRemainOptions = remainOptions.filter((option) => {
      return !newAddedOptions.some(
        (addedOption) => addedOption.value === option.value
      );
    });

    setValue(newAddedOptions.map((option) => option.value));

    setRemainOptions([...newRemainOptions]);
    setAddedOptions(newAddedOptions);
  };

  const handleRemoveItem = (currentOption) => {
    const newRemainOptions = [currentOption, ...remainOptions];
    const newAddedOptions = addedOptions.filter(
      (option) => option.value !== currentOption.value
    );

    setValue(newAddedOptions.map((option) => option.value));

    setRemainOptions([...newRemainOptions]);
    setAddedOptions(newAddedOptions);
  };

  return (
    <DropdownBase
      caller={
        <MultiDropdownCaller
          className={containerClass}
          options={addedOptions}
          iconOnly={iconOnly}
          removeOption={handleRemoveItem}
          placeholder={placeholder}
          style={{ width: `${width}px` }}
        />
      }
      offsetMain={4}
      customState={[isOpen, setIsOpen]}
      className={className}
      style={{ width: `${width}px` }}
    >
      {remainOptions.map((option) => (
        <DropdownItem
          key={option.value}
          text={option.label}
          icon={option.icon}
          onClick={() => handleSelect(option)}
        />
      ))}
    </DropdownBase>
  );
};
