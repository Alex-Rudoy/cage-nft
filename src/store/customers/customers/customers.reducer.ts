import { createSlice } from '@reduxjs/toolkit';

import {
  CustomersReducerType,
  TFetchAnonymousCustomersAction,
  TFetchAnonymousCustomersSuccessAction,
  TFetchCustomersAction,
  TFetchCustomersSuccessAction,
} from './customers.types';

const initialState: CustomersReducerType = {
  customersListLoading: true,
  anonymousCustomersListLoading: true,
  customersList: [],
  anonymousCustomersList: [],
  totalCustomers: 0,
  customersFound: 0,
};

const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    fetchCustomersAction(state, { payload }: TFetchCustomersAction) {
      state.customersListLoading = true;
    },
    fetchCustomersSuccessAction(
      state,
      { payload }: TFetchCustomersSuccessAction
    ) {
      state.customersListLoading = false;
      state.customersList = payload;
    },
    fetchAnonymousCustomersAction(
      state,
      { payload }: TFetchAnonymousCustomersAction
    ) {
      state.anonymousCustomersListLoading = true;
    },
    fetchAnonymousCustomersSuccessAction(
      state,
      { payload }: TFetchAnonymousCustomersSuccessAction
    ) {
      state.anonymousCustomersListLoading = false;
      state.anonymousCustomersList = payload;
    },
  },
});

export const {
  fetchCustomersAction,
  fetchCustomersSuccessAction,
  fetchAnonymousCustomersAction,
  fetchAnonymousCustomersSuccessAction,
} = customersSlice.actions;

export default customersSlice.reducer;
