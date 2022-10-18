import React, { useEffect, useState } from 'react';
import { fakeData, fakeColumns } from './fakeDataForStory';
import { Table } from '.';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    columns: {
      table: { disable: true },
    },
    data: {
      table: { disable: true },
    },
    sortedBy: {
      table: { disable: true },
    },
    reverseSort: {
      table: { disable: true },
    },
    totalRecords: {
      table: { disable: true },
    },
    startRecord: {
      table: { disable: true },
    },
    recordsPerPage: {
      table: { disable: true },
    },
    isLoading: {
      table: { disable: true },
    },
    emptyState: {
      table: { disable: true },
    },
    onSortClick: {
      table: { disable: true },
    },
    onPaginationClick: {
      table: { disable: true },
    },
    className: {
      table: { disable: true },
    },
  },
};

const Template = (args) => {
  const [startRecord, setStartRecord] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortedBy, setSortedBy] = useState('id');
  const [reverseSort, setReverseSort] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(
        fakeData
          .sort((a, b) =>
            reverseSort
              ? a[sortedBy] < b[sortedBy]
                ? 1
                : -1
              : a[sortedBy] < b[sortedBy]
              ? -1
              : 1
          )
          .slice(startRecord, startRecord + recordsPerPage)
      );
      setIsLoading(false);
    };

    fetchData();
  }, [startRecord, recordsPerPage, sortedBy, reverseSort]);

  const onSortClick = (id: string, reverseSort: boolean) => {
    setStartRecord(0);
    setSortedBy(id);
    setReverseSort(reverseSort);
  };

  const onPaginationClick = (start: number, recordsPerPage: number) => {
    setStartRecord(start);
    setRecordsPerPage(recordsPerPage);
  };

  return (
    <Table
      {...args}
      data={data}
      sortedBy={sortedBy}
      reverseSort={reverseSort}
      totalRecords={100}
      startRecord={startRecord}
      recordsPerPage={recordsPerPage}
      isLoading={isLoading}
      onSortClick={onSortClick}
      onPaginationClick={onPaginationClick}
    />
  );
};

export const table = Template.bind({});
table.args = { columns: fakeColumns };
