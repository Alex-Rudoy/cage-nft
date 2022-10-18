import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonVariantEnum } from '@components/Button';
import { Dropdown } from '@components/Dropdown';
import { IconsEnum } from '@components/SvgIcon';

import generatePagination from '@utils/generatePagination';

import { TablePaginationProps } from './TablePagination.types';

import styles from './TablePagination.module.scss';

export const TablePaginationComponent: React.FC<TablePaginationProps> = ({
  totalRecords,
  startRecord,
  recordsPerPage,
  onPaginationClick,
  itemsPerPageOptions = [5, 10, 20, 50],
}) => {
  const { t: translate } = useTranslation('common');
  const { pages, currentPage } = generatePagination(
    totalRecords,
    startRecord,
    recordsPerPage
  );

  if (pages.length === 0) return null;

  return (
    <div className={styles.pagination}>
      <Button
        variant={ButtonVariantEnum.secondary}
        text={translate('tables.previous')}
        icon={IconsEnum.arrow}
        iconPosition="left"
        onClick={() =>
          onPaginationClick(startRecord - recordsPerPage, recordsPerPage)
        }
        disabled={currentPage === '1'}
        className={styles.previous}
      />
      {pages.map((page, i) => (
        <Button
          variant={ButtonVariantEnum.secondary}
          key={`${page}_${i}`}
          text={page}
          onClick={
            page === '...'
              ? () => null
              : () =>
                  onPaginationClick(
                    (parseInt(page, 10) - 1) * recordsPerPage,
                    recordsPerPage
                  )
          }
          className={page === currentPage ? styles.currentPage : ''}
        />
      ))}
      <Button
        variant={ButtonVariantEnum.secondary}
        text={translate('tables.next')}
        icon={IconsEnum.arrow}
        iconPosition="right"
        onClick={() =>
          onPaginationClick(startRecord + recordsPerPage, recordsPerPage)
        }
        disabled={currentPage === pages[pages.length - 1]}
        className={styles.next}
      />
      <Dropdown
        options={itemsPerPageOptions.map((value) => ({
          value,
          label: `${value}/${translate('tables.page')}`,
        }))}
        value={recordsPerPage}
        setValue={(value) => onPaginationClick(startRecord, value)}
        className={styles.recordsPerPage}
        width={110}
      />
    </div>
  );
};

TablePaginationComponent.displayName = 'TablePagination';
