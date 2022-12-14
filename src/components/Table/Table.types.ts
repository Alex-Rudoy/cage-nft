import React from 'react';

export type columnConfigType<T> = {
  id: string;
  name: string;
  sortable?: boolean;
  cellRenderer: (data: T, index: number) => React.ReactNode;
};

export type TableProps<T> = {
  columns: columnConfigType<T>[];
  data: T[];
  sortedBy?: string;
  reverseSort?: boolean;
  totalRecords?: number;
  startRecord?: number;
  recordsPerPage?: number;
  isLoading: boolean;
  emptyState?: React.ReactNode;
  onSortClick: (id: string, reverseSort: boolean) => void;
  onPaginationClick?: (startRecord: number, recordsPerPage: number) => void;
  className?: string;
  withoutPagination?: boolean;
};

export type TableComponentType = <T>(props: TableProps<T>) => JSX.Element;
