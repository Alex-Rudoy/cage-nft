import { all, call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga/effects';

import {
  fetchCustomersOverviewAction,
  fetchCustomersOverviewSuccessAction,
} from './customersOverview.reducer';

import { CustomersService } from '@api/CustomersService';
import { errorHandleAction } from '@store/misc/notifications/notifications.reducer';

import { FetchCustomersOverviewResponse } from './customersOverview.types';

function* fetchCustomersOverviewSaga() {
  try {
    const res: FetchCustomersOverviewResponse = yield call(
      CustomersService.getCustomersOverview
    );
    yield put(fetchCustomersOverviewSuccessAction(res.data.data));
  } catch (error) {
    !+process.env.REACT_APP_HIDE_API_ERROR_NOTIFICATION &&
      (yield put(errorHandleAction(error)));
  }
}

export function* customersOverviewWatcher() {
  yield all([
    takeLatest(fetchCustomersOverviewAction.type, fetchCustomersOverviewSaga),
  ]);
}
