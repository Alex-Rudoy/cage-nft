import { PayloadAction } from '@reduxjs/toolkit';

// import { BackendResponse } from '@typings/backendResponse';

import { CustomerShortDataType } from '../customers/customers.types';

export type CustomerDetailsReducerType = {
  loading: boolean;
  data: CustomerExtendedDataType;
  isCustomer: boolean;
  index: number;
  events: {
    isLoading: boolean;
    // TODO: Maks Shamanskii - Fix any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any[];
  };
};

type AttributeGroupDataType = {
  consent?: TAttributeData[];
  identifiers?: TAttributeData[];
  profile_attribute?: TAttributeData[];
};

export type TAttributeData = Record<string, TAttributeValueData>;
export type TAttributeValueData = string | number | string[] | boolean;

type SegmentGroupDataItem = {
  id?: number;
  name?: string;
  count?: number;
};

type SegmentGroupDataType = {
  associated?: SegmentGroupDataItem[];
  entered?: SegmentGroupDataItem[];
  exited?: SegmentGroupDataItem[];
};

type CampaignGroupDataItem = {
  id?: number;
  name?: string;
  status?: string;
};

type CampaignsGroupDataType = {
  email?: CampaignGroupDataItem[];
  sms?: CampaignGroupDataItem[];
};

export type CustomerExtendedDataType = CustomerShortDataType & {
  attributes: AttributeGroupDataType;
  segments: SegmentGroupDataType;
  campaigns?: CampaignsGroupDataType;
  flows?: { name: string; status: string }[];
};

// export type FetchCustomerDetailsResponse =
//   BackendResponse<CustomerExtendedDataType>;

// export type FetchAttributeGroupDetailsResponse =
//   BackendResponse<AttributeGroupDataType>;

// export type FetchSegmentGroupDetailsResponse =
//   BackendResponse<SegmentGroupDataType>;

// export type FetchCampaignsGroupDetailsResponse =
//   BackendResponse<CampaignsGroupDataType>;

export type FetchCustomerDetailsResponse = any;

export type FetchAttributeGroupDetailsResponse = any;

export type FetchSegmentGroupDetailsResponse = any;

export type FetchCampaignsGroupDetailsResponse = any;

export type TFetchCustomerDetailsAction = PayloadAction<{ id: string }>;
export type TFetchCustomerDetailsSuccessAction =
  PayloadAction<CustomerExtendedDataType>;

export type TActionFetchProfileEvents = PayloadAction<string>;
// TODO: Maks Shamanskii - Fix any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TActionFetchProfileEventsSuccess = PayloadAction<any>;
export type TActionFetchProfileEventsFailed = PayloadAction;
export type TActionClearCustomerDetailsAll = PayloadAction;
