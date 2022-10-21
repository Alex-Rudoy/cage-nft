import { all, put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

import {
  actionFetchProfileEvents,
  fetchCustomerDetailsAction,
  fetchCustomerDetailsSuccessAction,
} from './customerDetails.reducer';

// import { CustomersService } from '@api/CustomersService';
// import { errorHandleAction } from '@store/misc/notifications/notifications.reducer';

import {
  CustomerExtendedDataType,
  FetchAttributeGroupDetailsResponse,
  FetchCampaignsGroupDetailsResponse,
  FetchSegmentGroupDetailsResponse,
  TActionFetchProfileEvents,
  TFetchCustomerDetailsAction,
} from './customerDetails.types';

function* fetchCustomerDetailsSaga({ payload }: TFetchCustomerDetailsAction) {
  // const customerDetails: CustomerExtendedDataType = {
  //   channels: [],
  //   email: '',
  //   id: '',
  //   last_seen: undefined,
  //   name: '',
  //   phone_number: '',
  //   revenue: 0,
  //   tags: [],
  //   attributes: {},
  //   segments: {},
  // };
  // try {
  //   const attributes: FetchAttributeGroupDetailsResponse = yield call(
  //     CustomersService.getCustomerDetailsAttributes,
  //     payload
  //   );
  //   customerDetails.attributes = { ...attributes.data.data };
  // } catch (error) {
  //   !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
  //     (yield put(errorHandleAction(error)));
  // }
  // try {
  //   const segments: FetchSegmentGroupDetailsResponse = yield call(
  //     CustomersService.getCustomerDetailsSegments,
  //     payload
  //   );
  //   customerDetails.segments = { ...segments.data.data };
  // } catch (error) {
  //   !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
  //     (yield put(errorHandleAction(error)));
  // }
  // try {
  //   const campaigns: FetchCampaignsGroupDetailsResponse = yield call(
  //     CustomersService.getCustomerDetailsCampaigns,
  //     payload
  //   );
  //   customerDetails.campaigns = { ...campaigns.data.data };
  // } catch (error) {
  //   !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
  //     (yield put(errorHandleAction(error)));
  // }
  // yield put(fetchCustomerDetailsSuccessAction(customerDetails));
}

function* fetchProfileEventsSaga({ payload }: TActionFetchProfileEvents) {
  // try {
  //   yield call(CustomersService.getProfileEvents, payload);
  // } catch (error) {
  //   !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
  //     (yield put(errorHandleAction(error)));
  // }
}

export function* customerDetailsWatcher() {
  yield all([
    takeLatest(fetchCustomerDetailsAction.type, fetchCustomerDetailsSaga),
    takeLatest(actionFetchProfileEvents.type, fetchProfileEventsSaga),
  ]);
}
