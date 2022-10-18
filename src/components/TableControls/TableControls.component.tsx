import React from 'react';

import { TableControlsProps } from './TableControls.types';

import styles from './TableControls.module.scss';
import { SvgIcon } from '@components/SvgIcon';

export const TableControlsComponent: React.FC<TableControlsProps> = ({
  icons,
}) => {
  return (
    <div className={styles.tableControls}>
      {icons.map((icon, index) => (
        <SvgIcon key={index} src={icon.icon} onClick={icon.onClick} size={16} />
      ))}
    </div>
  );
};

TableControlsComponent.displayName = 'TableControls';
