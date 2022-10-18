import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { Table } from '@components/Table';
import { customersTableColumns } from './CustomersTable.config';

import { routes } from '@routing/routes';

import { CustomersTableProps } from './CustomersTable.types';

import styles from './CustomersTable.module.scss';

export const CustomersTableComponent: React.FC<CustomersTableProps> = ({
  data,
  fromSegment,
  sortedBy,
  reverseSort,
  totalRecords,
  startRecord,
  recordsPerPage,
  isLoading,
  onSortClick,
  onPaginationClick,
  emptyState,
}) => {
  const { t: translate } = useTranslation();

  const navigate = useNavigate();

  const goToUserPage = (customerId: string, index: number) => {
    navigate(routes({ customerId }).customerPage, {
      state: { isCustomer: true, index: index },
    });
  };

  return (
    <Table
      className={styles.customersTable}
      columns={customersTableColumns(translate, fromSegment, goToUserPage)}
      data={data}
      sortedBy={sortedBy}
      reverseSort={reverseSort}
      totalRecords={totalRecords}
      startRecord={startRecord}
      recordsPerPage={recordsPerPage}
      isLoading={isLoading}
      onSortClick={onSortClick}
      onPaginationClick={onPaginationClick}
      emptyState={emptyState}
      // TODO: Alex Rudenko - ask Rajeev is design valid and will not be changed
    />
  );
};
