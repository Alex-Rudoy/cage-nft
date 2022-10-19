import { PayloadAction } from '@reduxjs/toolkit';

import { requestStatusEnum } from '@store/store.types';

import { BackendResponse } from '@typings/backendResponse';

export type CustomersOverviewDataType = {
  total_pofiles: number;
  total_monthly_profiles: number;
  delta_monthly_profiles: number;
  total_daily_profiles: number;
  delta_daily_profiles: number;
  total_contacts: number;
};

export type CustomersOverviewReducerType = {
  status: requestStatusEnum;
  data: CustomersOverviewDataType;
};

export type FetchCustomersOverviewResponse =
  BackendResponse<CustomersOverviewDataType>;

export type TFetchCustomersOverviewSuccessAction =
  PayloadAction<CustomersOverviewDataType>;
