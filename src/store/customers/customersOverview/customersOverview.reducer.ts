import { createSlice } from '@reduxjs/toolkit';

// import { requestStatusEnum } from '@store/store.types';

enum requestStatusEnum  {
  PROGRESS = 'PROGRESS',
  SUCCESS = 'SUCCESS',
}

import {
  CustomersOverviewReducerType,
  TFetchCustomersOverviewSuccessAction,
} from './customersOverview.types';

const initialState: CustomersOverviewReducerType = {
  status: requestStatusEnum.PROGRESS,
  data: {
    total_pofiles: 0,
    total_monthly_profiles: 0,
    delta_monthly_profiles: 0,
    total_daily_profiles: 0,
    delta_daily_profiles: 0,
    total_contacts: 0,
  },
};

const customersOverviewSlice = createSlice({
  name: 'customersOverview',
  initialState,
  reducers: {
    fetchCustomersOverviewAction(state) {
      state.status = requestStatusEnum.PROGRESS;
    },
    fetchCustomersOverviewSuccessAction(
      state,
      { payload }: TFetchCustomersOverviewSuccessAction
    ) {
      state.status = requestStatusEnum.SUCCESS;
      state.data = payload;
    },
  },
});

export const {
  fetchCustomersOverviewAction,
  fetchCustomersOverviewSuccessAction,
} = customersOverviewSlice.actions;

export default customersOverviewSlice.reducer;
