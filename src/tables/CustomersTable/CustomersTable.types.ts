import React from 'react';

import { CustomerShortDataType } from '@store/customers/customers/customers.types';

export type CustomersTableProps =
  | {
      data: CustomerShortDataType[];
      fromSegment?: false;
      sortedBy?: string;
      reverseSort?: boolean;
      totalRecords: number;
      startRecord: number;
      recordsPerPage: number;
      isLoading: boolean;
      emptyState?: React.ReactNode;
      onSortClick: (id: string, reverseSort: boolean) => void;
      onPaginationClick: (startRecord: number, recordsPerPage: number) => void;
    }
  | {
      data: CustomerShortDataType[];
      fromSegment: true;
      sortedBy?: undefined;
      reverseSort?: undefined;
      totalRecords?: undefined;
      startRecord?: undefined;
      recordsPerPage?: undefined;
      isLoading: boolean;
      emptyState?: React.ReactNode;
      onSortClick?: undefined;
      onPaginationClick?: undefined;
    };
