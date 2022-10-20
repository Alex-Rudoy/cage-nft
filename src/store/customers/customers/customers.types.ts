import { PayloadAction } from '@reduxjs/toolkit';

// import { BackendResponse } from '@typings/backendResponse';
// import { isoDateString } from '@typings/isoDateString';

type BackendResponse = any;
type isoDateString = any;

export type CustomerShortDataType = {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  phone_number: string;
  tags: string[];
  channels: string[];
  last_seen: number | isoDateString;
  revenue: number;
};

export type AnonymousCustomerShortDataType = {
  id: string;
  last_seen: number | isoDateString;
  first_seen: number | isoDateString;
};

export type CustomersReducerType = {
  customersListLoading: boolean;
  anonymousCustomersListLoading: boolean;
  customersList: CustomerShortDataType[];
  anonymousCustomersList: AnonymousCustomerShortDataType[];
  totalCustomers: number;
  customersFound: number;
};

// export type FetchCustomersResponse = BackendResponse<CustomerShortDataType[]>;
// export type FetchAnonymousCustomersResponse = BackendResponse<
//   AnonymousCustomerShortDataType[]
// >;

export type FetchCustomersResponse = any;
export type FetchAnonymousCustomersResponse = any;

export type GetCustomersProps = {
  searchValue?: string;
  limit: number;
  offset: number;
};

// todo: Alex Rudenko - add logic and other stuff to payload once BE ready
export type TFetchCustomersAction = PayloadAction<string>;
export type TFetchCustomersSuccessAction = PayloadAction<
  CustomerShortDataType[]
  >;
export type TFetchAnonymousCustomersAction = PayloadAction<string>;
export type TFetchAnonymousCustomersSuccessAction = PayloadAction<
  AnonymousCustomerShortDataType[]
  >;
