import { createSlice } from '@reduxjs/toolkit';

import {
  CustomerDetailsReducerType,
  TActionFetchProfileEvents,
  TActionFetchProfileEventsFailed,
  TActionFetchProfileEventsSuccess,
  TFetchCustomerDetailsAction,
  TFetchCustomerDetailsSuccessAction,
} from './customerDetails.types';

const initialState: CustomerDetailsReducerType = {
  loading: true,
  data: {
    id: '',
    name: '',
    email: '',
    phone_number: '',
    avatar: '',
    last_seen: 0,
    tags: [],
    channels: [],
    revenue: 0,
    attributes: {},
    segments: {
      associated: [],
      entered: [],
      exited: [],
    },
    campaigns: {
      email: [],
      sms: [],
    },
    flows: [],
  },
  events: {
    isLoading: false,
    data: [],
  },
  isCustomer: true,
  index: -1,
};

const customerDetailsSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    fetchCustomerDetailsAction(
      state,
      { payload }: TFetchCustomerDetailsAction
    ) {
      state.loading = true;
    },
    fetchCustomerDetailsSuccessAction(
      state,
      { payload }: TFetchCustomerDetailsSuccessAction
    ) {
      state.loading = false;
      state.data = payload;
    },
    actionFetchProfileEvents(state, { payload }: TActionFetchProfileEvents) {
      state.events.isLoading = true;
    },
    actionFetchProfileEventsSuccess(
      state,
      { payload }: TActionFetchProfileEventsSuccess
    ) {
      state.events.isLoading = false;
      state.events.data = payload;
    },
    actionFetchProfileEventsFailed(
      state,
      { payload }: TActionFetchProfileEventsFailed
    ) {
      state.events.isLoading = false;
      state.events.data = [];
    },
    actionClearCustomerDetailsAll() {
      return initialState;
    },
  },
});

export const {
  fetchCustomerDetailsAction,
  fetchCustomerDetailsSuccessAction,
  actionFetchProfileEvents,
  actionFetchProfileEventsSuccess,
  actionFetchProfileEventsFailed,
  actionClearCustomerDetailsAll,
} = customerDetailsSlice.actions;

export default customerDetailsSlice.reducer;
